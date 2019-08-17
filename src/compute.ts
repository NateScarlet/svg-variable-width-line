import { Point, Vector2 } from './types';
import { refineFloat } from './utils/refineFloat';
import * as vector2 from './vector2';

export function computeSidePoints(
  current: Point,
  prev?: Point
): { left: Vector2; right: Vector2 } {
  const r = current.w / 2;
  if (!prev) {
    return {
      left: {
        x: current.x,
        y: current.y + r,
      },
      right: {
        x: current.x,
        y: current.y - r,
      },
    };
  }
  const angle = Math.atan((current.y - prev.y) / (current.x - prev.x));
  const dx = refineFloat(Math.sin(angle) * r);
  const dy = refineFloat(Math.cos(angle) * r);
  return {
    left: {
      x: current.x - dx,
      y: current.y + dy,
    },
    right: {
      x: current.x + dx,
      y: current.y - dy,
    },
  };
}

export function compute(...points: Point[]): { d: string } {
  const operations: string[] = ['M'];
  const edgePoints: Vector2[] = [];
  for (let i = 0; i < points.length; i += 1) {
    const { left, right } = computeSidePoints(
      points[i],
      points[i - 1] || points[i + 1]
    );
    const lastLeft = edgePoints.slice(i)[0];
    if (
      lastLeft &&
      vector2.length(lastLeft, left) > vector2.length(lastLeft, right)
    ) {
      edgePoints.splice(i, 0, left, right);
    } else {
      edgePoints.splice(i, 0, right, left);
    }
  }
  for (const p of edgePoints) {
    operations.push(`${p.x},${p.y}`);
  }
  const d = operations.join(' ');
  return { d };
}
