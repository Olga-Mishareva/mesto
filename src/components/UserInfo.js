export default class UserInfo {
  constructor({ data }) {
    this._userName = document.querySelector(data.nameSelector);
    this._userInfo = document.querySelector(data.infoSelector);
    this._userAvatar = document.querySelector(data.avatarSelector);
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
  setUserInfo(name, about) {
    // console.log(name, about)
    this._userName.textContent = name;
    this._userInfo.textContent = about;
  }

  setUserAvatar(link) {
    this._userAvatar.style.backgroundImage = `url(${link})`;
  }

}
