import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import axios from 'axios';
import MachineStatus from './components/MachineStatus';
import LoadingCard from './../../components/LoadingCard';

export default class RealTimeMonitoring extends Component {
    state = {
        key: 'machineStatus',
        noTitleKey: 'machineStatus',
        monitoringData: [],
        isLoading: true
    };

    componentDidMount() {
        axios.get(`./real-monitoring-data.json`)
            .then(res => {
                const monitoringData = res.data;
                setTimeout(() => {
                    this.setState({ monitoringData: monitoringData, isLoading: false });
                }, 1500);
            })
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    render() {
        const tabListNoTitle = [
            {
                key: 'shed',
                tab: 'Shed'
            },
            {
                key: 'design',
                tab: 'Design'
            },
            {
                key: 'machineBrand',
                tab: 'Machine Brand'
            },
            {
                key: 'machineStatus',
                tab: 'Machine - Status'
            },
            {
                key: 'machineEff',
                tab: 'Machine Eff.'
            },
            {
                key: 'orderNum',
                tab: 'Order Number'
            },
            {
                key: 'operator',
                tab: 'Operator'
            },
            {
                key: 'technician',
                tab: 'Technician'
            },
            {
                key: 'supervisor',
                tab: 'Supervisor'
            },
            {
                key: 'machineGroup',
                tab: 'Machine Group'
            }
        ];

        const contentListNoTitle = {
            shed: <MachineStatus backDrop="gradient-shed" />,
            design: <MachineStatus backDrop="gradient-design" />,
            machineBrand: <MachineStatus backDrop="gradient-machineBrand" />,
            machineStatus: <MachineStatus backDrop="gradient-machineStatus" />,
            machineEff: <MachineStatus backDrop="gradient-machineEff" />,
            orderNum: <MachineStatus backDrop="gradient-orderNum" />,
            operator: <MachineStatus backDrop="gradient-operator" />,
            technician: <MachineStatus backDrop="gradient-technician" />,
            supervisor: <MachineStatus backDrop="gradient-supervisor" />,
            machineGroup: <MachineStatus backDrop="gradient-machineGroup" />
        };

        const gridStyle = {
            width: '100%',
            textAlign: 'center',
        };

        const arr = [1, 2, 3, 4];

        return (
            <div>
                <Row><h2>Real-Time Monitoring</h2></Row>

                <div>
                    {
                        this.state.isLoading ?
                            <Row gutter={10}>
                                {arr.map((i) => <Col key={i} span={6}><LoadingCard key={i}></LoadingCard></Col>)}
                            </Row>
                            :
                            <Row style={{ marginBottom: 20 }} gutter={4}>
                                {
                                    this.state.monitoringData.map((res, i) =>
                                        <Col key={i} span={6} style={{ marginBottom: 20 }}>
                                            <Card>
                                                <Card.Grid style={gridStyle} className={`gradient gradient-${i + 1}`}>
                                                    <h2>{res.head}</h2>
                                                    <p>{res.actEff.head}: {res.actEff.value}</p>
                                                    <p>{res.prodEff.head}: {res.prodEff.value}</p>
                                                    <p>{res.metre.head}: {res.metre.value}</p>
                                                    <p>{res.avgRpm.head}: {res.avgRpm.value}</p>
                                                    <p>{res.stopHrs.head}: {res.stopHrs.value}</p>
                                                </Card.Grid>
                                            </Card>
                                        </Col>
                                    )
                                }
                            </Row>
                    }
                </div>

                <br />
                <br />

                <Card
                    style={{ width: '100%' }}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={key => {
                        this.onTabChange(key, 'noTitleKey');
                    }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}
                </Card>
            </div>
        )
    }
}
