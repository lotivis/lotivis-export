# lotivis-export [![Node.js CI Build](https://github.com/lotivis/lotivis-export/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/lotivis/lotivis-export/actions/workflows/node.js.yml)

Export functionality for [lotivis.js](https://github.com/lukasdanckwerth/lotivis).



## Functions

This package provides two functions for downloading rendered images of charts in `SVG` and `PNG` format.

#### lotivis.[pngDownload](./src/download.js)(id, filename?, callback?)

|Argument|Description|Default|
|-|-|-|
|`id`|The id of the chart element. Required. |-|
|`filename`| The name of the file to be downloaded. "`.png`" is added automatically if not present. | `"image"` |
|`callback`| An optional callback to be executed after download. | `null` |

Example:

```javascript
lotivis.pngDownload("my-id", "my-chart{.png}", () => {
    console.log("finished download");
}).
```

#### lotivis.[pngDownloadRokotyan](./src/screenshot.js)(id, filename?, callback?)

Download a `PNG` image of the svg with the given id. **Note** that this function can only be used with `SVG`s.

|Argument|Description|Default|
|-|-|-|
|`id`|The id of the `SVG` chart element. Required. |-|
|`filename`| The name of the file to be downloaded. "`.png`" is added automatically if not present. | `"image"` |
|`callback`| An optional callback to be executed after download. | `null` |

Example:

```javascript
lotivis.pngDownloadRokotyan("my-svg-id", "my-chart{.png}", () => {
    console.log("finished download");
}).
```


## Development
```bash
# build module
yarn build

# develop module
yarn build:watch
```
