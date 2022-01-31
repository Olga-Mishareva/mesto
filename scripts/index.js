// ---- объявление переменных для попапов ----

const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const editBtn = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const inputName = profileEditPopup.querySelector('.popup__input_type_name');
const inputInfo = profileEditPopup.querySelector('.popup__input_type_info');
const profileEditCloseBtn = profileEditPopup.querySelector('.popup__close-button_type_edit');
const profileEditSaveBnt = profileEditPopup.querySelector('.popup__form_type_edit');


const addBtn = document.querySelector('.profile__add-button');
const cardAddPopup = document.querySelector('.popup_type_add-place');
const inputCard = cardAddPopup.querySelector('.popup__input_type_place');
const inputLink = cardAddPopup.querySelector('.popup__input_type_link');
const cardAddCloseBtn = cardAddPopup.querySelector('.popup__close-button_type_add');
const cardAddSaveBtn = cardAddPopup.querySelector('.popup__form_type_add');

const imagePopup = document.querySelector('.popup_type_show-image');
const cardImage = imagePopup.querySelector('.popup__image');
const cardCaption = imagePopup.querySelector('.popup__caption');
const imageCloseBtn = imagePopup.querySelector('.popup__close-button_type_show');



// ---- POPUP FUNCTION ----

function openPopup(popup) {               // открытие попапа
  popup.classList.add('popup_opened');
}

function handleOpenEditProfilePopup(popup) {    // заполнение ред.профиля
  openPopup(popup);
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

function closePopup(popup) {                // закрытие попапа
  popup.classList.remove('popup_opened');
}

function handleProfileEditSubmit(evt) {            // сохранение ред.профиля
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
}

// ---- POPUP LISTENER ----

// ---- open ----

editBtn.addEventListener('click', function() {
  handleOpenEditProfilePopup(profileEditPopup);
});

addBtn.addEventListener('click', function() {
  openPopup(cardAddPopup);
});

// ---- close ----

profileEditCloseBtn.addEventListener('click', function() {
  closePopup(profileEditPopup);
});

cardAddCloseBtn.addEventListener('click', function() {
  inputCard.value = '';
  inputLink.value= '';
  closePopup(cardAddPopup);
})

// ---- save ----

profileEditSaveBnt.addEventListener('submit', handleProfileEditSubmit);

profileEditSaveBnt.addEventListener('submit', function() {
  closePopup(profileEditPopup);
});

profileEditPopup.addEventListener('keyup', (evt) => {
  if (evt.code === 'Enter') {
    handleProfileEditSubmit(evt);
    closePopup(profileEditPopup);
  }
});


// ---- данные карточек ----


const cardTemplate = document.querySelector('#card').content;
const cardsBox = document.querySelector('.place-grid__places');


// ---- функуции обработки карточек ----

function renderInitialCards() {
  initialCards.forEach(createCard);
}

function createCard(item) {
  const initialCard = cardTemplate.querySelector('.place').cloneNode(true);
  initialCard.querySelector('.place__title').textContent = item.name;
  initialCard.querySelector('.place__image').src = item.link;
  initialCard.querySelector('.place__image').alt = item.name;
  initialCard.querySelector('.place__stroke').addEventListener('click', likeCard);
  initialCard.querySelector('.place__trash').addEventListener('click', removeCard);
  initialCard.querySelector('.place__image').addEventListener('click', showImage);
  cardsBox.append(initialCard);
}

function showImage(evt) {
  openPopup(imagePopup);
  imagePopup.querySelector('.popup__image').src = evt.target.src;
  imagePopup.querySelector('.popup__caption').textContent = evt.target.alt;
}

imageCloseBtn.addEventListener('click', function() {
  closePopup(imagePopup);
});

function removeAllCards() {
  const cards = document.querySelectorAll('.place');
  cards.forEach(elem => {
    elem.remove();
  });
}

function removeCard(evt) {
  evt.target.closest('.place').remove();
}

function addNewCard() {
  const newCard = {
    name: inputCard.value,
    link: inputLink.value
  };

  initialCards.unshift(newCard);
  removeAllCards();
  renderInitialCards();
}


function handleCardAddSubmit(evt) {
  evt.preventDefault();
  addNewCard();
}

cardAddSaveBtn.addEventListener('submit', handleCardAddSubmit);

cardAddSaveBtn.addEventListener('submit', function() {
  inputCard.value = '';
  inputLink.value= '';
  closePopup(cardAddPopup);
});

renderInitialCards();

// ---- лайки карточек ----

function likeCard (evt) {
  evt.target.classList.toggle('place__stroke_liked');
}
