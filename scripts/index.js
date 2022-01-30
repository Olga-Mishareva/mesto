// ---- объявление переменных для попапов ----

const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const editBtn = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const inputName = profileEditPopup.querySelector('.popup__input_type_name');
const inputInfo = profileEditPopup.querySelector('.popup__input_type_info');
const profileEditCloseBtn = profileEditPopup.querySelector('.popup__close-button');
const profileEditSaveBnt = profileEditPopup.querySelector('.popup__form');


const addBtn = document.querySelector('.profile__add-button');
const cardAddPopup = document.querySelector('.popup_type_add-place');
const inputCard = cardAddPopup.querySelector('.popup__input_type_place');
const inputLink = cardAddPopup.querySelector('.popup__input_type_link');
const cardAddCloseBtn = cardAddPopup.querySelector('.popup__close-button');
const cardAddSaveBtn = cardAddPopup.querySelector('.popup__form');



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

const initialCards = [
  {
    name: 'Гора Ахун',
    link: './images/ana-kai-QXOl2IXJ_ow-unsplash.jpg',
  },
  {
    name: 'Камчатка',
    link: './images/daniil-silantev-fD7cXIFurSQ-unsplash.jpg',
  },
  {
    name: 'Рыбачий полуостров',
    link: './images/radik-sitdikov-48MxMepMwqc-unsplash.jpg',
  },
  {
    name: 'Камчатка',
    link: './images/daniil-silantev-h-M3O25tyvI-unsplash.jpg',
  },
  {
    name: 'Ольхон',
    link: './images/kir-simakov-OGc_X8PeikQ-unsplash.jpg',
  },
  {
    name: 'Крым',
    link: './images/nikolay-vorobyev-o7jIzNWvCRo-unsplash.jpg',
  },
];
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
  initialCard.querySelector('.place__stroke').addEventListener('click', function(evt) {
    evt.target.classList.toggle('place__stroke_liked');
  });
  cardsBox.append(initialCard);
}

function removeAllCards() {
  const cards = document.querySelectorAll('.place');
  cards.forEach(elem => {
    elem.remove();
  });
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

// function likeCard (evt) {

// }
