/*
 * @Author: 刘昕 xinlx@tungee.com
 * @Date: 2022-11-30 21:35:14
 * @LastEditors: 刘昕 xinlx@tungee.com
 * @LastEditTime: 2022-12-01 10:48:07
 * @FilePath: \qiankun-demo\nextjs-blog\pages\_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ReactDOM from 'react-dom';




export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
