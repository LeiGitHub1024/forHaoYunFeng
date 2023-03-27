import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Pie = (props: {}) => {
  const {} = props;
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current!);
    var option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
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
export default Pie;
