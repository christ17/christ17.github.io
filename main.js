( function() {
  const menu = document.getElementById("menu");
  const button = document.getElementById("menu-toggle");
  const mobile = menu.getElementsByTagName("ul");

  button.addEventListener("click", function() {
    menu.classList.toggle("menu-toggled");
  });
} () );
