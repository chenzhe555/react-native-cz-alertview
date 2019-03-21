
## Manual installation

npm install react-native-cz-alertview --save

	

## Usage
###  1.引入组件
```
import AlertView from "react-native-cz-alertview";
```

```
<AlertView
    evaluateView={ (alertView) => {this.alertView = alertView}}
    type={2}
    title={'测试标题'}
    content={'测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容'}
    buttonClicked={this._buttonClicked}
    buttons={['再想想', '通过']}
/>
```
###  2.属性:
```
type: 1.背景白，文字默认#AAE039 2.第一个背景白文字#AAE039，后面的都是背景#AAE039，文字白
```
![type=1](https://github.com/chenzhe555/react-native-cz-alertview/blob/master/images/type1.png)
type=1

![type=2](https://github.com/chenzhe555/react-native-cz-alertview/blob/master/images/type2.png)
type=2
```
title: 标题
```
```
content: 内容
```
```
buttons: 按钮数组
```
```
cancel: 取消按钮文本信息。背景白，文字红#FE3113
```
```
defaultColor: 文本&背景颜色(优先级比AlertView.DefaultColor高)
```
```
isRequestClose: 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时是否关闭Modal,默认true
```


###  3.属性方法:
```
evaluateView: 赋值当前视图对象
```
```
buttonClicked(index): 按钮点击事件(从左到右 0-N, 取消按钮也算在内)
```

###  4.供外部调用的方法:
```
show(data = {}): 显示AlertView, 支持修改类型，标题，内容，按钮，取消按钮 {'type': 1,'title': '标题', 'content': '内容', buttons: ['数组'], cancel: '取消'}
```
```
hide: 隐藏AlertView
```

###  5.可修改配置:
```
AlertView.DefaultColor: 全局设置文本&背景颜色，默认#AAE039
```


###  6.可继承方法:
```
createTitelView: 可继承实现自己的标题视图
```
```
createContentView: 可继承实现自己的内容视图
```
```
createButtonView: 可继承实现自己的按钮视图
```
