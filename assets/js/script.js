document.addEventListener("DOMContentLoaded", function () {
  let menubar = document.querySelector(".menubar");
  let menuContainer = document.querySelector(".header__tablet__menu");
  let slidebar = document.querySelector(".slidebar__img__index");
  let images = document.querySelectorAll(".slidebar__img__index img");
  let prevButton = document.querySelector(".arrow__left");
  let nextButton = document.querySelector(".arrow__right");
  let currentIndex = 0;
  let showMore = document.querySelector(".our__product__showMore");
  let tricks__left = document.querySelector(".tricks__left");
  let tricks__right = document.querySelector(".tricks__right");
  let tricksItems = document.querySelectorAll(".tip__tricks__items__container");
  let trickIndex = 0;
  function updateTricks() {
    tricksItems.forEach((items, key) => {
      items.style.display = key === trickIndex ? "block" : "none";
    });
    let dots = document.querySelectorAll(".tip__tricks__dot");
    let tip__tricks__dot__point = document.querySelectorAll(
      ".tip__tricks__dot__point"
    );
    console.log(tip__tricks__dot__point);
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[trickIndex]) {
      dots[trickIndex].classList.add("active");
    }
    tip__tricks__dot__point.forEach((point) =>
      point.classList.remove("click__active")
    );
    if (tip__tricks__dot__point[trickIndex]) {
      tip__tricks__dot__point[trickIndex].classList.add("click__active");
    }
  }
  updateTricks();
  tricks__left.addEventListener("click", function () {
    if (trickIndex > 0) {
      trickIndex = trickIndex - 1;
    } else {
      trickIndex = tricksItems.length - 1;
    }
    updateTricks();
  });

  tricks__right.addEventListener("click", function () {
    if (trickIndex < tricksItems.length - 1) {
      trickIndex = trickIndex + 1;
    } else {
      trickIndex = 0;
    }
    updateTricks();
  });

  menubar.addEventListener("click", function () {
    menuContainer.classList.toggle("showMenu");
  });

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex = currentIndex - 1;
    } else {
      currentIndex = images.length - 1;
    }
    updateSlidePosition();
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
      currentIndex = currentIndex + 1;
    } else {
      currentIndex = 0;
    }
    updateSlidePosition();
  });

  function updateSlidePosition() {
    slidebar.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  showMore.addEventListener("click", function () {
    event.preventDefault();
    let newElement = document.createElement("div");
    newElement.innerHTML = `
    <div class="our__product__container">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="our__product__item">
                      <div class="our__product__top">
                        <img src="./assets/images/image 5.png" alt="" />
                      </div>
                      <div class="our__product__description">
                        <div class="our__product__description__name">
                          <h5 class="our__product__description__name__heading">
                            Grifo
                          </h5>
                          <p class="our__product__description__name__text">
                            Night lamp
                          </p>
                          <div class="our__product__price">
                            <p class="our__product__price__current">
                              Rp 1.500.000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="our__product__item">
                      <div class="our__product__top">
                        <img src="./assets/images/image 6.png" alt="" />
                      </div>
                      <div class="our__product__description">
                        <div class="our__product__description__name">
                          <h5 class="our__product__description__name__heading">
                            Muggo
                          </h5>
                          <p class="our__product__description__name__text">
                            Small mug
                          </p>
                          <div class="our__product__price">
                            <p class="our__product__price__current">
                              Rp 150.000
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="product__new">
                        <p>New</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="our__product__item">
                      <div class="our__product__top">
                        <img src="./assets/images/image 7.png" alt="" />
                      </div>
                      <div class="our__product__description">
                        <div class="our__product__description__name">
                          <h5 class="our__product__description__name__heading">
                            Pingky
                          </h5>
                          <p class="our__product__description__name__text">
                            Cute bed set
                          </p>
                          <div class="our__product__price">
                            <p class="our__product__price__current">
                              Rp 7.000.000
                            </p>
                            <p class="our__product__price__before">
                              Rp 14.000.000
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="product__sale">
                        <p>-30%</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="our__product__item">
                      <div class="our__product__top">
                        <img src="./assets/images/image 8.png" alt="" />
                      </div>
                      <div class="our__product__description">
                        <div class="our__product__description__name">
                          <h5 class="our__product__description__name__heading">
                            Potty
                          </h5>
                          <p class="our__product__description__name__text">
                            Minimalist flower pot
                          </p>
                          <div class="our__product__price">
                            <p class="our__product__price__current">
                              Rp 500.000
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="product__new">
                        <p>New</p>
                      </div>
                    </div>
                  </div>
      </div>
  </div>`;
    let container = document.querySelector(".our__product .container .row");
    container.appendChild(newElement);
  });
});
