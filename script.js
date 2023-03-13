const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
const url = "https://pokeapi.co/api/v2/pokemon/";
const btn = document.getElementById("generate");
const cardEdit = document.querySelector('.card');


let getData = () => {
    let genID = Math.floor(Math.random() * 250) + 1;
    const final_url = url+genID;
    fetch(final_url)
    .then((response) => response.json())
    .then((data) => {
      genCard(data);
    });
}

let genCard = (data) => {
    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const Name = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    const themeColor = typeColor[data.types[0].type.name];
    cardEdit.innerHTML = `
              <img class="pokemon-photo" src=${imgSrc} />
              <h2 class="name">${Name}</h2>
              <div class="types">
              
              </div>
             
            <div class="stats">
              <div>
                <p>Attack:</p>
                <h3>${statAttack}</h3>
              </div>
              <div>
                <p>Defense:</p>
                <h3>${statDefense}</h3>
              </div>
              <div>
                <p>Speed:</p>
                <h3>${statSpeed}</h3>
                </div>
                </div>
                <p class="hp">
                   <span>HP</span>
                     ${hp}
                 </p>
      `;
      
      appendTypes(data.types);
      cardEdit.style.background = `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`;;
      cardEdit.querySelectorAll(".types span").forEach((typeColor) => {
        typeColor.style.backgroundColor = themeColor;
      }); 
    }

    let appendTypes = (types) => {
      types.forEach((item) => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
      });
    }



