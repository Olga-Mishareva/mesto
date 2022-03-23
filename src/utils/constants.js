export const initialCards = [
  {
    name: 'Гора Ахун',
    link: './images/ana-kai-QXOl2IXJ_ow-unsplash.jpg',
  },
  {
    name: 'Камчатка',
    link: './images/daniil-silantev-fD7cXIFurSQ-unsplash.jpg',
  },
  {
    name: 'Конжаковский Камень',
    link: './images/daniil-silantev-hGQWGwtnbVw-unsplash.jpg',
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
    name: 'Юрюзань',
    link: './images/daniil-silantev-2avwToAG91M-unsplash.jpg',
  },
];

// export const initialCards = [
//   {
//     name: 'Гора Ахун',
//     link: goraAchun,
//   },
//   {
//     name: 'Камчатка',
//     link: kamchatka,
//   },
//   {
//     name: 'Конжаковский Камень',
//     link: kKamen,
//   },
//   {
//     name: 'Камчатка',
//     link: kam_ka,
//   },
//   {
//     name: 'Ольхон',
//     link: olchon,
//   },
//   {
//     name: 'Юрюзань',
//     link: urusan,
//   },
// ];

export const profileData = {
  nameSelector: '.profile__name',
  infoSelector: '.profile__info'
}

// ----------------------------------------------------------------

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

export const formValidators = {};

// ----------------------------------------------------------------

export const editBtn = document.querySelector('.profile__edit-button');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputInfo = document.querySelector('.popup__input_type_info');

// --------------------------------------------------------------

export const addBtn = document.querySelector('.profile__add-button');
export const inputCard = document.querySelector('.popup__input_type_place');
export const inputLink = document.querySelector('.popup__input_type_link');



