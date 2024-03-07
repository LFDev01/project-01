const dropdown = document.querySelector(".dropdown-items-container");
const dropdownIcon = document.querySelector(".dropdown-icon");

function removeClasses() {
   dropdown.classList.remove("dropactive");
   dropdownIcon.classList.remove("open");
}

function bodyDisableDropdown() {
   if (dropdown.classList[1]) {
      removeClasses();
      bodyc.removeEventListener("click", bodyDisableDropdown);
   }
}

function dropdownMenu(evt) {
   evt.stopPropagation();

   if (dropdown.classList[1]) {
      removeClasses();
   } else {
      dropdown.classList.add("dropactive");
      dropdownIcon.classList.add("open");
      bodyc.addEventListener("click", bodyDisableDropdown);
   }
}

const dropdownBtn = document.querySelector(".dropdown-button");
dropdownBtn.addEventListener("click", dropdownMenu);
const bodyc = document.querySelector("body");
