import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import './index.css'

class TemplateWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <Layout>
         <Sider
           trigger={null}
           collapsible
           collapsed={this.state.collapsed}
         >
           <div className="logo" />
           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
             <Menu.Item key="1">
              <Link to="/">
                 <Icon type="dashboard" />
                 <span>前端性能检查清单</span>
              </Link>
             </Menu.Item>
             <Menu.Item key="2">
              <Link to='/page-2'>
                <Icon type="bars" />
                <span>前端检查清单</span>
              </Link>
             </Menu.Item>
             <Menu.Item key="3">
              <Link to="/page-3">
                <Icon type="highlight" />
                <span>前端设计检查清单</span>
              </Link>
             </Menu.Item>
             <Menu.Item key="4">
              <Link to="/about">
                <Icon type="smile" />
                <span>关于</span>
              </Link>
             </Menu.Item>
           </Menu>
         </Sider>
         <Layout>
           <Content className="content-wrapper" style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
           {this.props.children()}
           </Content>
         </Layout>
       </Layout>
    );
  }
}


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
