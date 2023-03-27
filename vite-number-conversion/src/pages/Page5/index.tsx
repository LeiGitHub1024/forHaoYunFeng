import React, { useEffect, useRef } from "react";
import { Table, TableColumnProps } from "@arco-design/web-react";
import Pie from "./pie";
const columns: TableColumnProps[] = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
];
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "6",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "7",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "8",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "9",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];
// import style from'./style.module.less'
const Page5 = (props: {}) => {
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
        <Table
          columns={columns}
          data={data}
          style={{ width: "40%", margin: 20 }}
        />
      </div>
    </>
  );
};
export default Page5;
