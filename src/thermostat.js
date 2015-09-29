function Thermostat() {
  this.temperature = 20;
  this.powerSave = 'ON';
};

Thermostat.prototype.upButton = function() {
  if (this.powerSave == 'ON') {
    if (this.temperature >= 25) {
      throw 'Tempature cannot go above 25 in power save mode';
    }
  } if (this.powerSave == 'OFF') {

    if (this.temperature >= 32) {
      throw 'Tempature cannot go above 32 if power saving mode is off';
    }
  }

  return this.temperature += 1;
};

Thermostat.prototype.downButton = function() {
  if (this.temperature < 10) {
    throw 'Too cold!';
  }

  return this.temperature -= 1;
};

Thermostat.prototype.powerSaveOff = function() {
  return this.powerSave = 'OFF';
};

Thermostat.prototype.powerSaveOn = function() {
  return this.powerSave = 'ON';
};
