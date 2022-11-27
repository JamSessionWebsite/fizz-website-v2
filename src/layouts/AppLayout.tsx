import React from 'react';
import {Layout, Menu, Skeleton} from "antd";
import Sider from "antd/es/layout/Sider";
import JamSessionRoutes from "../routing/JamSessionRoutes";
import {ItemType} from "antd/es/menu/hooks/useItems";

const {Content, Header} = Layout;

const AppLayout = ({}) => {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Content className={`site-layout-background`}>
                <div className={`site-layout-background`} style={{padding: 24, minHeight: 360}}>
                    <JamSessionRoutes/>
                </div>
            </Content>
        </Layout>
    )
};

export default AppLayout;