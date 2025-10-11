


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
    productName: "Richard Mille",
    id: "richard-mille",
    imgUrl: "assets/img/rm.png",
    oldPrice: "50,000",
    price: "45,000",
    message: "Hello I want to order the Richard Mille for ₦45,000",
    description: "Richard Mille luxury watch, known for its innovative design, high-quality materials, and exceptional craftsmanship. A true statement piece.",
  },
  {
    productName: "Richard Mille",
    id: "richard-mille",
    imgUrl: "assets/img/rm2.png",
    oldPrice: "50,000",
    price: "45,000",
    message: "Hello I want to order the Richard Mille for ₦45,000",
    description: "Richard Mille luxury watch — a masterpiece of innovative design, premium materials, and exceptional craftsmanship. Elevate your collection with this true statement piece.",
  },
  {
    productName: "SKMEI",
    id: "skmei",
    imgUrl: "assets/img/SKi.png",
    oldPrice: "35,000",
    price: "25,000",
    message: "Hello I want to order the skmei for ₦25,000",
    description: "SKMEI digital watch with shock resistance, LED display, and a comfortable silicone strap. Ideal for sports and everyday wear.",
  },
  {
    productName: "SKMEI",
    id: "skmei",
    imgUrl: "assets/img/SKi2.png",
    oldPrice: "35,000",
    price: "25,000",
    message: "Hello I want to order the skmei for ₦25,000",
    description: "SKMEI digital watch with shock resistance, LED display, and a comfortable silicone strap. Ideal for sports and everyday wear.",
  },
  {
    productName: "SKMEI",
    id: "skmei",
    imgUrl: "assets/img/sk.png",
    oldPrice: "35,000",
    price: "25,000",
    message: "Hello I want to order the skmei for ₦25,000",
    description: "Tough, stylish, and comfortable — the SKMEI Digital Watch features shock resistance, a clear LED display, and a soft silicone strap built for all-day wear. Ready for anything, anytime."
  },
  {
    productName: "Hublot Geneve",
    id: "hublot-geneve",
    imgUrl: "assets/img/hb2.png",
    oldPrice: "25,000",
    price: "20,000",
    message: "Hello I want to order the hublot for ₦20,000",
    description: "A classic Round Hublot Geneve watch, featuring a durable stainless steel case, elegant black dial, and water resistance. Perfect for both formal and casual occasions, Luminous hands ensure visibility in low light.",
  },
  {
    productName: "Hublot Geneve",
    id: "hublot-geneve",
    imgUrl: "assets/img/hub.png",
    oldPrice: "25,000",
    price: "19,000",
    message: "Hello I want to order the hublot for ₦20,000",
    description: "This luxury wristwatch stuns with a striking rose gold-toned octagonal case, intricate geometric dial design, and transparent mechanics that reveal precision craftsmanship beneath. Paired with a sleek black strap, it's more than a watch — it's a work of modern art on your wrist.",
  },
  {
    productName: "Hublot Geneve",
    id: "hublot-geneve",
    imgUrl: "assets/img/hb.png",
    oldPrice: "25,000",
    price: "20,000",
    message: "Hello I want to order the hublot for ₦20,000",
    description: "A classic Hublot Geneve watch, featuring a durable stainless steel case, elegant black dial, and water resistance. Perfect for both formal and casual occasions. unbeatable value for a luxury timepiece.",
  },
  {
    productName: "Hublot Geneve",
    id: "hublot-geneve",
    imgUrl: "assets/img/hub5.png",
    oldPrice: "25,000",
    price: "19,000",
    message: "Hello I want to order the hublot for ₦19,000",
    description: "This luxury wristwatch stuns with a striking rose gold-toned octagonal case, intricate geometric dial design, and transparent mechanics that reveal precision craftsmanship beneath. Paired with a sleek black strap, it's more than a watch — it's a work of modern art on your wrist.",
  },
  {
    productName: "G-shock",
    id: "g-shock",
    imgUrl: "assets/img/gk1.png",
    oldPrice: "50,000",
    price: "43,000",
    message: "Hello I want to order the G-shock for ₦43,000",
    description: "G-shock rugged watch, known for its toughness, water resistance, and multifunctional features. Built for adventure and style. High-grade quality.",
  },
  {
    productName: "G-shock",
    id: "g-shock",
    imgUrl: "assets/img/gk.png",
    oldPrice: "25,000",
    price: "20,500",
    message: "Hello I want to order the G-shock for ₦20,500",
    description: "The G-Shock watch is renowned for its durability, water resistance, and multifunctional features. Designed for both adventure and everyday style, it offers reliable performance. Medium-grade quality.",
  },
   {
    productName: "G-shock",
    id: "g-shock",
    imgUrl: "assets/img/gk3.png",
    oldPrice: "25,000",
    price: "21,000",
    message: "Hello I want to order the G-shock for ₦21,000",
    description: "G-Shock watch — built for toughness, water-resistant, and packed with multifunctional features. Perfect for adventure or daily wear, it delivers reliable performance with rugged style. Medium-grade quality.",
  },
  {
    productName: "G-shock",
    id: "g-shock",
    imgUrl: "assets/img/gk4.png",
    oldPrice: "25,000",
    price: "22,000",
    message: "Hello I want to order the G-shock for ₦22,000",
    description: "This G-Shock watch is built tough with water resistance and versatile functions, stay stylish—grab yours now! Medium-grade quality.",
  },
  {
    productName: "G-shock",
    id: "g-shock",
    imgUrl: "assets/img/gk5.png",
    oldPrice: "25,000",
    price: "19,000",
    message: "Hello I want to order the G-shock for ₦19,000",
    description: "This G-Shock watch combines rugged durability with advanced features like water resistance and multifunctional tools. Its bold design complements any lifestyle, from extreme adventures to everyday wear, ensuring you stay reliable and stylish no matter where life takes you.",
  },
  {
    productName: "poedagar",
    id: "poedagar",
    imgUrl: "assets/img/pg.png",
    oldPrice: "45,000",
    price: "37,000",
    message: "Hello I want to order the poedagar for ₦37,000",
    description: "Poedagar luxury wristwatch featuring a striking green inner dial, luminous hands, and scratch-resistant glass — a bold statement of style and sophistication.",
  },
  {
    productName: "poedagar",
    id: "poedagar",
    imgUrl: "assets/img/po1.png",
    oldPrice: "45,000",
    price: "35,000",
    message: "Hello I want to order the poedagar for ₦35,000",
    description: "Poedagar luxury wristwatch with a gold-tone finish, luminous hands, and a scratch-resistant glass. A statement piece for any collection.",
  },
  {
    productName: "poedagar",
    id: "poedagar",
    imgUrl: "assets/img/po2.png",
    oldPrice: "45,000",
    price: "30,000",
    message: "Hello I want to order the poedagar for ₦30,000",
    description: "Poedagar luxury wristwatch — crafted with a sleek black inner dial, luminous hands, and scratch-resistant glass. A bold statement piece for any collection. Own yours today and elevate your style..",
  },
  {
    productName: "poedagar",
    id: "poedagar",
    imgUrl: "assets/img/po3.png",
    oldPrice: "45,000",
    price: "35,000",
    message: "Hello I want to order the poedagar for ₦35,000",
    description: "Poedagar luxury wristwatch — featuring a striking gold-tone finish, luminous hands, and scratch-resistant glass. A bold statement piece that elevates any collection.",
  },
  {
    productName: "Valenzo",
    id: "valenzo",
    imgUrl: "assets/img/valenzopro1.jpg",
    oldPrice: "30,000",
    price: "27,000",
    message: "Hello I want to order the Valenzo for ₦27,000",
    description: "Valenzo premium watch, featuring a minimalist design, leather strap, and reliable quartz movement. Perfect for everyday elegance.",
  },
  {
    productName: "Valenzo",
    id: "valenzo",
    imgUrl: "assets/img/vel2.png",
    oldPrice: "30,000",
    price: "27,000",
    message: "Hello I want to order the Valenzo for ₦27,000",
    description: "Valenzo premium watch, featuring a minimalist design, leather strap, and reliable quartz movement. Perfect for everyday elegance.",
  },
  {
    productName: "tissort",
    id: "tissort",
    imgUrl: "assets/img/tissortprod1.jpg",
    oldPrice: "25,000",
    price: "21,000",
    message: "Hello I want to order the hublot for ₦21,000",
    description: "Tissort classic analog watch with a sleek silver case, date display, and comfortable fit. A timeless accessory for any wardrobe.",
  },
];

