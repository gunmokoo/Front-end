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
function pageMove(event) {
  if (event.target.innerText === "GRID") {
    location.href = "grid.html";
  }
  if (event.target.innerText === "LAYOUT") {
    location.href = "layout.html";
  }
}

search.addEventListener("keyup", searchHandle);
for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", pageMove);
}
