import React from 'react';
import {WhiteSpace} from 'antd-mobile';
import StepNav from '../components/step';



class Application extends React.Component {
  render () {
    return (
      <div>
        <WhiteSpace/>
        <StepNav current={1}/>
        <WhiteSpace/>
      </div>
    );
  }
}
export default Application;