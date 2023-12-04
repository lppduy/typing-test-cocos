cc.Class({
  extends: cc.Component,

  properties: {
    ava1: cc.Sprite,
    ava2: cc.Sprite,
    ava3: cc.Sprite,
    selectedAvatar: cc.Sprite,
  },

  onLoad() {
    const ava1Sprite = this.ava1.node.getComponent(cc.Sprite).spriteFrame;
    const ava2Sprite = this.ava2.node.getComponent(cc.Sprite).spriteFrame;
    const ava3Sprite = this.ava3.node.getComponent(cc.Sprite).spriteFrame;
    this.setSelectedAvatar(ava3Sprite);
    this.saveSelectedAvatar('ava3');

    this.ava1.node.on(cc.Node.EventType.TOUCH_END, () => {
      this.setSelectedAvatar(ava1Sprite);
      this.saveSelectedAvatar('ava1');
    });

    this.ava2.node.on(cc.Node.EventType.TOUCH_END, () => {
      this.setSelectedAvatar(ava2Sprite);
      this.saveSelectedAvatar('ava2');
    });

    this.ava3.node.on(cc.Node.EventType.TOUCH_END, () => {
      this.setSelectedAvatar(ava3Sprite);
      this.saveSelectedAvatar('ava3');
    });
  },

  setSelectedAvatar(spriteFrame) {
    console.log(spriteFrame);
    let spriteComponent = this.selectedAvatar.getComponent(cc.Sprite);
    console.log(spriteComponent);

    spriteComponent.spriteFrame = spriteFrame;
  },
  saveSelectedAvatar(spriteFrameName) {
    cc.sys.localStorage.setItem('selectedAvatarFrame', spriteFrameName);
  },
});
