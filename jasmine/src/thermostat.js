
function Thermostat() {
  this._temperature = 20;
  this._min_temperature = 10
};

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  this._temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this._temperature === this._min_temperature) {
    throw new Error('Temp cannot drop below 10 degrees')
  }
  this._temperature--;
};