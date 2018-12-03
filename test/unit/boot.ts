

before((done) => {
    const chai = require('chai');
    global.should = chai.should();
    const sinonChai = require('sinon-chai');
  
    chai.use(sinonChai);

    const chaiAsPromised = require("chai-as-promised");
    chai.use(chaiAsPromised);
  
    done();
  });
  