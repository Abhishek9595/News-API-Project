let businessApi = `http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cd4d84c252ad4d5995cdeaa09f4d3545`;

window.fetch(businessApi)
.then((businessData) => {
    businessData.json()
     .then((business) => {
          let businessFeed = business.articles;
          let firstBusinessBlock = business.articles;
          let businessNewsBlockOne = firstBusinessBlock[0];
          document.getElementById("businessFirstTemplate").innerHTML = `
             <ul>
                 <img src="${businessNewsBlockOne.urlToImage}" alt="ImageOne">
             </ul>
          `;
            let output = [];
            for(let bus of businessFeed) {
                output += `
                <ul>
                    <a href="${bus.url}" target="_blank">
                    <li>${bus.title}</li>
                    </a>
                </ul>
                `;
             document.getElementById("businessAllTemplate").innerHTML = output;
         }
     })
     .catch((err) => console.log(err));
})
.catch((err) => console.log(err));