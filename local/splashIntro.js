/*
const splashIntro = document.querySelector('.splashIntro');

document.addEventListener('DOMContentLoaded', (e)=> {
  setTimeout(()=>{
    splashIntro.classList.add('display-none');
  }, 1300);
})
*/
const splashIntro = document.querySelector('.splashIntro');

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
function cookie(){
  var x = getCookie("splashLoaded");

  if (x == "" || x == null) {
    document.addEventListener('DOMContentLoaded', (e)=> {
      setTimeout(()=>{
        splashIntro.classList.add('display-none');
      }, 1500);
    })
    setCookie("splashLoaded", "splashLoaded", 0.1);
  } else if (x == "splashLoaded") {
    console.log("You came back!");
    splashIntro.classList.add('noRun')
  }
}
cookie();