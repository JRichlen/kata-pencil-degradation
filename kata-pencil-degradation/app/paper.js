
class Paper {
    constructor() {
        this.text = '';
     }

    acceptText(text, pos) {
        if (typeof pos !== 'undefined') {
            var paperText = this.text.split('');
            var text = text.split('');
            var j = 0;
            for(var j = 0; j < text.length; j++) {
                paperText[pos] = text[j];
                pos++;
            }
            this.text = paperText.join('');
        }
        else {
            this.text += text;
        }        
    }
}
module.exports = Paper;