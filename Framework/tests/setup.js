var TestPathRun = require('../util/testPathRun');

afterEach(function() {
  var guid = this.currentTest.ctx.guid;
  if(guid) {
    var state;
    var message;
    if (this.currentTest.state === 'passed') {
      state = 'Passed';
      message = '';
    } else { // 'failed' or 'undefined'
      state = 'Failed';
      message = "'" + this.currentTest.err + "' in file: '" + this.currentTest.file + "'";
    }
    
    var run = new TestPathRun(guid, state, message, this.currentTest.duration, Date.now());
    run.save();
  }
});