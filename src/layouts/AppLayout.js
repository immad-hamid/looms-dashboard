import React, { Component } from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';

import MainLoomsDetails from './../pages/main-looms-details/MainLoomsDetails';
import 'antd/dist/antd.css';
import Dashboard from '../pages/dashboard/Dashboard';
import LoomsReport from '../pages/looms-report/LoomsReport';
import RealTimeMonitoring from '../pages/real-time-monitoring/RealTimeMonitoring';

export default class AppLayout extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { Header, Sider, Content, Footer } = Layout;
        const header = {
            logo: "https://spantik.biz/wp-content/uploads/2019/06/Logo-Refined@01x-1.png",
            alt: 'Spantic Solution'
        };
        const anchor = {
            color: '#ffffff'
        }

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <BrowserRouter>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>

                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span><Link style={anchor} to="/dashboard">Dashboard</Link></span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="menu-unfold" />
                                <span><Link style={anchor} to="/real-time-monitoring">Real Time Monitoring</Link></span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="menu-unfold" />
                                <span><Link style={anchor} to="/looms-report">Looms Report</Link></span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="menu-unfold" />
                                <span><Link style={anchor} to="/looms-detail">Looms Details</Link></span>
                            </Menu.Item>
                        </Menu>
                    </Sider>

                    <Layout>
                        <Header style={{ background: '#fff', paddingLeft: 18 }} >
                            <div className="logo" >
                                <img src={header.logo} alt={header.alt} />
                            </div>
                        </Header>

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>

                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                                <Switch>
                                    <Route exact path='/' component={Dashboard} />
                                    <Route exact path='/dashboard' component={Dashboard} />
                                    <Route exact path='/real-time-monitoring' component={RealTimeMonitoring} />
                                    <Route exact path='/looms-report' component={LoomsReport} />
                                    <Route exact path='/looms-detail' component={MainLoomsDetails} />
                                </Switch>

                            </div>
                        </Content>

                        <Footer style={{ textAlign: 'center' }}>Loom Monitoring ©2019 Created by Spantic Technologies</Footer>
                    </Layout>
                </BrowserRouter>
            </Layout>
        );
    }
}
