import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  profileData,
  settings,
  formValidators,
  profileBtn,
  inputName,
  inputInfo,
  placeBtn,
  inputCard,
  inputLink,
} from "../utils/constants.js";

// --------------------------------------------------------------------------

const formList = Array.from(document.querySelectorAll(".popup__form"));
formList.forEach((formElement) => {
  const validator = new FormValidator(settings, formElement);
  const formName = formElement.getAttribute("name");
  formValidators[formName] = validator;
  validator.enableValidation();
});

// ------ popup_edit-profile -----------------------------------------------

// создает класс вставки в DOM
const userData = new UserInfo({ data: profileData });

const profilePopup = new PopupWithForm(
  {
    handleSubmit: (data) => {
      userData.setUserInfo(data);
    },
  },
  ".popup_type_edit-profile"
);

profilePopup.setEventListeners();

// кнопка открытия ред.профиля
profileBtn.addEventListener("click", function () {
  const userIntel = userData.getUserInfo();
  inputName.value = userIntel.username;
  inputInfo.value = userIntel.about;

  profilePopup.openPopup();

  formValidators["profile-form"].resetValidation();
});

// ------ popup_add-place -----------------------------------------------

// созжание катрочки
function createCard(item) {
  const card = new Card(item, "#card", handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

// отрисовка начального массива карточек
const cardsGrid = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardsGrid.addItem(createCard(item));
    },
  },
  ".place-grid__places"
);

// сохранеие и вставка новой карточки
const placePopup = new PopupWithForm(
  {
    handleSubmit: (elem) => {
      const data = {};
      data.name = elem[inputCard.name];
      data.link = elem[inputLink.name];

      cardsGrid.addItem(createCard(data));
    },
  },
  ".popup_type_add-place"
);

placePopup.setEventListeners();

cardsGrid.renderItems();

// кнопка добавить карточку
placeBtn.addEventListener("click", () => {
  placePopup.openPopup();
  formValidators["add-form"].resetValidation();
});

// ------ popup_show-image -----------------------------------------------

const popupWihtImage = new PopupWithImage(".popup_type_show-image");
popupWihtImage.setEventListeners();

// показ картинки
function handleCardClick(name, link) {
  popupWihtImage.openPopup(name, link);
}
