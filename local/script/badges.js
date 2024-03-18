//#
//# Vault - Auxiliary - Badges v1
//#
var badgeAddSelect = document.querySelectorAll(".bd-add");
  for (var i = 0; i <= badgeAddSelect.length - 1; i++) {
    badgeAddSelect[i].textContent = 'NEW';
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