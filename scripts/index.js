const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');
const editBtn = document.querySelector('.profile__edit-button');
// console.log(editBtn);

const popupTemplate = document.querySelector('#page-popup').content;
const editProfilePopup = document.querySelector('.popup_edit-profile');
// console.log(editProfilePopup);

const profilePopup = popupTemplate.querySelector('.popup__container').cloneNode(true);
profilePopup.querySelector('.popup__title').textContent = 'Редактировать профиль';
profilePopup.querySelector('.popup__submit-button').textContent = 'Сохранить';
// console.log(profilePopup.querySelector('.popup__submit-button').textContent);


//console.log(popup);
const inputName = profilePopup.querySelector('.popup__input_type_name');
const inputInfo = profilePopup.querySelector('.popup__input_type_info');
const closeBtn = profilePopup.querySelector('.popup__close-button');
const saveFormBnt = profilePopup.querySelector('.popup__form');

editProfilePopup.append(profilePopup);

function openPopup() {
  editProfilePopup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

function closePopup() {
  editProfilePopup.classList.remove('popup_opened');
}

function formSubmitHandler(e) {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;

  closePopup();
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

saveFormBnt.addEventListener('submit', formSubmitHandler);
// xxx.addEventListener('keyup', evt => {
//   if(evt.code === 'Enter') closePopup();
// });

const initialCards = [
  {
    name: 'Гора Ахун',
    link: './images/ana-kai-QXOl2IXJ_ow-unsplash.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/daniil-silantev-fD7cXIFurSQ-unsplash.jpg'
  },
  {
    name: 'Рыбачий полуостров',
    link: './images/radik-sitdikov-48MxMepMwqc-unsplash.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/daniil-silantev-h-M3O25tyvI-unsplash.jpg'
  },
  {
    name: 'Ольхон',
    link: './images/kir-simakov-OGc_X8PeikQ-unsplash.jpg'
  },
  {
    name: 'Крым',
    link: './images/nikolay-vorobyev-o7jIzNWvCRo-unsplash.jpg'
  }
]

const cardTemplate = document.querySelector('#card').content;
const cardsBox = document.querySelector('.place-grid__places');

initialCards.forEach(item => {
  const initialCard = cardTemplate.querySelector('.place').cloneNode(true);
    initialCard.querySelector('.place__title').textContent = item.name;
    initialCard.querySelector('.place__image').src = item.link;
    initialCard.querySelector('.place__image').alt = item.name;
    cardsBox.append(initialCard);
    // console.log(initialCard);
});












