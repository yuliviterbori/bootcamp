import axios from 'axios';

const options={
  "people": "https://swapi.dev/api/people/", 
  "planets": "https://swapi.dev/api/planets/", 
  "films": "https://swapi.dev/api/films/", 
  "species": "https://swapi.dev/api/species/", 
  "vehicles": "https://swapi.dev/api/vehicles/", 
  "starships": "https://swapi.dev/api/starships/"
}

const search = async (id, selectedOption) =>{
    const response = {data: {}, err: false};
    if(isNaN(id)){
      return {...response, err: true};
    }
    try{
      const res = await axios.get(`${options[selectedOption]}${id}`);
      return {...response, data: res.data}
    }catch(error){
      return {...response, err: true};
    }
  }

export default { search, options };