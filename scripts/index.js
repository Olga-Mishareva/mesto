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
