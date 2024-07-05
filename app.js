let profile_toggle = document.querySelector(".profile-modal-toggle");
let profile_modal = document.querySelector(".profile-modal");
let icon = document.querySelector(".icon");
let icon_section = document.querySelector(".icon_section");
let beachIcon = document.querySelector(".Beachfront");
let beach_section = document.querySelector(".beach-section");
let amazing_pool_section = document.querySelector(".amazing_pool_section");
let amazing_pool_icon = document.querySelector(".Amazing_pools");
let amazing_view_section = document.querySelector(".amazing-view-section");
let amazing_view_icon = document.querySelector(".Amazing_view");
let display = 0;
let amazing_view_data = [
  {
    img_Src: "assets/view1.webp",
    title: "calaca, Philippines",
    hosted: "4,380 Kilometres away",
    price: "$400 night",
    url: "html_pages/amazing_view_page1.html",
  },
  {
    img_Src: "assets/view2.webp",
    title: "Santorini, Greece",
    hosted: "11,500 Kilometres away",
    price: "$600 night",
    url: "html_pages/amazing_view_page2.html",
  },

  {
    img_Src: "assets/view3.webp",
    title: "Queenstown, New Zealand",
    hosted: "12,000 Kilometres away",
    price: "$500 night",
    url: "html_pages/amazing_view_page3.html",
  },
  {
    img_Src: "assets/view4.webp",
    title: "Bali, Indonesia",
    hosted: "7,000 Kilometres away",
    price: "$300 night",
    url: "html_pages/amazing_view_page4.html",
  },

  {
    img_Src: "assets/view5.webp",
    title: "Cappadocia, Turkey",
    hosted: "10,000 Kilometres away",
    price: "$400 night",
    url: "html_pages/amazing_view_page5.html",
  },

  {
    img_Src: "assets/view6.webp",
    title: "Sapa, Vietnam",
    hosted: "6,500 Kilometres away",
    price: "$250 night",
    url: "html_pages/amazing_view_page6.html",
  },

  {
    img_Src: "assets/view7.webp",
    title: "Interlaken, Switzerland",
    hosted: "12,000 Kilometres away",
    price: "$700 night",
    url: "html_pages/amazing_view_page7.html",
  },

  {
    img_Src: "assets/view8.webp",
    title: "Banff, Canada",
    hosted: "13,000 Kilometres away",
    price: "$400 night",
    url: "html_pages/amazing_view_page8.html",
  },
];

let amazing_pools_data = [
  {
    img_Src: "assets/pool1.webp",
    title: "calaca, Philippines",
    hosted: "4,380 Kilometres away",
    price: "$400 night",
    url: "html_pages/amazing_pool_page1.html",
  },
  {
    img_Src: "assets/pool2.webp",
    title: "tulum, Mexico",
    hosted: "1,500 Kilometres away",
    price: "$350 night",
    url: "html_pages/amazing_pool_page2.html",
  },
  {
    img_Src: "assets/pool3.webp",
    title: "bali, Indonesia",
    hosted: "7,800 Kilometres away",
    price: "$500 night",
    url: "html_pages/amazing_pool_page3.html",
  },
  {
    img_Src: "assets/pool4.webp",
    title: "marrakech, Morocco",
    hosted: "6,200 Kilometres away",
    price: "$450 night",
    url: "html_pages/amazing_pool_page4.html",
  },
  {
    img_Src: "assets/pool5.webp",
    title: "santorini, Greece",
    hosted: "9,000 Kilometres away",
    price: "$550 night",
    url: "html_pages/amazing_pool_page5.html",
  },
  {
    img_Src: "assets/pool6.webp",
    title: "phuket, Thailand",
    hosted: "4,500 Kilometres away",
    price: "$400 night",
    url: "html_pages/amazing_pool_page6.html",
  },
  {
    img_Src: "assets/pool7.webp",
    title: "maldives",
    hosted: "8,500 Kilometres away",
    price: "$600 night",
    url: "html_pages/amazing_pool_page7.html",
  },
  {
    img_Src: "assets/pool8.webp",
    title: "bora bora, French Polynesia",
    hosted: "10,000 Kilometres away",
    price: "$700 night",
    url: "html_pages/amazing_pool_page8.html",
  },
];
let icon_page_data = [
  {
    img_Src: "assets/icon_image-1.webp",
    title: "Wake up in the Musée d'Orsay",
    hosted: "Hosted by Joy",
    price: "comming August",
    url: "html_pages/icon_page1.html",
  },
  {
    img_Src: "assets/icon.png",
    title: "Make memories with Inside Out 2",
    hosted: "Hosted by Mathieu Leanneur",
    price: "comming August",
    url: "html_pages/icon_page2.html",
  },
  {
    img_Src: "assets/icon_image-3.webp",
    title: "Stroll through Central Park",
    hosted: "Hosted by Alice",
    price: "coming August",
    url: "html_pages/icon_page3.html",
  },
  {
    img_Src: "assets/image_3.webp",
    title: "Explore the Louvre",
    hosted: "Hosted by Pierre",
    price: "coming September",
    url: "html_pages/icon_page4.html",
  },
  {
    img_Src: "assets/image_4.webp",
    title: "Wine Tasting in Napa",
    hosted: "Hosted by Emma",
    price: "coming October",
    url: "html_pages/icon_page5.html",
  },
  {
    img_Src: "assets/image_5.jpeg",
    title: "Cooking Class in Tuscany",
    hosted: "Hosted by Marco",
    price: "coming November",
    url: "html_pages/icon_page6.html",
  },
  {
    img_Src: "assets/image_6.webp",
    title: "Safari in Kenya",
    hosted: "Hosted by John",
    price: "coming December",
    url: "html_pages/icon_page7.html",
  },
  {
    img_Src: "assets/image_7.webp",
    title: "Yoga Retreat in Bali",
    hosted: "Hosted by Sara",
    price: "sold out",
    url: "html_pages/icon_page8.html",
  },
];
let beachfront_data = [
  {
    img_Src: "assets/beachImage-1.webp",
    title: "Tangalla, Sri Lanka",
    hosted: "unawatuna beach",
    price: "$1000 night",
    url: "html_pages/beach_page1.html",
  },
  {
    img_Src: "assets/beachImage-2.webp",
    title: "Maldives",
    hosted: "Maafushi Island",
    price: "$2000 night",
    url: "html_pages/beach_page2.html",
  },
  {
    img_Src: "assets/beachImage-3.webp",
    title: "Bali, Indonesia",
    hosted: "Seminyak Beach",
    price: "$800 night",
    url: "html_pages/beach_page3.html",
  },
  {
    img_Src: "assets/beachImage-4.webp",
    title: "Santorini, Greece",
    hosted: "Kamari Beach",
    price: "$1500 night",
    url: "html_pages/beach_page4.html",
  },
  {
    img_Src: "assets/beachImage-5.webp",
    title: "Cancun, Mexico",
    hosted: "Playa Delfines",
    price: "$900 night",
    url: "html_pages/beach_page5.html",
  },
  {
    img_Src: "assets/beachImage-6.webp",
    title: "Boracay, Philippines",
    hosted: "White Beach",
    price: "$1200 night",
    url: "html_pages/beach_page6.html",
  },
  {
    img_Src: "assets/beachImage-7.webp",
    title: "Phuket, Thailand",
    hosted: "Patong Beach",
    price: "$1100 night",
    url: "html_pages/beach_page7.html",
  },
  {
    img_Src: "assets/beachImage-8.webp",
    title: "Koh Samui, Thailand",
    hosted: "Chaweng Beach",
    price: "$1300 night",
    url: "html_pages/beach_page8.html",
  },
];
// card rendering

