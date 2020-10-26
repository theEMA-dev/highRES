function mobileTriggered() {
  var navElement = document.getElementsByClassName("responsiveNav");
  var displaySetting = navElement[0].style.display;
  var i;
  for(var i=0; i < 5; i++) {
    if (displaySetting == 'block') { 
    navElement[i].style.display = 'none';
    }
    else { 
    navElement[i].style.display = 'block';
    }
  }
}