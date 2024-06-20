const fs = require('fs');
const FormaterHTML = require('./src/FormaterHTML.js');
const FormaterTXT = require('./src/FormaterTXT.js');

// Singleton Pattern
class CitiesReporter {
  static instance = null;

  constructor(formaterStrategy) {
    if (!CitiesReporter.instance) {
      this._formaterStrategy = formaterStrategy;
      CitiesReporter.instance = this;
    }

    return CitiesReporter.instance;
  }

  _read(filename) {
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON() {
    this._cities = JSON.parse(this._cities_json);
  }

  // Strategy Pattern
  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }

  // Adapter Pattern
  setFormaterStrategy(formaterStrategy) {
    this._formaterStrategy = formaterStrategy;
  }
}

// Strategy Pattern
const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT()
};

let filename1 = './data/cidades-1.json';
let filename2 = './data/cidades-2.json';

let reporter = new CitiesReporter(formaterStrategies['html']);

let output1 = reporter.report(filename1);
console.log(output1);

let output2 = reporter.report(filename2);
console.log(output2);
reporter.setFormaterStrategy(formaterStrategies['txt']);
let output = reporter.report(filename1);
console.log(output);

module.exports = CitiesReporter;