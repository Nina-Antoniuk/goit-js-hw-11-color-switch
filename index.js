const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]')
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

refs.start.addEventListener('click', () => {
  intervalId = setInterval(()=>{
    const randomColor = colors[randomIntegerFromInterval(0, colors.length-1)];
    refs.body.style.backgroundColor = randomColor;
    refs.start.setAttribute('disabled', true);
  }, 1000);
  
  
})

refs.stop.addEventListener('click', () => {
  refs.start.removeAttribute('disabled');
  clearInterval(intervalId);
  console.log('stop');
})


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};




