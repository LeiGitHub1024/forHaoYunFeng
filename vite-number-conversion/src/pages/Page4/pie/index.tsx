import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Pie = (props: {}) => {
  const {} = props;
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current!);
    var option = {
      title: {
        text: '综合评分饼状图',
        subtext: 'TopSis方法',
        subtextStyle: {
          color: '#ccc',
          fontSize: 14
        },
        left: 'center',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        textStyle: {
          color: '#ccc'
        }
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 8, name: '0.00-0.25' },
            { value: 1, name: '0.25-0.50' },
            { value: 3, name: '0.50-0.75' },
            { value: 2, name: '0.75-1.00' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            textStyle: {
              color: '#ccc',
            }
          },
        }
      ]
    };
    myChart.setOption(option);
    myChart.resize({ height: 550 });


  }, []);
  return (
    <>
      <div ref={chartRef} style={{ height: '100%', width:'100%' }}></div>
    </>
  );
};
export default Pie;
