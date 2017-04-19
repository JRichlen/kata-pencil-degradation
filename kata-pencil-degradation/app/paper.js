
class Paper {
    constructor() {
        this.text = '';
        this.editPosition = -1;
     }

    acceptText(text, editing) {
        if (editing) {
            if (this.editPosition > -1) {
                var paperText = this.text.split('');
                var text = text.split('');
                for(var j = 0; j < text.length; j++) {
                    if (paperText[this.editPosition] === ' ') {
                        paperText[this.editPosition] = text[j];
                    }
                    else {
                        paperText[this.editPosition] = '@';
                    }
                    this.editPosition++;
                }
                this.text = paperText.join('');
            }
        }
        else {
            this.text += text;
        }        
        this.editPosition = -1;

    }
}
module.exports = Paper;