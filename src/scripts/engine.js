const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider");
const checkBox = document.querySelector(".keys-check");

let audio = new Audio(`./src/sounds/a.wav`);

const playTune = (key) => {
  audio.src = `./src/sounds/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);

  clickedKey.classList.add("active");

  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 200);
};

pianoKeys.forEach((key) => {
  console.log(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", (e) => {
  playTune(e.key);
});

const handleValue = (e) => {
  audio.volume = e.target.value;
};
const showKeys = () => {
  pianoKeys.forEach((key) => {
    key.classList.toggle("hide");
  });
};

volumeSlider.addEventListener("input", handleValue);
checkBox.addEventListener("click", showKeys);
