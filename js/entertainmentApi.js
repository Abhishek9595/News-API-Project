let entertainmentApi = `http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`;

window.fetch(entertainmentApi)
.then((EntertainmentData) => {
    EntertainmentData.json()
     .then((entertainment) => {
         //console.log(entertainment.articles);
          let entertainmentFeed = entertainment.articles;
          let firstEntertainmentBlock = entertainment.articles;
          let entertainmentNewsBlockOne = firstEntertainmentBlock[0];
          document.getElementById("entertainmentFirstTemplate").innerHTML = `
             <ul>
                 <img src="${entertainmentNewsBlockOne.urlToImage}" alt="ImageOne">
             </ul>
          `;
            let output = [];
            for(let enter of entertainmentFeed) {
                output += `
                <ul>
                    <a href="${enter.url}" target="_blank">
                    <li>${enter.title}</li>
                    </a>
                </ul>
                `;
             document.getElementById("entertainmentAllTemplate").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));