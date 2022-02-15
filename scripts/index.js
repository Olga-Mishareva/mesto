const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const editBtn = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const inputName = profileEditPopup.querySelector('.popup__input_type_name');
const inputInfo = profileEditPopup.querySelector('.popup__input_type_info');
const profileEditCloseBtn = profileEditPopup.querySelector('.popup__close-button');
const profileEditSave = profileEditPopup.querySelector('#save');
const profileSubmitBtn = profileEditSave.querySelector('.popup__submit-button');

// --------------------------------------------------------------

const addBtn = document.querySelector('.profile__add-button');
const cardAddPopup = document.querySelector('.popup_type_add-place');
const inputCard = cardAddPopup.querySelector('.popup__input_type_place');
const inputLink = cardAddPopup.querySelector('.popup__input_type_link');
const cardAddCloseBtn = cardAddPopup.querySelector('.popup__close-button');
const cardAddSave = cardAddPopup.querySelector('#add');
const cardAddSubmitBtn = cardAddPopup.querySelector('.popup__submit-button');

// ----------------------------------------------------------------

const imagePopup = document.querySelector('.popup_type_show-image');
const cardImage = imagePopup.querySelector('.popup__image');
const cardCaption = imagePopup.querySelector('.popup__caption');
const imageCloseBtn = imagePopup.querySelector('.popup__close-button_type_show');

// ----------------------------------------------------------------

const cardTemplate = document.querySelector('#card').content;
const cardsBox = document.querySelector('.place-grid__places');


// ------- HANDLE POPUP -------

// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');

  hideIrrelevantErrors(popup);

  document.addEventListener('keydown', closeWithEsc);
  document.addEventListener('mousedown', closeWithOverlay);
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closeWithEsc);
  document.removeEventListener('mousedown', closeWithOverlay);
}

// заткрытие попапа кнопкой Esc
function closeWithEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  const formElement = popupOpened.querySelector('.popup__form');
  console.log(formElement)
  if(evt.key === 'Escape') {
    formElement.reset();
    closePopup(popupOpened);
  }
}

// заткрытие попапа кликом на Overlay
function closeWithOverlay(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  const formElement = popupOpened.querySelector('.popup__form');
  console.log(formElement)
  if(evt.target === popupOpened) {
    formElement.reset();
    closePopup(popupOpened);
  }
}

// скрывает старые сообщения об ошибках при новом открытии попапа
function hideIrrelevantErrors(popup) {
  const inputList = Array.from(popup.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    hideErrors(settings, inputElement);
  })
}

// ------ popup_edit-profile -----------------------------------------------

// заполнение ред.профиля
function handleOpenEditProfilePopup(popup) {
  openPopup(popup);

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
  initialCards.forEach(addCard);
}

// создание карточек, навешивает слушатели лайка, удаления и показа картинки
function createCard(item) {
  const initialCard = cardTemplate.querySelector('.place').cloneNode(true);
  initialCard.querySelector('.place__title').textContent = item.name;
  initialCard.querySelector('.place__image').src = item.link;
  initialCard.querySelector('.place__image').alt = item.name;

  addListeners(initialCard);
  return initialCard;
}

// добавление карточки в DOM
function addCard(card) {
  cardsBox.prepend(createCard(card));
}

// добавление слушателей на карточку
function addListeners(elem) {
  elem.querySelector('.place__stroke').addEventListener('click', likeCard);
  elem.querySelector('.place__trash').addEventListener('click', removeCard);
  elem.querySelector('.place__image').addEventListener('click', showImage);
}

// создание новой карточки
function createNewCard() {
  const newCard = {
    name: inputCard.value,
    link: inputLink.value,
  };
  addCard(newCard);
}

// сохрание новой карточки
function handleCardAddSubmit(evt) {
  evt.preventDefault();
  createNewCard();
  cardAddSave.reset();
}

// удаление карточки из DOM
function removeCard(evt) {
  evt.target.closest('.place').remove();
}

// лайк карточки
function likeCard(evt) {
  evt.target.classList.toggle('place__stroke_liked');
}

// показ картинки
function showImage(evt) {
  openPopup(imagePopup);
  cardImage.src = evt.target.src;
  cardImage.alt = evt.target.alt;
  cardCaption.textContent = evt.target.alt;
}


renderInitialCards();


// ---- POPUP LISTENER ----

// кнопка открытия ред.профиля
editBtn.addEventListener('click', function () {
  handleOpenEditProfilePopup(profileEditPopup);
  switchSubmitBtnState(settings, profileSubmitBtn, profileEditSave);
});

// кнопка закрытия ред.профиля
profileEditCloseBtn.addEventListener('click', () => closePopup(profileEditPopup));

// кнопка сохранения профиля
profileEditSave.addEventListener('submit', function (evt) {
  handleProfileEditSubmit(evt);
  closePopup(profileEditPopup);
});

// ----------------------------------------------------

// кнопка добавить карточку
addBtn.addEventListener('click', () => {
  openPopup(cardAddPopup);
  switchSubmitBtnState(settings, cardAddSubmitBtn, cardAddSave);
});

// кнопка закрытия попапа добавления карточки
cardAddCloseBtn.addEventListener('click', function () {
  cardAddSave.reset();
  closePopup(cardAddPopup);
});

// кнопка сохранения новой карточки
cardAddSave.addEventListener('submit', (evt) => {
  handleCardAddSubmit(evt);
  closePopup(cardAddPopup);
});

// ----------------------------------------------------

// кнопка закрытия показа картинки
imageCloseBtn.addEventListener('click', () => closePopup(imagePopup));




