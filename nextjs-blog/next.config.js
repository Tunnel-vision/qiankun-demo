const packageName = require("./package.json").name;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: {
  //   library: `${packageName}-[name]`,
  //   libraryTarget: 'umd',
  //   jsonpFunction: `webpackJsonp_${packageName}`,
  // }
  headers: {
    'Access-Control-Allow-Origin':'*',
  }
}

module.exports = nextConfig
