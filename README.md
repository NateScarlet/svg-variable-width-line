# SVG Variable width line

> [!NOTE]
> This repository is fork of [NateScarlet/svg-variable-width-line](https://github.com/NateScarlet/svg-variable-width-line) with working for no-DOM environments

[![npm package](https://img.shields.io/npm/v/svg-variable-width-line)](https://www.npmjs.com/package/svg-variable-width-line)
[![GitHub Package](https://img.shields.io/github/package-json/v/hanakla/svg-variable-width-line?label=github%20package)](https://github.com/hanakla/svg-variable-width-line/packages)
[![Build Status](https://img.shields.io/circleci/project/github/NateScarlet/svg-variable-width-line.svg)](https://circleci.com/gh/NateScarlet/svg-variable-width-line)

Create svg `path` with each point can have variable width.

Can create line with `PointerEvent.pressure`.

[Demo](https://natescarlet.github.io/svg-variable-width-line/)

## Installation

### From GitHub Packages

```bash
# Configure npm to use GitHub Packages
echo "@hanakla:registry=https://npm.pkg.github.com" >> .npmrc

# Install the package
npm install @hanakla/svg-variable-width-line
```

### From npm (original package)

```bash
npm install svg-variable-width-line
```

## Usage

```javascript
import * as svgVariableWidthLine from 'svg-variable-width-line';

svgVariableWidthLine.compute({
  points: [
    { x: 0, y: 0, w: 1 },
    { x: 1, y: 0, w: 0 },
  ],
});
// { d: '<Will be path `d` data>' }
```
