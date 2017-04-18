class Pencil {
    constructor(durability) {
        this.durability = durability || 0;
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
            this.durability--;
            return character;
        }
        else {
            return ' ';
        }
    }
}
module.exports = Pencil;