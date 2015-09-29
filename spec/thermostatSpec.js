describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('should have a starting temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('should increase by 1 if the up button is pressed', function() {
    thermostat.upButton();
    expect(thermostat.temperature).toEqual(21);
  });

  it('should decrease by 1 if the down button is pressed', function() {
    thermostat.downButton();
    expect(thermostat.temperature).toEqual(19);
  });

});
