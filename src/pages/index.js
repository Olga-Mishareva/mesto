import './index.css';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
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
} from '../utils/constants.js';


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

const profilePopup = new PopupWithForm({
  handleSubmit: (data) => {
    userData.setUserInfo(data);
  }
}, '.popup_type_edit-profile');

profilePopup.setEventListeners();


// кнопка открытия ред.профиля
editBtn.addEventListener('click', function () {

  inputName.value = userData.getUserInfo().username;
  inputInfo.value = userData.getUserInfo().about;

  profilePopup.openPopup();

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
const placePopup = new PopupWithForm({
  handleSubmit: (elem) => {
    const data = {};
    data.name = elem[inputCard.name];
    data.link = elem[inputLink.name];

    const newCard = new Card(data, '#card', handleCardClick);
    const newCardElement = newCard.generateCard();
    cardsGrid.addItem(newCardElement);
  }
},'.popup_type_add-place');

placePopup.setEventListeners();

cardsGrid.renderItems();


// кнопка добавить карточку
addBtn.addEventListener('click', () => {
  placePopup.openPopup();
  formValidators['add-form'].resetValidation();
});

// ------ popup_show-image -----------------------------------------------

const popupWihtImage = new PopupWithImage('.popup_type_show-image');


// показ картинки
function handleCardClick(name, link) {
  popupWihtImage.openPopup(name, link);
  popupWihtImage.setEventListeners();
}









