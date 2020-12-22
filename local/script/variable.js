/* VERSION TEMPLATE 
 Version 20 = year
         09 = month
         65 = commit id
         a = alpha (or) b = beta (or) f = final
*/
var websiteVersionVar = 'Version 201188f' ;
    
  document.getElementById("websiteVersion").innerHTML = websiteVersionVar ;

var gridCountVar = '67' ;
    
  document.getElementById("gridCount").innerHTML = gridCountVar ;

var materialCountVar = '0' ;
    
  document.getElementById("materialCount").innerHTML = materialCountVar ;

var badgeAddSelect = document.querySelectorAll(".bd-add");
  for (var i = 0; i <= badgeAddSelect.length - 1; i++) {
    badgeAddSelect[i].textContent = 'Add';
  }
var badgeRemoveSelect = document.querySelectorAll(".bd-remove");
  for (var i = 0; i <= badgeRemoveSelect.length - 1; i++) {
    badgeRemoveSelect[i].textContent = 'Remove';
  }
var badgeFixSelect = document.querySelectorAll(".bd-fix");
  for (var i = 0; i <= badgeFixSelect.length - 1; i++) {
    badgeFixSelect[i].textContent = 'Fix';
  }
var badgeChangeSelect = document.querySelectorAll(".bd-change");
  for (var i = 0; i <= badgeChangeSelect.length - 1; i++) {
    badgeChangeSelect[i].textContent = 'Change';
  }
var badgeUploadSelect = document.querySelectorAll(".bd-upload");
  for (var i = 0; i <= badgeUploadSelect.length - 1; i++) {
    badgeUploadSelect[i].textContent = 'Upload';
  }

a = document.getElementById("websiteVersion");
a.setAttribute("href", "https://theema-dev.github.io/highRES/help#version201188");