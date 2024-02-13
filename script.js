let yesbtn = document.querySelector (".yes");
let nobtn = document.querySelector (".no");

let words = ["ga", "yakin?", "bener ga mau?", "mang ea?", "coba pikir lagi", "ayolah :(", "pikir tiga kali", "ah masaa", "pls :(",
"mau", "bener? :)", "ga", ":("]
console.log(words.length);
  let i = 0;
  let j = 60;
nobtn.addEventListener("click", (e) => {
  changeBg();
})
var yesheight = yesbtn.clientHeight;
var yeswidt = yesbtn.clientWidth;

function changeBg() {
  if (i == words.length - 1) {
    i = 0;
    nobtn.innerText = words[i];
    yesbtn.style.height = yesheight + 10 + "px";
    yesbtn.style.width = yeswidt + 100 + "px";
  }
  else {

    i += 1;
    nobtn.innerText = words[i];
    var yesheight = yesbtn.clientHeight;
    var yeswidt = yesbtn.clientWidth;
    yesbtn.style.height = yesheight + 10 + "px";
    yesbtn.style.width = yeswidt + 100 + "px";
  }

}
