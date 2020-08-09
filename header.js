function showList() {
  var outerdiv = document.getElementById("navbar");
  if (outerdiv.className === "header") {
    outerdiv.className += " navResponsive";
  }
}
function hideList() {
  var outerdiv = document.getElementById("navbar");
  if (outerdiv.className === "header navResponsive") {
    outerdiv.className = "header";
  }
}
