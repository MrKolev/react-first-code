import { useState } from 'react';
import './ChartBar.css'

export const ChartBar = ({ value, maxValue, label }) => {

    let barFillHeight = "0%";
    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + "%";
    }

    
    let [display, setDisplay] = useState("none")
    const showAllMoney = () => { 
        setDisplay("block")
     }
    const hideAllMoney = () => { 
        setDisplay("none")
     }
  

    return (
        <div className="chart-bar" >
            <div className="chart-bar__inner" onMouseLeave={hideAllMoney} onMouseOver={showAllMoney}>
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label" >{label}</div>
            <div className="chart-bar__label" style={{ display: display }} >{barFillHeight}</div>
        </div>
    )

}