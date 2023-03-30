import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Bar = (props: {}) => {
  const {} = props;
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current!);
    const option = {
      title: {
        text: '输出指标比较',
        textStyle: {
          color: '#ccc',
          fontSize: 24,
          fontWeight: 'bold'
        },
        left: 'center'
      },
      xAxis: {
        type: "category",
        data: ["极大型指标", "极小型指标"],
        axisLabel: {
          color: "#eee", // set the color to white
          fontSize: 18, // set the font size to 16px
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#eee", // set the color to white
          fontSize: 18, // set the font size to 16px
        },
      },
      series: [
        {
          data: [3,5],
          type: "bar",
          barWidth: 80,
          barGap: '50%', // set the gap between bars to 50%
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#1E90FF'
              }, {
                offset: 1,
                color: '#1E90FF'
              }]),
            emphasis: {
              color: '#ffc300'
            }
          }
        },
      ],
    };
    myChart.setOption(option);
    myChart.resize({ height: 520 });

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
