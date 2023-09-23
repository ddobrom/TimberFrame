import data from './main-houses-data.js'

const favBtns = document.querySelectorAll(".btn--like");
const favMenuBtn = document.querySelector(".favorites-btn");
const favQuantity = document.querySelector('.favorites-menu__count')
const favBtnQuantity = document.querySelectorAll('.favorites-btn__quantity')
const favContent = document.querySelector(".favorites-content")

const randomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

favBtns.forEach(el => {
  if(el.closest('.projects-card')){
    el.closest('.projects-card').setAttribute('data-id', randomId())
    el.addEventListener('click', e => {
      let self = e.currentTarget;
      let parent = self.closest('.projects-card')
      if(!self.classList.contains('active')){
        let id = parent.dataset.id;
        let img = parent.querySelector('.projects-card__img').src
        let srcset = parent.querySelector('.projects-card__img').getAttribute('srcset')
        let title = parent.querySelector('.projects-card__title').textContent
        let link = parent.querySelector('.projects-card__more').getAttribute('href')
        let info = {
          square : parent.querySelector('.projects-card__item--sq').querySelector('.projects-card__figure').textContent,
          floors : parent.querySelector('.projects-card__item--fl').querySelector('.projects-card__figure').textContent,
          bedrooms : parent.querySelector('.projects-card__item--bed').querySelector('.projects-card__figure').textContent,
          bathrooms : parent.querySelector('.projects-card__item--bath').querySelector('.projects-card__figure').textContent,
          place : parent.querySelector('.projects-card__item--pl').querySelector('.projects-card__figure').textContent,
        }
        self.classList.add('active')
        favContent.insertAdjacentHTML('afterbegin', generateFavoriteItem(img, srcset, title, info, link ,id))
        printQuantity()
      } else {
        deleteFav(parent)
      }
    })
  }

  if(el.closest('.hero')){
    el.closest('.hero__slide').setAttribute('data-id', randomId())
    el.addEventListener('click', (e) => {
      let self = e.currentTarget
      if(!self.classList.contains('active')){
        self.classList.add('active')
        let id = el.closest('.hero__slide').dataset.id
        let title = el.closest('.hero__slide').querySelector('.slide__title').textContent.toLowerCase()
        favContent.insertAdjacentHTML('afterbegin', generateFavoriteItem(data[title].img, data[title].srcset, data[title].title, data[title].info, data[title].link , id))
        printQuantity()
      }
      else {
        deleteFav(el.closest('.hero__slide'))
      }
    })
  };

  if(el.closest('.popular-card')){
    el.closest('.popular-card').setAttribute('data-id', randomId())
    el.addEventListener('click', e => {
      let self = e.currentTarget
      if(!self.classList.contains('active')){
        self.classList.add('active')
        let id = el.closest('.popular-card').dataset.id
        let title = el.closest('.popular-card').querySelector('.popular-card__title').textContent
        let link = el.closest('.popular-card').querySelector('.popular-card__more').href
        let img = document.querySelector('.popular__images').querySelector(`img[data-item-id="${el.closest('.popular-card').dataset.itemId}"]`).src
        let srcset = img
        let info = {
          square : el.closest('.popular-card').querySelector('.popular-card__item--sq').querySelector('.popular-card__figure').textContent,
          floors : el.closest('.popular-card').querySelector('.popular-card__item--fl').querySelector('.popular-card__figure').textContent,
          bedrooms : el.closest('.popular-card').querySelector('.popular-card__item--bed').querySelector('.popular-card__figure').textContent,
          bathrooms : el.closest('.popular-card').querySelector('.popular-card__item--bath').querySelector('.popular-card__figure').textContent,
          place : el.closest('.popular-card').querySelector('.popular-card__item--pl').querySelector('.popular-card__figure').textContent
        }
        favContent.insertAdjacentHTML('afterbegin', generateFavoriteItem(img, srcset, title, info, link ,id))
        printQuantity()
      } else {
        deleteFav(el.closest('.popular-card'))
      }
    })
  }

  if(el.closest('.popular__images')){
    el.closest('.swiper-slide').setAttribute('data-id', randomId())

    el.addEventListener('click', e => {
      let self = e.currentTarget
      if(!self.classList.contains('active')) {
        self.classList.add('active')
        let id = el.closest('.swiper-slide').dataset.id
        const infoBlock = document.querySelector(`.popular-card[data-item-id="${el.closest('.swiper-slide').querySelector('img').dataset.itemId}"]`)
        let title = infoBlock.querySelector('.popular-card__title').textContent
        let link = infoBlock.querySelector('.popular-card__more').href
        let img = el.closest('.swiper-slide').querySelector('img').src
        let srcset = img
        let info = {
          square : infoBlock.querySelector('.popular-card__item--sq').querySelector('.popular-card__figure').textContent,
          floors : infoBlock.querySelector('.popular-card__item--fl').querySelector('.popular-card__figure').textContent,
          bedrooms : infoBlock.querySelector('.popular-card__item--bed').querySelector('.popular-card__figure').textContent,
          bathrooms : infoBlock.querySelector('.popular-card__item--bath').querySelector('.popular-card__figure').textContent,
          place : infoBlock.querySelector('.popular-card__item--pl').querySelector('.popular-card__figure').textContent
        }
        favContent.insertAdjacentHTML('afterbegin', generateFavoriteItem(img, srcset, title, info, link ,id))
        printQuantity()
      } else {
        let id = el.closest('.swiper-slide').dataset.id
        favContent.querySelector(`[data-id="${id}"]`).remove()
        document.querySelector(`[data-id="${id}"]`).querySelector('.btn--like').classList.remove('active')
        printQuantity()
      }
    })
  }
})
const printQuantity = () => {
  let length = favContent.children.length
  favQuantity.textContent = length
  favBtnQuantity.forEach(el => el.textContent = length)
}

