import React from 'react'

import { Menu, Button } from 'antd'

import './index.less'

export default class Index extends React.PureComponent {

    handleClick = e => {
        console.log('click ', e);
        const { history } = this.props
        let path = ''
        history.push(path)
    };

    render() {
        const { selectKey } = this.props

        return <div className="main-header">
            <div className="header-content">

            </div>
        </div>
    }
}