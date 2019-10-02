const baseURL = 'https://ghibliapi.herokuapp.com/films';


let url;


fetch('https://ghibliapi.herokuapp.com/films')
   .then(function (result) { 
      return result.json();
    })
   .then(function (json) { 
      titleDropdown(json)(); //invoked immediately
    })


const titleDropdown = (data) => data.forEach(ele => document.querySelector('#title-select').innerHTML += `<option value="<h2>${ele.title}</h2> <hr> <p>${ele.description}</p> <hr> <h5>Year Released</h5> <h5>${ele.release_date}</h5> <hr> <h5>Director</h5> <h5>${ele.director}</h5> <hr> <p>Rotten Tomatoes Score</p> <p>${ele.rt_score}<p> <hr> ">${ele.title}</option>`);
    
document.querySelector('#title-select').onchange = () => document.querySelector('#info').innerHTML = document.querySelector('#title-select').selectedOptions[0].value;


