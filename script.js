// const button = button.querySelector("#search-box-button");
const PO_API = `https://pokeapi.co/api/v2/pokemon-form/1/`;


const api_data = async () => {
  const response = await axios.get(`${PO_API}`)
  console.log(response)
}

api_data()