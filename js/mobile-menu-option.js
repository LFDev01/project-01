function hideMobileMenu() {
   if (menu.checked) {
      menu.checked = false;
   }
}

const navMenu = document.querySelectorAll(".navigation-menu li");
navMenu.forEach((item) => {
   item.addEventListener("click", hideMobileMenu);
})

const menu = document.querySelector("#mobile-menu");
