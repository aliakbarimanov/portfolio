//! Main JS Start

const hero = document.querySelector(".hero");
const projects = document.querySelector(".projects");
const projectsTitle = document.querySelector(".projectsTitle");
const aboutSection = document.querySelector(".about");
const aboutTitle = document.querySelector(".aboutTitle"); 

//? Header JS Start

const profilePhoto = document.querySelector(".profilePhoto");
const socialList = document.querySelector(".socialList");

profilePhoto.onclick = () => {
  socialList.classList.toggle("active");
};

// -----------------------------------------------------

const aze = document.querySelector(".aze");
const eng = document.querySelector(".eng");

aze.onclick = () => {
  aze.classList.toggle("active");

  if (aze.className.includes("active")) {
    eng.classList.remove("active");
  } else {
    eng.classList.add("active");
  }
};

eng.onclick = () => {
  eng.classList.toggle("active");

  if (eng.className.includes("active")) {
    aze.classList.remove("active");
  } else {
    aze.classList.add("active");
  }
};

// ------------------------------------------

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const header = document.querySelector(".header");
const mode = document.querySelector(".mode");
const socialLink = document.querySelectorAll(".socialLink");
const downloadBtn = document.querySelector(".downloadBtn");
const menuLink = document.querySelectorAll(".menuLink");
const navBar = document.querySelector(".navBar");
const barBtn = document.querySelector(".barBtn");

sun.onclick = () => {
  sun.classList.toggle("active");

  if (sun.className.includes("active")) {
    moon.classList.remove("active");
  } else {
    moon.classList.add("active");
  }

  if (sun.className.includes("active")) {
    header.classList.remove("nightMode");
    sun.classList.remove("nightMode");
    moon.classList.remove("nightMode");
    Array.from(socialLink).map((item) => {
      item.classList.remove("nightMode");
    });
    downloadBtn.classList.remove("nightMode");
    Array.from(menuLink).map((item) => {
      item.classList.remove("nightMode");
    });
    navBar.classList.remove("nightMode");
    barBtn.classList.remove("nightMode");
    hero.classList.remove("nightMode");
    projects.classList.remove("nightMode");
    projectsTitle.classList.remove("nightMode");
    aboutSection.classList.remove("nightMode");
    aboutTitle.classList.remove("nightMode");
  }

  if (moon.className.includes("active")) {
    sun.classList.remove("active");
    header.classList.add("nightMode");
    sun.classList.add("nightMode");
    moon.classList.add("nightMode");
    Array.from(socialLink).map((item) => {
      item.classList.add("nightMode");
    });
    downloadBtn.classList.add("nightMode");
    Array.from(menuLink).map((item) => {
      item.classList.add("nightMode");
    });
    navBar.classList.add("nightMode");
    barBtn.classList.add("nightMode");
    hero.classList.add("nightMode");
    projects.classList.add("nightMode");
    projectsTitle.classList.add("nightMode");
    aboutSection.classList.add("nightMode");
    aboutTitle.classList.add("nightMode");
  }
};

moon.onclick = () => {
  moon.classList.toggle("active");

  if (moon.className.includes("active")) {
    sun.classList.remove("active");
  } else {
    sun.classList.add("active");
  }

  if (sun.className.includes("active")) {
    header.classList.remove("nightMode");
    sun.classList.remove("nightMode");
    moon.classList.remove("nightMode");
    Array.from(socialLink).map((item) => {
      item.classList.remove("nightMode");
    });
    downloadBtn.classList.remove("nightMode");
    Array.from(menuLink).map((item) => {
      item.classList.remove("nightMode");
    });
    navBar.classList.remove("nightMode");
    barBtn.classList.remove("nightMode");
    hero.classList.remove("nightMode");
    projects.classList.remove("nightMode");
    projectsTitle.classList.remove("nightMode");
    aboutSection.classList.remove("nightMode");
    aboutTitle.classList.remove("nightMode");
  }

  if (moon.className.includes("active")) {
    sun.classList.remove("active");
    header.classList.add("nightMode");
    sun.classList.add("nightMode");
    moon.classList.add("nightMode");
    Array.from(socialLink).map((item) => {
      item.classList.add("nightMode");
    });
    downloadBtn.classList.add("nightMode");
    Array.from(menuLink).map((item) => {
      item.classList.add("nightMode");
    });
    navBar.classList.add("nightMode");
    barBtn.classList.add("nightMode");
    hero.classList.add("nightMode");
    projects.classList.add("nightMode");
    projectsTitle.classList.add("nightMode");
    aboutSection.classList.add("nightMode");
    aboutTitle.classList.add("nightMode");
  }
};

