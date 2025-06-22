const input = document.getElementById("search-input");
const button = document.getElementById("search-button");

const creatureName = document.getElementById("creature-name");
const creatureId = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const api = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

async function creatureSearch(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      alert("Creature not found");
      return;
    }

    const data = await response.json();

    creatureName.textContent = data.name.toUpperCase();
    creatureId.textContent = #${data.id};
    weight.textContent = Weight: ${data.weight};
    height.textContent = Height: ${data.height};

    types.innerHTML = "";
    data.types.forEach(typeObj => {
      const span = document.createElement("span");
      span.textContent = typeObj.name.toUpperCase();
      span.classList.add("type");
      types.appendChild(span);
    });

    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";

    data.stats.forEach(stat => {
      const el = document.getElementById(stat.name);
      if (el) {
        el.textContent = stat.base_stat;
      }
    });

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

button.addEventListener("click", () => {
  const query = input.value.trim().toLowerCase();
  creatureSearch(api + query);
});
