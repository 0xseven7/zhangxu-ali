import React from 'react';
import {Button, WhiteSpace, InputItem, TextareaItem} from 'antd-mobile';
import {withRouter} from 'react-router-dom';

import StepNav from '../components/step';
@withRouter
class Sublime extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.history.push('/application')
  }
  handleChange (k, v) {
    this.setState({
      k: v
    })
  }
  render () {
    return (
      <div>
        <WhiteSpace/>
        <StepNav current={0}/>
        <WhiteSpace/>
        <InputItem
          onChange={(v) =>{this.handleChange('appName', v)}}
        >
          应用名称
        </InputItem>
        <WhiteSpace/>
        <TextareaItem
          rows={3}
          title="应用简介"
          onChange={(v) =>{this.handleChange('appDesc', v)}}
        >
        </TextareaItem>
        <WhiteSpace/>
        <Button
          type="primary"
          onClick={this.handleClick}
        >
          提交
        </Button>
      </div>
    );
  }
}
export default Sublime;