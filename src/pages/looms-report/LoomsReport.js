import React, { Component } from 'react'
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import axios from 'axios';

export default class LoomsReport extends Component {
    state = {
        searchText: '',
        loomsReport: [],
        isLoading: true
    };

    componentDidMount() {
        axios.get(`./tableData.json`)
            .then(res => {
                const looms = res.data;
                setTimeout(() => {
                    this.setState({ loomsReport: looms, isLoading: false });
                }, 1500);
            })
    }


    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            {
                title: 'Machine',
                dataIndex: 'machine',
                key: 'machine',
                width: '30%',
                ...this.getColumnSearchProps('machine'),
            },
            {
                title: 'AEff',
                dataIndex: 'aeff',
                key: 'aeff',
                width: '20%',
                ...this.getColumnSearchProps('aeff'),
            },
            {
                title: 'UEff',
                dataIndex: 'ueff',
                key: 'ueff',
                ...this.getColumnSearchProps('ueff'),
            },
            {
                title: 'PEff',
                dataIndex: 'peff',
                key: 'peff',
                ...this.getColumnSearchProps('peff'),
            },
            {
                title: 'RPM',
                dataIndex: 'rpm',
                key: 'rpm',
                ...this.getColumnSearchProps('rpm'),
            },
            {
                title: 'KPx',
                dataIndex: 'kpx',
                key: 'kpx',
                ...this.getColumnSearchProps('kpx'),
            },
            {
                title: 'metre',
                dataIndex: 'metre',
                key: 'metre',
                ...this.getColumnSearchProps('metre'),
            },
            {
                title: 'Wrp',
                dataIndex: 'wrp',
                key: 'wrp',
                ...this.getColumnSearchProps('wrp'),
            },
            {
                title: 'Wft',
                dataIndex: 'wft',
                key: 'wft',
                ...this.getColumnSearchProps('wft'),
            },
            {
                title: 'Ost',
                dataIndex: 'ost',
                key: 'ost',
                ...this.getColumnSearchProps('ost'),
            },
            {
                title: 'Wrp/Cmpx',
                dataIndex: 'wrp-cmpx',
                key: 'wrp-cmpx',
                ...this.getColumnSearchProps('wrp-cmpx'),
            },
            {
                title: 'Wft/CMPx',
                dataIndex: 'wft-cmpx',
                key: 'wft-cmpx',
                ...this.getColumnSearchProps('wft-cmpx'),
            },
            {
                title: 'Ost/CMPx',
                dataIndex: 'ost-cmpx',
                key: 'ost-cmpx',
                ...this.getColumnSearchProps('ost-cmpx'),
            },
            {
                title: 'LStp',
                dataIndex: 'lstp',
                key: 'lstp',
                ...this.getColumnSearchProps('lstp'),
            },
        ];
        return <Table columns={columns} dataSource={this.state.loomsReport} loading={this.state.isLoading} />;
    }
}
