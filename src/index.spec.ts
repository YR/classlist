import { expect } from 'chai';
import { add, remove, toggle } from './index';

let element: Element;

describe('classList', () => {
  before(() => {
    element = document.createElement('div');
  });
  beforeEach(() => {
    element.className = 'test';
  });

  describe('add()', () => {
    it('should add multiple tokens', () => {
      add(element, 'foo', 'bar');

      expect(element.className).to.equal('test foo bar');
    });
  });

  describe('remove()', () => {
    it('should remove multiple tokens', () => {
      add(element, 'foo', 'bar');
      remove(element, 'foo', 'bar');

      expect(element.className).to.equal('test');
    });
  });

  describe('toggle()', () => {
    it('should add missing token', () => {
      const result = toggle(element, 'foo');

      expect(element.className).to.equal('test foo');
      expect(result).to.equal(true);
    });

    it('should remove existing token', () => {
      const result = toggle(element, 'test');

      expect(element.className).to.equal('');
      expect(result).to.equal(false);
    });

    it('should add missing token if "force=true"', () => {
      const result = toggle(element, 'foo', true);

      expect(element.className).to.equal('test foo');
      expect(result).to.equal(true);
    });

    it('should not remove existing token if "force=true"', () => {
      const result = toggle(element, 'test', true);

      expect(element.className).to.equal('test');
      expect(result).to.equal(true);
    });

    it('should remove existing token if "force=false"', () => {
      const result = toggle(element, 'test', false);

      expect(element.className).to.equal('');
      expect(result).to.equal(false);
    });

    it('should not add missing token if "force=false"', () => {
      const result = toggle(element, 'foo', false);

      expect(element.className).to.equal('test');
      expect(result).to.equal(false);
    });
  });
});
