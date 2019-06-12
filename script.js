const DOMAIN = `https://pokeapi.co/api/v2/pokemon/`;
const baseUrl = ``;
const button = document.querySelector('#search-box-button');
const pkmnInput = document.querySelector('input');
const pokeData = document.querySelector('.poke-data');
const pkmnImg = document.getElementById('img-div');
const PO_API = `https://pokeapi.co/api/v2/pokemon/1/`



const pkmnSrch = async () => {
  const response = await axios.get(`${DOMAIN}${pkmnInput.value}`)
  const result = response.data
  pokeData.innerHTML = "";
  const display = document.createElement('p');
  display.innerHTML = `
  <img src ='${result.sprites.front_default}'/>
  <p id = "pkmnNm" >Name: ${result.name}</p>
  <p>Height: ${result.height}</p>
  <p>Weight: ${result.weight}</p>
  `

  const table = document.createElement('table');
  table.innerHTML = `
  <tr>
    <th>Stats</th>
    <th>Values</th>
  </tr>
  `

  result.stats.forEach((stat) => {
    table.innerHTML += `
    <tr>
      <td>${stat.stat.name}</td>
      <td>${stat.base_stat}</td>
    </tr>
    `})

  pokeData.appendChild(display);
  pokeData.appendChild(table);
}

button.addEventListener('click', pkmnSrch)