// const products = await getProducts()

// const productsContainer = document.getElementById("product_container");

// products.map((product) => {
//   productsContainer.innerHTML += `
//         <div id=${product.productName} class="products__card">
//             <img src=${product.imgUrl} alt=${product.productName + " luxury watch"} style="border-radius: 9px; width: 75%;height: 60%;" class="products__img">
//             <h3 class="products__title">${product.productName}</h3>
//             <p style="margin:5px 0; font-weight:bold; color: #999"><del>₦${product.oldPrice}</del></p>
//             <span class="featured__price">₦${product.price}</span>
//             <button class="products__button">
//                 <a href="https://wa.me/2348115672822?text=${product.message}" 
//                         class='bx bx-shopping-bag'
//                         target="_blank">  
//                 </a>
//             </button>
//         </div>
//     `;
// });

const productsContainer = document.getElementById("product_container");

// Render Paystack payment buttons for all products
products.map((product, idx) => {
  const prodId = product.id || product.productName.toLowerCase().replace(/\s+/g, '-');
  productsContainer.innerHTML += `
    <div id="${prodId}" class="products__card">
      <img src="${product.imgUrl}" alt="${product.productName} luxury watch" style="border-radius: 9px; width: 75%;height: 60%;" class="products__img">
      <h3 class="products__title">${product.productName}</h3>
      <p style="margin:5px 0; font-weight:bold; color: #999"><del>₦${product.oldPrice}</del></p>
      <span class="featured__price">₦${product.price}</span>
      <div style="margin-top: 12px; display: flex; justify-content: center; gap: 8px;">
        <button class="products__button paystack-pay-btn" 
          data-amount="${product.price.replace(/,/g, '')}" 
          data-product="${product.productName}">
          <i class='bx bx-shopping-bag'></i> Buy Now
        </button>
        <button class="products__button quick-view-btn" 
          data-idx="${idx}" style="background:#fff; color:#071018; border:1px solid #eee; border-radius:0; font-size:0.95rem; padding:0.4rem 1.1rem;">Quick View</button>
      </div>
    </div>
  `;
});

