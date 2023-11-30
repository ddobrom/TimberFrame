const initFilters = () => {
  const filters = document.querySelector('.filters')
  const filtersBtns = filters.querySelectorAll("button");
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
    });
  });
  const clearActive = (items) => {
    items.forEach((item) => item.classList.remove("active"));
  };
}

export default initFilters;
