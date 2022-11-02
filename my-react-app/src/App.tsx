import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import React from 'react';

import './App.css'
import "@arco-design/web-react/dist/css/arco.css";
import { Button,Table } from "@arco-design/web-react";
import axios from 'axios';


function App() {
  const [columns, setColumns] = useState<Array<any>>([]);
  const [data, setData] = useState<Array<any>>([]);
  
  async function button1(){
  setColumns([]);
  setData([]);
  }
  async function button2(){
    console.log('发送请求')
    const res = await axios(
      {
        method:'get',
        url:'http://localhost:8888/?name=123',
      }
    )
    console.log(res)
    // const result = await resolveAfter2Seconds();
    setColumns([
      {
        title: 'Name',
        dataIndex: 'name',
        width: 120,
        fixed: 'left',
      },
      {
        title: 'Salary',
        dataIndex: 'salary',
        width: 120,

      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title:'IP',
        dataIndex:'ip',
        width:120,
      }
    ]) 
    setData(Array(1000)
    .fill('')
    .map((_, index) => ({
      key: `${index}`,
      name: `Kevin ${index}`,
      salary: 22000,
      address: `${index} Park Road, London`,
      email: `kevin.sandra_${index}@example.com`,
      ip: `30.40.50.${index}`
    }))) 
  }
  async function button3(){
    
  }
  async function button4(){
    
  }
  async function button5(){
    
  }
  return (
    <div className="App">
      <div className='title'>基于集成学习的城市反恐应急因子智能筛选系统</div>
      <div className='container'>
        <div className='buttonGroup'> 
            <div className='buttonDrawer'><Button onClick={button1}>运行筛选</Button></div>
            <div className='buttonDrawer'><Button onClick={button2}>原始数据</Button></div>
            <div className='buttonDrawer'><Button onClick={button3}>指标类别</Button></div>
            <div className='buttonDrawer'><Button onClick={button4}>TopSis</Button></div>
            <div className='buttonDrawer'><Button onClick={button5}>筛选结果</Button></div>
        </div>
        <div className='tableWindow'>
        <Table
          virtualized
          scroll={{
            y: 400,
            x: 1500,
          }}
          columns={columns as any}
          data={data}
          pagination={false}
          // rowSelection={{}}
          border={{
            wrapper: true,
            cell: true,
          }}
        />
        </div>
      </div>

    </div>
  )
}

export default App
