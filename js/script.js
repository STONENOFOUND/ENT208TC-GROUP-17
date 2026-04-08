const mockData = {
  motionStatus: "Detecting",
  temperature: "24°C",
  humidity: "56%",
  lightStatus: "ON",
  bedStatus: "Occupied",
  lastUpdate: "07:42"
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
}

setText("motionStatus", mockData.motionStatus);
setText("temperature", mockData.temperature);
setText("humidity", mockData.humidity);
setText("lightStatus", mockData.lightStatus);
setText("bedStatus", mockData.bedStatus);
setText("lastUpdate", mockData.lastUpdate);

function updateSensitivityValue(value) {
  setText("sensitivityValue", value);
}

function saveSettings() {
  const saveMessage = document.getElementById("saveMessage");
  if (saveMessage) {
    saveMessage.textContent = "Settings saved successfully.";
  }
}

function clearLogs() {
  const tbody = document.getElementById("logTableBody");
  if (tbody) {
    tbody.innerHTML = "";
  }
}

function exportLogs() {
  alert("Export function demo only.");
}

function applyFilter() {
  alert("Filter function demo only.");
}