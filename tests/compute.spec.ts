import * as lib from '@';
import { expect } from 'chai';
describe('compute', function() {
  describe('side-points', function() {
    it('x', function() {
      const result = lib.computeSidePoints(
        { x: 0, y: 0, w: 2 },
        { x: -1, y: 0, w: 0 }
      );
      expect(result).to.deep.equals({
        left: { x: 0, y: 1 },
        right: { x: 0, y: -1 },
      });
    });
    it('y', function() {
      const result = lib.computeSidePoints(
        { x: 0, y: 0, w: 2 },
        { x: 0, y: -1, w: 0 }
      );
      expect(result).to.deep.equals({
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
      });
    });
    it('xy', function() {
      const result = lib.computeSidePoints(
        { x: 0, y: 0, w: 2 },
        { x: -1, y: -1, w: 0 }
      );
      const angle = Math.atan(1);
      const dx = lib.util.refineFloat(Math.cos(angle));
      const dy = lib.util.refineFloat(Math.sin(angle));
      expect(result).to.deep.equals({
        left: { x: -dx, y: dy },
        right: { x: dx, y: -dy },
      });
    });
  });
});
