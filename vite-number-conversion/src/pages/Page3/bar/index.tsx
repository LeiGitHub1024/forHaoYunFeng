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
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
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