const deleteFav = (fav) => {
  let id = fav.dataset.id

  favContent.querySelector(`[data-id="${id}"]`).remove()
  document.querySelector(`[data-id="${id}"]`).querySelector('.btn--like').classList.remove('active')
  printQuantity()
}
favContent.addEventListener('click', e => {
  if(e.target.classList.contains('btn--like')){
    deleteFav(e.target.closest('.projects-card'))
  }
})
const generateFavoriteItem = (img, srcset, title, info, link, id) => {
  return `
  <article class="projects-section__card projects-card" data-id="${id}">
      <img class="projects-card__img" src="${img}" srcset="${srcset}" alt="Card">
      <div class="projects-card__info">
        <h3 class="projects-card__title">${title.toUpperCase()}</h3>
        <div class="projects-card__details">
          <ul class="projects-card__list popular-card__list list-reset">
            <li class="projects-card__item popular-card__item projects-card__item--sq">
              ${info.square}<span>м<sup>2</sup></span>
            </li>
            <li class="projects-card__item popular-card__item projects-card__item--fl">
            ${info.floors}<span>этажа</span>
            </li>
            <li class="projects-card__item popular-card__item projects-card__item--bed">
              ${info.bedrooms}<span>спальни</span>
            </li>
            <li class="projects-card__item popular-card__item projects-card__item--bath">
              ${info.bathrooms}<span>санузла</span>
            </li>
            <li class="projects-card__item popular-card__item projects-card__item--pl">
              ${info.place}<span>м<sup>2</sup></span>
            </li>
          </ul>
          <a href="${link}" class="projects-card__more">Подробнее</a>
        </div>
      </div>
      <button class="projects-card__btn btn btn--like btn--stroke btn-reset active">
        <svg>
          <use xlink:href="img/sprite.svg#like-icon"></use>
        </svg>
      </button>
    </article>
  `;
};