// Quick View Modal logic
const modal = document.getElementById('productQuickViewModal');
const closeModalBtn = document.getElementById('closeQuickViewModal');
const modalImg = document.getElementById('modalProductImg');
const modalName = document.getElementById('modalProductName');
const modalOldPrice = document.getElementById('modalProductOldPrice');
const modalPrice = document.getElementById('modalProductPrice');
const modalDesc = document.getElementById('modalProductDesc');
const modalPayBtn = document.getElementById('modalPaystackBtn');
const relatedProductsCarousel = document.getElementById('relatedProductsCarousel');
let currentModalProduct = null;

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('quick-view-btn')) {
    const idx = e.target.getAttribute('data-idx');
    const product = products[idx];
    currentModalProduct = product;
    modalImg.src = product.imgUrl;
    modalName.textContent = product.productName;
    modalOldPrice.textContent = product.oldPrice ? `₦${product.oldPrice}` : '';
    modalPrice.textContent = `₦${product.price}`;
    modalDesc.textContent = product.description || '';
    // Related products logic
    if (relatedProductsCarousel) {
      relatedProductsCarousel.innerHTML = '';
      // Pick 3 related products (excluding current)
      const related = products.filter((p, i) => i != idx).slice(0, 5);
      related.forEach((rel, relIdx) => {
        const relDiv = document.createElement('div');
        relDiv.style.minWidth = '90px';
        relDiv.style.cursor = 'pointer';
        relDiv.style.textAlign = 'center';
        relDiv.innerHTML = `
          <img src="${rel.imgUrl}" alt="${rel.productName}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.07);margin-bottom:4px;">
          <div style="font-size:0.85rem;color:#222;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${rel.productName}</div>
        `;
        relDiv.addEventListener('click', function() {
          // Simulate click on the corresponding quick view button
          document.querySelectorAll('.quick-view-btn')[products.findIndex(p => p.productName === rel.productName)].click();
        });
        relatedProductsCarousel.appendChild(relDiv);
      });
    }
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // Notify other modules (reviews) which product was opened
    try {
      const prodId = product.id || product.productName.toLowerCase().replace(/\s+/g, '-');
      const evt = new CustomEvent('modalProductOpened', { detail: { productId: prodId } });
      document.dispatchEvent(evt);
    } catch (err) {
      console.warn('Could not dispatch modalProductOpened', err);
    }
  }
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
});

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
});

