import React from 'react'

import BasePage from '../base'

import './index.less'

export default class Index extends BasePage {

    headerSelectKey = "home"

    constructor(props) {
        super(props);
        this.state = {}
    }

    renderContent() {
        return <div className="page-home">
            welcome
        </div>
    }
}