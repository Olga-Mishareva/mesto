const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const editBtn = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit-profile');
const inputName = profileEditPopup.querySelector('.popup__input_type_name');
const inputInfo = profileEditPopup.querySelector('.popup__input_type_info');
const profileEditCloseBtn = profileEditPopup.querySelector('.popup__close-button_type_edit');
const profileEditSaveBnt = profileEditPopup.querySelector('.popup__form_type_edit');

// --------------------------------------------------------------

const addBtn = document.querySelector('.profile__add-button');
const cardAddPopup = document.querySelector('.popup_type_add-place');
const inputCard = cardAddPopup.querySelector('.popup__input_type_place');
const inputLink = cardAddPopup.querySelector('.popup__input_type_link');
const cardAddCloseBtn = cardAddPopup.querySelector('.popup__close-button_type_add');
const cardAddSaveBtn = cardAddPopup.querySelector('.popup__form_type_add');

// ----------------------------------------------------------------

const imagePopup = document.querySelector('.popup_type_show-image');
const cardImage = imagePopup.querySelector('.popup__image');                             //
const cardCaption = imagePopup.querySelector('.popup__caption');                         //
const imageCloseBtn = imagePopup.querySelector('.popup__close-button_type_show');


// ------- HANDLE POPUP -------


// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

const cardTemplate = document.querySelector('#card').content;
const cardsBox = document.querySelector('.place-grid__places');

// отрисовка массива карточек
function renderInitialCards() {
  initialCards.forEach(addCard);
}

// добавление карточки
function addCard(card) {
  // console.log(card);
  cardsBox.prepend(createCard(card));
}

// создание карточек в DOM, слушатели лайка, удаления и показа картинки
function createCard(item) {
  console.log(item)
  const initialCard = cardTemplate.querySelector('.place').cloneNode(true);

  initialCard.querySelector('.place__title').textContent = item.name;
  initialCard.querySelector('.place__image').src = item.link;
  initialCard.querySelector('.place__image').alt = item.name;

  // console.log(item.name)
  // console.log(item.link)

  initialCard.querySelector('.place__stroke').addEventListener('click', likeCard);
  initialCard.querySelector('.place__trash').addEventListener('click', removeCard);
  initialCard.querySelector('.place__image').addEventListener('click', showImage);

  return initialCard;
}

// const newCard = {
//   name: '',
//   link: ''
// };

// добавление новой карточки
function createNewCard() {

  // newCard.name = inputCard.value;
  // newCard.link =inputLink.value;

  const newCard = {
    name: inputCard.value,
    link: inputLink.value
  };

  // console.log(newCard)
  // console.log(newCard.link)
  addCard(newCard);

  // createCard(newCard);
  // addCard(card);

  // initialCards.unshift(newCard);
}

// сохрание новой карточки
function handleCardAddSubmit(evt) {
  evt.preventDefault();

  createNewCard()


  // removeAllCards();
  // addNewCard();
  // renderInitialCards();
}

// кнопка сохранения новой карточки
cardAddSaveBtn.addEventListener('submit', function(evt) {
  handleCardAddSubmit(evt);
  inputCard.value = '';
  inputLink.value= '';
  closePopup(cardAddPopup);
});




// удаление карточки из массива и из DOM
function removeCard(evt) {
  // initialCards = initialCards.filter(function (elem, i) {
  //   if(index !== i) {
  //     return elem;
  //   }
  console.log(evt.target)
    evt.target.closest('.place').remove();
  // });
}

// // очитка DOM от всех карточек
// function removeAllCards() {
//   const cards = document.querySelectorAll('.place');
//   cards.forEach(elem => {
//     elem.remove();
//   });
// }

// лайк карточки
function likeCard (evt) {
  evt.target.classList.toggle('place__stroke_liked');
}

// показ картинки
function showImage(evt) {
  openPopup(imagePopup);
  cardImage.src = evt.target.src;
  cardCaption.textContent = evt.target.alt;
}

renderInitialCards();


// ---- POPUP LISTENER ----


// кнопка открытия ред.профиля
editBtn.addEventListener('click', function() {
  handleOpenEditProfilePopup(profileEditPopup);
});

// кнопка закрытия ред.профиля
profileEditCloseBtn.addEventListener('click', function() {
  closePopup(profileEditPopup);
});

// кнопка сохранения профиля
profileEditSaveBnt.addEventListener('submit', function(evt) {
  handleProfileEditSubmit(evt);
  closePopup(profileEditPopup);
});

// сохранение профиля с Enter
profileEditPopup.addEventListener('keyup', (evt) => {
  if (evt.code === 'Enter') {
    handleProfileEditSubmit(evt);
    closePopup(profileEditPopup);
  }
});

// ----------------------------------------------------

// кнопка добавления карточки
addBtn.addEventListener('click', function() {
  openPopup(cardAddPopup);
});

// кнопка закрытия добавления карточки
cardAddCloseBtn.addEventListener('click', function() {
  inputCard.value = '';
  inputLink.value= '';
  closePopup(cardAddPopup);
})

// кнопка сохранения новой карточки
//

// ----------------------------------------------------

// кнопка закрытия показа картинки
imageCloseBtn.addEventListener('click', function() {
  closePopup(imagePopup);
});
