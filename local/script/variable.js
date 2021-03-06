/* VERSION TEMPLATE 
 Version 2.0.3-2101a
         2 = major version
         0 = minor version 
         3 = patch (number of changes in changelog)
         ------------------------------------------
         -2101a
          21 = year
          01 = month
          a,b,f = alpha,beta,final
*/
var alertTitle = document.querySelectorAll(".alert");

  alertTitle[0].title = 'Uncategorized: 30\nMap Labs Collection: 54\nLEGO Collection: 9\nSoftware Collection: 10'

var websiteVersionVar = 'Version 2.0.8' ;
    
  document.getElementById("websiteVersion").innerHTML = websiteVersionVar ;

var gridCountVar = '103' ;
    
  document.getElementById("gridCount").innerHTML = gridCountVar ;

var gridCategoriesVar = 'Uncategorized: 30\nMap Labs Collection: 54\nLEGO Collection: 8\nSoftware Collection: 10' ;

  document.getElementById("gridCount").title = gridCategoriesVar ;

var materialCountVar = '0' ;
    
  document.getElementById("materialCount").innerHTML = materialCountVar ;

var badgeAddSelect = document.querySelectorAll(".bd-add");
  for (var i = 0; i <= badgeAddSelect.length - 1; i++) {
    badgeAddSelect[i].textContent = 'ADD';
  }
var badgeRemoveSelect = document.querySelectorAll(".bd-remove");
  for (var i = 0; i <= badgeRemoveSelect.length - 1; i++) {
    badgeRemoveSelect[i].textContent = 'REMOVE';
  }
var badgeFixSelect = document.querySelectorAll(".bd-fix");
  for (var i = 0; i <= badgeFixSelect.length - 1; i++) {
    badgeFixSelect[i].textContent = 'FIX';
  }
var badgeChangeSelect = document.querySelectorAll(".bd-change");
  for (var i = 0; i <= badgeChangeSelect.length - 1; i++) {
    badgeChangeSelect[i].textContent = 'CHANGE';
  }
a = document.getElementById("websiteVersion");
a.setAttribute("href", "https://theema-dev.github.io/highRES/help#version2.0");