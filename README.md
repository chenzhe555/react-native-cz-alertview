
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
cancel: '取消'；取消按钮，背景白，文字红#FE3113
```

###  3.属性方法:
```
evaluateView: 赋值当前视图对象
```
```
buttonClicked(index): 按钮点击事件(从左到右 0-N)
```

###  4.供外部调用的方法:
```
show(title = '', content = ''): 显示AlertView, 支持修改标题和内容，空串代表不替换之前的文本
```
```
hide: 隐藏AlertView
```

###  5.可修改配置:
```
AlertView.DefaultColor: 默认文本/背景颜色
```


###  6.可继承方法:
```
createButtonView: 创建按钮视图
```
