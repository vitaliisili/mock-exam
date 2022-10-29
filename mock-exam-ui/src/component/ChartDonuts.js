import * as React from 'react';
import styled from "styled-components";
import Chart from 'react-apexcharts'

const ChartWrapper = styled.div`

`

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
        <ChartWrapper>
            <Chart options={options} series={series} type="donut" width={100} height={100}/>
        </ChartWrapper>
    )
}

export default ChartDonuts