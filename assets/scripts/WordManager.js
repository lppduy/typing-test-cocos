const { generateText } = require('../utils/generateText');
const { calculateWPM } = require('../utils/calculateWPM');

cc.Class({
  extends: cc.Component,

  properties: {
    inputBox: cc.EditBox,
    textLabel: cc.Label,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.count = 0;
    this.frequency = 1;
    this.secondsPassed = 0;
    this.totalTime = 60;
    this.sampleText = generateText();

    this.textLabel.string = this.sampleText;
    this.inputBox.node.on('editing-did-ended', this.checkWPM, this);
  },
  checkWPM() {
    // Lấy văn bản từ EditBox
    let inputText = this.inputBox.string;
    console.log(this.sampleText);
    console.log(inputText);

    this.wpm = calculateWPM(this.sampleText, inputText) - 1;
    console.log('wpm', this.wpm);
  },

  //   start() {},

  update(dt) {
    if (this.secondsPassed < this.totalTime) {
      this.count += dt;

      if (this.count >= this.frequency) {
        this.count -= this.frequency;

        this.secondsPassed += 1;
      }
    }
    if (this.secondsPassed === this.totalTime) {
      this.textLabel.fontSize = 18;
      this.textLabel.string = `Your WPM: ${this.wpm} `;
    }
  },
});
