import React, { ReactElement, useState } from 'react';

import './style.less'
import { Layout, Menu, Breadcrumb, Button, Message } from '@arco-design/web-react';
import { IconHome, IconCalendar, IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Page4 from '../Page4';
import Page5 from '../Page5';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const pageMain = (props:{})=>{
  const {} = props
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [title1, setTitle1] = useState<string>('运行筛选');
  const [title2, setTitle2] = useState<string>('');
  const [subPage, setSubPage] = useState<ReactElement>(<Page1></Page1>);
  

  function changeContent(key:string) {
    // alert(key)
    switch (key) {
      case '0_1':
        setTitle1('运行筛选');
        setTitle2('');
        setSubPage(<Page1></Page1>)
        break;
      case '2_1':
        setTitle1('仿真数据');
        setTitle2('原始数据');
        setSubPage(<Page2></Page2>)
        break;
      case '2_2':
        setTitle1('仿真数据');
        setTitle2('指标类别');
        setSubPage(<Page3></Page3>)
        break;
      case '0_3':
        setTitle1('TopSis');
        setTitle2('');
        setSubPage(<Page4></Page4>)
        break;
      case '0_4':
        setTitle1('筛选结果');
        setTitle2('');
        setSubPage(<Page5></Page5>)
        break;
    }
  }


  return(<>
  <Layout className='layout-collapse-demo'>
    <Sider
      collapsed={collapsed}
      onCollapse={()=>setCollapsed(a=>!a)}
      collapsible
      trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
      breakpoint='xl'
    >
      <div className='logo' ></div>
      <Menu
        defaultOpenKeys={['1']}
        defaultSelectedKeys={['0_1']}
        onClickMenuItem={(key) =>
          changeContent(key)
        }
        style={{ width: '100%',fontSize:'20px' }}
      >
        <MenuItem key='0_1' >
          <IconHome />
          运行筛选
        </MenuItem>
        <SubMenu
          key='0_2'
          title={
            <span>
              <IconCalendar />
              仿真数据
            </span>
          }
        >
          <MenuItem key='2_1'>原始数据</MenuItem>
          <MenuItem key='2_2'>指标类别</MenuItem>
        </SubMenu>
        <MenuItem key='0_3'>
          <IconCalendar />
          TopSis
        </MenuItem>
        <MenuItem key='0_4'>
          <IconCalendar />
          筛选结果
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ paddingLeft: 30, fontSize:30 }}>城市反恐应急因子筛选系统</Header>
      <Layout style={{ padding: '0 24px' }}>
        <Breadcrumb style={{ margin: '16px 0', fontSize:18 }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>{title1}</Breadcrumb.Item>
          {title2!==''&& <Breadcrumb.Item>{title2}</Breadcrumb.Item>}
        </Breadcrumb>
        <Content>{subPage}</Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  </Layout>
  </>)
}
export default pageMain;