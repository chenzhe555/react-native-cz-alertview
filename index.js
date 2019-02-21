import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';

/*
* props:
* type: 1.背景白，文字默认#AAE039 2.第一个背景白文字#AAE039，后面的都是背景#AAE039，文字白
* title: 标题
* content: 内容
* buttons: 按钮数组
* cancel: '取消'；取消按钮，背景白，文字红#FE3113
*
* func:
* buttonClicked(index): 按钮点击事件(从左到右 0-N)
*
* export func:
* show(title = '', content = ''): 显示AlertView, 支持修改标题和内容，空串代表不替换之前的文本
* hide: 隐藏AlertView
*
* can modify:
* AlertView.DefaultColor: 默认文本/背景颜色
*
* inherit:
* createButtonView: 可继承实现自己的按钮视图样式
* */
export default class AlertView extends Component{

    /*
    * 默认文本/背景颜色
    * */
    static DefaultColor = '#AAE039';

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }

    componentDidMount() {
        if (this.props.evaluateView) this.props.evaluateView(this);
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /*
    * 创建标题视图
    * */
    createTitelView = () => {
        const { title } = this.state;
        return (
            <View>
                <View style={[styles.TitleView]}>
                    <Text style={[styles.TitleTextView]}>{title}</Text>
                </View>
                <View style={[styles.LineView]}></View>
            </View>
        )
    }

    /*
    * 创建内容视图
    * */
    createContentView = () => {
        const { content } = this.state;
        return (
            <View>
                <View style={[styles.ContenView]}>
                    <Text style={[styles.ContenTextView]}>{content}</Text>
                </View>
                <View style={[styles.LineView]}></View>
            </View>
        )
    }

    /*
    * 创建按钮视图
    * */
    createButtonView = () => {
        const { buttons, cancel, type } = this.state;

        let buttonView = null;
        if (buttons.length > 0) {
            let titleColor = AlertView.DefaultColor;
            let bgColor = 'white';
            buttonView = buttons.map( (item, index) => {
                if (type == 2) {
                    if (cancel.length > 0 || (cancel.length == 0 && index != 0) || (cancel.length == 0 && buttons.length == 1)) {
                        titleColor = 'white';
                        bgColor = AlertView.DefaultColor;
                    }
                }
                let lineView = null;
                if (cancel.length > 0 || (cancel.length == 0 && index > 0)) {
                    lineView = (<View style={[{backgroundColor: '#EBEBEB', width: 1}]}></View>);
                }
                return (
                    <View style={[{flexDirection: 'row', flex: 1}]}>
                        {lineView}
                        <TouchableOpacity onPress={this.buttonClicked.bind(this, cancel.length > 0 ? index + 1 : index)} style={[{flex: 1}]}>
                            <View style={[styles.TitleCenter, {backgroundColor: bgColor}]}>
                                <Text style={[styles.ButtonTextView, {color: titleColor }]}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            })
        }

        return (
            <View style={[styles.ButtonView]}>
                {
                    cancel.length > 0 ? (
                        <TouchableOpacity onPress={this.buttonClicked.bind(this, 0)} style={{flex: 1}}>
                            <View style={[styles.TitleCenter]}>
                                <Text style={[styles.ButtonTextView, {color: '#FE3113'}]}>{cancel}</Text>
                            </View>
                        </TouchableOpacity>
                    ) : null
                }
                {buttonView}
            </View>
        );
    }
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams() {
        this.state = {
            show: false,
            type: this.props.type ? this.props.type : 1,
            title: this.props.title ? this.props.title : '',
            content: this.props.content ? this.props.content : '',
            buttons: this.props.buttons ? this.props.buttons : [],
            cancel: this.props.cancel ? this.props.cancel : ''
        }
    }

    /*
    * 按钮点击事件
    * */
    buttonClicked = (index) => {
        if (this.props.buttonClicked) this.props.buttonClicked(index);
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /*
    * 显示AlertView, 支持修改标题和内容，空串代表不替换之前的文本
    * */
    show = (title = '', content = '') => {
        let aTitle = title.length > 0 ? title : this.state.title;
        let aContent = content.length > 0 ? content : this.state.content;
        this.setState({
            show: true,
            title: aTitle,
            content: aContent
        });
    }

    /*
    * 隐藏AlertView
    * */
    hide = () => {
        this.setState({
            show: false
        });
    }
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    render() {
        const { show } = this.state;
        if (!show) return null;

        //标题视图
        let titleView = this.createTitelView();
        //文本视图
        let contentView = this.createContentView();
        //按钮视图
        let buttonView = this.createButtonView();

        return (
            <Modal
                visible={true}
                animateType={'fade'}
                transparent={true}
            >
                <View style={[styles.MainView]}>
                    <View style={[styles.ContentMainView]}>
                        {titleView}
                        {contentView}
                        {buttonView}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    MainView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center'
    },

    ContentMainView: {
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#EBEBEB'
    },

    TitleView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56
    },

    TitleTextView: {
        fontSize: 16,
        fontFamily: 'PingFangSC-Medium'
    },

    ContenView: {

    },

    ContenTextView: {
        fontFamily: 'PingFangSC-Regular',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        marginTop: 20,
        fontSize: 14
    },

    ButtonView: {
        flexDirection: 'row',
        height: 44
    },

    ButtonTextView: {
        fontFamily: 'PingFangSC-Medium',
        fontSize: 16,
        color: 'white'
    },

    LineView: {
        backgroundColor: '#E8E8E8',
        height: 0.5
    },

    TitleCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
