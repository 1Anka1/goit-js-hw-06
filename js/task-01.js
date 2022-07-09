const categoryEl = document.querySelectorAll(".item");
console.log("Number of categories:", categoryEl.length);

categoryEl.forEach((el) => {
  const nameOfEl = el.querySelector("h2");
  const numberOfEl = el.querySelectorAll("li");
  console.log("Category", nameOfEl.textContent);
  console.log("Elements", numberOfEl.length);
});
