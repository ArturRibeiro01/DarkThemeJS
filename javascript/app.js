function toggleTheme(theme) {
  document.body.classList.toggle(theme);
}

document
  .getElementById("theme-toggle")

  .addEventListener("click", function (event) {
    event.preventDefault;
    toggleTheme("dark");
  });

const cast = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const castList = document.querySelector(".cast");

cast.forEach((person) => {
  const item = document.createElement("li");
  const personName = document.createTextNode(person);
  item.appendChild(personName);
  castList.appendChild(item);
});
