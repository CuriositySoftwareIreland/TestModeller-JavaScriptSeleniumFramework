const uuidv4 = require('uuid/v4');
const request = require('request');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('project.properties');

class TestPathRun {
  constructor(guid, status, message, runTime, runTimeStamp) {
    this.testPathGuid = guid;
    this.testStatus = status;
    this.message = message;
    this.runTime = runTime;
    this.runTimeStamp = runTimeStamp;
    this.vipRunId = TestPathRun.runId;
  }

  save() {
    var apiUrl = properties.get('testModeller.apiHost');
    var apiKey = properties.get('testModeller.apiKey');
    var URL = apiUrl + '/api/apikey/' + apiKey + '/model/version/profile/testcollection/testsuite/testpath/run';
    return request.post({
      url: URL,
      json: this
    }, (err, res, body) => {
      if (err) { 
        console.log(err); 
        return false;
      }
      return true;
    });
  }
}

TestPathRun.runId = uuidv4();

module.exports = TestPathRun;