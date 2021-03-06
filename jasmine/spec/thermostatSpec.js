
describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('initializes the temp at 20 degrees', function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('does not allow temp to drop below 10 degrees', function(){
    while (thermostat.getTemperature() > 10) {
      thermostat.decreaseTemperature()
    }
    expect(function() {thermostat.decreaseTemperature(); }).toThrowError('Temp cannot drop below 10 degrees');
  });

  it('does not allow temp to surpass 32 degrees whilst power saving mode is off', function() {
    thermostat.powerSaveToggle();
    console.log(thermostat._powerSavingMode);
    while(thermostat.getTemperature() < 32) {
      thermostat.increaseTemperature();
    }
    expect(function() {thermostat.increaseTemperature(); }).toThrowError('Temp cannot surpass 32 degrees');
  });

  describe('increaseTemperature', function() {
    it('increases the temp by 1 degree', function(){
      thermostat.increaseTemperature();
      expect(thermostat.getTemperature()).toEqual(21);
    });
  });

  describe('decreaseTemperature', function() {
    it('increases the temp by 1 degree', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.getTemperature()).toEqual(19);
    });
  });

  describe('powerSaveToggle', function() {
    it('turns power saving mode off', function() {
      expect(thermostat.powerSaveToggle()).toEqual(false);
    });

    it('does not allow temp to go above 25 degrees', function() {
      while (thermostat.getTemperature() < 25) {
        thermostat.increaseTemperature();
      }
      console.log(thermostat.getTemperature());
      expect(function() {thermostat.increaseTemperature();}).toThrowError('Power saving mode is on, turn off to surpass 25');
    });
  });

  describe('powerSaveModeStatus', function () {
    it('returns if the power save mode is on', function (){
      expect(thermostat.powerSaveModeStatus()).toEqual('Power Save Mode: On')
    })

    it('returns if the power save mode is off', function (){
      thermostat.powerSaveToggle();
      expect(thermostat.powerSaveModeStatus()).toEqual('Power Save Mode: Off')
    })

    it('returns if the power save mode is on once turned off and on', function (){
      thermostat.powerSaveToggle();
      thermostat.powerSaveToggle();
      expect(thermostat.powerSaveModeStatus()).toEqual('Power Save Mode: On')
    })
  })

  describe('resetTemperature', function() {
    it('When the temperature is above 20, it resets to 20', function() {
      thermostat.increaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.getTemperature()).toEqual(20);
    });

    it('When the temperature is below 20, it resets to 20', function() {
      thermostat.decreaseTemperature();
      thermostat.resetTemperature();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('getUsage', function() {
    it('returns low-usage if temp < 18', function() {
      while (thermostat.getTemperature() > 12) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.getUsage()).toEqual('low-usage');
    });

    it('returns medium-usage if temp 18 <-> 25', function() {
      while (thermostat.getTemperature() < 24) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getUsage()).toEqual('medium-usage');
    });

    it('returns high-usage if temp > 25', function() {
      thermostat.powerSaveToggle();
      while (thermostat.getTemperature() < 30) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getUsage()).toEqual('high-usage');
    });
  });
});
