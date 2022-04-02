export default class Api {
  constructor(options) {
    this._options = options;

  }

  getUserData() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
  }

  editUserData({ data }) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.username,
        about: data.about
      })
    })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
  }




  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-39/cards', {
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err))
  }






  getLog() {
    console.log(this._options.headers)
  }
}
