cc.Class({
  extends: cc.Component,

  properties: {},

  onLoad() {
    this.node.on('click', this.logout, this);
  },

  logout() {
    cc.director.loadScene('LoginScene');
  },
});
