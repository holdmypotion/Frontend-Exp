const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

// End section
const section = document.querySelector("section");
const end = section.querySelector("h1");

// SCROLL MAGIC

const controller = new ScrollMagic.Controller();

//SCENES
let scene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0,
})
  // .addIndicators()
  .setPin(intro)
  .addTo(controller);

//TEXT ANIMATION
const textAnim = gsap.to(text, { opacity: 0, duration: 3 });

let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

//VIDEO ANIMATION
let accelAmount = 0.1;
let scrollPos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollPos = e.scrollPos / 1000;
  // console.log(e);
});

setInterval(() => {
  delay += (scrollPos - delay) * accelAmount;
  // console.log(scrollPos, delay);

  // video.currentTime = scrollPos;
  video.currentTime = delay;
}, 90);
// put 1000/frameRate here
