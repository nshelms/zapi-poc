global.__ZAPIcreds = [
  process.env.ZAPI_ACCESS_KEY,
  process.env.ZAPI_SECRET_KEY,
  process.env.ASSIGNEE
];

const ZAPI = require('zephyr_api');

let string = "project = 'eInvoice Connect' AND component = Certification";
ZAPI.zqlSearch(string).then(function(result) {
  //console.log(result);
});
