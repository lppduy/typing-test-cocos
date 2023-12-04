cc.Class({
  extends: cc.Component,

  properties: {
    usernameLabel: cc.Label,
  },

  onLoad() {
    let username = cc.sys.localStorage.getItem('username');
    console.log(username);
    if (username) {
      this.usernameLabel.string = 'Username: ' + username;
    } else {
      this.usernameLabel.string = 'Username: Not Found';
    }
  },
});
