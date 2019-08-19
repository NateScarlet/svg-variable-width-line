import * as svgVariableWidthLine from '@';
import { Point } from '@';

class DrawingHandler {
  public el: SVGSVGElement;
  public isDrawing = false;
  public points: svgVariableWidthLine.Point[] = [];
  public target?: SVGPathElement;
  public width = 20;
  public lastDrawTime?: number;

  public constructor(el: SVGSVGElement) {
    this.el = el;
  }
  onPointerdown(e: PointerEvent): void {
    e.preventDefault();
    this.isDrawing = true;
    this.points = [];
    const target = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    this.el.appendChild(target);
    this.target = target;
  }
  get mustTarget(): SVGPathElement {
    if (!this.target) {
      throw new Error('Should has target');
    }
    return this.target;
  }
  onPointermove(e: PointerEvent): void {
    if (!this.isDrawing) {
      return;
    }
    e.preventDefault();
    if (this.lastDrawTime && Date.now() - this.lastDrawTime < 4) {
      return;
    }
    this.lastDrawTime = Date.now();
    const { x, y } = svgVariableWidthLine.util.translatePoint(this.el, e);
    const w = e.pressure * this.width;
    const p: Point = { x, y, w };
    const lastPoint = this.points.slice(-1)[0];
    if (
      lastPoint &&
      svgVariableWidthLine.vector2.length(lastPoint, p) < this.width
    ) {
      return;
    }
    this.points.push(p);
    if (e.pointerType === 'mouse') {
      this.points = this.points.map((v, i, array) => ({
        ...v,
        w: this.width * (i / array.length),
      }));
    }
    this.update();
  }
  onPointerup(e: PointerEvent): void {
    e.preventDefault();
    this.isDrawing = false;
    delete this.target;
  }
  install(): void {
    this.el.addEventListener('pointerdown', this.onPointerdown.bind(this));
    this.el.addEventListener('pointermove', this.onPointermove.bind(this));
    this.el.addEventListener('pointerup', this.onPointerup.bind(this));
  }
  update(): void {
    const { d } = svgVariableWidthLine.compute(
      ...svgVariableWidthLine.smooth(this.points, 4)
    );
    this.mustTarget.setAttribute('d', d);
  }
}

((): void => {
  const el = document.querySelector('svg#canvas');
  if (!(el instanceof SVGSVGElement)) {
    throw Error('Missing canvas element');
  }
  new DrawingHandler(el).install();
  el.addEventListener('pointermove', e => {
    const el = document.querySelector('#pressure');
    if (!el) {
      return;
    }
    el.textContent = e.pressure.toString();
  });
  el.addEventListener('pointermove', e => {
    const el = document.querySelector('#pointer-type');
    if (!el) {
      return;
    }
    el.textContent = e.pointerType;
  });
})();
