import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListView, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import './listView.scss';

function MyBody(props) {
	return (
		<div className="am-list-body my-body">
			<span style={{ display: 'none' }}>
				you can custom body wrap element
			</span>
			{props.children}
		</div>
	);
}

const data = [
	{
		img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
		title: 'Meet hotel',
		des: '不是所有的兼职汪都需要风吹日晒'
	},
	{
		img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
		title: "McDonald's invites you",
		des: '不是所有的兼职汪都需要风吹日晒'
	},
	{
		img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
		title: 'Eat the week',
		des: '不是所有的兼职汪都需要风吹日晒'
	}
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
	for (let i = 0; i < NUM_SECTIONS; i++) {
		const ii = pIndex * NUM_SECTIONS + i;
		const sectionName = `Section ${ii}`;
		sectionIDs.push(sectionName);
		dataBlobs[sectionName] = sectionName;
		rowIDs[ii] = [];

		for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
			const rowName = `S${ii}, R${jj}`;
			rowIDs[ii].push(rowName);
			dataBlobs[rowName] = rowName;
		}
	}
	sectionIDs = [...sectionIDs];
	rowIDs = [...rowIDs];
}

class ListViewComp extends React.Component {
	constructor(props) {
		props.data
		super(props);
		const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
		const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

		const dataSource = new ListView.DataSource({
			getRowData,
			getSectionHeaderData: getSectionData,
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2
		});

		this.state = {
			dataSource,
			isLoading: true,
			height: document.documentElement.clientHeight * 3 / 4
		};
	}

	componentDidMount() {
		// you can scroll to the specified position
		// setTimeout(() => this.lv.scrollTo(0, 120), 800);

		const hei =
			document.documentElement.clientHeight -
			ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
		// console.log(hei);
		// simulate initial Ajax
		setTimeout(() => {
			genData();
			this.setState({
				dataSource: this.state.dataSource.cloneWithRowsAndSections(
					dataBlobs,
					sectionIDs,
					rowIDs
				),
				isLoading: false,
				height: hei
			});
		}, 600);
	}

	// If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
	// componentWillReceiveProps(nextProps) {
	//   if (nextProps.dataSource !== this.props.dataSource) {
	//     this.setState({
	//       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
	//     });
	//   }
	// }

	/**
	 * 触底刷新
	 */
	// onEndReached = event => {
	// 	// load new data
	// 	// hasMore: from backend data, indicates whether it is the last page, here is false
	// 	if (this.state.isLoading && !this.state.hasMore) {
	// 		return;
	// 	}
	// 	console.log('reach end', event);
	// 	this.setState({ isLoading: true });
	// 	setTimeout(() => {
	// 		genData(++pageIndex);
	// 		this.setState({
	// 			dataSource: this.state.dataSource.cloneWithRowsAndSections(
	// 				dataBlobs,
	// 				sectionIDs,
	// 				rowIDs
	// 			),
	// 			isLoading: false
	// 		});
	// 	}, 1000);
	// };

	render() {
		// let index = data.length - 1;
		let index = this.props.data.length - 1;
		const row = (rowData, sectionID, rowID) => {
			// console.log('listviews',this.props.data.length)
			if (index < 0) {
				index = this.props.data.length - 1;
			}
			const data = this.props.data[index--]
			return (
				<div className="inform-items">
					<span className="inform-item one">
						<p>
							{/* TOP/<span style={{ color: '#BEBEBE' }}>ETH</span> */}
							{data.name}
						</p>
						<p className="inform-item-small">{data.volume}</p>
					</span>
					<span className="inform-item two">
						<p>{data.last}</p>
						<p className="inform-item-small">¥2342525.3342</p>
					</span>
					<span className="inform-item three">
						<Button className="inform-item-middle">{data.change}</Button>
					</span>
				</div>
				// </div>
			);
		};

		return (
			<ListView
				ref={el => (this.lv = el)}
				dataSource={this.state.dataSource}
				renderBodyComponent={() => <MyBody />}
				renderRow={row}

				style={{
					height: this.state.height
					// overflow: 'hidden'
				}}
				scrollRenderAheadDistance={500}
				onEndReachedThreshold={10}
			/>
		);
	}
}

export default injectIntl(ListViewComp);
