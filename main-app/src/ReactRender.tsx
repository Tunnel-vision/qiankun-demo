/*
 * @Author: 刘昕 xinlx@tungee.com
 * @Date: 2022-12-01 10:04:17
 * @LastEditors: 刘昕 xinlx@tungee.com
 * @LastEditTime: 2022-12-01 10:07:38
 * @FilePath: \qiankun-demo\main-app\src\ReactRender.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import ReactDOM from 'react-dom';

function Render(props) {
    const {loading} = props;
    return (
        <>
            {loading && <h4 className="subapp-loadding" >Loading...</h4>}
            <div id='subapp-viewport'/>
        </>
    )
}

export default function render({loadding}){
    const container  = document.getElementById('subapp-container');
    ReactDOM.render(<Render loadding={loadding}/>,container)
}