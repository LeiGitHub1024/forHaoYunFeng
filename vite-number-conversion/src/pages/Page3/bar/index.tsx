import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Bar = (props: {}) => {
  const {} = props;
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current!);
    const option = {
      xAxis: {
        type: "category",
        data: ["极大型指标", "极小型指标"],
        axisLabel: {
          color: "#ccc", // set the color to white
          fontSize: 16, // set the font size to 16px
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#ccc", // set the color to white
          fontSize: 16, // set the font size to 16px
        },
      },
      series: [
        {
          data: [3,5],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    myChart.setOption(option);
    myChart.resize({ height: 550 });

    // 组件卸载时销毁ECharts实例
    // return () => {
    //   myChart.dispose();
    // };
  }, []);
  return (
    <>
      <div ref={chartRef} style={{ height: '100%', width:'100%' }}></div>
    </>
  );
};
export default Bar;
