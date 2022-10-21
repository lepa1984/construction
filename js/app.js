function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
});

//////burger
const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".header__mobile-close");
const headerOverlay = document.querySelector(".header__overlay");
const headerBtn = document.querySelector(".header__mobile-btn");
if (headerBtn) {
    headerBtn.addEventListener("click", (e) => {
        headerOverlay.classList.remove("active");
        document.querySelector(".burger__btn").classList.remove("active");
        document
            .querySelector(".header__mobile-menu")
            .classList.remove("active");
        body.classList.remove("active");
    });
}
burger.addEventListener("click", () => {
    document.querySelector(".burger__btn").classList.toggle("active");
    headerOverlay.classList.toggle("active");
    document.querySelector(".header__mobile-menu").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
});
burgerClose.addEventListener("click", () => {
    document.querySelector(".burger__btn").classList.toggle("active");
    headerOverlay.classList.toggle("active");
    document.querySelector(".header__mobile-menu").classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
});
headerOverlay.addEventListener("click", (e) => {
    if (e.target == headerOverlay) {
        headerOverlay.classList.remove("active");
        document.querySelector(".burger__btn").classList.remove("active");
        document
            .querySelector(".header__mobile-menu")
            .classList.remove("active");
        body.classList.remove("active");
    }
});
//////////////////  slider /////////////////////

var swiper1 = new Swiper(".swiper.mySwiper", {
    slidesPerView: "auto",
    direction: "vertical",
});
var swiper2 = new Swiper(".swiper.mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    thumbs: {
        swiper: swiper1,
    },
});
var swiper4 = new Swiper(".swiper.swiper-order", {
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    loopedSlides: 5,
    slidesPerView: 1,

    navigation: {
        nextEl: ".works .swiper-button-next",
        prevEl: ".works .swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        769: {
            slidesPerView: 2,
        },
        1025: {
            slidesPerView: 3,
        },
    },
});
if (window.matchMedia("(max-width: 1025px)").matches) {
    var swiper3 = new Swiper(".swiper.swiper-works", {
        spaceBetween: 20,
        loop: true,
        loopFillGroupWithBlank: true,
        loopedSlides: 5,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        navigation: {
            nextEl: ".works .swiper-button-next",
            prevEl: ".works .swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            769: {
                slidesPerView: 2,
            },
        },
    });
    const sliderWorks = document.querySelector(".swiper-works");
    if (sliderWorks) {
        const slides = document.querySelectorAll(".works__card");
        slides.forEach((slide, ind) => {
            if (slide.classList.contains("hidden")) {
                slide.classList.remove("hidden");
            }
        });
    }
}
if (window.matchMedia("(min-width: 1025px)").matches) {
    const sliderWorks = document.querySelector(".swiper-works");
    if (sliderWorks) {
        const slides = document.querySelectorAll(".works__card");
        slides.forEach((slide, ind) => {
            if (ind > 2) {
                slide.classList.add("hidden");
            }
        });
    }
}

//////////////////
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
    if (scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});
const accordion = document.querySelector(".accordion");
if (accordion) {
    const accordions = document.querySelectorAll(".accordion__item");
    accordions.forEach((el) => {
        document.querySelector(".accordion__item").classList.add("active");
        document
            .querySelector(".accordion__control")
            .setAttribute("aria-expanded", true);
        document
            .querySelector(".accordion__content")
            .setAttribute("aria-hidden", false);
        document.querySelector(".accordion__content").style.maxHeight =
            document.querySelector(".accordion__content").scrollHeight + "px";
        el.addEventListener("click", (e) => {
            const self = e.currentTarget;
            const control = self.querySelector(".accordion__control");
            const content = self.querySelector(".accordion__content");

            self.classList.toggle("active");

            // если открыт аккордеон
            if (self.classList.contains("active")) {
                control.setAttribute("aria-expanded", true);
                content.setAttribute("aria-hidden", false);
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                control.setAttribute("aria-expanded", false);
                content.setAttribute("aria-hidden", true);
                content.style.maxHeight = null;
            }
        });
    });
}
////////  phone   /////////////////
function setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();

        range.collapse(true);

        range.moveEnd("character", pos);

        range.moveStart("character", pos);

        range.select();
    }
}
function mask(event) {
    var matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
        val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
            ? val.charAt(i++)
            : i >= val.length
            ? ""
            : a;
    });

    if (event.type == "blur") {
        if (this.value.length < 18) {
            this.value = "";
        }
    } else setCursorPosition(this.value.length, this);
}

