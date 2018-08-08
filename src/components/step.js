import React from 'react';
import {Steps, WhiteSpace, Picker} from 'antd-mobile';

const Step = Steps.Step;
const models = ['model1', 'model2', 'model3'];

class StepNav extends React.Component {
  constructor (props) {
    super (props);
    this.state= {
      sValue: ''
    }
  }
  render () {

    return (
      <div>
        <WhiteSpace/>
        <WhiteSpace/>
        <Steps
          current = {this.props.current}
          direction = 'horizontal' >
          <Step title = '填写信息' > </Step>
          <Step title="选择应用模板"> </Step>
          <Step title = '创建成功'> </Step>
        </Steps>

        <WhiteSpace/>
      </div>
    );
  }
}
export default StepNav;