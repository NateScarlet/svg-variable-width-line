import * as lib from '@';
import { expect } from 'chai';

describe('vector2-length', function() {
  it('simple-x', function() {
    const result = lib.vector2.length({ x: 0, y: 0 }, { x: 1, y: 0 });
    expect(result).to.equals(1);
  });
  it('simple-y', function() {
    const result = lib.vector2.length({ x: 0, y: 0 }, { x: 0, y: 1 });
    expect(result).to.equals(1);
  });
  it('simple-xy', function() {
    const result = lib.vector2.length({ x: 0, y: 0 }, { x: 1, y: 1 });
    expect(result).to.equals(1.4142135623730951);
  });
  it('multiple', function() {
    const result = lib.vector2.length(
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 0 }
    );
    expect(result).to.equals(2);
  });
});
