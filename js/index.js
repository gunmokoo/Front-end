const search = document.getElementById("search");
const category = document.getElementsByClassName("page__box");

function searchHandle() {
  search.value = search.value.toUpperCase();

  for (let i = 0; i < category.length; i++) {
    const contents = category[i].getElementsByClassName("page__box__contents");
    if (contents[0].innerText.indexOf(search.value) != -1) {
      category[i].style.display = "flex";
    } else {
      category[i].style.display = "none";
    }
  }
}

search.addEventListener("keyup", searchHandle);
