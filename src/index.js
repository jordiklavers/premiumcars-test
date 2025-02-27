import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);

initFunctions();

console.log("Hello World");

console.log("test goes here")

function initFunctions() {
  initScrollTriggerAnimations();
}


function initScrollTriggerAnimations() {
  // Split text into words and chars
  let text = new SplitType("[data-split]", { types: "words, chars" });

  // Set initial state - move words down and hide them
  gsap.set(".word", {
    yPercent: 100,
    opacity: 0,
  });

  // Create the animation for each element with data-split
  document.querySelectorAll("[data-split]").forEach((element) => {
    gsap.to(element.querySelectorAll(".word"), {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%", // Starts animation when element is 80% from the top of the viewport
        toggleActions: "play none none reverse",
      },
    });
  });
}
