// DOM
const background = document.querySelector("header");
const imgHeader = document.querySelector(".image-info-header");
const imgPhotographer = document.querySelector(".photographer");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");
const dotsBox = document.querySelector(".dots");

class BgImage {
  constructor(src, head, photographer) {
    this.src = src;
    this.head = head;
    this.photographer = photographer;
  }
}

const bgImg1 = new BgImage(
  "Hero1",
  "person wearing white and gray mask",
  "Photo by: Lívia Chauar"
);
const bgImg2 = new BgImage(
  "Hero2",
  "people wearing masks",
  "Photo by: Marc Vandecasteele"
);
const bgImg3 = new BgImage(
  "Hero3",
  "two topless men performing",
  "Photo by: Samuel Dixon"
);
const bgImg4 = new BgImage(
  "Hero4",
  "people wearing white and blue masks",
  "Photo by: Marc Vandecasteele"
);
const bgImg5 = new BgImage(
  "Hero5",
  "person wearing yellow green and purple mask",
  "Photo by: Andres Vera"
);
bgImages = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5];

//-----------------------------//
//--- functions ---//
//-----------------------------//
changeImg = () => {
  background.style.backgroundImage = ` url(js/Img/${bgImages[num].src}.jpg)`;
  imgHeader.innerText = bgImages[num].head;
  imgPhotographer.innerText = bgImages[num].photographer;
};
//If you want add image to the slider//
addImageToSlider = (img, arr) => {
  arr.push(img);
};

//change image next//
let num = 0;
changeImgNext = () => {
  dots[num].classList.remove("selected-dot");
  num++;
  if (num == bgImages.length) {
    num = 0;
  }
  dots[num].classList.add("selected-dot");
  changeImg();
};

//change image prev//
changeImgPrev = () => {
  dots[num].classList.remove("selected-dot");
  num--;
  if (num < 0) {
    num = 4;
  }
  dots[num].classList.add("selected-dot");
  changeImg();
};
//Change image by dot click//
changeImgDot = (num) => {
  dots[num].classList.add("selected-dot");
  changeImg();
};

//-----------------------------//
//--- Event listeners ---//
//-----------------------------//

next.addEventListener("click", () => {
  changeImgNext();
});
prev.addEventListener("click", () => {
  changeImgPrev();
});
dotsBox.addEventListener("click", (e) => {
  dots[num].classList.remove("selected-dot");
  const index = e.target.dataset.dotnum;
  num = e.target.dataset.dotnum;
  changeImgDot(index);
});
//-----------------------------//
//--- function calls ---//
//-----------------------------//
