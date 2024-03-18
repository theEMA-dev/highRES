//#
//#   Vault - Main - Search Engine (vSE) v3
//#
function searchFunction() {
  var input,filter,ul,li,i,l,txtValue,result,noResult;
  noResult = document.getElementById('vaultmain-searchengine-alert');
  input = document.getElementById('vaultmain-searchengine-js-bridge');
  filter = input.value.toUpperCase();
  ul = document.getElementById("gridRow");
  li = ul.getElementsByClassName('col');
  result = ul.getElementsByClassName('se-shown');
  txtValue = 0;
  for (i = 0; i < li.length; i++) {
    var imgElement = li[i].getElementsByTagName("img")[0];
    if (imgElement) {
      txtValue = imgElement.alt;
    } else {
      continue;
    }
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].classList.add('se-shown');
      noResult.style.display = "none";
    } else {
      li[i].style.display = "none";
      li[i].classList.remove('se-shown');
    }
    if (result.length < 1) {
      console.log('🆅🆂🅴 No results for this search')
      noResult.style.display = "";
    }
  }
}

//#
//#   Vault - Main - Filter Engine v2
//#
function checkboxFilter() {
  var ul, li, i, txtValue, radios, checkedValue;
  ul = document.getElementById("gridRow");
  li = ul.getElementsByClassName('col');
  radios = document.getElementsByName('filter');
  checkedValue = Array.from(radios).find(radio => radio.checked)?.value;

  if (checkedValue === '0') {
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
    return;
  }

  for (i = 0; i < li.length; i++) {
    var detailsElement = li[i].getElementsByClassName("details")[0];
    if (!detailsElement) {
      li[i].style.display = "none";
      continue;
    }

    var pElements = detailsElement.getElementsByTagName("p");
    txtValue = pElements[pElements.length - 1].innerText;
    if (txtValue && txtValue.includes(' - ')) {
      var resolution = txtValue.split(' - ')[1]; 
      if (!resolution.includes('x')) {
        li[i].style.display = "none"; 
        continue;
      }

      var resolutionParts = resolution.split('x');
      if (!Number.isInteger(parseInt(resolutionParts[0])) || !Number.isInteger(parseInt(resolutionParts[1]))) {
        li[i].style.display = "none"; 
        continue;
      }

      var resolutionCategory;
      var height = parseInt(resolutionParts[1]);
      if (height <= 1500) {
        resolutionCategory = 'HD';
      } else if (height <= 1800) {
        resolutionCategory = '2K';
      } else {
        resolutionCategory = '4K';
      }

      if (checkedValue && resolutionCategory !== checkedValue) {
        li[i].style.display = "none";
      } else {
        li[i].style.display = "";
        console.log('🆅🆂🅴 Resolution category: ' + resolutionCategory);
      }
    } else {
      li[i].style.display = "none";
    }
  }
}
function filterByAuthor() {
  var ul, li, i, txtValue, radios, checkedValue;
  ul = document.getElementById("gridRow");
  li = ul.getElementsByClassName('col');
  radios = document.getElementsByName('filter');
  checkedValue = Array.from(radios).find(radio => radio.checked)?.value;

  if (checkedValue === '0') {
    for (i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
    return;
  }

  for (i = 0; i < li.length; i++) {
    var detailsElement = li[i].getElementsByClassName("details")[0];
    if (!detailsElement) {
      li[i].style.display = "none";
      continue;
    }
    var pElements = detailsElement.getElementsByTagName("p");
    if (pElements.length === 1) {
      txtValue = pElements[0].innerText;
      txtValue = txtValue.split(' - ')[0];
      txtValue = txtValue.split('by ')[1];
    } else if (pElements.length > 1) {
      txtValue = pElements[1].innerText;
    }
    if (txtValue == checkedValue) {
      li[i].style.display = "";
      console.log('🆅🆂🅴 Author category: ' + txtValue);
    } else {
      li[i].style.display = "none";
    }
  }
}
function filterOpen() {
  document.getElementById("filter-dropdown").classList.toggle("active");
}