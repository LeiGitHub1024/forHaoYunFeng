import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import React from 'react';

import './App.css'
import "@arco-design/web-react/dist/css/arco.css";
import { Button,Table } from "@arco-design/web-react";


function App() {
  const columns = [
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
  ];
  const data = Array(1000)
    .fill('')
    .map((_, index) => ({
      key: `${index}`,
      name: `Kevin ${index}`,
      salary: 22000,
      address: `${index} Park Road, London`,
      email: `kevin.sandra_${index}@example.com`,
      ip: `30.40.50.${index}`
    }));
  
  return (
    <div className="App">
      <div className='container'>
        <div className='buttonGroup'> 
            <div className='buttonDrawer'><Button>运行筛选</Button></div>
            <div className='buttonDrawer'><Button >原始数据</Button></div>
            <div className='buttonDrawer'><Button >指标类别</Button></div>
            <div className='buttonDrawer'><Button >TopSis</Button></div>
            <div className='buttonDrawer'><Button >筛选结果</Button></div>
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
