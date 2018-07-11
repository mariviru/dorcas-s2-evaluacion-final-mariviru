'use strict';

var seriesContainer = document.querySelector('.series__container');
var seriesList = document.createElement('ul');

var url = 'http://api.tvmaze.com/search/shows?q=';

var userInput = document.querySelector('.input');
var searchButton = document.querySelector('.button');

seriesContainer.appendChild(seriesList);

function takeUserSearch() {
  seriesList.innerHTML = '';
  var inputValue = userInput.value;
  fetch(url + inputValue)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      for (var i = 0; i < json.length; i++) {
        console.log('show', json[i].show);
        var seriesName = json[i].show.name;
        var seriesImg = json[i].show.image;
        var seriesItem = document.createElement('li');
        var seriesImage = document.createElement('img');

        if (json[i].show.image === null) {
          console.log('if', seriesName);
          seriesImage.src = 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV';
        } else {
          console.log('else', seriesName);
          seriesImage.src = seriesImg.medium;
        }
        seriesList.appendChild(seriesItem);
        seriesList.classList.add('ul__container');
        seriesItem.innerHTML = seriesName;
        seriesItem.appendChild(seriesImage);
        seriesItem.classList.add('li__container');
        seriesImage.classList.add('image');
      }
    });
}

searchButton.addEventListener('click', takeUserSearch);
