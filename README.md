# SVG Variable width line

Create svg `path` with each point can have variable width.

Can create line with `PointerEvent.pressure`.

```javascript
import * as svgVariableWidthLine from 'svg-variable-width-line';

svgVariableWidthLine.compute({
  points: [{ x: 0, y: 0, w: 1 }, { x: 1, y: 0, w: 0 }],
});
// { d: '<Will be path `d` data>' }
```
