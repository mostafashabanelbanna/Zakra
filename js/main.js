// Sidenav Toggler
function toggleNav() {
  var Sidenav = document.getElementById("mySidenav");
  if (Sidenav.style.width === "250px") {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
}
