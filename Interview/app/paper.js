
class Paper {
    constructor() {
        this.text = '';
     }

    acceptText(text) {
        this.text += text;
    }
}
module.exports = Paper;