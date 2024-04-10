function labelEffect(evt) {
   const inputField = evt.currentTarget;
   const labelId = inputField.id + "-label";
   const inputLabel = document.querySelector("#" + labelId);
   inputLabel.classList.add("label-effect");

   inputField.onblur = () => {
      inputLabel.classList.remove("label-effect");

      if (inputField.value.length > 0) {
         inputLabel.style.opacity = 0;
      } else {
         inputLabel.style.opacity = 1;
      }
   }
}

function setInputEvent(input) {
   input.addEventListener("focus", labelEffect);
}

const inputs = document.querySelectorAll(".input");   
inputs.forEach(setInputEvent);
