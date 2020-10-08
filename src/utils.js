export const createShuffledArray = (length) =>
  [...Array(length).keys()].sort(function () {
    return Math.random() - 0.5;
  });
