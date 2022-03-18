export default class UserInfo {
  constructor({ data }) {
    this._nameSelector = data.nameSelector;
    this._infoSelector = data.infoSelector;
  }

  getUserInfo() {
    this._userName = document.querySelector(this._nameSelector);
    this._userInfo = document.querySelector(this._infoSelector);

    // console.log(this._userName.textContent)

    this._userData = {
      user: this._userName.textContent,
      info: this._userInfo.textContent
    }

    return this._userData;

    // возвращает объект с данными пользователя. подставить в форму при открытии
  }

  setUserInfo() {
    // this._userName.textContent =
  }

}
