// Sidenav Toggler
const toggleNav = () => {
  let Sidenav = document.getElementById("mySidenav");
  if (Sidenav.style.width === "250px") {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
};
// Sidenav Submenu
$(".sidenav li a").click(function () {
  $(this).parent().toggleClass("active-sub");
});

// Sidenav  Active Item
$(".sidenav a").on("click", function () {
  $(".sidenav").find("li.active").removeClass("active");
  $(this).parent("li").addClass("active");
});
