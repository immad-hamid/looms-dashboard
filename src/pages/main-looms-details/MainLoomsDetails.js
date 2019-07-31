import React, { Component } from 'react'
import axios from 'axios';
import { Badge } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';

import LoadingCard from './../../components/LoadingCard';

export default class MainLoomsDetails extends Component {

    constructor() {
        super();

        this.state = {
            looms: [],
            isLoading: true
        }
    }

    componentDidMount() {
        axios.get(`https://api.myjson.com/bins/wkghn`)
            .then(res => {
                const looms = res.data;
                this.setState({ looms, isLoading: false });
                console.log(this.state.looms);
            })
    }

    render() {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        return (
            <div>
                {this.state.isLoading ?
                    <Row gutter={10}>
                        {arr.map((i) => <Col key={i} span={3}><LoadingCard key={i}></LoadingCard></Col>)}
                    </Row>
                    :
                    this.state.looms.map(res =>
                        <Row key={res.Seq_no} style={{ marginBottom: 20 }} gutter={4}>
                            <h2>Line Area: {res.Line_No}</h2>
                            {res.LoomData.map((data, i) =>
                                <Col key={i} span={3}>
                                    <Badge count={data.SHIFT}>
                                        <Card title={data.LoomID} bordered={true}>
                                            {data.EFFICIENCY}
                                        </Card>
                                    </Badge>
                                </Col>
                            )}
                        </Row>
                    )
                }
            </div>
        )
    }
}
