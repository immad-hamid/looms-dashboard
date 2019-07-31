import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';

export default class RealTimeMonitoring extends Component {
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    };

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    render() {
        const tabListNoTitle = [
            {
                key: 'shed',
                tab: 'Shed',
            },
            {
                key: 'design',
                tab: 'Design',
            },
            {
                key: 'machineBrand',
                tab: 'Machine Brand',
            },
        ];
        const contentListNoTitle = {
            shed: <p>article content</p>,
            design: <p>app content</p>,
            machineBrand: <p>project content</p>,
        };

        return (
            <div>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>

                        </Card>
                    </Col>
                </Row>

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
