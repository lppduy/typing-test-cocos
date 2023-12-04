cc.Class({
  extends: cc.Component,

  properties: {},

  onLoad() {
    this.timerSprite = this.node.getComponent(cc.Sprite);
    this.count = 0;
    this.frequency = 1;
    this.secondsPassed = 0;
    this.totalTime = 60;
  },
  update(dt) {
    if (this.secondsPassed < this.totalTime) {
      this.count += dt;

      if (this.count >= this.frequency) {
        this.count -= this.frequency;

        this.secondsPassed += 1;
        console.log('Seconds passed:', this.secondsPassed);

        this.timerSprite.fillRange -= 1 / 60;
      }
    }

    if (this.secondsPassed === 1) {
      this.timerSprite.node.color = cc.Color.GREEN;
    }
    if (this.secondsPassed === 36) {
      this.timerSprite.node.color = cc.Color.YELLOW;
    }
    if (this.secondsPassed === 54) {
      this.timerSprite.node.color = cc.Color.RED;
    }
  },
});
