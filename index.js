const defaults = {
  base: 16,
  precision: 5,
};

const round = (value, precision) => {
  precision = Math.pow(10, precision);
  return Math.floor(value * precision) / precision;
};

module.exports = (css, options) => {
  const { base, precision } = Object.assign({}, defaults, options);
  return css.replace(/rem\((\d*\.?\d+)(px)\)/g, (match, value, unit) => {
    return `${round(parseFloat(value) / base, precision)}rem`;
  });
};
