function searchFunction() {
  //#
  //#   Vault - Main - Search Engine v1
  //#
  var input,filter,ul,li,i,l,txtValue,result,noResult;
  noResult = document.getElementById('vaultmain-searchengine-alert');
  input = document.getElementById('vaultmain-searchengine-js-bridge');
  filter = input.value.toUpperCase();
  ul = document.getElementById("gridRow");
  li = ul.getElementsByClassName('col');
  result = ul.getElementsByClassName('se-shown');
  txtValue = 0;
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].getElementsByTagName("img")[0].alt;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].classList.add('se-shown');
      noResult.style.display = "none";
    } else {
      li[i].style.display = "none";
      li[i].classList.remove('se-shown');
    }
    if (result.length < 1) {
      console.log('no result')
      noResult.style.display = "";
    }
  }
}
function checkboxFilter() {
  var ul, li, i, txtValue, radios, checkedValue;
  ul = document.getElementById("gridRow");
  li = ul.getElementsByClassName('col');
  radios = document.getElementsByName('filter');
  checkedValue = Array.from(radios).find(radio => radio.checked)?.value;

  for (i = 0; i < li.length; i++) {
    var detailsElement = li[i].getElementsByClassName("details")[0];
    if (!detailsElement) {
      li[i].style.display = "none"; // Hide divs without a details element
      continue;
    }

    var pElements = detailsElement.getElementsByTagName("p");
    txtValue = pElements[pElements.length - 1].innerText; // Select the last p element
    if (txtValue && txtValue.includes(' - ')) {
      var resolution = txtValue.split(' - ')[1]; // Extract resolution
      if (!resolution.includes('x')) {
        li[i].style.display = "none"; // Hide divs without resolution in correct format
        continue;
      }

      var resolutionParts = resolution.split('x');
      if (!Number.isInteger(parseInt(resolutionParts[0])) || !Number.isInteger(parseInt(resolutionParts[1]))) {
        li[i].style.display = "none"; // Hide divs with non-numeric resolution
        continue;
      }

      var resolutionCategory;

      // Categorize resolution
      var height = parseInt(resolutionParts[1]);
      if (height <= 1500) {
        resolutionCategory = 'HD';
      } else if (height <= 1800) {
        resolutionCategory = '2K';
      } else {
        resolutionCategory = '4K';
      }

      console.log('Resolution:', resolution, 'Category:', resolutionCategory); // Debugging line

      if (checkedValue && resolutionCategory !== checkedValue) {
        li[i].style.display = "none";
      } else {
        li[i].style.display = "";
      }
    } else {
      li[i].style.display = "none"; // Hide divs without resolution information
    }
  }
}
function filterOpen() {
  document.getElementById("dropdown").classList.toggle("show");
}