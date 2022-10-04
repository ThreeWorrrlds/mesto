export class UserInfo {
  constructor({ profileName, profileDescription }) {
    this._profileName = document.querySelector(profileName);
    this._profileDescription = document.querySelector(profileDescription);
  }

  getUserInfo() {
    const userData = {};
    userData.name = this._profileName.textContent;
    userData.job = this._profileDescription.textContent;
    return userData;
  }

  setUserInfo(res) {
    this._profileName.textContent = res.name;
    this._profileDescription.textContent = res.about;
  }
}


