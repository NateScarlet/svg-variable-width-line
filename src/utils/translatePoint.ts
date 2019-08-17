export function translatePoint(
  el: SVGSVGElement,
  point: { x: number; y: number }
): DOMPoint {
  const matrix = el.getScreenCTM();

  if (!matrix) {
    throw new Error('Should has screen CTM.');
  }
  const p = el.createSVGPoint();
  p.x = point.x;
  p.y = point.y;
  return p.matrixTransform(matrix.inverse());
}
