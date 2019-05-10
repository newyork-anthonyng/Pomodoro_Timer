import {
  renderPlayButton,
  renderTimeElement,
  renderDocumentTitle
} from "../../renderElements";

const timeElement = document.querySelector(".js-timer");
const playButtonElement = document.querySelector(".js-play-button");
const resetButtonElement = document.querySelector(".js-reset-button");

const rerenderPlayButton = renderPlayButton(playButtonElement);
const rerenderTimeElement = renderTimeElement(timeElement);

export const renderMiddleware = store => next => action => {
  const { isPlaying: previousPlayState, time: previousTime } = store.getState();
  next(action);
  const { isPlaying: currentPlayState, time: currentTime } = store.getState();

  if (previousPlayState !== currentPlayState) {
    rerenderPlayButton(currentPlayState);
  }

  if (previousTime !== currentTime) {
    rerenderTimeElement(currentTime);
    renderDocumentTitle(currentTime);
  }
};
