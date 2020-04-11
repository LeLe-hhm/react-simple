### 核心API

`React.createElement: 创建虚拟DOM`
`React.Component: 实现⾃自定义组件`
`ReactDOM.render: 渲染真实DOM`

### 与vue的异同
1. react中虚拟dom+jsx的设计一开始就有，vue则是2.0版本中才出现的；
2. jsx本来就是js扩展，转义过程简单直接的多。vue把template编译为render函数的过程需要复杂的编译器器，转换字符串-ast-js函数字符串。