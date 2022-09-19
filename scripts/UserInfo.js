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

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileDescription.textContent = userData.job;
  }
}