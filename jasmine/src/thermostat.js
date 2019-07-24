
function Thermostat() {
  this._defaultTemp = 20;
  this._temperature = this._defaultTemp;
  this._min_temperature = 10;
  this._powerSavingMode = true;
  this._powerSavingModeMaxTemp = 25;
  this._maxTemp = 32;
};

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  if(this._temperature === this._powerSavingModeMaxTemp && this._powerSavingMode) {
    throw new Error('Power saving mode is on, turn off to surpass 25');
  } else if(this._temperature === this._maxTemp) {
    throw new Error('Temp cannot surpass 32 degrees');
  }
  this._temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this._temperature === this._min_temperature) {
    throw new Error('Temp cannot drop below 10 degrees')
  }
  this._temperature--;
};

Thermostat.prototype.powerSaveToggle = function() {
  if(this._powerSavingMode === true) {
    return this._powerSavingMode = false;
  }
  return this._powerSavingMode = true;
};

Thermostat.prototype.resetTemperature = function() {
  this._temperature = this._defaultTemp;
};
