function searchFunction() {
  //#
  //#   highRES Search Engine 1.1
  //#
  var input,filter,ul,li,i,l,txtValue,placeholderDiv,result,noResult;
  noResult = document.getElementById('--searchengine-alert');
  input = document.getElementById('--searchengine-js-bridge');
  filter = input.value.toUpperCase();
  ul = document.getElementById("gridRow");
  li = ul.getElementsByClassName('col');
  result = ul.getElementsByClassName('se-shown');
  txtValue = 0;
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].getElementsByTagName("a")[0].title;
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