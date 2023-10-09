function searchFunction() {
  //#
  //#   Vault - Main - Search Engine v1
  //#
  var input,filter,ul,li,i,l,txtValue,placeholderDiv,result,noResult;
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