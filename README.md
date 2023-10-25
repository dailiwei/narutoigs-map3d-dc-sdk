# Map3D-DC-SDK

<p>
<img src="https://img.shields.io/github/actions/workflow/status/dvgis/map3d-dc-sdk/build.yml"/>
<img src="https://img.shields.io/badge/license-Apache%202-blue"/>
<a href="https://www.npmjs.com/package/@narutogis/map3d-dc-sdk" target="_blank">
 <img src="https://img.shields.io/npm/v/@narutogis/map3d-dc-sdk?color=orange&logo=npm" />
</a>
<a href="https://www.npmjs.com/package/@narutogis/map3d-dc-sdk" target="_blank">
 <img src="https://img.shields.io/npm/dt/@narutogis/map3d-dc-sdk?logo=npm"/>
</a>
<a href="https://resource.dvgis.cn/dc-docs/zh/" target="_blank">
 <img src="https://img.shields.io/badge/docs-online-yellow.svg"/>
</a>
<a href="http://dc.dvgis.cn" target="_blank">
 <img src="https://img.shields.io/badge/demo-online-red.svg"/>
</a>
</p>


[**🇨🇳 中文**](./README_zh.md) | [**🇬🇧English**](./README.md)

`Map3D-DC-SDK` is based on the open source project `Cesium` for the second development of two three-dimensional `WebGis` application framework , the framework optimizes the use of `Cesium` and adds some additional features , designed for developers to quickly build `WebGis` application.

```warning
Tips：This SDK is JS+GIS framework package. Developers need to have some front-end technology and GIS related technology
```


## Run examples

```shell
  yarn run build
  yarn run server
```

## Installation

`NPM / YARN` **_`(Recommend)`_**

Installing with NPM or YARN is recommended and it works seamlessly with webpack.

```shell
yarn add @narutogis/map3d-dc-sdk
-------------------------
npm install @narutogis/map3d-dc-sdk
```

```js
import * as DC from '@narutogis/map3d-dc-sdk'
import '@narutogis/map3d-dc-sdk/dist/dc.min.css'
```

`CDN`

[Resources](https://github.com/dailiwei/map3d-dc-sdk/releases)

```html
<script src="https://cdn.jsdelivr.net/npm/@narutogis/map3d-dc-sdk/dist/dc.min.js"></script>
<link
  href="https://cdn.jsdelivr.net/npm/@narutogis/map3d-dc-sdk/dist/dc.min.css"
  rel="stylesheet"
  type="text/css"
/>
```

```
Please put the resources in the project root directory libs/map3d-dc-sdk, if you put it in other directory, the framework will not run properly.
```

## Configuration

> The configuration is mainly used in the `NPM / YARN` way

Since the `DC` framework sets `CESIUM_BASE_URL` to `./libs/map3d-dc-sdk/resources/` , you need to copy `Cesium` related static resources files: `Assets` , `Workers` , `ThirdParty `to `libs/map3d-dc-sdk/resources` directory of the project to ensure that the 3D scene can be rendered properly. You can also use `DC.config.baseUrl` to set the static resource base related to `Cesium` .

`Webpack`

[Project Template](https://github.com/cavencj/dc-vue-app)

```js
// webpack.config.js
const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@narutogis'

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(dvgisDist, 'map3d-dc-sdk/dist/resources'),
        to: 'libs/map3d-dc-sdk/resources',
      },
    ]),
  ],
}
```

`Vue2.x`

[Project Template](https://github.com/dailiwei/dc-vue)

```js
// vue.config.js
const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@narutogis'
module.exports = {
  chainWebpack: (config) => {
    config.plugin('copy').use(CopywebpackPlugin, [
      [
        {
          from: path.join(dvgisDist, 'map3d-dc-sdk/dist/resources'),
          to: 'libs/map3d-dc-sdk/resources',
        },
      ],
    ])
  },
}
```

`Vue3.x`

[Project Template](https://github.com/dailiwei/dc-vue-next)

```js
// vue.config.js
const path = require('path')
const CopywebpackPlugin = require('copy-webpack-plugin')
const dvgisDist = './node_modules/@narutogis'
module.exports = {
  chainWebpack: (config) => {
    config.plugin('copy').use(CopywebpackPlugin, [
      {
        patterns: [
          {
            from: path.join(dvgisDist, 'map3d-dc-sdk/dist/resources'),
            to: path.join(__dirname, 'dist', 'libs/map3d-dc-sdk/resources'),
          },
        ],
      },
    ])
  },
}
```

`vite`

[Project Template](https://github.com/dailiwei/dc-vite)

```js
// vite.config.js
import { defineConfig } from 'vite'
import DC from '@narutogis/vite-plugin-dc'

export default defineConfig({
  plugins: [DC()],
})
```


## Start

```js
global.DC = DC
DC.ready({}).then(()=>{
    let viewer = new DC.Viewer()
})
```

## Demo

|           ![picture](https://dc.dvgis.cn/examples/previews/baselayer/online/baidu.png)           |     ![picture](http://dc.dvgis.cn/examples/previews/baselayer/online/tdt.png)      |     ![picture](http://dc.dvgis.cn/examples/previews/baselayer/online/arcgis.png?v=3)     |        ![picture](http://dc.dvgis.cn/examples/previews/mini-scene/china.gif)         |
|:------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------:|
|               ![picture](http://dc.dvgis.cn/examples/previews/mini-scene/dfmz.gif)               |    ![picture](http://dc.dvgis.cn/examples/previews/mini-scene/factory.gif)     |        ![picture](http://dc.dvgis.cn/examples/previews/layer/cluster_circle.gif)         | ![picture](http://dc.dvgis.cn/examples/previews/model/3dtiles/shp_custom_shader.gif) |
|        ![picture](http://dc.dvgis.cn/examples/previews/overlay/polyline/image_trail.gif)         | ![picture](http://dc.dvgis.cn/examples/previews/overlay/others/wall_trail.gif) |       ![picture](http://dc.dvgis.cn/examples/previews/overlay/primitive/water.gif)       |      ![picture](http://dc.dvgis.cn/examples/previews/scene-ext/tools/plot.png)       |

[More>>](http://dc.dvgis.cn/#/examples)

## Copyright

```warning
1. The framework is a basic platform, completely open source, which can be modified and reconstructed by any individual or institution without our authorization.
2. We are not responsible for any problems arising from the modification of the framework by individuals and organizations.
3. Some industrial plug-ins and tools will be added in the later stage, and the code will be open source appropriately.
4. The package released by us may be used permanently and free of charge by any person or organization subject to:
  1) complete package reference;
  2) reserve this copyright information in the console output
We reserve the right of final interpretation of this copyright information.
```

## Support

> if map3d-dc-sdk can bring benefits to you, please support it ~

<p>
<a href="https://www.paypal.com/paypalme/cavencj" target="_blank">
<img src="https://www.paypalobjects.com/images/shared/paypal-logo-129x32.svg" style="margin-top:10px" />
</a>
</p>

## Thanks
