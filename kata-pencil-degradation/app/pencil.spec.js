'use strict'

var chai = require('chai');
var assert = chai.assert;
var Pencil = require('./pencil.js');
var Paper = require('./paper.js');

describe('Pencil', () => {
    var pencil;
    var paper;

    beforeEach(() => {
        pencil = new Pencil(4, 2);
        paper = new Paper();
    });

    it('should exist',() => {
        assert.isDefined(pencil);
    });

    it('should have a durability property', () => {
        assert.equal(pencil.durability, 4); 
    });
    
    it('should have a length property', () => {
        assert.equal(pencil.length, 2);
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
            assert.equal(paper.text, 'A\n\B\n \n ');
        });

        it('should degrade twice as fast when writing capital letters', () => {
            pencil.write('ABCD', paper);
            assert.equal(paper.text, 'AB  ');
        });
    });

    
    describe('.sharpen', () => {
        it('should sharpen pencil to original durability', () => {
            pencil.write('tests', paper);
            pencil.sharpen();
            pencil.write('it', paper);
            assert.equal(paper.text, 'test it');
        });

        it('should decrease the pencils length', () => {
            pencil.sharpen();
            assert.equal(pencil.length, 1);
        });

        it('should not sharpen to original durability if the pencil is used up', () => {
            pencil.sharpen();
            pencil.sharpen();
            pencil.sharpen();
            pencil.write('test', paper);
            assert.equal(paper.text, '    ');
        });
    });

    describe('.erase()', () => {
        beforeEach(() => {
            pencil = new Pencil(100, 2, 3);
        });

        it('should erase the last instance of a string from a paper', () => {
            pencil.write('This is a test.', paper);
            pencil.erase('is', paper);
            assert.equal(paper.text, 'This    a test.');
        });

        it('should not erase if eraser is worn out', () => {
            pencil.write('This is a test.', paper);
            pencil.erase('is', paper);
            pencil.erase('test', paper);
            assert.equal(paper.text, 'This    a tes .');
        });

        it('should not try to erase whitespace', () => {
            pencil.write('This is a test.', paper);
            pencil.erase('is a', paper);
            pencil.erase('test', paper);
            assert.equal(paper.text, 'This      test.');
        });
    });

    describe('.edit()', () => {
        beforeEach(() => {
            pencil = new Pencil(100, 2, 3);
            pencil.write('This is a test.', paper);
            pencil.erase('is a', paper);
        });

        it('should write over the erased whitespace', () => {
            pencil.edit('abc', paper);
            assert.equal(paper.text, 'This abc  test.');
        });
    });
});