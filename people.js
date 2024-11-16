const getUserNames = require("./names.js");
const getUserHobbies = require("./hobbies.js");

const getUser = () => ({
  ...getUserNames("Marco", "Ricci"),
  ...getUserHobbies("calcio", "palestra", "basket"),
});
