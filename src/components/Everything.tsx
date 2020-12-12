import * as React from 'react';
import { Avatar, Carousel, Col, Divider, Layout, Row, Statistic, Timeline } from 'antd';
import { UserOutlined } from '@ant-design/icons'

import "../css/index.css";

const { Content } = Layout;

const contentStyle : React.CSSProperties = {
    height: '400px',
    color: '#fff',
    lineHeight: '200px',
    textAlign: 'center',
    background: '#364d79',
  };

const displayTimeFormatter = (value: number) => {
    let dt: Date = new Date(value);

    return <>
        {dt.getMonth()}/{dt.getDay()}/{dt.getFullYear()}  
        {/* {dt.getHours()}:{dt.getMinutes()}:{dt.getSeconds()} */}
    </>
}

const Time = () => {
    // const [, forceUpdate] = React.useState();

    // setTimeout(() => { console.log(1); forceUpdate(null) }, 1000);

    return <Statistic title="Current Time" value={Date.now()} formatter={displayTimeFormatter} />
}

const Everything = () => {

    return <>
        <Layout className="layout">
            {/* <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header> */}
            <Content>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-content">
                <Row gutter={[16, 24]}>
                    <Col span={12} >
                        <Avatar size={64} icon={<UserOutlined />} />
                    </Col>
                    <Col span={12} >
                        <Time />
                    </Col>
                </Row>
                <Divider />
                <Carousel>
                    <div>
                        <h3 style={contentStyle}>Image 1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Image 2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Image 3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Image 4</h3>
                    </div>
                </Carousel>
                <Divider />
                <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
            </div>
            </Content>
        </Layout>
    </>
};

export default Everything;