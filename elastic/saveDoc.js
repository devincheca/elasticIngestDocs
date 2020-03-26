const client = require('./elasticSetup');
const indices = require('../elasticIndices');

class saveDoc {
  encodedFile = '';
  constructor() {
    this.encodedFile = '';
  }
  async save() {
    const index = new indices();
    const res = await client.index({
      index: index.searchableDocsDemo,
      pipeline: 'attachment',
      body: {
        data: this.encodedFile
      }
    });
    return res;
  }
}
module.exports = saveDoc;