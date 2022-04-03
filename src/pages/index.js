import "./index.css";

import Api from '../components/Api.js';
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  // initialCards,
  profileData,
  settings,
  formValidators,
  profileBtn,
  inputName,
  inputInfo,
  placeBtn,
  inputCard,
  inputLink,
} from "../utils/constants.js";

// --------------------------------------------------------------------------


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    autorization: 'a10d74b1-4032-4ec5-9837-4b98c81dc7b9',
    'Content-Type': 'application/json'
  }
});

// --------------------------------------------------------------------------

// создает объект класса валидации для всех форм
const formList = Array.from(document.querySelectorAll(".popup__form"));
formList.forEach((formElement) => {
  const validator = new FormValidator(settings, formElement);
  const formName = formElement.getAttribute("name");
  formValidators[formName] = validator;
  validator.enableValidation();
});


// ------ popup_edit-profile -----------------------------------------------

// создает класс вставки в DOM
const userData = new UserInfo({ data: profileData });

// подставляет данные с сервера при перезагрузке страницы
api.getUserData()
.then(res => {
  // console.log(res)
  userData.setUserInfo(res.name, res.about)
})

// создание попапа редактирования профиля, передает функцию сабмита
const profilePopup = new PopupWithForm(
  {
    handleSubmit: (data) => {
      profilePopup.renderLoading(true)
      api.editUserData({ data })
      .then(res => {
        userData.setUserInfo(res.name, res.about);
      })
      .finally(() => profilePopup.renderLoading(false));
    },
  },
  ".popup_type_edit-profile"
);

profilePopup.setEventListeners();

// кнопка открытия ред.профиля
profileBtn.addEventListener("click", function () {
  const userIntel = userData.getUserInfo();
  inputName.value = userIntel.username;
  inputInfo.value = userIntel.about;

  profilePopup.openPopup();
  formValidators["profile-form"].resetValidation();
});

// ------ popup_add-place -----------------------------------------------


// создание класса для отрисовки катрочек и добавления в DOM
const cardsGrid = new Section(
  {
    renderer: (item) => {
      cardsGrid.addItem(createCard(item));
    },
  },
  ".place-grid__places"
);

// создание катрочки
function createCard(item) {
  const card = new Card(item, "#card", handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

// отрисовка массива рандомных 30 карточек
api.getUsersCards()
.then(cards => {
  const usersCards = [];
  cards.forEach(elem => {
    const card = {};
    card.name = elem.name;
    card.link = elem.link;
    usersCards.push(card);
  });

  cardsGrid.renderItems(usersCards);
});


// сохранеие и вставка новой карточки
const placePopup = new PopupWithForm(
  {
    handleSubmit: (elem) => {
      placePopup.renderLoading(true)
      api.addNewCard({ elem })
      .then(res => {
        const cardData = {};
        cardData.name = res.name;
        cardData.link = res.link;

        cardsGrid.addItem(createCard(cardData));
      })
      .finally(() => placePopup.renderLoading(false));
    },
  },
  ".popup_type_add-place"
);

placePopup.setEventListeners();

// кнопка добавить карточку
placeBtn.addEventListener("click", () => {
  placePopup.openPopup();
  formValidators["add-form"].resetValidation();
});

// ------ popup_show-image -----------------------------------------------

const popupWihtImage = new PopupWithImage(".popup_type_show-image");
popupWihtImage.setEventListeners();

// показ картинки
function handleCardClick(name, link) {
  popupWihtImage.openPopup(name, link);
}

// --------------------------------------------------------------------------







