const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const recipes = document.querySelectorAll(".recipe-card");

// Function to filter recipes
function filterRecipes() {
  const input = searchInput.value.toLowerCase();
  recipes.forEach(recipe => {
    const title = recipe.querySelector("h4").innerText.toLowerCase();
    const desc = recipe.querySelector("p").innerText.toLowerCase();
    recipe.style.display = (title.includes(input) || desc.includes(input)) ? "block" : "none";
  });
}

// Live search while typing
searchInput.addEventListener("keyup", filterRecipes);

// Search on button click
searchBtn.addEventListener("click", filterRecipes);

// Contact form submission (dummy example)
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  document.getElementById("contactForm").reset();
}
