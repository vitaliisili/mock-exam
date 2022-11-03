import * as React from 'react';
import Chart from 'react-apexcharts'

const ChartDonuts = (props) => {

    const options = {
        chart: {
            animations: {
                enabled: false
            },

        },
        legend: {
            show: false
        },
        fill: {
            colors: ['#ACD2CC', '#FCAEA0', '#5F6568'],
        },

        tooltip: {
            enabled: false,

        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '45%',
                    labels: {
                        show: false
                    }
                },


            }
        },
        stroke: {
            show: false
        },

    }

    const series = [props.correct, props.skipped, props.failed]


    return (
        <div>
            <Chart options={options} series={series} type="donut" width={100} height={100}/>
        </div>
    )
}

export default ChartDonuts