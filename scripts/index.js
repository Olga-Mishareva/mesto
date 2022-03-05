import {Card, initialCards} from './Card.js';
import {FormValidator, settings} from './FormValidator.js';


const editForm = document.querySelector('#save');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const editBtn = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const inputName = profileEditPopup.querySelector('.popup__input_type_name');
const inputInfo = profileEditPopup.querySelector('.popup__input_type_info');
const profileEditSave = profileEditPopup.querySelector('#save');
const profileSubmitBtn = profileEditSave.querySelector('.popup__submit-button');

// --------------------------------------------------------------

const addForm = document.querySelector('#add');
const addBtn = document.querySelector('.profile__add-button');
const cardAddPopup = document.querySelector('.popup_type_add-place');
const inputCard = cardAddPopup.querySelector('.popup__input_type_place');
const inputLink = cardAddPopup.querySelector('.popup__input_type_link');
const cardAddSave = cardAddPopup.querySelector('#add');
const cardAddSubmitBtn = cardAddPopup.querySelector('.popup__submit-button');

// ----------------------------------------------------------------

const imagePopup = document.querySelector('.popup_type_show-image');
const cardImage = imagePopup.querySelector('.popup__image');
const cardCaption = imagePopup.querySelector('.popup__caption');

const popupList = Array.from(document.querySelectorAll('.popup'));

const cardsBox = document.querySelector('.place-grid__places');

// ----------------------------------------------

const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addForm);


// ------- HANDLE POPUP -------

// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeWithEsc);
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeWithEsc);
}

// заткрытие попапа кнопкой Esc
function closeWithEsc(evt) {
  if(evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// ------ popup_edit-profile -----------------------------------------------


// заполнение ред.профиля
function handleOpenEditProfilePopup(popup) {
  openPopup(popup);
  editFormValidator.hideIrrelevantErrors(editForm);
  //hideIrrelevantErrors(popup);

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


// отрисовка массива карточек
function renderInitialCards() {
  initialCards.forEach((item) => addCard(item));
}

// создание новой карточки
function getNewCard() {
  const newCard = {
    name: inputCard.value,
    link: inputLink.value,
  };
  addCard(newCard);
}

// добавление карточки в DOM
function addCard(item) {
  const card = new Card(item, '#card');
  const cardElement = card.createCard();
  cardsBox.prepend(cardElement);
  addListener(cardElement);
}

// сохрание новой карточки
function handleCardAddSubmit(evt) {
  evt.preventDefault();
  getNewCard();
  cardAddSave.reset();
}

// показ картинки
function showImage(evt) {
  openPopup(imagePopup);
  cardImage.src = evt.target.src;
  cardImage.alt = evt.target.alt;
  cardCaption.textContent = evt.target.alt;
}

renderInitialCards();

editFormValidator.enableValidation(settings, editForm);
addFormValidator.enableValidation(settings, addForm);


// ---- POPUP LISTENER ----

// добавление показа картинки при клике на карточку
function addListener(elem) {
  elem.querySelector('.place__image').addEventListener('click', showImage);
}

// кнопка открытия ред.профиля
editBtn.addEventListener('click', function () {
  handleOpenEditProfilePopup(profileEditPopup);
  editFormValidator.disableButton(editForm);
});

// кнопка сохранения профиля
profileEditSave.addEventListener('submit', function (evt) {
  handleProfileEditSubmit(evt);
  closePopup(profileEditPopup);
});

// ----------------------------------------------------

// кнопка добавить карточку
addBtn.addEventListener('click', () => {
  openPopup(cardAddPopup);
  addFormValidator.disableButton(addForm);
});

// кнопка сохранения новой карточки
cardAddSave.addEventListener('submit', (evt) => {
  handleCardAddSubmit(evt);
  closePopup(cardAddPopup);
});

// ----------------------------------------------------

// обр. закрытия по Overlay и по крестику
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if(evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});


