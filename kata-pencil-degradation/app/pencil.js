class Pencil {
    constructor(durability, length) {
        this.durability = durability || 0;
        this._defaultDurability = durability || 0;
        this.length = length;
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
        this.durability = this._defaultDurability;
        this.length--;
    }
}
module.exports = Pencil;