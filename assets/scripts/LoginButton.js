cc.Class({
  extends: cc.Component,

  properties: {
    usernameInput: cc.EditBox,
  },

  onLoad() {
    cc.director.preloadScene('UserScene', () => {
      console.log('The scene UserScene has been loaded in the memory');
    });
  },

  start() {
    this.node.on('click', this.loginButtonClicked, this);
  },

  loginButtonClicked() {
    let username = this.usernameInput.string;
    console.log(username);

    cc.sys.localStorage.setItem('username', username);

    // Chuyển đến Scene User
    cc.director.loadScene('UserScene');
  },
});
