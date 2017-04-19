class Pencil {
    constructor(durability, length, eraserDurability) {
        this.durability = durability || 0;
        this._defaultDurability = durability || 0;
        this.length = length;
        this.eraserDurability = eraserDurability
    }

    write(writeStr, paper) {
        var _that = this;
        var characters = writeStr.split('');
        writeStr = '';
        characters.forEach(function(character) {
            writeStr += _that._degrade(character);
        });
        paper.acceptText(writeStr);
        return writeStr;
    }

    _degrade(character) {
        var durabilityRequired = (character == character.toUpperCase()) ? 2 : 1;
        if (character === '\n') {
            return character;
        }
        else if (this.durability >= durabilityRequired && character !== ' ') {
            this.durability -= durabilityRequired;
            return character;
        }
        else {
            return ' ';
        }
    }

    sharpen() {
        if (this.length) {
            this.durability = this._defaultDurability;
            this.length--;
        }
        else {
            this.durability = 0; 
        }
    } 

    erase(eraseStr, paper) {
        var index = paper.text.lastIndexOf(eraseStr);
        var length = eraseStr.length;
        var text = paper.text.split('');
        var start = length + index -1;
        var stop = index;
        if (index > -1) {
            paper.editPosition = index;
            for(var i = start ; i >= stop ; i--) {
                if (this.eraserDurability  && /\S/.test(text[i])) {
                    text[i] = ' ';
                    this.eraserDurability--;
                }
            }
            text = text.join('');
            paper.text = text;
        }
    }

    edit(writeStr, paper) {
        paper.acceptText(writeStr, true);
    }
}
module.exports = Pencil;