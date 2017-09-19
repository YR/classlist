'use strict';

const { expect } = require('chai');
const classList = require('../../index');

let element;

describe('classList', () => {
  before(() => {
    element = document.createElement('div');
  });
  beforeEach(() => {
    element.className = 'test';
  });

  describe('add()', () => {
    it('should add multiple tokens', () => {
      classList.add(element, 'foo', 'bar');

      expect(element.className).to.equal('test foo bar');
    });
  });
  describe('remove()', () => {
    it('should remove multiple tokens', () => {
      classList.add(element, 'foo', 'bar');
      classList.remove(element, 'foo', 'bar');

      expect(element.className).to.equal('test');
    });
  });
  describe('toggle()', () => {
    it('should add missing token', () => {
      const result = classList.toggle(element, 'foo');

      expect(element.className).to.equal('test foo');
      expect(result).to.equal(true);
    });
    it('should remove existing token', () => {
      const result = classList.toggle(element, 'test');

      expect(element.className).to.equal('');
      expect(result).to.equal(false);
    });
    it('should add missing token if "force=true"', () => {
      const result = classList.toggle(element, 'foo', true);

      expect(element.className).to.equal('test foo');
      expect(result).to.equal(true);
    });
    it('should not remove existing token if "force=true"', () => {
      const result = classList.toggle(element, 'test', true);

      expect(element.className).to.equal('test');
      expect(result).to.equal(true);
    });
    it('should remove existing token if "force=false"', () => {
      const result = classList.toggle(element, 'test', false);

      expect(element.className).to.equal('');
      expect(result).to.equal(false);
    });
    it('should not add missing token if "force=false"', () => {
      const result = classList.toggle(element, 'foo', false);

      expect(element.className).to.equal('test');
      expect(result).to.equal(false);
    });
  });
});
