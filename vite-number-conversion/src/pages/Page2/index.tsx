import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import {
  Button,
  Table,
  Input,
  Select,
  Form,
  FormInstance,
} from "@arco-design/web-react";
const FormItem = Form.Item;
const EditableContext = React.createContext<{ getForm?: () => FormInstance }>(
  {}
);

function EditableRow(props:any) {
  const { children, record, className, ...rest } = props;
  const refForm = useRef(null);

  const getForm = () => refForm.current as any;

  return (
    <EditableContext.Provider
      value={{
        getForm,
      }}
    >
      <Form
        style={{ display: "table-row" }}
        children={children}
        ref={refForm}
        wrapper="tr"
        wrapperProps={rest}
        className={`${className} editable-row`}
      />
    </EditableContext.Provider>
  );
}

function EditableCell(props :any) {
  const { children, className, rowData, column, onHandleSave } = props;
  const ref = useRef(null);
  const refInput = useRef(null);
  const { getForm } = useContext(EditableContext);
  const [editing, setEditing] = useState(false);
  const handleClick = useCallback(
    (e) => {
      if (
        editing &&
        column.editable &&
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.classList.contains("js-demo-select-option")
      ) {
        cellValueChangeHandler(rowData[column.dataIndex]);
      }
    },
    [editing, rowData, column]
  );
  useEffect(() => {
    editing && refInput.current && refInput.current.focus();
  }, [editing]);
  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [handleClick]);

  const cellValueChangeHandler = (value:any) => {
    if (column.dataIndex === "salary") {
      const values = {
        [column.dataIndex]: value,
      };
      onHandleSave && onHandleSave({ ...rowData, ...values });
      setTimeout(() => setEditing(!editing), 300);
    } else {
      const form = getForm();
      form.validate([column.dataIndex], (errors, values) => {
        if (!errors || !errors[column.dataIndex]) {
          setEditing(!editing);
          onHandleSave && onHandleSave({ ...rowData, ...values });
        }
      });
    }
  };

  if (editing) {
    return (
      <div ref={ref}>
        {column.dataIndex === "salary" ? (
          <Select
            onChange={cellValueChangeHandler}
            defaultValue={rowData[column.dataIndex]}
            options={[2000, 5000, 10000, 20000]}
          />
        ) : (
          <FormItem
            style={{ marginBottom: 0 }}
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            initialValue={rowData[column.dataIndex]}
            field={column.dataIndex}
            rules={[{ required: true }]}
          >
            <Input ref={refInput} onPressEnter={cellValueChangeHandler} />
          </FormItem>
        )}
      </div>
    );
  }

  return (
    <div
      className={column.editable ? `editable-cell ${className}` : className}
      onClick={() => column.editable && setEditing(!editing)}
    >
      {children}
    </div>
  );
}
// import style from'./style.module.less'
const Page2 = (props: {}) => {
  const {} = props;
  const [count, setCount] = useState(5);

  const [data, setData] = useState([
    {
      key: "1",
      number: 1,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 7,
      bystanders: 5, 
      RADIO_TELEPHONE_OPR: "无",
      sniper: 4,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "2",
      number: 2,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 7,
      bystanders: 7,
      RADIO_TELEPHONE_OPR: "无",
      sniper: 4,
      terroristAK74:4,
      criminalInsurgentCell: "不存在",
    },
    {
      key: "3",
      number: 3,
      improvisedExplosive: "Ⅱ型装置",
      civilian: 7,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "有",
      sniper: 9,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "4",
      number: 4,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 2,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "无",
      sniper: 9,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "5",
      number: 5,
      improvisedExplosive: "Ⅱ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "无",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "不存在",
    },
    {
      key: "6",
      number: 6,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "有",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "7",
      number: 7,
      improvisedExplosive: "Ⅱ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "有",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "8",
      number: 8,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "无",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "不存在",
    },
    {
      key: "9",
      number: 9,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "无",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "10",
      number: 10,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "无",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "11",
      number: 11,
      improvisedExplosive: "Ⅱ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "有",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "12",
      number: 12,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "有",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "13",
      number: 13,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "无",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
    {
      key: "14",
      number: 14,
      improvisedExplosive: "Ⅰ型装置",
      civilian: 6,
      bystanders: 5,
      RADIO_TELEPHONE_OPR: "无",
      sniper: 8,
      terroristAK74:5,
      criminalInsurgentCell: "存在",
    },
  ]);
  const columns = [
    {
      title: "序号",
      dataIndex: 'number',
      editable: true,
      fixed: 'left',
      width: 80,
    },
    {
      title: "简易爆炸装置",
      dataIndex: "improvisedExplosive",
      editable: true,
      width: 200,
    },
    {
      title: "普通市民",
      dataIndex: "civilian",
      width: 200,
    },
    {
      title: "看热闹的市民",
      dataIndex: "bystanders",
      width: 200,
    },
    {
      title: "无线电话",
      dataIndex: "RADIO_TELEPHONE_OPR",
      width: 200,
    },
    {
      title: "狙击手",
      dataIndex: "sniper",
      width: 200,
    },
    {
      title: "持AK74的恐怖份子",
      dataIndex: "terroristAK74",
      width: 200,
    },
    {
      title: "恐怖份子单元",
      dataIndex: "criminalInsurgentCell",
      width: 200,
    },
    {
      title: "操作",
      dataIndex: "op",
      width: 200,
      fixed: 'right',
      render: (_:any, record:any) => (
        <div>
          <Button onClick={() => removeRow(record.key)} type='primary' status='default' size="mini">
            修改
          </Button>
          <Button onClick={() => removeRow(record.key)} style={{marginLeft:12}} type='primary' status='danger' size="mini">
            删除
          </Button>
        </div>
      ),
    },
  ];
  function handleSave(row:any) {
    const newData = [...data];
    const index = newData.findIndex((item) => row.key === item.key);
    newData.splice(index, 1, { ...newData[index], ...row });
    setData(newData);
  }

  function removeRow(key:any) {
    setData(data.filter((item) => item.key !== key));
  }

  return (
    <>
      <Table
        virtualized
        scroll={{
          y: 400,
          x: 800,
        }}
        data={data}
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        columns={columns.map((column) =>
          column.editable
            ? {
                ...column,
                onCell: () => ({
                  onHandleSave: handleSave,
                }),
              }
            : column
        )}
        className="table-demo-editable-cell"
      />
    </>
  );
};
export default Page2;
