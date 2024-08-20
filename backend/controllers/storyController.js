const stories = require('../data/stories');

const getAllStories = (req, res) => {
  res.json(stories);
};

module.exports = {
  getAllStories,
};
