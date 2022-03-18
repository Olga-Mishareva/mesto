export default class UserInfo {
  constructor({ data }) {
    this._nameSelector = data.nameSelector;
    this._infoSelector = data.infoSelector;
  }

  // возвращает объект с данными пользователя, подставляются в форму при открытии
  getUserInfo() {
    this._userName = document.querySelector(this._nameSelector);
    this._userInfo = document.querySelector(this._infoSelector);

    // console.log(this._userName.textContent)

    this._userData = {
      username: this._userName.textContent,
      about: this._userInfo.textContent
    }

    return this._userData;
  }

  // принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(data) {
    // console.log(data)
    this._userName.textContent = data.username;
    this._userInfo.textContent = data.about;
  }

}
