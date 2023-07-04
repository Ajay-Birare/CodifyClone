function toggleShow() {
  var btn = document.getElementById("btn1");
  var mid = document.getElementById("middle");
  mid.classList.toggle("mid");
  if (mid.classList.contains("mid")) {
    btn.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATxJREFUSEvt1b1KQ0EQhuEnamVn7zUI3oGIoiiihYUoWNpq4QVZqIWIiNjZiIKNot6KP/iDjYxsIASS3ZMDiUW2O5zZeff7dma2YUCrMSCuIbhvzg+t/ldWT+Acu3jOnGwee1jDT7fY3B2P4AlTeMEsHjskXMEZxnCJ+O64cuDYuI0D/nr+FXO4b8u4nFwJ6HeCXtUFt8Pfk/ImvB26iOtcsZQobubYwHFS3oRP4iTZ+4mlEmgkrAKO+E0cpZMEfBxRB19YwE1OafN/VXDsC+WHGE1JQmnc+10ptBfFAwNvJbVxgFarPxBFdVuquorVueKKNiqq6CpWt/Zy39qplwGSVZ6zOlrlAdN4w0zhyLzAat3JFY/EKfbT3O6WL6bYDtbrPhKlRVo5Lmd15YSlG4bgUqdqxw2trm1haYJf26BCH0lwPYsAAAAASUVORK5CYII=";
  } else {
    btn.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAGZJREFUSEvtlrENACAMw8pnnMZpfAYTC1W3CDOEA2JhUpUW0GkQNwx+Zt6qj+ohdp7yKtVLDE6c78DiC+c4t/o46WLX8877rlzYOGGqxU/scYryB4KVCwNja9GtlhvwWpQrrQIx1Rt3TwofeC3yFwAAAABJRU5ErkJggg==";
  }
}

// contactToggle >contact-section

function contactShow() {
  let btn = document.querySelector(".contactToggle");
  let contact = document.querySelector(".contact-section");

  contact.classList.toggle("contactShow");
}
