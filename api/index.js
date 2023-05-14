const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {UploaderUsers, UploaderConsultation} = require("../api/src/controllers/UploaderInfo.js")







// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  UploaderUsers()
/*   UploaderConsultation()
 */  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
