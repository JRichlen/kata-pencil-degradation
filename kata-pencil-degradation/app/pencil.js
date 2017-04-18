class Pencil {
    constructor(durability) {
        this.durability = durability || 0;
        this._defaultDurability = durability || 0; 
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
        if (this.durability && character !== ' ') {
            if (character !== '\n') this.durability--;
            return character;
        }
        else {
            return ' ';
        }
    }

    sharpen() {
        this.durability = this._defaultDurability;
    }
}
module.exports = Pencil;