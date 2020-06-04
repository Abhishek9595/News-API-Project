function clock(){
      setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      //let seconds = date.getSeconds();
      let amorpm = hours >12 ? 'PM' : 'AM';

      document.getElementById("clock").innerHTML = `
      <h6">${hours} : ${minutes} ${amorpm}</h6>
      `;
      }, 1000);
    }
    clock();