import { useEffect, useMemo } from 'react';
import './App.css'
import ApexCharts from 'apexcharts'

function generateDayWiseTimeSeries(baseval, count, yrange) {
  const series = [];
  let x = baseval;
  for (let i = 0; i < count; i++) {
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
    x += 86400000;
  }
  return series;
}

function App() {

  const lineChartOptions = useMemo(() => {
    return {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997,1998,1999]
      }
    }
  }, [])

        
  const areaChartOptions = useMemo(() => {
    return {
    series: [
    {
      name: 'South',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    },
    {
      name: 'North',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 20
      })
    },
    {
      name: 'Central',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 15
      })
    }
  ],
    chart: {
    type: 'area',
    height: 350,
    stacked: true,
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min))
      }
    },
  },
  colors: ['#008FFB', '#00E396', '#CED4DC'],
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'monotoneCubic'
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  xaxis: {
    type: 'datetime'
  },
  };
  }, [])


  useEffect(() => {new ApexCharts(document.querySelector("#line-chart"), lineChartOptions).render()}, [lineChartOptions])

  useEffect(() => { new ApexCharts(document.querySelector("#area-chart"), areaChartOptions).render()}, [areaChartOptions])


  return (
    <div id='container' style={{display:'flex', width: '100vw'}}>
      <div id="line-chart" style={{height: 'auto', width: '30vw'}}></div>
      <div id="area-chart" style={{height: 'auto', width: '70vw'}}></div>
    </div>
  )
}

export default App
