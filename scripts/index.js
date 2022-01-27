const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const inputName = popup.querySelector('.popup__input_type_name');
const inputInfo = popup.querySelector('.popup__input_type_info');
const closeBtn = popup.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');

const saveFormBnt = popup.querySelector('.popup__container');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
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
    console.log(initialCard);
});



// function createInitialCards(elem) {

//   elem.forEach(card => {
//     const initialCard = cardTemplate.querySelector('.place').cloneNode(true);
//     initialCard.querySelector('.place__title').textContent = card.name;
//     initialCard.querySelector('.place__image').src = card.link;
//     cardsBox.append(initialCard);
//   });
// }

// createInitialCards(initialCards);


