const initFilters = () => {
  const filters = document.querySelector('.filters')
  const filtersBtns = filters.querySelectorAll("button");
  const allBtn = document.querySelector('button[data-filter="all"]');

  filtersBtns.forEach((el, i) => {
    // if (i === 0) el.classList.add('active'); // DDD

    el.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      //let currentCategory = null

      e.currentTarget.classList.toggle("active");
      if (e.currentTarget.dataset.filter != "all") {
        allBtn.classList.remove('active')
        //currentCategory = e.currentTarget.dataset.filter;
      } else {
        clearActive(filtersBtns)
        allBtn.classList.add('active')
        //currentCategory = 'all'
      }

      //let flag = false;
      var filtersList = [];
      var flagAll = true;

      for (let i = 0; i < filtersBtns.length; i++) {
        if (filtersBtns[i].classList.contains("active")) filtersList.push(filtersBtns[i].dataset.filter)
        else flagAll = false;
        //flag = (filtersBtns[i].classList.contains("active"));
        //if (flag) break;
      }

      //if (!flag) {
      if (filtersList.length == 0) allBtn.classList.add("active");

      var filterParams = flagAll ? "" : ("?" + filtersList.join("&"));
      document.location.href = "/"; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! сделать просто ссылки!!!!!!!!!!!!!!!!!!!!!!!!!
    });
  });
  const clearActive = (items) => {
    items.forEach((item) => item.classList.remove("active"));
  };
}

export default initFilters;
