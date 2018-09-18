import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Button, Steps, Card, Checkbox, Row, Col } from 'antd';
const Step = Steps.Step;
import "./index.css";

const STEP_ELEMENTS = [
  {
    name: 'HTML'
  }, {
    name: 'CSS'
  }, {
    name: 'Fonts'
  }, {
    name: 'Images'
  }, {
    name: 'JavaScripts'
  }
];

class IndexPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentStep: 0,
      todoList: []
    }
  }

  _renderStepArea = () => {
    const { currentStep } = this.state;
    return (
      <Steps current={currentStep}>
        {
          STEP_ELEMENTS.map(step => {
            return <Step key={step.name} title={step.name} />;
          })
        }
      </Steps>
    );
  }

  _renderCheckList = () => {
    return (
      <div style={{marginTop:10}}>
        <Row>
          <Col span={5}>
            <Card title="最小化HTML" style={{ width: 300 }}>
              <Checkbox>使用Webpack HTML插件</Checkbox>
            </Card>
          </Col>
          <Col span={5}>
            <Card title="最小化HTML" style={{ width: 300 }}>
              <Checkbox>使用Webpack HTML插件</Checkbox>
            </Card>
          </Col>
          <Col span={5}>
            <Card title="最小化HTML" style={{ width: 300 }}>
              <Checkbox>使用Webpack HTML插件</Checkbox>
            </Card>
          </Col>
          <Col span={5}>
            <Card title="最小化HTML" style={{ width: 300 }}>
              <Checkbox>使用Webpack HTML插件</Checkbox>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  render () {
    return (
      <div className="container">
        <h3>欢迎使用前端性能检测清单</h3>
        {this._renderStepArea()}
        {this._renderCheckList()}
      </div>
    );
  }
}

export default IndexPage
