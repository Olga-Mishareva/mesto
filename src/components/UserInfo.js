export default class UserInfo {
  constructor({ data }) {
    this._userName = document.querySelector(data.nameSelector);
    this._userInfo = document.querySelector(data.infoSelector);
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
