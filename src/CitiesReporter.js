const fs = require('fs');

class CitiesReporter {
  static instance = null;

  constructor({ formaterStrategy }) {
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

  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }
}

module.exports = CitiesReporter;