modalPayBtn.addEventListener('click', function() {
  if (!currentModalProduct) return;
  let email = '';
  while (true) {
    email = prompt('Enter your email address to pay for ' + currentModalProduct.productName + ':');
    if (email === null) return; // Cancelled
    if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) break;
    alert('Please enter a valid email address.');
  }
  let address = '';
  while (true) {
    address = prompt('Enter your delivery address:');
    if (address === null) return; // Cancelled
    if (address.trim().length > 4) break;
    alert('Please enter a valid delivery address.');
  }
  let handler = PaystackPop.setup({
    key: 'pk_live_3703a34c4a28d7aefbe6e232f8629d438c59a5c8', // <-- REPLACE THIS with your Paystack public key
    email: email,
    amount: parseInt(currentModalProduct.price.replace(/,/g, '')) * 100, // Paystack expects amount in kobo
    currency: 'NGN',
    label: currentModalProduct.productName,
    metadata: {
      custom_fields: [
        { display_name: 'Delivery Address', variable_name: 'delivery_address', value: address }
      ]
    },
    callback: function(response){
      // Send details to Formspree
      fetch('https://formspree.io/f/mnngzvyv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          address: address,
          product: currentModalProduct.productName,
          price: currentModalProduct.price,
          paystack_ref: response.reference
        })
      });
      alert('Payment complete! Reference: ' + response.reference + '\nDelivery Address: ' + address);
    },
    onClose: function(){
      alert('Transaction was not completed.');
    }
  });
  handler.openIframe();
});

// Paystack payment handler for all product buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.paystack-pay-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      let amount = btn.getAttribute('data-amount');
      let product = btn.getAttribute('data-product');
      let email = '';
      while (true) {
        email = prompt('Enter your email address to pay for ' + product + ':');
        if (email === null) return; // Cancelled
        if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) break;
        alert('Please enter a valid email address.');
      }
      let handler = PaystackPop.setup({
        key: 'pk_live_3703a34c4a28d7aefbe6e232f8629d438c59a5c8', // <-- REPLACE THIS with your Paystack public key
        email: email,
        amount: parseInt(amount, 10) * 100, // Paystack expects amount in kobo
        currency: 'NGN',
        label: product,
        callback: function(response){
          alert('Payment complete! Reference: ' + response.reference);
        },
        onClose: function(){
          alert('Transaction was not completed.');
        }
      });
      handler.openIframe();
    });
  });
});