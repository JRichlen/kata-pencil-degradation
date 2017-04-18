'use strict'

var chai = require('chai');
var assert = chai.assert;
var Pencil = require('./pencil.js');
var Paper = require('./paper.js');

describe('Pencil', () => {
    var pencil;
    var paper;

    beforeEach(() => {
        pencil = new Pencil(4);
        paper = new Paper();
    });

    it('should exist',() => {
        assert.isDefined(pencil);
    });

    it('should have a durability property', () => {
        assert.equal(pencil.durability, 4); 
    });

    describe('.write()', () => {
        it('should be able to write to a piece of paper', () => {
            pencil.write('test', paper);
            assert.equal(paper.text, 'test');
        });
    });

    describe('._degrade()', () => {
        it('should degrade the pencil when it writes', () => {
            pencil.write('tests', paper);
            assert.equal(paper.text, 'test ');
        });

        it('should not degrade the pencil when writing spaces', () => {
            pencil.write(' test', paper);
            assert.equal(paper.text, ' test');
        });

        it('should not degrade the pencil when writing a new line', () => {
            pencil.write('A\nB\nC\nD', paper);
            assert.equal(paper.text, 'A\n\B\nC\nD');
        });
    });

    
    describe('.sharpen', () => {
        it('should sharpen pencil to original durability', () => {
            pencil.write('tests', paper);
            pencil.sharpen();
            pencil.write('123', paper);
            assert.equal(paper.text, 'test 123');
        });
    });
});