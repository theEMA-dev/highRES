function searchFunction() {
  //#
  //#   highRES Search Engine 1.0
  //#
  var input, filter, ul, li, i, txtValue, placeholderDiv, noResult, count;
  placeholderDiv = document.createElement('div');
  placeholderDiv.classList.add("col");
  noResult = document.getElementById('--searchengine-alert');
  input = document.getElementById('--searchengine-js-bridge');
  filter = input.value.toUpperCase();
  ul = document.getElementById("gridRow");
  li = ul.getElementsByClassName('col');
  txtValue = 0;
  count = 0;
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].getElementsByTagName("a")[0].title;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].classList.add('se-shown');
      ul.appendChild(placeholderDiv);
      ul.appendChild(placeholderDiv);
      ul.appendChild(placeholderDiv);
      ul.appendChild(placeholderDiv);
      ul.appendChild(placeholderDiv);
      noResult.style.display = "none";
    } else {
      li[i].style.display = "none";
      li[i].classList.remove('se-shown');
    }
    count = ul.querySelectorAll('.se-shown');
    if (count.length < 1) {
      console.log('no result')
      noResult.style.display = "";
    }
  }
}