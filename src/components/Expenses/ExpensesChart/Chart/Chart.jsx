import { useState } from 'react'
import './Chart.css'
import { ChartBar } from './ChartBar'

export function Chart({ dataPoints }) {
   
   const [total, setTotal] = useState(1)
   const changeTotal = (e) => { setTotal(e.target.value) }

    return <div className="chart-set">
        <form action="submit">
            <label>Maximum budget for the month: </label>
            <input type="number" step="1" value={total} onChange={changeTotal} />
        </form>
        <div className="chart">
            {dataPoints.map(dataPoint => <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={total}
                label={dataPoint.label} />)}
        </div>
    </div>

}