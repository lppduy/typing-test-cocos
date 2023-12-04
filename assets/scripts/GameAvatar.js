// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    selectedAvatar: cc.Sprite,
    ava1: cc.Sprite,
    ava2: cc.Sprite,
    ava3: cc.Sprite,
    usernameLabel: cc.Label,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    let username = cc.sys.localStorage.getItem('username');
    console.log(username);
    if (username) {
      this.usernameLabel.string = username;
    } else {
      this.usernameLabel.string = 'Username: Not Found';
    }

    let savedAvatarName = cc.sys.localStorage.getItem('selectedAvatarFrame');
    console.log(savedAvatarName);
    const ava1Sprite = this.ava1.node.getComponent(cc.Sprite).spriteFrame;
    const ava2Sprite = this.ava2.node.getComponent(cc.Sprite).spriteFrame;
    const ava3Sprite = this.ava3.node.getComponent(cc.Sprite).spriteFrame;
    let selectedAvatarSprite = this.selectedAvatar.getComponent(cc.Sprite);

    switch (savedAvatarName) {
      case 'ava1':
        selectedAvatarSprite.spriteFrame = ava1Sprite;
        break;
      case 'ava2':
        selectedAvatarSprite.spriteFrame = ava2Sprite;
        break;
      case 'ava3':
        selectedAvatarSprite.spriteFrame = ava3Sprite;
        break;
    }
  },

  start() {},

  // update (dt) {},
});
