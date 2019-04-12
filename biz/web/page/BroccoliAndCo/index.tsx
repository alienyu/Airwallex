import * as React from 'react'
import { HashRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

var AppHeader = require('@router/layout/header')
var AppFooter = require('@router/layout/footer')
var Home = require('@router/home/index')

export default class Index extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <Header><AppHeader /></Header>
                <Content style={{ height: 'calc(100vh - 156px)', marginTop: 64 }}>
                    <HashRouter>
                        <Route exact path="/" component={Home} />
                    </HashRouter>
                </Content>
                <Footer><AppFooter /></Footer>
            </Layout>
        )
    }
}