// Original template by Bedimcode
// Modified by Solagbade Abdulmalik, 2025

/* ==================== BANNER SLIDER AUTO ==================== */
let counter = 1;
setInterval(() => {
  const radio = document.getElementById("radio" + counter);
  if (radio) {
    radio.checked = true;
  }
  counter++;
  if (counter > 3) {
    // Change "3" if you add more slides
    counter = 1;
  }
}, 1); // Change every 5 seconds

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Open
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Close
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
  spaceBetween: 30,
  loop: "true",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 24,
  loop: "true",

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SHOW CART ===============*/
const cart = document.getElementById("cart"),
  cartShop = document.getElementById("cart-shop"),
  cartClose = document.getElementById("cart-close");

/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener("click", () => {
    cart.classList.add("show-cart");
  });
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", () => {
    cart.classList.remove("show-cart");
  });
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// JavaScript for dynamically rendering products
const htmlTemplate = `

`;
const products = [
  {
    productName: "Hublot Geneve",
    imgUrl: "assets/img/hublotproduct1.jpg",
    oldPrice: "25,000",
    price: "20,000",
    message: "Hello I want to order the hublot for ₦20,000",
  },
  {
    productName: "SKMEI",
    imgUrl: "assets/img/skmeiproduct1.jpg",
    oldPrice: "35,000",
    price: "25,000",
    message: "Hello I want to order the skmei for ₦25,000",
  },
  {
    productName: "G-shock",
    imgUrl: "assets/img/g-shockproduct1.jpg",
    oldPrice: "50,000",
    price: "45,000",
    message: "Hello I want to order the G-shock for ₦45,000",
  },
  {
    productName: "poedagar",
    imgUrl: "assets/img/poadagarprod1.jpg",
    oldPrice: "45,000",
    price: "35,000",
    message: "Hello I want to order the poedagar for ₦35,000",
  },
  {
    productName: "Valenzo",
    imgUrl: "assets/img/valenzopro1.jpg",
    oldPrice: "30,000",
    price: "27,000",
    message: "Hello I want to order the Valenzo for ₦27,000",
  },
  {
    productName: "tissort",
    imgUrl: "assets/img/tissortprod1.jpg",
    oldPrice: "25,000",
    price: "21,000",
    message: "Hello I want to order the hublot for ₦20,000",
  },
];

const productsContainer = document.getElementById("product_container");

products.map((product) => {
  productsContainer.innerHTML += `
        <div id=${product.productName} class="products__card">
            <img src=${product.imgUrl} alt=${product.productName + " luxury watch"} style="border-radius: 9px; width: 75%;height: 60%;" class="products__img">
            <h3 class="products__title">${product.productName}</h3>
            <p style="margin:5px 0; font-weight:bold; color: #999"><del>₦${product.oldPrice}</del></p>
            <span class="featured__price">₦${product.price}</span>
            <button class="products__button">
                <a href="https://wa.me/2348115672822?text=${product.message}" 
                        class='bx bx-shopping-bag'
                        target="_blank">  
                </a>
            </button>
        </div>
    `;
});
