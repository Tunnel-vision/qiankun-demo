/*
 * @Author: 刘昕 xinlx@tungee.com
 * @Date: 2022-11-30 21:52:38
 * @LastEditors: 刘昕 xinlx@tungee.com
 * @LastEditTime: 2022-12-01 11:39:55
 * @FilePath: \qiankun-demo\main-app\src\App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from './logo.svg';
import './App.css';

function App() {

  const onPush = (subapp) => {
    window.history.pushState(null,subapp,subapp)
  }
  return (
    <div className="App">
      <header className="App-header">
          <h1>main APP</h1>        
      </header>
      <div className="mainapp-main">
        <ul className="mainapp-sidemenu">
          <li onClick={()=>onPush('/next')}>nextjs app</li>
          <li onClick={()=>onPush('/react')}>ReactApp</li>
        </ul>
        <main id="subapp-container"></main>
    </div>
    </div>
  );
}

export default App;