// -----------------------------------------

barBtn.onclick = () => {
  navBar.classList.toggle("active");
};

//? Header JS End

//? Hero JS Start
const slider = document.querySelector(".slider");

slider.addEventListener("mousedown", () => slider.classList.add("grabbing"));
slider.addEventListener("mouseup", () => slider.classList.remove("grabbing"));

let sliderArray = [
  {
    id: 1,
    image: "./assets/images/slider/1.jpg",
  },
  {
    id: 2,
    image: "./assets/images/slider/2.jpg",
  },
  {
    id: 3,
    image: "./assets/images/slider/3.jpg",
  },
  {
    id: 4,
    image: "./assets/images/slider/4.jpg",
  },
  {
    id: 5,
    image: "./assets/images/slider/5.jpg",
  },
];

let ind = 0;

let slideInterval = setInterval(() => {
  let srcImg = sliderArray[ind].image;

  slider.innerHTML = `
        <img src="${srcImg}" class="sliderImg" alt="Slider Image">
    `;

  ind++;

  if (sliderArray.length === ind) {
    clearInterval(slideInterval);
  }
}, 2000);

//? Hero JS End

//? Projects JS Start
const projectImage = document.querySelectorAll(".projectImage");
projectImage.forEach((item) => {
  item.onmouseover = () => {
    item.classList.add("active");

    if (sun.className.includes("active")) {
      item.parentElement.children[1].classList.remove("nightMode");
    }
    if (moon.className.includes("active")) {
      item.parentElement.children[1].classList.add("nightMode");
    }
  };
  item.onmouseout = () => {
    item.classList.remove("active");
    item.parentElement.children[1].classList.remove("nightMode");
  };
});

//? Projects JS End

//? About JS Start
//! Tab Start

let eduDataBase = [
  {
    id: 1,
    title: "ADNSU",
    about:
      "ADNSU, ADNSU ADNSU ADNSU ADNSU ADNSU adipisicing elit. Est eiuseos laboriosam quaerat provident consequuntur voluptatibus nihilexercitationem soluta ipsum quia pariatur ut consequatur unde remneque cum, perferendis ad dicta. Laudantium animi, totamreprehenderit vel ut enim necessitatibus libero a, quod nobis aliquid dolorem, impedit itaque provident iusto nulla.",
  },
  {
    id: 2,
    title: "Texnoera Academy",
    about:
      "Texnoera Texnoera Texnoera Texnoera Texnoera Texnoera adipisicing elit. Minima neque quibusdam laborum perspiciatis? Fuga libero facilis, enim eum dolore praesentium nam excepturi quae ab neque, sed non ipsam autem commodi sapiente fugiat asperiores qui earum exercitationem nostrum natus! Possimus laborum dolorem, alias iusto placeat fuga laudantium eos eius repudiandae quod. Soluta tempora dolorem esse dicta, ipsa consequuntur natus tempore voluptatem, expedita laudantium nesciunt ex. Adipisci dicta consectetur facere eum aliquid.",
  },
];

const tabHeaderItem = document.querySelectorAll(".tabHeaderItem");
const tabBodyItem = document.querySelectorAll(".tabBodyItem");

Array.from(tabHeaderItem).map((head) => {
  head.addEventListener("click", () => {
    Array.from(tabHeaderItem).map((item) => {
      item.classList.remove("active");
    });
    head.classList.toggle("active");

    Array.from(tabBodyItem).map((body) => {
      body.classList.remove("active");

      if (head.id === body.id) {
        body.classList.add("active");
      }
    });
  });
});

//! Tab End

//! Accordion Start

const accordionHead = document.querySelectorAll(".accordionHead");
const accordionBody = document.querySelectorAll(".accordionBody");

accordionHead.forEach((accHead)=>{
  accHead.addEventListener("click", ()=>{
    accordionBody.forEach((accBody)=>{
      if(accHead.id === accBody.id){
        accBody.classList.toggle("active");
        if(accBody.className.includes("active")){
          accHead.parentElement.children[0].children[1].innerText = "-";
        }else{
          accHead.parentElement.children[0].children[1].innerText = "+";
        }
      }

      if(accHead.id !== accBody.id){
        accBody.classList.remove("active");
      }
    });
  });
});

//! Accordion End

//? About JS End
//! Main JS End