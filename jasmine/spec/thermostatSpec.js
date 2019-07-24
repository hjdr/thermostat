
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

})