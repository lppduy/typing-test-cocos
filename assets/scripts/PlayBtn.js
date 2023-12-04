cc.Class({
  extends: cc.Component,

  properties: {},

  onLoad() {
    this.node.on('click', this.playGame, this);
  },

  playGame() {
    cc.director.loadScene('GameScene');
  },
});
