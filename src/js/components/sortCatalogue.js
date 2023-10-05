const initFilters = () => {
  const filtersBtns = document.querySelectorAll(".filters__btn");
  const cards = document.querySelectorAll(".catalogue__item");

  filtersBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      clearActive(filtersBtns);
      e.currentTarget.classList.add("active");
      const currentCategory = e.currentTarget.dataset.filter;
      filter(currentCategory, cards);
    });
  });
  const filter = (category, items) => {
    clearHidden(items);
    if (category == "1-floor") {
      items.forEach((item) => {
        const isFiltered =
          parseInt(item.querySelector(".product-info__item--fl").dataset.fl) ===
          1;
        if (!isFiltered) {
          item.classList.add("is-hidden");
        }
      });
    }
    if (category == "2-floors") {
      items.forEach((item) => {
        const isFiltered =
          parseInt(item.querySelector(".product-info__item--fl").dataset.fl) ===
          2;
        if (!isFiltered) {
          item.classList.add("is-hidden");
        }
      });
    }
    if (category == "3-floors") {
      items.forEach((item) => {
        const isFiltered =
          parseInt(item.querySelector(".product-info__item--fl").dataset.fl) ===
          3;
        if (!isFiltered) {
          item.classList.add("is-hidden");
        }
      });
    }
    if (category == "up-200-sq") {
      items.forEach((item) => {
        const isFiltered =
          parseInt(item.querySelector(".product-info__item--sq").dataset.sq) <=
          200;
        if (!isFiltered) {
          item.classList.add("is-hidden");
        }
      });
    }
    if (category == "from-200-sq") {
      items.forEach((item) => {
        const isFiltered =
          parseInt(item.querySelector(".product-info__item--sq").dataset.sq) >=
          200;
        if (!isFiltered) {
          item.classList.add("is-hidden");
        }
      });
    }
  };
  const clearHidden = (items) => {
    items.forEach((item) => item.classList.remove("is-hidden"));
  };
  const clearActive = (items) => {
    items.forEach((item) => item.classList.remove("active"));
  };
}
export default initFilters
