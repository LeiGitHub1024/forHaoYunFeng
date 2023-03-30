import React, { useEffect, useRef } from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";
const columns: TableColumnProps[] = [
  {
    title: "重要因子",
    dataIndex: "important",
  },
  {
    title: "重要性度量",
    dataIndex: "value",
  },
];
const data = [
  {
    key: "1",
    important: "持AK74的恐怖份子",
    value: 0.6134,
  },
  {
    key: "2",
    important: "总实体数",
    value: 0.5992,
  },
  {
    key: "3",
    important: "总实体类别",
    value: 0.4938,
  },
  {
    key: "4",
    important: "恐怖份子单元",
    value: 0.2707,
  },
  {
    key: "5",
    important: "无作战能力实体",
    value: 0.1216,
  },
  {
    key: "6",
    important: "AGL武器数量",
    value: 0.1061,
  },

];

const columns1: TableColumnProps[] = [
  {
    title: "暂定和不重要因子",
    dataIndex: "unimportant",
  },
  {
    title: "重要性度量",
    dataIndex: "value",
  },
];
const data1 = [
  {
    key: "1",
    unimportant: "狙击手",
    value: 0.0984,
  },
  {
    key: "2",
    unimportant: "简易爆炸装置",
    value: 0.0763,
  },
  {
    key: "3",
    unimportant: "看热闹的市民",
    value: 0.0377,
  },
  {
    key: "4",
    unimportant: "警用装甲车",
    value: 0.0305,
  },
  {
    key: "5",
    unimportant: "M203武器数量",
    value: 0.0278,
  },
  {
    key: "6",
    unimportant: "普通市民",
    value: 0.0178,
  },
  {
    key: "7",
    unimportant: "普通警员",
    value: 0.0144,
  },
  {
    key: "8",
    unimportant: "手持RPG的恐怖份子",
    value: 0.0137,
  },
  {
    key: "9",
    unimportant: "乱哄哄的看热闹市民",
    value: 0.0045,
  },
  {
    key: "10",
    unimportant: "警车",
    value: 0.0042,
  },
  {
    key: "11",
    unimportant: "装甲车单元",
    value: 0.0261,
  },
  {
    key: "12",
    unimportant: "装甲车单元",
    value: 0.0261,
  },
  {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},

];
// import style from'./style.module.less'
const Page5 = (props: {}) => {
  const {} = props;

  return (
    <>
      <div style={{ display: "flex", alignItems: "" }}>
        <Table
          columns={columns}
          data={data}
          style={{ width: "40%", margin: 20 }}
        />
        <div style={{ width: "8%" }}></div>
        <Table
          columns={columns1}
          data={data1}
          style={{ width: "40%", margin: 20 }}
        />
      </div>
    </>
  );
};
export default Page5;
