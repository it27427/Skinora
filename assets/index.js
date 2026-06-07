const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const backToTop = document.getElementById("backToTop");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/** MULTI-LINKS-OPEN */
document.getElementById("naturalCta").addEventListener("click", function (e) {
  e.preventDefault();

  const links = [
    "https://www.naturalhealthsource.com/ct/984831",
    "https://omg10.com/4/11088228",
  ];

  // open first immediately (guaranteed allowed)
  window.open(links[0], "_blank");

  // second open shortly after (still may be blocked in some browsers)
  setTimeout(() => {
    window.open(links[1], "_blank");
  }, 500);
});

/** MODAL */

// const modalOverlay = document.getElementById("modalOverlay");
// const modalBox = document.getElementById("modalBox");

// const adLink =
//   "https://www.effectivecpmnetwork.com/w378h9jy2?key=498c8702c2927fdc52a06af79a4e5a1c";

// // DOM loaded হলে modal show
// document.addEventListener("DOMContentLoaded", () => {
//   modalOverlay.classList.add("show");
// });

// // ad open + modal close
// modalBox.addEventListener("click", () => {
//   window.open(adLink, "_blank");
//   modalOverlay.classList.remove("show");
// });

// modalOverlay.addEventListener("click", (e) => {
//   if (e.target === modalOverlay) {
//     // intentionally empty (no close)
//     return;
//   }
// });
