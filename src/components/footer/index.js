import React from 'react'

import { Button } from 'antd'

import './index.less'

export default class Index extends React.PureComponent {

    // 跳转联系方式页面
    gotoContact = () => {
        const { history } = this.props
        history.push('contact')
    }

    render() {
        return <div className="main-footer">
            <div className="copyright">
                <div>Copyright@2020 广东博德新能源技术有限公司 版权所有 粤ICP 00000000号</div>
                <div></div>
            </div>
        </div>
    }
}