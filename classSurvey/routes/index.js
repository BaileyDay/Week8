const express = require('express'),
  router = express.Router(),
  surveyModel = require('../models/surveyModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const classInfoData = await surveyModel.getAllTopicData();
  const topicStatusData = await surveyModel.getAllStatuses();

  res.render('template', {
    locals: {
      title: "welcome",
      classInfoData: classInfoData,
      topicStatusData: topicStatusData
    },
    partials: {
      partial: "partial-index"
    }
  });
});

module.exports = router;
