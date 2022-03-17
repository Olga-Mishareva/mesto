import {Card, initialCards} from './Card.js';
import {FormValidator, settings} from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';


const editForm = document.querySelector('#save');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const editBtn = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const inputName = profileEditPopup.querySelector('.popup__input_type_name');
const inputInfo = profileEditPopup.querySelector('.popup__input_type_info');

// --------------------------------------------------------------

const addForm = document.querySelector('#add');
const addBtn = document.querySelector('.profile__add-button');
const cardAddPopup = document.querySelector('.popup_type_add-place');
const inputCard = cardAddPopup.querySelector('.popup__input_type_place');
const inputLink = cardAddPopup.querySelector('.popup__input_type_link');

// ----------------------------------------------------------------

const imagePopup = document.querySelector('.popup_type_show-image');
const cardImage = imagePopup.querySelector('.popup__image');
const cardCaption = imagePopup.querySelector('.popup__caption');

const popupList = Array.from(document.querySelectorAll('.popup'));

// const cardsBox = document.querySelector('.place-grid__places');
const cardsBox = '.place-grid__places';
// ----------------------------------------------


const formValidators = {};

const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElement) => {
  const validator = new FormValidator(settings, formElement);
  const formName = formElement.getAttribute('name');
  formValidators[formName] = validator;
  validator.enableValidation();
});


// ------- HANDLE POPUP -------

// const popup = new Popup(popupSelector);

// открытие попапа
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   document.addEventListener('keydown', closeWithEsc);
// }

// закрытие попапа
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeWithEsc);
// }

// заткрытие попапа кнопкой Esc
// function closeWithEsc(evt) {
//   if(evt.key === 'Escape') {
//     const popupOpened = document.querySelector('.popup_opened');
//     closePopup(popupOpened);
//   }
// }

// ------ popup_edit-profile -----------------------------------------------


// заполнение ред.профиля
// function handleOpenEditProfilePopup(popup) {
//   openPopup(popup);
//   formValidators['profile-form'].hideIrrelevantErrors();

//   inputName.value = profileName.textContent;
//   inputInfo.value = profileInfo.textContent;
// }

function handleOpenEditProfilePopup() {
  const popup = new Popup('.popup_type_edit-profile');
  popup.openPopup();
  formValidators['profile-form'].hideIrrelevantErrors();

  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

// сохранение ред.профиля
function handleProfileEditSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
}

// ------ popup_add-place -----------------------------------------------

// NEW !!!
const cardsGrid = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card', handleCardClick);
    const cardElement = card.generateCard();
    cardsGrid.addItem(cardElement);
  }
}, cardsBox);

// создание новой карточки
function getNewCard() {
  const newCard = {
    name: inputCard.value,
    link: inputLink.value,
  };
  addCard(newCard);
}

// сохрание новой карточки
function handleCardAddSubmit(evt) {
  evt.preventDefault();
  getNewCard();
  addForm.reset();
}

// показ попапа с каринкой
// function handleCardClick(name, link) {
//   cardImage.src = link;
//   cardImage.alt = name;
//   cardCaption.textContent = name;
//   openPopup(imagePopup);
// }

function handleCardClick(name, link) {
  const popupWihtImage = new PopupWithImage(name, link, '.popup_type_show-image');
  popupWihtImage.openPopup();
}

cardsGrid.renderItems();


// отрисовка массива карточек
// function renderInitialCards() {
//   initialCards.forEach((item) => addCard(item));
// }



// function createCard(item) {
//   const card = new Card(item, '#card', showImage);
//   const cardElement = card.generateCard();
//   return cardElement;
// }

// добавление карточки в DOM
// function addCard(item) {
//   const cardElement = createCard(item);
//   cardsBox.prepend(cardElement);
// }



// renderInitialCards();



// ---- POPUP LISTENER ----


// кнопка открытия ред.профиля
editBtn.addEventListener('click', function () {
  handleOpenEditProfilePopup(profileEditPopup);
  formValidators['profile-form'].checkButtonState();
});

// кнопка сохранения профиля
editForm.addEventListener('submit', function (evt) {
  handleProfileEditSubmit(evt);
  const popup = new Popup('.popup_type_edit-profile');
  popup.closePopup();
});

// ----------------------------------------------------

// кнопка добавить карточку
addBtn.addEventListener('click', () => {
  const popup = new Popup('.popup_type_add-place');
  popup.openPopup();
  formValidators['add-form'].checkButtonState();
});

// кнопка сохранения новой карточки
// addForm.addEventListener('submit', (evt) => {
//   handleCardAddSubmit(evt);
//   closePopup(cardAddPopup);
// });

addForm.addEventListener('submit', (evt) => {
  handleCardAddSubmit(evt);
  const popup = new Popup('.popup_type_add-place');
  popup.closePopup();
});

// ----------------------------------------------------

// обр. закрытия по Overlay и по крестику
// popupList.forEach((popup) => {
//   popup.addEventListener('mousedown', (evt) => {
//     if(evt.target.classList.contains('popup_opened')) {
//       closePopup(popup);
//     }
//     if(evt.target.classList.contains('popup__close-button')) {
//       closePopup(popup);
//     }
//   });
// });


