import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './index.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let startX;

class Swiper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      touchIndex: 0, // 当前未隐藏div索引值
      zIndex: 999,
      rightCon: [1, 2, 6, 7, -3, -4],
      leftCon: [3, 4, -2, -1,],
      bannerList: [
        {
          id: 0,
          icon: "#icon-yixianggoutong",
          title: "意向沟通",
          content: "了解用户需求<br/>介绍产品特点"
        },
        {
          id: 1,
          icon: "#icon-xiangmupinggu",
          title: "项目评估",
          content: "制定项目方案<br/>与客户方确认"
        },
        {
          id: 2,
          icon: "#icon-qiandingxieyi",
          title: "签订协议",
          content: "合同细节讨论<br/>正式签署协议"
        },
        {
          id: 3,
          icon: "#icon-ruanjianjiaofu",
          title: "软件交付",
          content: "系统部署上线<br/>通过客户验收"
        },
        {
          id: 4,
          icon: "#icon-caozuopeixun",
          title: "操作培训",
          content: "培训运营团队<br/>分享市场信息"
        },
      ]
    };
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    // 	data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  touchStart(event) {
    startX = event.changedTouches[0].pageX;
  }
  // 因为无论move 还是start 都会触发end事件。所以判断方向就在end事件中
  touchEnd(event, index) {
    event.preventDefault();
    const endX = event.changedTouches[0].pageX;
    if (endX - startX > 20) {
      // alert('点击左');
      this.clickRight(index);
    } else if (startX - endX > 20) {
      // alert('点击右');
      this.clickLeft(index);
    }
  }
  clickLeft() {
    const allItemCounts = 4; // 总共轮播个数
    const index = this.state.touchIndex;
    this.setState({
      touchIndex: index === allItemCounts ? 0 : index + 1,
    });
  }

  clickRight() {
    const allItemCounts = -4; // 总共轮播个数
    const index = this.state.touchIndex;
    this.setState({
      touchIndex: index === allItemCounts ? 0 : index - 1,
    });
  }
  render() {
    const { touchIndex } = this.state;
    let that = this;
    let silderclass = Array;
    this.state.bannerList.map((obj, index) => {
      let getId = obj.id - that.state.touchIndex;
      if (that.state.rightCon.indexOf(getId) !== -1) {
        silderclass[index] = "left-model";
      } else if (this.state.leftCon.indexOf(getId) !== -1) {
        silderclass[index] = "right-model";
      } else {
        silderclass[index] = "middle-model";
      }
    })
    return (
      <div>
        <ul className='home-swiper'>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 0)}
            className={silderclass[0]}>
            <div className='slider-model-img'>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-yixianggoutong"></use>
              </svg>
            </div>
            <div className='slider-model-title'>
              <h6>意向沟通</h6>
              <p>了解用户需求<br />介绍产品特点</p>
            </div>
          </li>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 1)}
            className={silderclass[1]}
          >
            <div className='slider-model-img'>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-xiangmupinggu"></use>
              </svg>
            </div>
            <div className='slider-model-title'>
              <h6>项目评估</h6>
              <p>制定项目方案<br />与客户方确认</p>
            </div>
          </li>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 2)}
            className={silderclass[2]}
          >
            <div className='slider-model-img'>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-qiandingxieyi"></use>
              </svg>
            </div>
            <div className='slider-model-title'>
              <h6>签订协议</h6>
              <p>合同细节讨论<br />正式签署协议</p>
            </div>
          </li>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 3)}

            className={silderclass[3]}
          >
            <div className='slider-model-img'>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-ruanjianjiaofu"></use>
              </svg>
            </div>
            <div className='slider-model-title'>
              <h6>软件交付</h6>
              <p>系统部署上线<br />通过客户验收</p>
            </div>
          </li>
          <li onTouchStart={this.touchStart.bind(this)}
            onTouchEnd={(event) => this.touchEnd(event, 4)}
            className={silderclass[4]}
          >
            <div className='slider-model-img'>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-caozuopeixun"></use>
              </svg>
            </div>
            <div className='slider-model-title'>
              <h6>操作培训</h6>
              <p>培训运营团队<br />分享市场信息</p>
            </div>
          </li>
        </ul>
        <div className='slide-doc'>
          <span className={this.state.touchIndex === 0 ? 'art' : ''}></span>
          <span className={this.state.touchIndex === 1 || this.state.touchIndex === -4 ? 'art' : ''}></span>
          <span className={this.state.touchIndex === 2 || this.state.touchIndex === -3 ? 'art' : ''}></span>
          <span className={this.state.touchIndex === 3 || this.state.touchIndex === -2 ? 'art' : ''}></span>
          <span className={this.state.touchIndex === 4 || this.state.touchIndex === -1 ? 'art' : ''}></span>
        </div>
      </div>
    );
  }
}



export default injectIntl(Swiper);

