# 从 2.x 迁移

## 修改框架引入方式修改

```js
// import DC from '@narutogis/map3d-dc-sdk/dist/dc.02.基础.min'
// import DcCore from '@narutogis/map3d-dc-sdk/dist/dc.core.min'
// import DcChart from '@narutogis/map3d-dc-sdk/dist/dc.chart.min'
// import DcMapv from '@narutogis/map3d-dc-sdk/dist/dc.mapv.min'
// import DcS3M from '@narutogis/map3d-dc-sdk/dist/dc.s3m.min'
// import '@narutogis/map3d-dc-sdk/dist/dc.core.min.css'
import * as DC from '@narutogis/map3d-dc-sdk'
import '@narutogis/map3d-dc-sdk/dist/dc.min.css'
```

## 修改框架初始函数

```js
// DC.ready(initViewer)
DC.ready().then(initViewer)
```
