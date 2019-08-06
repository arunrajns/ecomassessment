
const sectionmain = document.getElementsByClassName('card__wrapper');
const request = new XMLHttpRequest();
request.open('GET', 'https://api.randomuser.me', true);
request.onload = function () {
  const data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    Object.keys(data).map((prop) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        sectionmain.appendChild(card);
    });
  } else {
    console.log('Error has occured!!!')
  }
}
request.send();

