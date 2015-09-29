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

  it('should not allow the temp to drop below 10 degrees', function() {
    for (i = 0; i < 11; i++) {
      thermostat.downButton();
    }

    expect(function() {thermostat.downButton();}).toThrow('Too cold!');
  });

  it('should not allow the temp to go above 25 degrees if power saving mode is on', function() {
    for (i = 0; i < 5; i++) {
      thermostat.upButton();
    }

    expect(function() {thermostat.upButton();}).toThrow('Tempature cannot go above 25 in power save mode');
  });

  it('should not allow the temp to go above 32 degrees if power saving mode is off', function() {
    thermostat.powerSaveOff();
    for (i = 0; i < 12; i++) {
      thermostat.upButton();
    }

    expect(function() {thermostat.upButton();}).toThrow('Tempature cannot go above 32 if power saving mode is off');
  });

  it('should have powersave on by default', function() {
    expect(thermostat.powerSave).toEqual('ON');
  });

  it('should turn powersave off', function() {
    thermostat.powerSaveOff();
    expect(thermostat.powerSave).toEqual('OFF');
  });

  it('should turn powersave on', function() {
    thermostat.powerSaveOn();
    expect(thermostat.powerSave).toEqual('ON');
  });

  it('should reset the temperature to 20 by pressing the reset button', function() {
    thermostat.resetButton();
    expect(thermostat.temperature).toEqual(20);
  });
});
