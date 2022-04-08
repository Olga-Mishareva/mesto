export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    });
  }

  editUserData({ data }) {
    return fetch(`${this._baseUrl}/users/me`, {
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
      return this._getResponseData(res);
    });
  }

  editUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
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
      return this._getResponseData(res);
    });
  }

  // ========================================================

  getUsersCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    });
  }

  addNewCard({ elem }) {
    return fetch(`${this._baseUrl}/cards`, {
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
      return this._getResponseData(res);
    });
  }

  deleteUserCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    });
  }

  likeUsersCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    });
  }

  dislikeUsersCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9'
      }
    })
    .then(res => {
      return this._getResponseData(res);
    });
  }
}
