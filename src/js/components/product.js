const products = document.querySelectorAll(".product");

if (products) {
  products.forEach((el) => {
    const imageSwitchItems = el.querySelectorAll(".image-switch__item");
    const imagePagination = el.querySelector(".image-pagination");

    if (imageSwitchItems.length > 1) {
      imageSwitchItems.forEach((item, index) => {
        item.setAttribute("data-index", index);
        imagePagination.innerHTML += `<li class="image-pagination__item ${
          index == 0 ? "image-pagination__item--active" : ""
        }" data-index="${index}"></li>`;


        item.addEventListener("mouseenter", (e) => {
          el.querySelectorAll(".image-pagination__item").forEach((el) => {
            el.classList.remove("image-pagination__item--active");
          });

          el.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active')
        });
        item.addEventListener("mouseleave", (e) => {
          el.querySelectorAll(".image-pagination__item").forEach((el) => {
            el.classList.remove("image-pagination__item--active");
          });

          el.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active')
        });
      });
    }
  });
}
