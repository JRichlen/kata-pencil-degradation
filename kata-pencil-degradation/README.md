# Pencil Durability Kata
The purpose of the Pencil Kata is to write code to simulate, first coarsely and then more faithfully, an ordinary graphite pencil. It includes writing and editing text, point degradation, using the eraser, and sharpening the pencil. The point of this kata to to provide a larger than trivial exercise that can be used to practice TDD. 

[Kata Instructions](https://github.com/PillarTechnology/kata-pencil-durability)

## Tools
1. NodeJS
..* NPM
..* Mocha
..* Chai [S]
2. Code Editor (VS Code)


## Installation
Run `npm install` to install dependencies.

## Usage 
```
var pencil = new Pencil(4); 	// pencil.durability = 5
var paper = new Paper();

pencil.write('tests', paper);
console.log(paper.text);		// "test"