import declOfNum from "./declOfNum";
const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};
const createProduct = (
  title,
  price,
  square,
  floors,
  bathrooms,
  bedrooms,
  placeSquare,
  imgSrcArray,
  active = false,
  id
) => {
  const floorsWord = declOfNum(floors, ["этаж", "этажа", "этажей"]);
  const bathroomsWord = declOfNum(bathrooms, [
    "санузел",
    "санузла",
    "санузлов",
  ]);
  const bedroomsWord = declOfNum(bedrooms, ["спальня", "спальни", "спален"]);
  const isActive = active ? "active" : null;
  return `
    <li class="catalogue__item">
      <article class="catalogue__product product" data-id="${id}">
      <button class="product__btn btn btn--like btn--stroke btn-reset ${isActive}">
        <svg>
          <use xlink:href="img/sprite.svg#like-icon"></use>
        </svg>
      </button>
      <a href="#" class="product__link">
          <div class="product__image">
            <div class="product__switch image-switch">
              <div class="image-switch__item">
                <div class="image-switch__img">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][0]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][1]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][0]}"
                      srcset="${imgSrcArray["jpg"][1]}"
                      alt="Product 1"
                    />
                  </picture>
                </div>
              </div>
              <div class="image-switch__item">
                <div class="image-switch__img">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][2]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][3]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][2]}"
                      srcset="${imgSrcArray["jpg"][3]}"
                      alt="Product 1"
                    />
                  </picture>
                </div>
              </div>
              <div class="image-switch__item">
                <div class="image-switch__img">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][4]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][5]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][4]}"
                      srcset="${imgSrcArray["jpg"][5]}"
                      alt="Product 1"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div class="product__slider swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][0]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][1]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][0]}"
                      srcset="${imgSrcArray["jpg"][1]}"
                      alt="Product 1"
                    />
                  </picture>
                </div>
                <div class="swiper-slide">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][2]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][3]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][2]}"
                      srcset="${imgSrcArray["jpg"][3]} 2x"
                      alt="Product 1"
                    />
                  </picture>
                </div>
                <div class="swiper-slide">
                  <picture>
                    <source
                      srcset="${imgSrcArray["webp"][4]}"
                      type="image/webp"
                      media="(min-width: 1440px)"
                    />
                    <source
                      srcset="${imgSrcArray["webp"][5]}"
                      type="image/webp"
                    />
                    <img
                      src="${imgSrcArray["jpg"][4]}"
                      srcset="${imgSrcArray["jpg"][4]} 2x"
                      alt="Product 1"
                    />
                  </picture>
                </div>
              </div>
              <div class="swiper-pagination product-slider__pagination"></div>
            </div>
            <ul
              class="pruoduct__image-pagination image-pagination list-reset"
            ></ul>
          </div>
          <div class="product__info product-info">
            <div class="product-info__left">
              <h3 class="product-info__title">${title}</h3>
              <span class="product-info__price"
                >от ${normalPrice(price)} <svg class="">
                <use xlink:href="img/sprite.svg#rub"></use>
              </svg></span>
            </div>
            <ul class="product-info__right list-reset">
              <li
                class="product-info__item product-info__item--sq"
                data-sq="${square}"
              >
                <div class="product-info__figure">
                  ${square} <span>м<sup>2</sup></span>
                </div>
              </li>
              <li class="product-info__item product-info__item--fl" data-fl="${floors}">
                <div class="product-info__figure">${floors} <span>${floorsWord}</span></div>
              </li>
              <li
                class="product-info__item product-info__item--bed"
                data-bed="${bedrooms}"
              >
                <div class="product-info__figure">${bedrooms} <span>${bedroomsWord}</span></div>
              </li>
              <li
                class="product-info__item product-info__item--bath"
                data-bath="${bathrooms}"
              >
                <div class="product-info__figure">${bathrooms} <span>${bathroomsWord}</span></div>
              </li>
              <li
                class="product-info__item product-info__item--pl visually-hidden"
                data-pl="${placeSquare}"
              >
                <div class="product-info__figure">${placeSquare} <span>площадь</span></div>
              </li>
            </ul>
          </div>
        </a>
      </article>
    </li>
  `;
};
