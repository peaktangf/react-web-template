import React from 'react'

import './index.less'

import Header from '../../components/header'

import Footer from '../../components/footer'

export default class Index extends React.PureComponent {

    // 设置Header标记
    headerSelectKey = ""

    componentDidMount() {
        this.pageStart();
    }

    componentWillUnmount() {
        this.pageEnd();
    }

    // 页面跳转
    push(pathname) {
        this.props.history.push(pathname);
    }

    render() {
        return <div className="page-base">
            <Header selectKey={this.headerSelectKey} history={this.props.history}></Header>
            <div className="page-base-content">
                {this.renderContent()}
            </div>
            <Footer history={this.props.history}></Footer>
        </div>
    }

    // overwrite

    pageStart() { }

    pageEnd() { }

    renderContent() {
        return null
    }
}