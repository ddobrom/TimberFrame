import data from "./main-houses-data.js";

const favBtns = document.querySelectorAll(".btn--like");
const favMenuBtn = document.querySelector(".favorites-btn");
const favQuantity = document.querySelector(".favorites-menu__count");
const favBtnQuantity = document.querySelectorAll(".favorites-btn__quantity");
const favContent = document.querySelector(".favorites-content");

let randId = 1133521;

if (favBtns) {
  favBtns.forEach((el) => {
    if (el.closest(".projects-card")) {
      el.closest(".projects-card").setAttribute("data-id", ++randId);
      el.addEventListener("click", (e) => {
        let self = e.currentTarget;
        let parent = self.closest(".projects-card");
        if (!self.classList.contains("active")) {
          let id = parent.dataset.id;
          let img = parent.querySelector(".projects-card__img").src;
          let srcset = parent.querySelector("source").getAttribute("srcset");
          let title = parent.querySelector(".projects-card__title").textContent;
          let link = parent
            .querySelector(".projects-card__more")
            .getAttribute("href");
          let info = {
            square: parent
              .querySelector(".projects-card__item--sq")
              .querySelector(".projects-card__figure").textContent,
            floors: parent
              .querySelector(".projects-card__item--fl")
              .querySelector(".projects-card__figure").textContent,
            bedrooms: parent
              .querySelector(".projects-card__item--bed")
              .querySelector(".projects-card__figure").textContent,
            bathrooms: parent
              .querySelector(".projects-card__item--bath")
              .querySelector(".projects-card__figure").textContent,
            place: parent
              .querySelector(".projects-card__item--pl")
              .querySelector(".projects-card__figure").textContent,
          };
          self.classList.add("active");
          favContent.insertAdjacentHTML(
            "afterbegin",
            generateFavoriteItem(img, srcset, title, info, link, id)
          );
          updateStorage();
          printQuantity();
        } else {
          deleteFav(parent);
        }
      });
    }

    if (el.closest(".hero")) {
      el.closest(".hero__slide").setAttribute("data-id", ++randId);
      el.addEventListener("click", (e) => {
        let self = e.currentTarget;
        if (!self.classList.contains("active")) {
          self.classList.add("active");
          let id = el.closest(".hero__slide").dataset.id;
          let title = el
            .closest(".hero__slide")
            .querySelector(".slide__title")
            .textContent.toLowerCase()
            .trim();

          favContent.insertAdjacentHTML(
            "afterbegin",
            generateFavoriteItem(
              data[title].img,
              data[title].srcset,
              data[title].title,
              data[title].info,
              data[title].link,
              id
            )
          );
          updateStorage();
          printQuantity();
        } else {
          deleteFav(el.closest(".hero__slide"));
        }
      });
    }

    if (el.closest(".popular-card")) {
      el.closest(".popular-card").setAttribute("data-id", ++randId);
      el.addEventListener("click", (e) => {
        let self = e.currentTarget;
        if (!self.classList.contains("active")) {
          self.classList.add("active");
          let id = el.closest(".popular-card").dataset.id;
          let title = el
            .closest(".popular-card")
            .querySelector(".popular-card__title").textContent;
          let link = el
            .closest(".popular-card")
            .querySelector(".popular-card__more").href;
          let img = document
            .querySelector(".popular__images")
            .querySelector(
              `img[data-item-id="${
                el.closest(".popular-card").dataset.itemId
              }"]`
            ).src;
          let srcset = img;
          let info = {
            square: el
              .closest(".popular-card")
              .querySelector(".popular-card__item--sq")
              .querySelector(".popular-card__figure").textContent,
            floors: el
              .closest(".popular-card")
              .querySelector(".popular-card__item--fl")
              .querySelector(".popular-card__figure").textContent,
            bedrooms: el
              .closest(".popular-card")
              .querySelector(".popular-card__item--bed")
              .querySelector(".popular-card__figure").textContent,
            bathrooms: el
              .closest(".popular-card")
              .querySelector(".popular-card__item--bath")
              .querySelector(".popular-card__figure").textContent,
            place: el
              .closest(".popular-card")
              .querySelector(".popular-card__item--pl")
              .querySelector(".popular-card__figure").textContent,
          };
          favContent.insertAdjacentHTML(
            "afterbegin",
            generateFavoriteItem(img, srcset, title, info, link, id)
          );
          updateStorage();
          printQuantity();
        } else {
          deleteFav(el.closest(".popular-card"));
        }
      });
    }

    if (el.closest(".popular__images")) {
      el.closest(".swiper-slide").setAttribute("data-id", ++randId);

      el.addEventListener("click", (e) => {
        let self = e.currentTarget;
        if (!self.classList.contains("active")) {
          self.classList.add("active");
          let id = el.closest(".swiper-slide").dataset.id;
          const infoBlock = document.querySelector(
            `.popular-card[data-item-id="${
              el.closest(".swiper-slide").querySelector("img").dataset.itemId
            }"]`
          );
          let title = infoBlock.querySelector(
            ".popular-card__title"
          ).textContent;
          let link = infoBlock.querySelector(".popular-card__more").href;
          let img = el.closest(".swiper-slide").querySelector("img").src;
          let srcset = "";
          el.closest(".swiper-slide").querySelector("source")
            ? (srcset = el
                .closest(".swiper-slide")
                .querySelector("source").srcset)
            : null;
          let info = {
            square: infoBlock
              .querySelector(".popular-card__item--sq")
              .querySelector(".popular-card__figure").textContent,
            floors: infoBlock
              .querySelector(".popular-card__item--fl")
              .querySelector(".popular-card__figure").textContent,
            bedrooms: infoBlock
              .querySelector(".popular-card__item--bed")
              .querySelector(".popular-card__figure").textContent,
            bathrooms: infoBlock
              .querySelector(".popular-card__item--bath")
              .querySelector(".popular-card__figure").textContent,
            place: infoBlock
              .querySelector(".popular-card__item--pl")
              .querySelector(".popular-card__figure").textContent,
          };
          favContent.insertAdjacentHTML(
            "afterbegin",
            generateFavoriteItem(img, srcset, title, info, link, id)
          );
          updateStorage();
          printQuantity();
        } else {
          let id = el.closest(".swiper-slide").dataset.id;
          favContent.querySelector(`[data-id="${id}"]`).remove();
          document
            .querySelector(`[data-id="${id}"]`)
            .querySelector(".btn--like")
            .classList.remove("active");
          printQuantity();
        }
      });
    }

    if (el.closest(".product")) {
      el.closest(".product").setAttribute("data-id", ++randId);
      el.addEventListener("click", (e) => {
        let self = e.currentTarget;
        let parent = self.closest(".product");
        if (!self.classList.contains("active")) {
          let id = parent.dataset.id;
          let img = parent.querySelector("img").src;
          let srcset = parent.querySelector("source").getAttribute("srcset");
          let title = parent.querySelector(".product-info__title").textContent;
          let link = parent
            .querySelector(".product__image")
            .getAttribute("href");
          let info = {
            square: parent.querySelector(".product-info__item--sq").dataset.sq,

            floors: parent.querySelector(".product-info__item--fl").dataset.fl,
            bedrooms: parent.querySelector(".product-info__item--bed").dataset
              .bed,
            bathrooms: parent.querySelector(".product-info__item--bath").dataset
              .bath,
            place: parent.querySelector(".product-info__item--pl").dataset.pl,
          };
          self.classList.add("active");
          favContent.insertAdjacentHTML(
            "afterbegin",
            generateFavoriteItem(img, srcset, title, info, link, id)
          );
          updateStorage();
          printQuantity();
        } else {
          deleteFav(parent);
        }
      });
    }
  });
  const printQuantity = () => {
    let length = favContent.children.length;
    favQuantity.textContent = length;
    favBtnQuantity.forEach((el) => (el.textContent = length));
  };

  const deleteFav = (fav) => {
    let id = fav.dataset.id;

    favContent.querySelector(`[data-id="${id}"]`).remove();
    updateStorage();
    document
      .querySelector(`[data-id="${id}"]`)
      .querySelector(".btn--like")
      .classList.remove("active");
    printQuantity();
  };
  favContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn--like")) {
      deleteFav(e.target.closest(".projects-card"));
    }
  });
  const generateFavoriteItem = (img, srcset, title, info, link, id) => {
    return `
    <article class="projects-section__card projects-card" data-id="${id}">
    <picture>
      <source srcset="${srcset}" type=image/webp>
      <img class="projects-card__img" src="${img}" alt="Card">
    </picture>
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
  const initialState = () => {
    if (localStorage.getItem("goods")) {
      favContent.innerHTML = localStorage.getItem("goods");
      printQuantity();

      document
        .querySelectorAll(".favorites-content .projects-section__card")
        .forEach((el) => {
          let id = el.dataset.id;

          if (
            document.querySelector(`.projects-section__card[data-id="${id}"]`)
          ) {
            document
              .querySelector(`.projects-section__card[data-id="${id}"]`)
              .querySelector(".btn--like")
              .classList.add("active");
          }
          if (
            document.querySelector(`.popular-content__item[data-id="${id}"]`)
          ) {
            document
              .querySelector(`.popular-content__item[data-id="${id}"]`)
              .querySelector(".btn--like")
              .classList.add("active");
          }
          if (document.querySelector(`.hero__slide[data-id="${id}"]`)) {
            document
              .querySelector(`.hero__slide[data-id="${id}"]`)
              .querySelector(".btn--like")
              .classList.add("active");
          }
          if (document.querySelector(`.product[data-id="${id}"]`)) {
            document
              .querySelector(`.product[data-id="${id}"]`)
              .querySelector(".btn--like")
              .classList.add("active");
          }
        });
    }
  };
  const updateStorage = () => {
    let parent = favContent;
    let html = parent.innerHTML;
    html = html.trim();

    if (html.length) {
      localStorage.setItem("goods", html);
    } else {
      localStorage.removeItem("goods");
    }
  };

  initialState();
}
