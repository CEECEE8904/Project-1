const DOMAIN = `https://pokeapi.co/api/v2/pokemon/bulbasaur/`;
const baseUrl = ``;
const button = document.querySelector('search-box-button');
const pkmnInput = document.querySelector('input');
const pkmnImg = document.getElementById('img-div');
const PO_API = `https://pokeapi.co/api/v2/pokemon/1/`
// const PO_APITYP = `https://pokeapi.co/api/v2/type/1/`;





// Testing to see if specific data can be pulled from API and console log responses
const api_data = async () => {
  const response = await axios.get(`${PO_API}`)
  // --- Input ---
  const namePok = response.data //Checks pokemon name and prints it out 
  const pokPic = response.data.sprites.front_default //Gets the sprite of the pokemon
  const pokType = response.data.types //FOR EACH LOOP that goes through an array (Displays the type)
  const pokHp = response.data.stats[5] //Shows the HP stat
  const pokAtk = response.data.stats[4] // Shows the Atk stat
  const pokDef = response.data.stats[3] // Shows the Def stat
  const pokSpAtk = response.data.stats[2] // Shows the SpAtk stat
  const pokSpDef = response.data.stats[1] // Shows the SpDef stat
  const pokSpd = response.data.stats[0] // Shows the Spd stat

  // --- Output ---
  console.log(namePok)
  console.log(pokPic)
  console.log(namePok)
  console.log(pokType)
  console.log(pokHp)
  console.log(pokAtk)
  console.log(pokDef)
  console.log(pokSpAtk)
  console.log(pokSpDef)
  console.log(pokSpd)

}
api_data()





// button.addEventListener('click', async () => {
//   const pkmnSrch = async () => {
//     const response = await axios.get(`${DOMAIN}`)
//     const data = response.data.abilities['1'].ability;
//     console.log(data)
//   }
//   pkmnSrch()

// button.addEventListener('click', async () => {
//   let pkmn = pkmnInput.value;
//   const response = await axios.get(`${DOMAIN}`);
//   console.log(response.data.abilites['1'].ability);
//   document.body.innerHTML += (response.data.abilities['0'].ability);
// });
