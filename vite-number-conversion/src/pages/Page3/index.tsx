import React, { useEffect, useRef } from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";
import Bar from "./bar";
const columns: TableColumnProps[] = [
  {
    title: "指标名称",
    dataIndex: "name",
  },
  {
    title: "指标类别",
    dataIndex: "category",
  },
];
const data = [
  {
    key: "1",
    name: "非武警部队与恐怖分子人员伤亡数",
    category: "极大型指标",
  },
  {
    key: "2",
    name: "普通市民伤亡数",
    category: "极小型指标",
  },
  {
    key: "3",
    name: "普通看热闹的旁观者伤亡数",
    category: "极小型指标",
  },
  {
    key: "4",
    name: "政客旁观者伤亡数",
    category: "极小型指标",
  },
  {
    key: "5",
    name: "乱哄哄的拥挤的旁观者伤亡数",
    category: "极小型指标",
  },
  {
    key: "6",
    name: "武警部队伤亡数",
    category: "极小型指标",
  },
  {
    key: "7",
    name: "Terrorist AK74实体伤亡",
    category: "极大型指标",
  },
  {
    key: "8",
    name: "Terrorist RPG实体伤亡",
    category: "极大型指标",
  },
  
];
// import style from'./style.module.less'
const Page3 = (props: {}) => {
  const {} = props;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" , justifyContent:'center'}}>
        <Table
          columns={columns}
          data={data}
          style={{ width: "40%", margin: 20 }}
        />
        <div style={{ width: "6%" }}></div>
        <div style={{ width: "40%", margin: 20 }}>
          <Bar />
        </div>
      </div>
    </>
  );
};
export default Page3;
