import React from 'react';
import { Toast } from 'antd-mobile'

const TopToast = (props) => {
  const {
    text, type = 1, callBack, time, //默认第一种显示方式
  } = props;
  switch (type) {
    case 1:
      Toast.info(text, time, callBack);
      break;
    case 2:
      Toast.success(text, time, callBack);
      break;
    case 3:
      Toast.fail(text, time, callBack);
      break;
    case 4:
      Toast.offline(text, time, callBack);
      break;
    case 5:
      Toast.loading('loading', time, callBack);
      break;
    default:
     // console.log('准备')
  }
  return (
    <p style={{display:'none'}}>轻提示</p>
  );
};

export default TopToast;

