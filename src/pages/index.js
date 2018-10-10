import React, { Component } from 'react'
import copy from 'copy-to-clipboard';
import Link from 'gatsby-link'
import { Button, Steps, Card, Checkbox, Row, Col, Table, message, Tag, Modal } from 'antd';
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
    name: 'JavaScript'
  }
];

const DATA_SOURCE = {
  HTML: [
    {
      name:'压缩html',
      what:'HTML代码压缩，将注释、空格和新行从生产文件中删除。',
      importance: 'medium',
      why:'删除所有不必要的空格、注释和中断行将减少HTML的大小，加快网站的页面加载时间，并显著减少用户的下载时间。',
      config: "const HtmlWebpackPlugin = require('html-webpack-plugin');"
    },
    {
      name:'移除非必要注释',
      what: '确保所有页面内无注释',
      importance: 'low',
      why:'注释对用户来说是无用信息，应该不出现在生产代码里，一个特殊情况是想要保留第三方库的来源信息',
      config: "const HtmlWebpackPlugin = require('html-webpack-plugin');"
    },
    {
      name: '移除无效属性',
      what: '一些过时或者无效的属性应该被移除掉',
      importance: 'low',
      why: '类型属性比如text/css或者text/javascript是默认值, 这部分无用的属性设定应该移除',
      example: <div>
        <p>优化前</p>
        <pre>
          <p style={{marginBottom:0}}>{'<script type="text/javascript"></script>'}</p>
        </pre>
        <p>优化后</p>
        <pre>
          <p style={{marginBottom:0}}>{'<script></script>'}</p>
        </pre>
      </div> 
    },
    {
      name: '将CSS标签置于JavaScript标签前',
      what: '确保CSS总是在JavaScript前加载',
      importance: 'high',
      why: '让CSS在JavaScript之前可以确保更好的平行下载，加载浏览器渲染速度.',
      example: <div>
        <p>优化前</p>
        <pre>
          <p style={{marginBottom:0, color:'red'}}>{'<script src="jquery.js"></script>'}</p>
          <p style={{marginBottom:0, color:'red'}}>{'<script src="foo.js"></script>'}</p>
          <p style={{marginBottom:0}}>{'<link rel="stylesheet" href="foo.css"/>'}</p>
        </pre>
        <p>优化后</p>
        <pre>
          <p style={{marginBottom:0}}>{'<link rel="stylesheet" href="foo.css"/>'}</p>
          <p style={{marginBottom:0, color:'green'}}>{'<script src="jquery.js"></script>'}</p>
          <p style={{marginBottom:0, color:'green'}}>{'<script src="foo.js"></script>'}</p>
        </pre>
      </div>
    },
    {
      name: '尽量避免使用iframe',
      what: '除非没有其他的技术选择，否则尽量不要用iframe',
      importance: 'high'
    }
  ],
  CSS: [],
  Fonts: [],
  Images: [],
  JavaScript: []
};

const ROW_SELECTION = {
  onChange: (key, row) => {},
  getCheckboxProps: record => ({
    disabled: record.name === '',
    name: record.name
  })
};

function copyConfig (record) {
  copy(record.config);
  message.success('拷贝成功!');
}

class IndexPage extends Component {

  columns = [
    { dataIndex: 'name', title: '优化点' },
    { 
      dataIndex: 'importance',
      title: '重要程度',
      render: (text, record) => {
        if (record.importance === 'high') return <Tag color="red">高</Tag>;
        if (record.importance === 'medium') return <Tag color="yellow">中</Tag>;
        if (record.importance === 'low') return <Tag color="green">低</Tag>;
      }
    },
    { dataIndex: 'what', title: '说明' },
    { dataIndex: 'why', title: '原因' },
    { 
      key: 'operation', 
      title: '优化方法',
      render: (text,record) => {
        if (record.config) return <Button onClick={() => {copyConfig(record)}}>拷贝webpack配置</Button>;
        if (record.example) return <Button onClick={() => this.showExampleModal(record)}>优化示例</Button>
        else return '';
      }
    }
  ];

  constructor(props){
    super(props)
    this.state = {
      currentStep: 0,
      todoList: [],
      modalVisible: false
    }
  }

  showExampleModal = (record) => {
    this.setState({
      modalVisible: true,
      modalContent: record.example
    });
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

  _renderOperations = () => {
    const { currentStep } = this.state;
    return (
      <div className="operation-wrapper">
        <div className="opeartion-left">
          { 
            currentStep > 0
            &&
            <Button onClick={()=>{this.setState({currentStep: currentStep-1})}} className="operation-button">上一步</Button>
          }
          {
           currentStep < STEP_ELEMENTS.length - 1
           && 
           <Button onClick={()=>{this.setState({currentStep: currentStep+1})}} className="operation-button" type="primary">下一步</Button>
          }
        </div>
        <div className="opeartion-right">
          <Button className="operation-button" type="ghost">说明</Button>
          <Button className="operation-button" type="primary">生成webpack配置</Button>
        </div>
      </div>
    )
  }

  _renderCheckList = () => {
    const { currentStep } = this.state;
    const currentSection = STEP_ELEMENTS[currentStep].name;
    const currentDataSource = DATA_SOURCE[currentSection];
    return (
      <div style={{marginTop:10}}>
        <Table 
        pagination={false}
        className="checklist-table"
        rowSelection={ROW_SELECTION}
        rowKey="name" 
        bordered 
        columns={this.columns} 
        dataSource={currentDataSource} 
        />
      </div>
    );
  }

  _renderExampleModal = () => {
    const { modalVisible, modalContent } = this.state;
    return (
      <Modal
        title="优化示例"
        visible={modalVisible}
        footer={null}
        onCancel={() => { this.setState({modalVisible:false}); }}
      >
        {modalContent}
      </Modal>
    );
  }

  render () {
    return (
      <div className="container">
        <h3>欢迎使用前端性能检测清单</h3>
        {this._renderStepArea()}
        {this._renderOperations()}
        {this._renderCheckList()}
        {this._renderExampleModal()}
      </div>
    );
  }
}

export default IndexPage
