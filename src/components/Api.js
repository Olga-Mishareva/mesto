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
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
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

  editUserAvatar(data) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
  }

  // ========================================================

  getUsersCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
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

  addNewCard({ elem }) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: elem.place,
        link: elem.img
      })
    })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
  }

  deleteOwnCard(cardId) {
    console.log(cardId)
    return fetch(`${this._options.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => console.log(err));
  }


}
