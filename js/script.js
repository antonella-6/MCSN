// THERE IS A FUNCTION THAT WE CAN ADD, LIKE A BUTTON WHEN THE PAGE START THAT FIT THE RIGHT DIMENSION
// BUT PROBABLY IT WILL BE HELPFUL ONLY FOR US TO TEST (?), IN THE TABLET THE WEBPAGE IS ALWAYS AT FULLSCREEN
// https://stackoverflow.com/questions/29544337/how-to-open-my-page-to-with-a-specific-size-browser-window
//
//––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

const track = document.querySelector(".slider_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".slider_button--right");
const prevButton = document.querySelector(".slider_button--left");
const slideWidth = slides[0].getBoundingClientRect().width;
const indicators = document.querySelector(".slide-indicator");
const indicator = Array.from(indicators.children);
const infoButtonOpen = document.querySelector(".info-button-open");
const infoButtonClose = document.querySelector(".info-button-close");
const infoBox = document.querySelector(".info-box");
//console.log(slideWidth);

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};


// When click Left, move to left
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  //move to prev slide
  moveToSlide(track, currentSlide, prevSlide);
  removeArrow();
});

// When click Right, move to right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  //move to next slide
  moveToSlide(track, currentSlide, nextSlide);
  removeArrow();
});

function openInfo() {
  document.getElementById("myInfoBox").style.width = "436px";
  document.getElementById("myInfoBox").style.left = "calc(100% - 436px)";
  prevButton.classList.add("is-hidden");
  nextButton.classList.add("is-hidden");
  
}

function closeInfo() {
  document.getElementById("myInfoBox").style.width = "0";
  document.getElementById("myInfoBox").style.left = "100%";
  prevButton.classList.remove("is-hidden");
  nextButton.classList.remove("is-hidden");
}


//Remove Prev and Next Arrows (First and Last)
const removeArrow = () => {
  const currentSlide = track.querySelector(".current-slide");
  const slideOne = slides[0];
  const slideTwo = slides[1];
  const slideThree = slides[2];
  const indicatorOne = indicator[0];
  const indicatorTwo = indicator[1];
  const indicatorThree = indicator[2];

  if (currentSlide == slideOne) {
    prevButton.classList.add("is-hidden");
    indicatorOne.classList.remove("is-hidden");
    indicatorTwo.classList.add("is-hidden");
    indicatorThree.classList.add("is-hidden");
    console.log("slide 1");
  } else if (currentSlide == slideTwo) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
    indicatorOne.classList.add("is-hidden");
    indicatorTwo.classList.remove("is-hidden");
    indicatorThree.classList.add("is-hidden");
    console.log("slide 2");
  } else if (currentSlide == slideThree) {
    nextButton.classList.add("is-hidden");
    indicatorOne.classList.add("is-hidden");
    indicatorTwo.classList.add("is-hidden");
    indicatorThree.classList.remove("is-hidden");
    console.log("slide 3");
  }
};

removeArrow();
