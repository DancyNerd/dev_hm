import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

class UseGraph extends React.Component() {
    constructor(props) {
        super(props);
    }
    
    render() {
        //import weight data somehow
        const RenderLineChart = (
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#438D80" />
                <CartesianGrid stroke="#ccc" />
                <XAxis />
            </LineChart>
        );

        return(RenderLineChart);
    }
}








export default UseGraph;