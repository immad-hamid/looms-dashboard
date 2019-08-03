import React, { Component } from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';
import Chart from "react-apexcharts";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currMonth: {
                options: {},
                series: [41.94, 5.00, 9.74, 4.10, 32.69, 6.53],
                chartOptions: {
                    labels: ['Act Eff', 'Other Stops', 'Wrap', 'Weft', 'Power Fail', 'Knotting']
                }
            },
            runningShift: {
                options: {},
                series: [65.73, 3.22, 15.25, 5.14, 10.66],
                chartOptions: {
                    labels: ['Act Eff', 'Other Stops', 'Wrap', 'Weft', 'Power Fail']
                }
            },
            effAnalysis: {
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
                    }
                },
                series: [
                    {
                        name: "Act. Eff(%)",
                        data: [59, 19, -1, 50, 41, 56, 64, 58]
                    }
                ]
            },
            prodAnalysis: {
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: ["08/10", "09/10", "10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10"]
                    }
                },
                series: [
                    {
                        name: "Production (Hrs)",
                        data: [346, 325.5, 325.7, 399.2, 346.5, 307.5, 288.7, 316.7]
                    }
                ]
            },
            lsVScs: {
                options: {
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: [0, 1, 2, 3, 4, 5, 6, 7, 8]
                    }
                },
                series: [
                    {
                        name: "Shift - 1",
                        data: [51.1, 96.9, 120, 190, 210, 280, 306, 366]
                    },
                    {
                        name: "Shift - 2",
                        data: [79.1, 112.9, 120, 140, 240]
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        <Col span={4}>
                            <Card>
                                <Statistic
                                    title="Running"
                                    value={91.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<Icon type="arrow-up" />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic
                                    title="Stopped"
                                    value={7.72}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<Icon type="arrow-down" />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic
                                    title="Disabled"
                                    value={1}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<Icon type="arrow-up" />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic
                                    title="Above 90%"
                                    value={60.30}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<Icon type="arrow-up" />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic
                                    title="60% to 90%"
                                    value={37.40}
                                    precision={2}
                                    valueStyle={{ color: '#ffc107' }}
                                    prefix={<Icon type="arrow-up" />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card>
                                <Statistic
                                    title="Below 60%"
                                    value={2.30}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<Icon type="arrow-down" />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>

                <Row gutter={16}>

                    <Col span={12} style={{ marginTop: 20 }}>
                        <Card title="Current Month">
                            <div className="donut">
                                <Chart options={this.state.currMonth.chartOptions} series={this.state.currMonth.series} type="donut" width="380" />
                            </div>
                        </Card>
                    </Col>

                    <Col span={12} style={{ marginTop: 20 }}>
                        <Card title="Running Shift">
                            <div className="donut">
                                <Chart options={this.state.runningShift.chartOptions} series={this.state.runningShift.series} type="donut" width="380" />
                            </div>
                        </Card>
                    </Col>

                    <Col span={24} style={{ marginTop: 20 }}>
                        <Card title="Efficiency Analysis">
                            <h4>Current Month</h4>
                            <Chart
                                options={this.state.effAnalysis.options}
                                series={this.state.effAnalysis.series}
                                type="line"
                                width="1000"
                                height="300"
                            />
                        </Card>
                    </Col>

                    <Col span={24} style={{ marginTop: 20 }}>
                        <Card title="Production Analysis">
                            <Col span={12}>
                                <Card title="Shift Production - Last 9 Shifts">
                                    <Chart
                                        options={this.state.prodAnalysis.options}
                                        series={this.state.prodAnalysis.series}
                                        type="bar"
                                        width="440"
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="Last Shift VS Current Shift">
                                    <Chart
                                        options={this.state.lsVScs.options}
                                        series={this.state.lsVScs.series}
                                        type="line"
                                        width="440"
                                    />
                                </Card>
                            </Col>
                        </Card>
                    </Col>

                </Row>


            </div>
        )
    }
}
