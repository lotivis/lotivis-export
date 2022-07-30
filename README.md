# lotivis-export

Export functionality for [lotivis.js](https://github.com/lukasdanckwerth/lotivis).



## Functions

This package provides two functions for downloading rendered images of charts in `SVG` and `PNG` format.

#### lotivis.[svgDownload](./src/screenshot.js)(id, filename?, callback?)

Download a `SVG` image of the chart with the given id.

```javascript
function svgDownload(id, filename?, callback?)
```
|Argument|Description|Default Value|
|-|-|-|
|`id`|The id of the `SVG` chart element. Required. |-|
|`filename`|The name of the file to be downloaded. "`.svg`" is added automatically if not present. | `"image"` |
|`callback`| An optional callback to be executed after download. | `null` |

#### Example:

```javascript
lotivis.svgDownload("my-id", "my-chart{.svg}", () => {
    console.log("finished svg download");
}).
```

#### lotivis.[pngDownload](./src/download.js)(id, filename, callback)

```javascript
function pngDownload(id, filename, callback)
```

|Argument|Description|Default Value|
|-|-|-|
|`id`|The id of the `SVG` chart element. Required. |-|
|`filename`|The name of the file to be downloaded. "`.png`" is added automatically if not present. | `"image"` |
|`callback`| An optional callback to be executed after download. | `null` |

#### Example:

```javascript
lotivis.pngDownload("my-id", "my-chart{.png}", () => {
    console.log("finished svg download");
}).
```

## Development
```bash
# build module
yarn build

# develop module
yarn build:watch
```
