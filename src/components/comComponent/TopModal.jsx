import React from 'react';
import { Modal } from 'antd-mobile'

const TopModal = (props) => {
  const {
    text, type = 1, callBack, time, //默认第一种显示方式
  } = props;
  switch (type) {
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    default:
    // console.log('准备')
  }
  return (
    <Modal
      visible={this.state.modal1}
      transparent
      maskClosable={false}
      onClose={this.onClose('modal1')}
      title="Title"
      footer={[{ text: 'Ok', onPress: () => { this.onClose('modal1')(); } }]}
      wrapProps={{ onTouchStart: this.onWrapTouchStart }}
    >
      <div style={{ height: 100, overflow: 'scroll' }}>
        scoll content...<br />
        scoll content...<br />
        scoll content...<br />
        scoll content...<br />
        scoll content...<br />
        scoll content...<br />
      </div>
    </Modal>
  );
};

export default TopModal;

