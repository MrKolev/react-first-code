import './ChartBar.css'

export const ChartBar = ({ value, maxValue, label }) => {

    let barFillHeight = "0%";
    if (maxValue > 0) {
        console.log(value);
        console.log(maxValue);
        barFillHeight = Math.round((value / maxValue) * 100) + "%";
    }
  

    return (
        <div className="chart-bar" >
            <div className="chart-bar__inner" >
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label" >{label}</div>
        </div>
    )

}