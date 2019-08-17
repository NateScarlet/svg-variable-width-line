import { Point } from './types';

// Refer: https://github.com/Jam3/chaikin-smooth/blob/master/index.js

export function smoothOnce(...points: Point[]): Point[] {
  const ret: Point[] = [];
  if (points.length === 0) {
    return [];
  }
  ret.push({ ...points[0] });
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];

    ret.push(
      {
        x: 0.75 * p0.x + 0.25 * p1.x,
        y: 0.75 * p0.y + 0.25 * p1.y,
        w: p0.w * 0.75 + p1.w * 0.25,
      },
      {
        x: 0.25 * p0.x + 0.75 * p1.x,
        y: 0.25 * p0.y + 0.75 * p1.y,
        w: p0.w * 0.25 + p1.w * 0.75,
      }
    );
  }
  if (points.length > 2) {
    ret.push({ ...points[points.length - 1] });
  }
  return ret;
}

export function smooth(points: Point[], times = 1): Point[] {
  let ret = points;
  for (let count = 0; count < times; count += 1) {
    ret = smoothOnce(...ret);
  }
  return ret;
}
