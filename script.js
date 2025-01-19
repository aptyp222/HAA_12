document.getElementById('generateButton').addEventListener('click', function() {
  const deviceType = document.getElementById('deviceType').value;
  const brightness = document.getElementById('brightness').value;
  const colorTemperature = document.getElementById('colorTemperature').value;

  const config = generateConfig(deviceType, brightness, colorTemperature);

  document.getElementById('configOutput').textContent = JSON.stringify(config, null, 2);
});

function generateConfig(deviceType, brightness, colorTemperature) {
  // Основная структура конфигурации
  let config = {
    name: "HAA 12 Device",
    type: deviceType,
    settings: {
      brightness: parseInt(brightness),
      colorTemperature: parseInt(colorTemperature)
    }
  };

  return config;
}
