const baseURL = 'https://ghibliapi.herokuapp.com/films';


let url;


fetch('https://ghibliapi.herokuapp.com/films')
   .then(function (result) { 
      return result.json();
    })
   .then(function (json) { 
      titleDropdown(json)(); //invoked immediately to fill dropdown? 
    })


const titleDropdown = (data) => data.forEach(ele => document.querySelector('#title-select').innerHTML += `<option value="<h2>${ele.title}</h2> <p>${ele.description}</p> <h5>${ele.release_date}</h5> <p>Director</p> <p>${ele.director}</p> <p>Rotten Tomatoes Score</p> <p>${ele.rt_score}<p>">${ele.title}</option>`);
    
document.querySelector('#title-select').onchange = () => document.querySelector('#movie-details').innerHTML = document.querySelector('#title-select').selectedOptions[0].value;


