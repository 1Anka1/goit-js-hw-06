const input = document.querySelector("#validation-input");
const lengthOfInput = parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", onInputBlur);

function onInputBlur() {
  if (input.value.length === lengthOfInput) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}