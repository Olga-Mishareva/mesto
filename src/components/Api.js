export default class Api {
  constructor(options) {
    this._options = options;

  }

  getUserData() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    // .then(data => {
    //   console.log(data);
    // })
    .catch(err => {
      console.log(err);
    })
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-39/cards', {
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    // .then(cards => {
    //   console.log(cards);
    // })
    .catch(err => {
      console.log(err);
    })
  }






  getLog() {
    console.log(this._options.headers)
  }
}
