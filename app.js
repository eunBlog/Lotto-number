const btn = document.querySelector(".btn");
const nub = document.querySelector("#number");

var vae = [];
function clcikz() {
  for (i = 0; i < 6; i++) {
    last = Math.floor(Math.random() * 45) + 1;

    vae.push(last);
  }

  vae.sort(function (a, b) {
    return a - b;
  });
  nub.innerText = `이번주로또 번호 ${vae}`;
}

////
/////
/////

btn.addEventListener("click", clcikz);
