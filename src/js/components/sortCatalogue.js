const initFilters = () => {
  const filters = document.querySelector('.filters')
  const filtersBtns = filters.querySelectorAll("button");
  const cards = document.querySelectorAll(".catalogue__item");
  const allBtn = document.querySelector('button[data-filter="all"]');
  filtersBtns.forEach((el, i) => {
    if(i === 0){
      el.classList.add('active')
    }
    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      let currentCategory = null

      e.currentTarget.classList.toggle("active");
      if (e.currentTarget.dataset.filter != "all") {
        allBtn.classList.remove('active')
        currentCategory = e.currentTarget.dataset.filter;
      } else {
        clearActive(filtersBtns)
        allBtn.classList.add('active')
        currentCategory = 'all'
      }


      let flag = false;
      for (let i = 0; i < filtersBtns.length; i++) {
        flag = false;
        if (filtersBtns[i].classList.contains("active")) flag = true;
        if(flag) break
      }

      if (!flag) {
        currentCategory = "all";
        allBtn.classList.add("active");
      }

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
};
export default initFilters;
