import {FormValidator, settings} from './components/FormValidator.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import { initialCards,
  profileData,
  formValidators,
  editBtn,
  inputName,
  inputInfo,
  addBtn,
  inputCard,
  inputLink
} from './utils/constants.js';


// const editBtn = document.querySelector('.profile__edit-button');
// const inputName = document.querySelector('.popup__input_type_name');
// const inputInfo = document.querySelector('.popup__input_type_info');

// // --------------------------------------------------------------

// const addBtn = document.querySelector('.profile__add-button');
// const inputCard = document.querySelector('.popup__input_type_place');
// const inputLink = document.querySelector('.popup__input_type_link');

// // ----------------------------------------------------------------

// const profileData = {
//   nameSelector: '.profile__name',
//   infoSelector: '.profile__info'
// }

// const formValidators = {};



const formList = Array.from(document.querySelectorAll('.popup__form'));
formList.forEach((formElement) => {
  const validator = new FormValidator(settings, formElement);
  const formName = formElement.getAttribute('name');
  formValidators[formName] = validator;
  validator.enableValidation();
});

// ------ popup_edit-profile -----------------------------------------------



const userData = new UserInfo({ data: profileData });

const editPopup = new PopupWithForm({

  handleSubmit: (data) => {

    console.log(data)
    userData.setUserInfo(data);
  }
}, '.popup_type_edit-profile');


// кнопка открытия ред.профиля
editBtn.addEventListener('click', function () {

  editPopup.openPopup();
  //сделать циклом по инпутам
  inputName.value = userData.getUserInfo().username;
  inputInfo.value = userData.getUserInfo().about;

  formValidators['profile-form'].hideIrrelevantErrors();
  formValidators['profile-form'].checkButtonState();
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
    console.log(data)

    const newCard = new Card(data, '#card', handleCardClick);
    const newCardElement = newCard.generateCard();
    cardsGrid.addItem(newCardElement);

  }
},'.popup_type_add-place');

cardsGrid.renderItems();


// кнопка добавить карточку
addBtn.addEventListener('click', () => {

  addPopup.openPopup();
  formValidators['add-form'].checkButtonState();
});


// показ картинки
function handleCardClick(name, link) {
  const popupWihtImage = new PopupWithImage(name, link, '.popup_type_show-image');
  popupWihtImage.openPopup();
}


// // создание новой карточки
// function getNewCard() {
//   const newCard = {
//     name: inputCard.value,
//     link: inputLink.value,
//   };
//   addCard(newCard);
// }

// // сохрание новой карточки
// function handleCardAddSubmit(evt) {
//   evt.preventDefault();
//   getNewCard();
//   addForm.reset();
// }



// // кнопка сохранения новой карточки
// addForm.addEventListener('submit', (evt) => {
//   handleCardAddSubmit(evt);
//   const popup = new Popup('.popup_type_add-place');
//   popup.closePopup();
// });

// --------------------------------------


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


// заполнение ред.профиля
// function handleOpenEditProfilePopup(popup) {
//   openPopup(popup);
//   formValidators['profile-form'].hideIrrelevantErrors();

//   inputName.value = profileName.textContent;
//   inputInfo.value = profileInfo.textContent;
// }

// заполнение ред.профиля
// function handleOpenEditProfilePopup() {
//   const popup = new Popup('.popup_type_edit-profile');
//   popup.openPopup();
//

//   inputName.value = profileName.textContent;
//   inputInfo.value = profileInfo.textContent;
// }

// сохранение ред.профиля
// function handleProfileEditSubmit(evt) {
//   evt.preventDefault();

//   profileName.textContent = inputName.value;
//   profileInfo.textContent = inputInfo.value;
// }

// кнопка сохранения профиля
// editForm.addEventListener('submit', function (evt) {
//   handleProfileEditSubmit(evt);

//   popup.closePopup();
// });


// кнопка сохранения новой карточки
// addForm.addEventListener('submit', (evt) => {
//   handleCardAddSubmit(evt);
//   closePopup(cardAddPopup);
// });



// показ попапа с каринкой
// function handleCardClick(name, link) {
//   cardImage.src = link;
//   cardImage.alt = name;
//   cardCaption.textContent = name;
//   openPopup(imagePopup);
// }




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


