import React from 'react'

import './index.less'

import { Carousel, Button, Icon } from 'antd'

export default class Index extends React.PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            slides: props.slides || [],// 数据集合
            size: props.size || { width: '100%', height: '600px' },// 轮播图大小
            effectiveWidth: props.effectiveWidth || 1200,// 有效区域宽度
            switchSize: props.switchSize || 60,// 切换按钮大小
            style: props.style,
            currentSlide: 0,
        }
    }

    changeSlide(isLeft) {
        let index = this.state.currentSlide;
        if (isLeft) {
            index = this.state.currentSlide - 1
        } else {
            index = this.state.currentSlide + 1
        }
        this.carousel && this.carousel.goTo(index, false)
    }

    render() {
        const { size, effectiveWidth, switchSize, style } = this.state
        return <div className="components-slide" style={{
            width: size.width,
            height: size.height,
            ...style
        }}>
            <Carousel style={{
                height: size.height
            }} ref={ref => this.carousel = ref} dots={false} afterChange={(currentSlide) => { this.setState({ currentSlide }) }}>
                {this.state.slides.map((item, index) => {
                    return <div key={index + ""} className="slide-item" style={{
                        width: size.width,
                        height: size.height
                    }}>
                        <img style={{ height: size.height }} key={item.id} src={item.imgUrl} alt=""></img>
                    </div>
                })}
            </Carousel>
            {this.state.slides && this.state.slides.length > 1 ? <div className="dots" style={{
                width: effectiveWidth + 'px',
                left: `calc(50% - ${effectiveWidth / 2}px)`
            }}>
                <Button style={{
                    width: switchSize + 'px',
                    height: switchSize + 'px',
                    minWidth: effectiveWidth / 20 + 'px',
                }} shape="circle" onClick={() => { this.changeSlide(true) }}>
                    <Icon type='left' style={{
                        fontSize: switchSize / 2 + 'px',
                        lineHeight: switchSize / 2 + 'px',
                    }}></Icon>
                </Button>
                <Button style={{
                    width: switchSize + 'px',
                    height: switchSize + 'px',
                    minWidth: effectiveWidth / 20 + 'px',
                }} shape="circle" onClick={() => { this.changeSlide(false) }}>
                    <Icon type='right' style={{
                        fontSize: switchSize / 2 + 'px',
                        lineHeight: switchSize / 2 + 'px',
                    }}></Icon>
                </Button>
            </div> : null}
        </div>
    }
}