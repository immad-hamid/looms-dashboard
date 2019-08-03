import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
import axios from 'axios';
import LoadingCard from './../../../components/LoadingCard';

export default class MachineStatus extends Component {
    state = {
        machineData: [],
        isLoading: true
    };

    componentDidMount() {
        axios.get(`./machine-data.json`)
            .then(res => {
                const machineData = res.data;
                setTimeout(() => {
                    this.setState({ machineData: machineData, isLoading: false });
                    console.log(this.state.machineData);
                }, 1500);
            })
    }

    render() {
        const gridStyle = {
            width: '100%',
            textAlign: 'center',
        };

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        return (
            <div>
                {
                    this.state.isLoading ?
                        <Row gutter={10}>
                            {arr.map((i) => <Col key={i} span={6}><LoadingCard key={i}></LoadingCard></Col>)}
                        </Row>
                        :
                        <Row style={{ marginBottom: 20 }} gutter={4}>
                            {
                                this.state.machineData.map((res, i) =>
                                    <Col key={i} span={6} style={{ marginBottom: 4 }}>
                                        <Card>
                                            <Card.Grid style={gridStyle} className={`gradient-default ${this.props.backDrop}`}>
                                                <h3>{res.machine}</h3>
                                                <p>Eff (%): {`${res.aeff}/${res.peff}`}</p>
                                                <p>RPM: {res.rpm}</p>
                                                <p>KPx: {res.kpx}</p>
                                                <p>Metre: {res.metre}</p>
                                                <p style={{ color: "orangered", fontWeight: 700 }}>66076</p>
                                                <p>{res.status}</p>
                                            </Card.Grid>
                                        </Card>
                                    </Col>
                                )
                            }
                        </Row>
                }
            </div>
        )
    }
}

