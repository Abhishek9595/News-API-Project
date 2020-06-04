window
.fetch(`https://api.covid19api.com/summary`)
.then((data) => {
    data
    .json()
    .then((covid) => {
        //console.log(covid.Global);
        let Global = covid.Global;
        document.getElementById("covidBlock").innerHTML = `
          <section>
              <div>
                  <span class="badge badge-warning" style="margin-right:8px">New Confirmed</span>
                  <span style="color:#000"><b>${Global.NewConfirmed}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger" style="margin-right:8px">NewDeaths</span>
                  <span style="color:#000"><b>${Global.NewDeaths}</b></span>
              </div>
              <div>
                  <span class="badge badge-success" style="margin-right:8px">NewRecovered</span>
                  <span style="color:#000"><b>${Global.NewRecovered}</b></span>
              </div>
              <div>
                  <span class="badge badge-warning" style="margin-right:8px">TotalConfirmed</span>
                  <span style="color:#000"><b>${Global.TotalConfirmed}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger" style="margin-right:8px">TotalDeaths</span>
                  <span style="color:#000"><b>${Global.TotalDeaths}</b></span>
              </div>
              <div>
                  <span class="badge badge-success" style="margin-right:8px">TotalRecovered</span>
                  <span style="color:#000"><b>${Global.TotalRecovered}</b></span>
              </div>
          </section>
        `;
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));

window
.fetch(`https://api.covid19api.com/summary`)
.then((data) => {
    data
    .json()
    .then((covid) => {
        console.log(covid.Countries[76]);
        let India = covid.Countries[76];
        document.getElementById("covidBlockIndia").innerHTML = `
          <section style="margin-top:-10px">
              <div>
                  <span class="badge badge-warning" style="margin-right:8px">New Confirmed</span>
                  <span style="color:#000"><b>${India.NewConfirmed}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger" style="margin-right:8px">NewDeaths</span>
                  <span style="color:#000"><b>${India.NewDeaths}</b></span>
              </div>
              <div>
                  <span class="badge badge-success" style="margin-right:8px">NewRecovered</span>
                  <span style="color:#000"><b>${India.NewRecovered}</b></span>
              </div>
              <div>
                  <span class="badge badge-warning" style="margin-right:8px">TotalConfirmed</span>
                  <span style="color:#000"><b>${India.TotalConfirmed}</b></span>
              </div>
              <div>
                  <span class="badge badge-danger" style="margin-right:8px">TotalDeaths</span>
                  <span style="color:#000"><b>${India.TotalDeaths}</b></span>
              </div>
              <div>
                  <span class="badge badge-success" style="margin-right:8px">TotalRecovered</span>
                  <span style="color:#000"><b>${India.TotalRecovered}</b></span>
              </div>
          </section>
        `;
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));