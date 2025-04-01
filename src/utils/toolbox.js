export const formatTime = (duration) => {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);
  return [min, sec].map((n) => (n < 10 ? `0${n}` : n)).join(':');
};

export const shuffleArray = (array) => array?.sort(() => 0.5 - Math.random());
