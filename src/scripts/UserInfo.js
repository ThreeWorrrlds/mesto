export class UserInfo {
  constructor({ profileName, profileDescription, avatarElement }) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
    this._avatar = document.querySelector(avatarElement);
  }

  getUserInfo() {
    const userData = {};
    userData.name = this._profileName.textContent;
    userData.job = this._profileDescription.textContent;
    userData.image = this._avatar.src;
    return userData;
  }

  setUserInfo(res) {
    this._profileName.textContent = res.name;
    this._profileDescription.textContent = res.about;
    this._avatar.src = res.avatar;
  }
}



