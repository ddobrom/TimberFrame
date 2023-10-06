import data from "./catalogueData";
import initProductSliders from "./sliders";
import initFilters from "./sortCatalogue";
import imagePagination from "./product";
import lenis from "./smooth-scroll";
import declOfNum from "./declOfNum";
async function getData() {
  // const response = await fetch('ваш url к базе со списком объектов. пример таких объектов есть в файле catalogueData') // раскомментировать при работе с бд
  // const d = await response.json()
  const d = data; // удалить при работе с бд
  return d;
}

async function main() {
  const productsData = await getData();
  let currentPage = 1;
  let rows = 10;
  async function displayList(arrData, rowPerPage, page) {
    const catalogue = document.querySelector(".catalogue");
    catalogue.innerHTML = "";
    page--;
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((el) => {
      catalogue.innerHTML += createProduct(
        el.title,
        el.price,
        el.square,
        el.floors,
        el.bathrooms,
        el.bedrooms,
        el.placeSquare,
        el.imgSrcArray
      );
    });
    const products = document.querySelectorAll(".product");
    const productSliders = document.querySelectorAll(".product__slider");
    imagePagination(products);
    if (window.matchMedia("(max-width: 768px)").matches) {
      initProductSliders(productSliders);
    }
    initFilters();
  }
  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector(".pagination");
    const pagesCount = Math.ceil(arrData.length / rowPerPage);

    for (let i = 0; i < pagesCount; i++) {
      paginationEl.appendChild(createPaginationBtn(i + 1));
    }
  }
  function createPaginationBtn(page) {
    const liEl = document.createElement("li");
    const btnPagination = document.createElement("button");
    liEl.classList.add("pagination__item");
    btnPagination.classList.add("btn-reset");
    btnPagination.classList.add("pagination__btn");

    if (currentPage == page) btnPagination.classList.add("active");

    btnPagination.innerText = page;
    liEl.appendChild(btnPagination);
    btnPagination.addEventListener("click", () => {
      currentPage = page;
      lenis.scrollTo("html");
      displayList(productsData, rows, currentPage);

      let currentItemLi = document.querySelector(".pagination__btn.active");
      currentItemLi.classList.remove("active");

      btnPagination.classList.add("active");

      document.querySelector(".filters__btn.active").click();
    });
    return liEl;
  }
  displayList(productsData, rows, currentPage);
  displayPagination(productsData, rows);
}

const createProduct = (
  title,
  price,
  square,
  floors,
  bathrooms,
  bedrooms,
  placeSquare,
  imgSrcArray
) => {
  const floorsWord = declOfNum(floors, ["этаж", "этажа", "этажей"]);
  const bathroomsWord = declOfNum(bathrooms, [
    "санузел",
    "санузла",
    "санузлов",
  ]);
  const bedroomsWord = declOfNum(bedrooms, ["спальня", "спальни", "спален"]);

  return `
    <li class="catalogue__item">
      <article class="catalogue__product product">
      <a href="#" class="product__link">
          <button class="product__btn btn btn--like btn--stroke btn-reset">
            <svg>
              <use xlink:href="img/sprite.svg#like-icon"></use>
            </svg>
          </button>
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
                >от ${price} ₽</span
              >
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

if (document.querySelector(".catalogue")) {
  main();
}
