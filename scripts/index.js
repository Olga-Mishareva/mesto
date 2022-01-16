const editBtn = document.querySelector('.profile__edit-button');

const popup = document.querySelector('.popup');
const inputName = popup.querySelector('.popup__input_type_name');
const inputInfo = popup.querySelector('.popup__input_type_info');
const closeBtn = popup.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__info');

const saveFormBnt = popup.querySelector('.popup__container');


editBtn.addEventListener('click', function() {
  popup.classList.add('popup_opened');
})

function closePopup() {
  popup.classList.remove('popup_opened');
}

closeBtn.addEventListener('click', closePopup);

function formSubmitHandler(e) {
  e.preventDefault();

  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;

  closePopup();
}

saveFormBnt.addEventListener('submit', formSubmitHandler);
