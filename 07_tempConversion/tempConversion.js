const convertToCelsius = function(ftemp) {
  let c = Math.round(((ftemp - 32) * (5/9)) * 10) / 10;
  return c;
};

const convertToFahrenheit = function(ctemp) {
  let f = Math.round((ctemp * (9/5) + 32) * 10) / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
