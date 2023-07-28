changeArrowOpacity = function () {
  arrow = document.getElementById('arrow');

  if (document.documentElement.scrollTop > 200) {
    arrow.classList.add("transparent");
  } else {
    arrow.classList.remove("transparent");
  }
};

window.onload = changeArrowOpacity;
document.addEventListener("scroll", changeArrowOpacity);
