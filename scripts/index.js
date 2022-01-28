const profileName = document.querySelector(".profile__name");
const profileInfo = document.querySelector(".profile__info");
const editBtn = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_edit-profile");
const inputName = profileEditPopup.querySelector(".popup__input_type_name");
const inputInfo = profileEditPopup.querySelector(".popup__input_type_info");
const closeBtn = profileEditPopup.querySelector(".popup__close-button");
const saveFormBnt = profileEditPopup.querySelector(".popup__form");

const addBtn = document.querySelector(".profile__add-button");
const placeAddPopup = document.querySelector(".popup_add-place");


// console.log(editBtn);

// const popupTemplate = document.querySelector('#page-popup').content;

// console.log(editProfilePopup);



//console.log(popup);


// editProfilePopup.append(profilePopup);

function openPopup() {
  // открывает только один попап. надо сделать универс.
  profileEditPopup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

function closePopup() {
  profileEditPopup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;

  closePopup();
}

editBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
saveFormBnt.addEventListener("submit", formSubmitHandler);

document.addEventListener("keyup", (evt) => {
  if (evt.code === "Enter") formSubmitHandler(evt);
});

const initialCards = [
  {
    name: "Гора Ахун",
    link: "./images/ana-kai-QXOl2IXJ_ow-unsplash.jpg",
  },
  {
    name: "Камчатка",
    link: "./images/daniil-silantev-fD7cXIFurSQ-unsplash.jpg",
  },
  {
    name: "Рыбачий полуостров",
    link: "./images/radik-sitdikov-48MxMepMwqc-unsplash.jpg",
  },
  {
    name: "Камчатка",
    link: "./images/daniil-silantev-h-M3O25tyvI-unsplash.jpg",
  },
  {
    name: "Ольхон",
    link: "./images/kir-simakov-OGc_X8PeikQ-unsplash.jpg",
  },
  {
    name: "Крым",
    link: "./images/nikolay-vorobyev-o7jIzNWvCRo-unsplash.jpg",
  },
];

const cardTemplate = document.querySelector("#card").content;
const cardsBox = document.querySelector(".place-grid__places");

initialCards.forEach((item) => {
  const initialCard = cardTemplate.querySelector(".place").cloneNode(true);
  initialCard.querySelector(".place__title").textContent = item.name;
  initialCard.querySelector(".place__image").src = item.link;
  initialCard.querySelector(".place__image").alt = item.name;
  cardsBox.append(initialCard);
});








// const placePopup = popupTemplate
//   .querySelector(".popup__container")
//   .cloneNode(true);
// placePopup.querySelector(".popup__title").textContent = "Новое место";

// placePopup.querySelector(".popup__submit-button").textContent = "Создать";

// addPlacePopup.append(placePopup);

// addBtn.addEventListener("click", openPopup); // открывает не тот попап
