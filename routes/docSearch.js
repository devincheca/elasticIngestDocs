var express = require('express');
var router = express.Router();

const saveDoc = require('../elastic/saveDoc');

router.post('/searchUploadedDocs', function(req, res, next) {
  res.send({ status: 'success' });
});
router.post('/saveUploadedDoc', async function(req, res, next) {
  const save = new saveDoc();
  save.encodedFile = req.body.file64;
  const saveRes = await save.save();
  console.log(saveRes);
  // res.send({ status: req.body.file64 });
  res.send({ status: 'success' });
});

module.exports = router;

// to create the pipeline
/*
PUT _ingest/pipeline/attachment
{
  "description" : "Extract attachment information",
  "processors" : [
    {
      "attachment" : {
        "field" : "data",
        "indexed_chars": "-1"
      }
    }
  ]
}
*/