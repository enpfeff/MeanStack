/**
 * Created by enpfeff on 5/5/15.
 */
var greet = require('../controllers/greet');

describe('Sanity', function () {
    it('should work properly', function () {
        true.should.equal(true);
    });

    it('should say hello', function(){
        greet('Ian').should.equal('Hello, Ian');
    });
});