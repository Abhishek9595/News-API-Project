let sportsApi = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`;

window.fetch(sportsApi)
.then((sportData) => {
    sportData.json()
     .then((sport) => {
          let sportFeed = sport.articles;
          let firstSportBlock = sport.articles;
          let sportNewsBlockOne = firstSportBlock[0];
          document.getElementById("sportFirstTemplate").innerHTML = `
             <ul>
                 <img src="${sportNewsBlockOne.urlToImage}" alt="ImageOne">
             </ul>
          `;
            let output = [];
            for(let sportOf of sportFeed) {
                output += `
                <ul>
                    <a href="${sportOf.url}" target="_blank">
                    <li>${sportOf.title}</li>
                    </a>
                </ul>
                `;
             document.getElementById("sportAllTemplate").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));