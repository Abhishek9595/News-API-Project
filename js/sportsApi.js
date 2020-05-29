let sportsApi = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`;

window.fetch(sportsApi)
.then((sportsData) => {
     sportsData.json()
     .then((sports) => {
         //console.log(sports.articles);
          let sportsFeed = sports.articles;
          let firstSportsBlock = sports.articles;
          let sportsNewsBlockOne = firstSportsBlock[0];
          document.getElementById("sportsFirstTemplate").innerHTML = `
             <ul>
                 <img src="${sportsNewsBlockOne.urlToImage}" alt="ImageOne">
             </ul>
          `;
            let output = [];
            for(let sport of sportsFeed) {
                output += `
                <ul>
                    <a href="${sport.url}" target="_blank">
                    <li>${sport.title}</li>
                    </a>
                </ul>
                `;
             document.getElementById("sportsAllTemplate").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));