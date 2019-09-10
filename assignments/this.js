/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: This sits at the upper most level of the chain, this will pull all of javascript.
* 2. Implicit Binding: A function called by a dot can be bound to this.
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function whatsMyLocation(location){
    console.log(this);
    return location;
};

whatsMyLocation('This will not work as this is bound to the global window');

// Principle 2

// code example for Implicit Binding
const goAheadMakeMyObject = {
    didThisWork: 'This is crazy enough that it just may work,',
    makeItSo: function(answerMe) {
      console.log(`${this.didThisWork} but will it work? ${answerMe}`);
    }
  };
  goAheadMakeMyObject.makeItSo('Why yes, yes it dose');

// Principle 3

// code example for New Binding
function StartSpreadingTheNew(gitErDone) {
    this.between = 'What happens between the curly brasses, ';
    this.gitErDone = gitErDone;
    this.engage = function() {
      console.log(this.between + this.gitErDone);
    };
  }
  
  const pessimist = new StartSpreadingTheNew('hurts my head.');
  const optimist = new StartSpreadingTheNew('makes the magic happen.');
  const vacationInVegas = new StartSpreadingTheNew('should stay between the curly brasses.');
  
  pessimist.engage();
  optimist.engage();
  vacationInVegas.engage();

// Principle 4

// code example for Explicit Binding