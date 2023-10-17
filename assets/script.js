document.addEventListener("DOMContentLoaded", function() {
  const heading = document.querySelector('.heading');
  const advice_text = document.querySelector('.advice-text');
  const advice_btn = document.querySelector('.advice_btn');
  const id = document.querySelector('.id');

  function getRandomNumber(min, max){
      return Math.floor(Math.random() * (max - min) + min);
  }

  
  
  const getAdvice = () => {
    const slip_id = getRandomNumber(1, 200);
    const url = `https://api.adviceslip.com/advice/${slip_id}`;
      fetch(url)
      .then(response => {
          if(!response.ok) {
              throw Error("ERROR");
          }
          return response.json();
      })
      .then(data => {
          const slip_id= data.slip.id;
          const advice = data.slip.advice; // Access the advice property from the response
          advice_text.innerHTML = `"${advice}"`;
          id.innerHTML = `${slip_id}`
      })
      .catch(error => {
          console.log('There has been an error:', error);
      });
  }
  
  advice_btn.addEventListener('click', getAdvice);
});
