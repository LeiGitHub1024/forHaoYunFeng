import React, { useEffect, useRef } from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";
import Pie from "./pie";
const columns: TableColumnProps[] = [
  {
    title: "序号",
    dataIndex: "number",
  },
  {
    title: "综合评分",
    dataIndex: "score",
  },
];
const data = [
  {
    key: "1",
    number: 1,
    score: 0.1995
  },
  {
    key: "2",
    number: 2,
    score: 0.1995
  },
  {
    key: "3",
    number: 3,
    score: 0.0579
  },
  {
    key: "4",
    number: 4,
    score: 0.0551
  },
  {
    key: "5",
    number: 5,
    score: 0.0517
  },
  {
    key: "6",
    number: 6,
    score: 0.0615 
  },
  {
    key: "7",
    number: 7,
    score: 0.1547
  },
  {
    key: "8",
    number: 8,
    score: 0.9521
  },
  {
    key: "9",
    number: 9,
    score: 0.6205
  },
  {
    key: "10",
    number: 10,
    score: 0.4005
  },
  {
    key: "11",
    number: 11,
    score: 0.2006
  },
  {
    key: "12",
    number: 12,
    score: 0.1039
  },
  {
    key: "13",
    number: 13,
    score: 0.7039
  },
  {
    key: "14",
    number: 14,
    score: 0.5039
  },
];
// import style from'./style.module.less'
const Page4 = (props: {}) => {
  const {} = props;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Table
          columns={columns}
          data={data}
          style={{ width: "40%", margin: 20 }}
        />
        <div style={{ width: "8%" }}></div>
        <div style={{ width: "40%", margin: 20, paddingTop:50 }}>
          <Pie />
        </div>
      </div>
    </>
  );
};
export default Page4;
