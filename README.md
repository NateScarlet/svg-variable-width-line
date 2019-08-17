# SVG Variable width line

[![npm package](https://img.shields.io/npm/v/svg-variable-width-line)](https://www.npmjs.com/package/svg-variable-width-line)

Create svg `path` with each point can have variable width.

Can create line with `PointerEvent.pressure`.

[Demo](https://natescarlet.github.io/svg-variable-width-line/)

```javascript
import * as svgVariableWidthLine from 'svg-variable-width-line';

svgVariableWidthLine.compute({
  points: [{ x: 0, y: 0, w: 1 }, { x: 1, y: 0, w: 0 }],
});
// { d: '<Will be path `d` data>' }
```
