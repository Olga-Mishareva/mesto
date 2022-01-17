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

  let name = inputName.value;
  let info = inputInfo.value;

  if(name.length !== 0 && name !== ' ') {
    profileName.textContent = name;
  }
  else {
    profileName.textContent = inputName.getAttribute('placeholder');
    inputName.value = inputName.getAttribute('placeholder');
  }

  if(info.length !== 0 && info !== ' ') {
    profileInfo.textContent = info;
  }
  else {
    profileInfo.textContent = inputInfo.getAttribute('placeholder');
    inputInfo.value = inputInfo.getAttribute('placeholder');
  }

  closePopup();
}

saveFormBnt.addEventListener('submit', formSubmitHandler);
