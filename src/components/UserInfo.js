export default class UserInfo {
  constructor({ data }) {
    this._nameSelector = data.nameSelector;
    this._infoSelector = data.infoSelector;
    this._userName = document.querySelector(this._nameSelector);
    this._userInfo = document.querySelector(this._infoSelector);
  }

  // собирает данные пользователя со станицы возвращает объект,
  // подставляются в форму при открытии
  getUserInfo() {
    this._userData = {
      username: this._userName.textContent,
      about: this._userInfo.textContent
    }

    return this._userData;
  }

  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(data) {
    this._userName.textContent = data.username;
    this._userInfo.textContent = data.about;
  }

}