const idApplication = document.querySelector("#form-application");
if (idApplication) {
    let text = `Спасибо! Мы получили вашу заявку. В ближайшее время Вам позвонит оператор.`;
    phones(idApplication, text);
}
const idFaq = document.querySelector("#form-faq");
if (idFaq) {
    let text = `Спасибо! Мы получили вашу заявку. В ближайшее время мы вам позвоним или ответим на эл. почту.`;
    phones(idFaq, text);
}
const idService = document.querySelector("#form-calculation ");
if (idService) {
    let text = `Спасибо! Мы получили вашу заявку. В ближайшее время Вам позвонит оператор.`;
    phones(idService, text);
}
const idCallback = document.querySelector("#form-callback ");
if (idService) {
    let text = `Спасибо! Мы получили вашу заявку. В ближайшее время Вам позвонит оператор.`;
    phones(idCallback, text);
}
function phones(id, text) {
    const btn = id.querySelector(".form__btn");
    const telephones = document.querySelectorAll(
        ".form__body input[name='phone']"
    );
    let inputValue = id.querySelector("input[name='phone']");

    btn.addEventListener("click", (e) => {
        if (inputValue.value.length < 18) {
            inputValue.parentNode.classList.add("active");
        } else {
            e.preventDefault();
            afterForm(id, text);
        }
    });

    telephones.forEach((phone) => {
        phone.addEventListener("input", mask);
        phone.addEventListener("input", () => {
            let inputValue = id.querySelector("input[name='phone']");
            if (inputValue) {
                inputValue.parentNode.classList.remove("active");
            }
        });

        phone.addEventListener("focus", mask, false);

        phone.addEventListener("blur", mask, false);
    });
}

function afterForm(id, text) {
    const contentForm = id.querySelector(".form__content");

    contentForm.innerHTML = `
            <div class="after-send">
            <img src=" img/success.svg" alt="icon"  />
            <p> ${text}                 
            </p>
        </div>
            `;
}
///////  map  /////////////

function init() {
    let map = new ymaps.Map("map", {
            center: [60.071084, 30.36267],
            zoom: 16,
            controls: [],
        }),
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [60.071084, 30.36267],
            },
            properties: {
                iconContent: "Я тащусь",
                hintContent: "Ну давай уже тащи",
            },
        }),
        myPlacemark = new ymaps.Placemark(
            [60.071084, 30.36267],
            {
                iconCaption: " ",
            },

            {
                iconLayout: "default#image",

                iconImageHref: "img/map.png",

                iconImageSize: [35, 55],

                iconImageOffset: [-5, -38],
            }
        );
    map.balloon.open([60.071094, 30.3648], " 5-й Верхний переулок дом 14", {
        closeButton: false,
    });
    map.geoObjects.add(myPlacemark);

    map.controls.add("geolocationControl");

    map.controls.add("zoomControl");

    map.behaviors.disable(["scrollZoom"]);
}
const contacts = document.querySelector(".contacts");
if (contacts) {
    ymaps.ready(init);
}
///////   stars  /////////

var rating = document.querySelector(".form .reviews__stars");
var items = document.querySelectorAll(".form .reviews__star");
if (rating) {
    rating.onmouseover = function (e) {
        if (e.target.classList.contains("reviews__star")) {
            var hoverItem = e.target;

            [].forEach.call(items, function itemsHover(elem, i) {
                if (i < hoverItem.getAttribute("data-rate")) {
                    elem.classList.add("active");
                } else if (i >= hoverItem.getAttribute("data-rate")) {
                    elem.classList.remove("active");
                }
            });
        }
    };
    rating.onmouseout = function (e) {
        var currentNumber;

        [].forEach.call(items, function (elem, i) {
            if (elem.classList.contains("item-current")) {
                currentNumber = i;
                document.querySelector(".form input[hidden").value = i + 1;
            }
        });

        if (currentNumber !== undefined) {
            clearWitoutCurrent(currentNumber);
            return;
        } else {
            clear();
        }
    };
    rating.onclick = function (e) {
        const stars = document.querySelector(".form .reviews__rating");
        if (stars.classList.contains("active")) {
            stars.classList.remove("active");
        }
        var target = e.target;
        target.classList.add("item-current");
        var siblings = target.parentNode.querySelectorAll(".reviews__star");
        [].forEach.call(siblings, function (el) {
            if (el !== target) {
                el.classList.remove("item-current");
            }
        });
    };
    function clear() {
        [].forEach.call(items, function (elem) {
            if (elem.getAttribute("data-rate") !== "0") {
                elem.classList.remove("active");
            }
        });
    }
    function clearWitoutCurrent(currentNumber) {
        [].forEach.call(items, function (elem, i) {
            if (i < currentNumber) {
                elem.classList.add("active");
            }
        });
    }
    //
}

