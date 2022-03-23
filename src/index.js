import './pages/index.css';

// const goraAchun = new URL('./images/ana-kai-QXOl2IXJ_ow-unsplash.jpg', import.meta.url);
// const kamchatka = new URL('./images/daniil-silantev-fD7cXIFurSQ-unsplash.jpg', import.meta.url);
// const kKamen = new URL('./images/daniil-silantev-hGQWGwtnbVw-unsplash.jpg', import.meta.url);
// const kam_ka = new URL('./images/daniil-silantev-h-M3O25tyvI-unsplash.jpg', import.meta.url);
// const olchon = new URL('./images/kir-simakov-OGc_X8PeikQ-unsplash.jpg', import.meta.url);
// const urusan = new URL('./images/daniil-silantev-2avwToAG91M-unsplash.jpg', import.meta.url);


import FormValidator from './components/FormValidator.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import { initialCards,
  profileData,
  settings,
  formValidators,
  editBtn,
  inputName,
  inputInfo,
  addBtn,
  inputCard,
  inputLink
} from './utils/constants.js';

import './pages/index.css';

// --------------------------------------------------------------------------

const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElement) => {
  const validator = new FormValidator(settings, formElement);
  const formName = formElement.getAttribute('name');
  formValidators[formName] = validator;
  validator.enableValidation();
});


// ------ popup_edit-profile -----------------------------------------------

// создает класс вставки в DOM
const userData = new UserInfo({ data: profileData });

const editPopup = new PopupWithForm({
  handleSubmit: (data) => {
    userData.setUserInfo(data);
  }
}, '.popup_type_edit-profile');

editPopup.setEventListeners();


// кнопка открытия ред.профиля
editBtn.addEventListener('click', function () {
  editPopup.openPopup();

  inputName.value = userData.getUserInfo().username;
  inputInfo.value = userData.getUserInfo().about;

  formValidators['profile-form'].resetValidation();
});


// ------ popup_add-place -----------------------------------------------


// отрисовка начального массива карточек
const cardsGrid = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card', handleCardClick);
    const cardElement = card.generateCard();
    cardsGrid.addItem(cardElement);
  }
}, '.place-grid__places');

// создание новой карточки
const addPopup = new PopupWithForm({
  handleSubmit: (elem) => {
    const data = {};
    data.name = elem[inputCard.name];
    data.link = elem[inputLink.name];

    const newCard = new Card(data, '#card', handleCardClick);
    const newCardElement = newCard.generateCard();
    cardsGrid.addItem(newCardElement);
  }
},'.popup_type_add-place');

addPopup.setEventListeners();

cardsGrid.renderItems();


// кнопка добавить карточку
addBtn.addEventListener('click', () => {
  addPopup.openPopup();
  formValidators['add-form'].resetValidation();
});

// ------ popup_show-image -----------------------------------------------

// показ картинки
function handleCardClick(name, link) {
  const popupWihtImage = new PopupWithImage(name, link, '.popup_type_show-image');
  popupWihtImage.openPopup();
  popupWihtImage.setEventListeners();
}









