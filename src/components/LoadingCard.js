import React from 'react';
import { Card } from 'antd';

export default function LoadingCard() {
    const { Meta } = Card;
    return (
        <div>
            <Card style={{ marginBottom: 10 }} loading={true}>
                <Meta
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    )
}
