'use strict'

var chai = require('chai');
var assert = chai.assert;
var Pencil = require('./pencil.js');
var Paper = require('./paper.js');

describe('Paper', () => {
    var paper;
    beforeEach(() => {
        paper = new Paper();
    });

   it('should create a piece of paper', () => {
        assert.isDefined(paper);
   });

   it('should accept text', () => {
        paper.acceptText('test');
        assert.equal(paper.text, 'test');
   });
});