icon_page_data.map((item) => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<a href="${item.url}" target="_blank">
  <img src="${item.img_Src}" class="icon_image">
  <p class="icon_title mt-2">${item.title}</p>
  <p class="icon_hosted mt-[-1px]">${item.hosted}</p>

  <p class="icon_price mt-[-1px]">${item.price}</p>
  </a>`;
  icon_section.appendChild(card);
});
beachfront_data.map((item) => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<a href="${item.url}" target="_blank">
  <img src="${item.img_Src}" class="icon_image">
  <p class="icon_title mt-2">${item.title}</p>
  <p class="icon_hosted mt-[-1px]">${item.hosted}</p>

  <p class="icon_price mt-[-1px]">${item.price}</p>
  </a>`;
  beach_section.appendChild(card);
});
amazing_pools_data.map((item) => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<a href="${item.url}" target="_blank">
  <img src="${item.img_Src}" class="icon_image">
  <p class="icon_title mt-2">${item.title}</p>
  <p class="icon_hosted mt-[-1px]">${item.hosted}</p>

  <p class="icon_price mt-[-1px]">${item.price}</p>
  </a>`;
  amazing_pool_section.appendChild(card);
});
amazing_view_data.map((item) => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<a href="${item.url}" target="_blank">
  <img src="${item.img_Src}" class="icon_image">
  <p class="icon_title mt-2">${item.title}</p>
  <p class="icon_hosted mt-[-1px]">${item.hosted}</p>
  <p class="icon_price mt-[-1px]">${item.price}</p>
  </a>`;
  amazing_view_section.appendChild(card);
});
//conditinal rendering
icon.addEventListener("click", () => {
  beach_section.classList.add("hidden");
  icon_section.classList.remove("hidden");
  amazing_pool_section.classList.add("hidden");
  amazing_view_section.classList.add("hidden");
  icon.style.borderBottom = "2px solid black";
  beachIcon.style.borderBottom = "none";
  amazing_pool_icon.style.borderBottom = "none";
});
beachIcon.addEventListener("click", () => {
  beach_section.classList.remove("hidden");
  icon_section.classList.add("hidden");
  amazing_pool_section.classList.add("hidden");
  amazing_view_section.classList.add("hidden");
  icon.style.borderBottom = "none";
  beachIcon.style.borderBottom = "2px solid black";
  amazing_pool_icon.style.borderBottom = "none";
  amazing_view_icon.style.borderBottom = "none";
});

amazing_pool_icon.addEventListener("click", () => {
  amazing_pool_section.classList.remove("hidden");
  beach_section.classList.add("hidden");
  icon_section.classList.add("hidden");
  amazing_view_section.classList.add("hidden");
  icon.style.borderBottom = "none";
  beachIcon.style.borderBottom = "none";
  amazing_pool_icon.style.borderBottom = "2px solid black";
  amazing_view_icon.style.borderBottom = "none";
});
amazing_view_icon.addEventListener("click", () => {
  amazing_view_section.classList.remove("hidden");
  beach_section.classList.add("hidden");
  icon_section.classList.add("hidden");
  amazing_pool_section.classList.add("hidden");
  icon.style.borderBottom = "none";
  beachIcon.style.borderBottom = "none";
  amazing_pool_icon.style.borderBottom = "none";
  amazing_view_icon.style.borderBottom = "2px solid black";
});
// profile section toggle function
profile_toggle.addEventListener("click", () => {
  if (display == 0) {
    profile_modal.classList.remove("hidden");
    display = 1;
  } else {
    profile_modal.classList.add("hidden");
    display = 0;
  }
});
