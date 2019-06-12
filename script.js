const DOMAIN = `https://pokeapi.co/api/v2/pokemon/`;
const baseUrl = ``;
const button = document.querySelector('#search-box-button');
const pkmnInput = document.querySelector('input');
const pokeData = document.querySelector('.poke-data');
const pkmnImg = document.getElementById('img-div');
const PO_API = `https://pokeapi.co/api/v2/pokemon/1/`
// const PO_APITYP = `https://pokeapi.co/api/v2/type/1/`;





// Testing to see if specific data can be pulled from API and console log responses

const api_data = async () => {
  const response = await axios.get(`${PO_API}`)
  // const namePok = response.data

  // --- Input ---
  // const namePok = response.data //Checks pokemon name and prints it out 
  // const pokPic = response.data.sprites.front_default //Gets the sprite of the pokemon
  //   const pokType = response.data.types //FOR EACH LOOP that goes through an array (Displays the type)
  //   const pokHp = response.data.stats[5] //Shows the HP stat
  //   const pokAtk = response.data.stats[4] // Shows the Atk stat
  //   const pokDef = response.data.stats[3] // Shows the Def stat
  //   const pokSpAtk = response.data.stats[2] // Shows the SpAtk stat
  //   const pokSpDef = response.data.stats[1] // Shows the SpDef stat
  //   const pokSpd = response.data.stats[0] // Shows the Spd stat

  //   // --- Output ---
  //   console.log(namePok)
  //   console.log(pokPic)
  //   console.log(namePok)
  //   console.log(pokType)
  //   console.log(pokHp)
  //   console.log(pokAtk)
  //   console.log(pokDef)
  //   console.log(pokSpAtk)
  //   console.log(pokSpDef)
  //   console.log(pokSpd)

}
api_data()



const pkmnSrch = async () => {
  const response = await axios.get(`${DOMAIN}${pkmnInput.value}`)
  const result = response.data
  pokeData.innerHTML = "";
  const display = document.createElement('p');
  // debugger;
  display.innerHTML = `
  <p>Name: ${result.name}</p>
  <img src ='${result.sprites.front_default}'/>
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


  {/* <table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>

</table> */}







  // for (let i = 0; i < result.length; i += 1) {
  //   let arr = ['name', 'sprites.front_default',];
  //   console.log(`in loop ${ result.arr[i] }`);
  //   // console.log(response)
  //   // display.textContent = result.arr[i];
  // }
  pokeData.appendChild(display);
  pokeData.appendChild(table);
  // pokeData.appendChild(table);
}

button.addEventListener('click', pkmnSrch)






