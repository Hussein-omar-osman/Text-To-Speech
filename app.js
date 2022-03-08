const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');

playButton.addEventListener('click', () => {
  playText(textInput.value);
});

function playText(text) {
  // API we use is SpeechSynthesis
  const utterance = new SpeechSynthesisUtterance(text);
  console.log(utterance);
  utterance.rate = speedInput.value || 1;
  textInput.disabled = true;
  utterance.addEventListener('end', () => {
    textInput.disabled = false;
  });
  speechSynthesis.speak(utterance);
}