///////// valid /////

const formReviewsId = document.querySelector("#form-reviews");
const formReviewsBtn = document.querySelector("#form-reviews .form__btn");
if (formReviewsBtn) {
    formReviewsBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (validate(formReviewsId)) {
            const contentForm = formReviewsId.querySelector(".form__content");

            contentForm.innerHTML = `
            <div class="after-send">
            <img src=" img/success.svg" alt="icon"  />
            <p>
                Спасибо за вашу обратную связь! Мы рассмотрим ваш отзыв в ближайшее
                время, и он обязательно появится на сайте.
            </p>
        </div>
            `;
        }
    });
}
function validate(form) {
    const mail = form.querySelector("input[name='email']");
    const inputs = form.querySelectorAll("input[required]");
    const textarea = form.querySelector("textarea[required]");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = mail.value;
    const starsInput = form.querySelector("input[hidden");

    let flag = false;

    textarea.addEventListener("input", () => {
        textarea.parentNode.classList.remove("active");
    });

    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            input.parentNode.classList.remove("active");
        });
        if (input.value.length < 2) {
            input.parentNode.classList.add("active");
            return (flag = false);
        } else {
            flag = true;
        }
    });

    if (starsInput.value.length < 1) {
        starsInput.parentNode.classList.add("active");
        return (flag = false);
    } else {
        flag = true;
    }

    if (textarea.value.length < 2) {
        textarea.parentNode.classList.add("active");
        return (flag = false);
    } else {
        flag = true;
    }

    if (reg.test(address) == false) {
        mail.parentNode.classList.add("active");
        return (flag = false);
    } else {
        flag = true;
    }

    return flag;
}
/////////// modal////////////_
const btns = document.querySelectorAll(".btn-popup");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");
const closeModal = document.querySelectorAll(".close");
const body = document.querySelector("body");
btns.forEach((el) => {
    el.addEventListener("click", (e) => {
        let path = e.currentTarget.getAttribute("data-path");

        modals.forEach((el) => {
            el.classList.remove("active");
        });
        body.classList.add("active");
        document
            .querySelector(`[data-target="${path}"]`)
            .classList.add("active");
        modalOverlay.classList.add("active");
    });
});
closeModal.forEach((btn) => {
    btn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
        modals.forEach((el) => {
            el.classList.remove("active");
        });
        body.classList.remove("active");
    });
});
modalOverlay.addEventListener("click", (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.classList.remove("active");
        modals.forEach((el) => {
            el.classList.remove("active");
        });
        body.classList.remove("active");
    }
});
//////////// video ///////////////////
const blockVideo = document.querySelectorAll(".video");
const itemsPlay = document.querySelectorAll(".video__item");

if (blockVideo) {
    itemsPlay.forEach((item) => {
        const play = item.querySelector(".play");

        console.log(play);

        play.addEventListener(
            "click",
            () => {
                if (play.nextElementSibling.paused) {
                    play.nextElementSibling.play();
                    play.classList.add("active");
                } else {
                    play.nextElementSibling.pause();
                    play.classList.remove("active");
                }
            },
            false
        );
    });
}
/////////   tab ////////////////
const tabs = document.querySelectorAll(".price__tab");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const tabActive = document.querySelector(".price__tab.active");
        if (tabActive) {
            tabActive.classList.remove("active");
        }
        tab.classList.add("active");
    });
});
