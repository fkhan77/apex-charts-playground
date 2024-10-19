import { useEffect, useMemo } from 'react';
import './App.css'
import ApexCharts from 'apexcharts'

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

  useEffect(() => {
    new ApexCharts(document.querySelector("#line-chart"), lineChartOptions).render();
  }, [lineChartOptions])

  return (
    <div id='container' style={{display:'flex'}}>
      <div id="line-chart" style={{height: 'auto', width: '30vw'}}></div>
    </div>
  )
}

export default App
