
const button = document.querySelector(".forecast-btn");
const predictionTitle = document.querySelector('.current-forecast h1');
const probabilityTitle = document.querySelector('.current-forecast p');
const forecastsContainer = document.querySelector('.forecasts');
const forecastTemplate = document.querySelector('#forecast-item');

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePrediction () {
    const predictions = [
        "Сегодня тебе повезет в любви!",
        "Тебя ждет успех в бизнесе!",
        "Скоро ты найдешь новых друзей!",
        "Тебе стоит обратить внимание на свое здоровье!",
        "Ты скоро получишь хорошую новость!"
        ];

    const randomPrediction = predictions[generateRandomNumber(0, predictions.length - 1)];
    const randomProbability = generateRandomNumber(0, 100);
      
    predictionTitle.textContent = randomPrediction;
    probabilityTitle.textContent =`Вероятность события; ${randomProbability}%`;
    }
    
function savePredictionToList() {
    const title = predictionTitle.textContent;
    const probability = probabilityTitle.textContent;
    
    if (!title || !probability) {
      return;
    }
    
    const forecastToAdd = forecastTemplate.content.cloneNode(true);
    forecastToAdd.querySelector('h3').textContent = title;
    forecastToAdd.querySelector('p').textContent = probability;
    forecastsContainer.prepend(forecastToAdd);
}
    
button.addEventListener("click", function(){
    savePredictionToList();
    generatePrediction();
});