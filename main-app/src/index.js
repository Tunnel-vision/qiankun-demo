/*
 * @Author:  xinlx@tungee.com
 * @Date: 2022-11-30 21:52:38
 * @LastEditors: 刘昕 xinlx@tungee.com
 * @LastEditTime: 2022-12-01 11:45:02
 * @FilePath: \qiankun-demo\main-app\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {registerMicroApps,initGlobalState,start,setDefaultMountApp,runAfterFirstMounted } from 'qiankun';

/**
 * 渲染子应用
 */
 function Render(props) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

export default function render({ loading }) {
  const container = ReactDOM.createRoot(document.getElementById('subapp-container'));
  return container.render(<Render />);
}

// step1, 初始化应用(可选)
// render({loadding:true})


const loader = (loadding) => render({loadding});

//step2 注册子应用
registerMicroApps([
  {
    name:'next.js',
    entry: '//localhost:8080',
    container: '#subapp-viewport',
    loader,
    activeRule:'/next'
  }
],
 {
  beforeLoad: [
    (app) => {
      console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
    }
  ],
  beforeMount: [
    (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ]
 }
)


const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

// 全局状态存储
onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

// step3 设置默认进入的子应用
// setDefaultMountApp('/next');

// setp4 启动应用
start();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
