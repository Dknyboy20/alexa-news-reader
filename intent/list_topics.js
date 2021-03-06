
var config = require("../util/config.js");
var log = require("../util/log.js");

exports.handle = function(req, ses) {
  log.debug("ListTopics");

  ses.yesIntent = "PickTopic";
  return {
    text: "The available topics are: " + config.topics.join(", ") + "\n\nWhich topic would you like to read?",
    title: "Topics",
    reprompt: "You can say the name of a topic."
  };
};
