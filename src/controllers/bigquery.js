const { BigQuery } = require('@google-cloud/bigquery');

const bigqueryClient = new BigQuery();

module.exports = {
  async getBookData (req, res) {
    let rows;

    const { columnsText, limit, whereText } = req.body.sql;
    const bookDataQuery = `SELECT ${columnsText} FROM \`bookrecommenderml-16a51.librarybookdata.libraryusagedata\` LIMIT ${limit} ${whereText};`

    const bookDataOptions = {
      query: bookDataQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
    };

    try {
      [rows] = await bigqueryClient.query(bookDataOptions);
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
    res.status(200).send(rows);
  },
  async getBookUsageData (req, res) {   
    let rows;

    const { columnsText, limit, whereText } = req.body.sql;
    const bookUsageDataQuery = `SELECT ${columnsText} FROM \`bookrecommenderml-16a51.librarybookdata.librarybookdata\` LIMIT ${limit} ${whereText};`

    const bookUsageDataOptions = {
      query: bookUsageDataQuery,
      // Location must match that of the dataset(s) referenced in the query.
      location: 'US',
    };

    try {
      [rows] = await bigqueryClient.query(bookUsageDataQuery);
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
    res.status(200).send(rows);
  },
}

