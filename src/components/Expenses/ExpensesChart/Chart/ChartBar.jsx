import { useState } from 'react';
import './ChartBar.css'

export const ChartBar = ({ value, maxValue, label }) => {

    let barFillHeight = "0%";
    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + "%";
    }


    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="chart-bar" >
            <div className="chart-bar__inner" onMouseLeave={() => setIsVisible(false)} onMouseOver={() => setIsVisible(true)}>
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label" >{label}</div>
            {isVisible && <div className="chart-bar__label">{barFillHeight}</div>}
        </div>
    )

}