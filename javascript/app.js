function toggleTheme(theme) {
  document.body.classList.toggle(theme);
}

document
  .getElementById("theme-toggle")

  .addEventListener("click", function (event) {
    event.preventDefault;
    toggleTheme("dark");
  });

const cast = [
  "Cumpadi Uóshito",
  "Beto Jamaica",
  "Sheila Mello",
  "Jacaré",
  "Sheila Carvalho",
];

const castList = document.querySelector(".cast");

cast.forEach((person) => {
  const item = document.createElement("li");
  const personName = document.createTextNode(person);
  item.appendChild(personName);
  castList.appendChild(item);
});
