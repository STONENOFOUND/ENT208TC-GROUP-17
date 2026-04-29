const STORAGE_KEYS = {
  language: "eldercare_language",
  dashboard: "eldercare_dashboard",
  logs: "eldercare_logs",
  settings: "eldercare_settings"
};

const i18n = {
  en: {
    "common.brand": "ElderCare SafeNight",
    "common.live": "LIVE",
    "common.log": "LOG",
    "common.set": "SET",
    "common.connected": "Connected",
    "common.systemActive": "System Active",
    "common.viewAll": "View all",

    "nav.dashboard": "Dashboard",
    "nav.activity": "Activity",
    "nav.settings": "Settings",

    "index.title": "ElderCare SafeNight",
    "index.heading": "Launching the monitoring app",
    "index.description": "Preparing dashboard, activity log, and settings for elderly night-time monitoring.",
    "index.redirecting": "Redirecting to dashboard...",

    "dashboard.pageTitle": "ElderCare Dashboard",
    "dashboard.title": "Elderly Get-Up Detection",
    "dashboard.subtitle": "Real-time bedroom monitoring interface",
    "dashboard.heroEyebrow": "System Overview",
    "dashboard.heroTitle": "Bedroom monitoring is running normally",
    "dashboard.heroDescription": "Track motion, bed occupancy, temperature, humidity, and night-light status in one simple mobile view.",
    "dashboard.motionStatus": "Motion Status",
    "dashboard.temperature": "Temperature",
    "dashboard.humidity": "Humidity",
    "dashboard.nightLight": "Night Light",
    "dashboard.liveStatus": "Live Status",
    "dashboard.bedOccupancy": "Bed Occupancy",
    "dashboard.lastUpdate": "Last Update",
    "dashboard.recentActivity": "Recent Activity",
    "dashboard.quickActions": "Quick Actions",
    "dashboard.openActivityLog": "Open Activity Log",
    "dashboard.openSettings": "Open Settings",
    "dashboard.noRecentActivity": "No recent activity recorded.",

    "activity.pageTitle": "Activity Log",
    "activity.eyebrow": "Night Activity",
    "activity.title": "Activity Log",
    "activity.subtitle": "Recorded motion and bed-exit events during the night",
    "activity.totalActivities": "Total Activities",
    "activity.bedExits": "Bed Exits",
    "activity.noActivityPeriods": "No Activity Periods",
    "activity.lastEvent": "Last Event",
    "activity.filter": "Filter",
    "activity.timeRange": "Time Range",
    "activity.status": "Status",
    "activity.applyFilter": "Apply Filter",
    "activity.reset": "Reset",
    "activity.records": "Activity Records",
    "activity.exportCsv": "Export CSV",
    "activity.clearLogs": "Clear Logs",
    "activity.table.time": "Time",
    "activity.table.status": "Status",
    "activity.table.location": "Location",
    "activity.option.allNight": "All Night",
    "activity.option.range00_03": "00:00 - 03:00",
    "activity.option.range03_06": "03:00 - 06:00",
    "activity.option.range06_09": "06:00 - 09:00",
    "activity.option.statusAll": "All",
    "activity.filterShowingAll": "Showing all activity records.",
    "activity.filterMatched": "{count} record(s) matched the current filter.",
    "activity.noRecords": "No activity records available.",
    "activity.noLogsExport": "There are no logs to export.",
    "activity.confirmClear": "Clear all activity logs?",
    "activity.logsCleared": "All logs have been cleared.",

    "settings.pageTitle": "Settings",
    "settings.eyebrow": "Configuration",
    "settings.title": "System Settings",
    "settings.subtitle": "Configure night light, motion detection, and environmental thresholds",
    "settings.nightLightSettings": "Night Light Settings",
    "settings.nightLight": "Night Light",
    "settings.nightLightHelp": "Turn the night light on or off.",
    "settings.motionSensitivity": "Motion Sensitivity",
    "settings.lightOffDelay": "Light-off Delay",
    "settings.lightOffDelayHelp": "Enter the delay time in minutes.",
    "settings.thresholds": "Temperature & Humidity Thresholds",
    "settings.minTemp": "Min Temperature (°C)",
    "settings.maxTemp": "Max Temperature (°C)",
    "settings.minHumidity": "Min Humidity (%)",
    "settings.maxHumidity": "Max Humidity (%)",
    "settings.indicatorMode": "Indicator Mode",
    "settings.lightIndicationMode": "Light Indication Mode",
    "settings.mode.normal": "Normal Mode",
    "settings.mode.sleep": "Sleep-friendly Mode",
    "settings.mode.alert": "Alert Priority Mode",
    "settings.abnormalReminder": "Abnormal Status Reminder",
    "settings.abnormalReminderHelp": "Show reminder when readings go outside the safe range.",
    "settings.saveConfiguration": "Save Configuration",
    "settings.saveSettings": "Save Settings",
    "settings.savedSuccessfully": "Settings saved successfully.",

    "status.detecting": "Detecting",
    "status.idle": "Idle",
    "status.on": "ON",
    "status.off": "OFF",
    "status.occupied": "Occupied",
    "status.activityDetected": "Activity detected",
    "status.noActivity": "No activity",
    "status.bedExit": "Bed exit",

    "location.bedside": "Bedside",
    "location.bedroom": "Bedroom",
    "location.bed": "Bed"
  },

  zh: {
    "common.brand": "老人夜间守护系统",
    "common.live": "运行中",
    "common.log": "记录",
    "common.set": "设置",
    "common.connected": "已连接",
    "common.systemActive": "系统运行中",
    "common.viewAll": "查看全部",

    "nav.dashboard": "主页",
    "nav.activity": "活动记录",
    "nav.settings": "设置",

    "index.title": "老人夜间守护系统",
    "index.heading": "正在启动监测应用",
    "index.description": "正在准备主页、活动记录和设置页面，用于老人夜间监测。",
    "index.redirecting": "即将跳转到主页...",

    "dashboard.pageTitle": "老人夜间守护主页",
    "dashboard.title": "老人起床检测系统",
    "dashboard.subtitle": "卧室实时监测界面",
    "dashboard.heroEyebrow": "系统概览",
    "dashboard.heroTitle": "卧室监测运行正常",
    "dashboard.heroDescription": "在一个简洁的移动端界面中查看运动状态、床位占用、温度、湿度和夜灯状态。",
    "dashboard.motionStatus": "运动状态",
    "dashboard.temperature": "温度",
    "dashboard.humidity": "湿度",
    "dashboard.nightLight": "夜灯状态",
    "dashboard.liveStatus": "实时状态",
    "dashboard.bedOccupancy": "床位是否有人",
    "dashboard.lastUpdate": "最后更新",
    "dashboard.recentActivity": "最近活动",
    "dashboard.quickActions": "快捷操作",
    "dashboard.openActivityLog": "打开活动记录",
    "dashboard.openSettings": "打开设置",
    "dashboard.noRecentActivity": "暂无最近活动记录。",

    "activity.pageTitle": "活动记录",
    "activity.eyebrow": "夜间活动",
    "activity.title": "活动记录",
    "activity.subtitle": "记录夜间运动与离床事件",
    "activity.totalActivities": "活动总数",
    "activity.bedExits": "离床次数",
    "activity.noActivityPeriods": "无活动时段",
    "activity.lastEvent": "最后事件",
    "activity.filter": "筛选",
    "activity.timeRange": "时间范围",
    "activity.status": "状态",
    "activity.applyFilter": "应用筛选",
    "activity.reset": "重置",
    "activity.records": "活动明细",
    "activity.exportCsv": "导出 CSV",
    "activity.clearLogs": "清空记录",
    "activity.table.time": "时间",
    "activity.table.status": "状态",
    "activity.table.location": "位置",
    "activity.option.allNight": "整晚",
    "activity.option.range00_03": "00:00 - 03:00",
    "activity.option.range03_06": "03:00 - 06:00",
    "activity.option.range06_09": "06:00 - 09:00",
    "activity.option.statusAll": "全部",
    "activity.filterShowingAll": "正在显示全部活动记录。",
    "activity.filterMatched": "当前筛选匹配到 {count} 条记录。",
    "activity.noRecords": "暂无活动记录。",
    "activity.noLogsExport": "没有可导出的记录。",
    "activity.confirmClear": "要清空所有活动记录吗？",
    "activity.logsCleared": "所有活动记录已清空。",

    "settings.pageTitle": "设置",
    "settings.eyebrow": "配置",
    "settings.title": "系统设置",
    "settings.subtitle": "配置夜灯、运动检测与环境阈值",
    "settings.nightLightSettings": "夜灯设置",
    "settings.nightLight": "夜灯",
    "settings.nightLightHelp": "控制夜灯开启或关闭。",
    "settings.motionSensitivity": "运动灵敏度",
    "settings.lightOffDelay": "关灯延迟",
    "settings.lightOffDelayHelp": "请输入自定义延迟时间，单位为分钟。",
    "settings.thresholds": "温湿度阈值",
    "settings.minTemp": "最低温度 (°C)",
    "settings.maxTemp": "最高温度 (°C)",
    "settings.minHumidity": "最低湿度 (%)",
    "settings.maxHumidity": "最高湿度 (%)",
    "settings.indicatorMode": "指示模式",
    "settings.lightIndicationMode": "灯光指示模式",
    "settings.mode.normal": "普通模式",
    "settings.mode.sleep": "睡眠友好模式",
    "settings.mode.alert": "提醒优先模式",
    "settings.abnormalReminder": "异常状态提醒",
    "settings.abnormalReminderHelp": "当读数超出安全范围时显示提醒。",
    "settings.saveConfiguration": "保存配置",
    "settings.saveSettings": "保存设置",
    "settings.savedSuccessfully": "设置已成功保存。",

    "status.detecting": "检测中",
    "status.idle": "空闲",
    "status.on": "开启",
    "status.off": "关闭",
    "status.occupied": "有人",
    "status.activityDetected": "检测到活动",
    "status.noActivity": "无活动",
    "status.bedExit": "离床",

    "location.bedside": "床边",
    "location.bedroom": "卧室",
    "location.bed": "床上"
  }
};

const DEFAULT_DASHBOARD = {
  motionStatus: "detecting",
  temperature: "24°C",
  humidity: "56%",
  lightStatus: "on",
  bedStatus: "occupied",
  lastUpdate: "07:42"
};

const DEFAULT_LOGS = [
  { time: "02:15", status: "activityDetected", location: "bedside" },
  { time: "03:08", status: "noActivity", location: "bedroom" },
  { time: "03:40", status: "bedExit", location: "bed" },
  { time: "04:25", status: "activityDetected", location: "bedside" },
  { time: "05:10", status: "noActivity", location: "bedroom" },
  { time: "06:55", status: "bedExit", location: "bed" }
];

const DEFAULT_SETTINGS = {
  lightToggle: true,
  sensitivityRange: 7,
  delayMinutes: 3,
  tempLow: 18,
  tempHigh: 28,
  humidityLow: 40,
  humidityHigh: 70,
  indicatorMode: "normal",
  abnormalReminder: true
};

const STATUS_VALUE_MAP = {
  "Activity detected": "activityDetected",
  "No activity": "noActivity",
  "Bed exit": "bedExit"
};

const LOCATION_VALUE_MAP = {
  Bedside: "bedside",
  Bedroom: "bedroom",
  Bed: "bed"
};

const DASHBOARD_VALUE_MAP = {
  Detecting: "detecting",
  Idle: "idle",
  ON: "on",
  OFF: "off",
  Occupied: "occupied"
};

const INDICATOR_VALUE_MAP = {
  "Normal Mode": "normal",
  "Sleep-friendly Mode": "sleep",
  "Alert Priority Mode": "alert"
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getStoredJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return clone(fallback);
    return JSON.parse(raw);
  } catch (error) {
    return clone(fallback);
  }
}

function normalizeDashboard(raw = {}) {
  return {
    motionStatus: DASHBOARD_VALUE_MAP[raw.motionStatus] || raw.motionStatus || DEFAULT_DASHBOARD.motionStatus,
    temperature: raw.temperature || DEFAULT_DASHBOARD.temperature,
    humidity: raw.humidity || DEFAULT_DASHBOARD.humidity,
    lightStatus: DASHBOARD_VALUE_MAP[raw.lightStatus] || raw.lightStatus || DEFAULT_DASHBOARD.lightStatus,
    bedStatus: DASHBOARD_VALUE_MAP[raw.bedStatus] || raw.bedStatus || DEFAULT_DASHBOARD.bedStatus,
    lastUpdate: raw.lastUpdate || DEFAULT_DASHBOARD.lastUpdate
  };
}

function normalizeLogs(raw = []) {
  if (!Array.isArray(raw)) return clone(DEFAULT_LOGS);

  return raw.map(log => ({
    time: log.time || "00:00",
    status: STATUS_VALUE_MAP[log.status] || log.status || "noActivity",
    location: LOCATION_VALUE_MAP[log.location] || log.location || "bedroom"
  }));
}

function normalizeSettings(raw = {}) {
  let delayMinutes = Number(raw.delayMinutes);

  if (!Number.isFinite(delayMinutes)) {
    if (raw.delaySelect === "2m") delayMinutes = 2;
    else if (raw.delaySelect === "3m") delayMinutes = 3;
    else if (raw.delaySelect === "4m") delayMinutes = 4;
    else if (raw.delaySelect === "5m") delayMinutes = 5;
    else delayMinutes = DEFAULT_SETTINGS.delayMinutes;
  }

  delayMinutes = Math.max(1, Math.min(120, delayMinutes));

  return {
    lightToggle: typeof raw.lightToggle === "boolean" ? raw.lightToggle : DEFAULT_SETTINGS.lightToggle,
    sensitivityRange: Number(raw.sensitivityRange ?? DEFAULT_SETTINGS.sensitivityRange),
    delayMinutes,
    tempLow: Number(raw.tempLow ?? DEFAULT_SETTINGS.tempLow),
    tempHigh: Number(raw.tempHigh ?? DEFAULT_SETTINGS.tempHigh),
    humidityLow: Number(raw.humidityLow ?? DEFAULT_SETTINGS.humidityLow),
    humidityHigh: Number(raw.humidityHigh ?? DEFAULT_SETTINGS.humidityHigh),
    indicatorMode: INDICATOR_VALUE_MAP[raw.indicatorMode] || raw.indicatorMode || DEFAULT_SETTINGS.indicatorMode,
    abnormalReminder: typeof raw.abnormalReminder === "boolean" ? raw.abnormalReminder : DEFAULT_SETTINGS.abnormalReminder
  };
}

const appState = {
  dashboard: normalizeDashboard(getStoredJSON(STORAGE_KEYS.dashboard, DEFAULT_DASHBOARD)),
  logs: normalizeLogs(getStoredJSON(STORAGE_KEYS.logs, DEFAULT_LOGS)),
  settings: normalizeSettings(getStoredJSON(STORAGE_KEYS.settings, DEFAULT_SETTINGS))
};

function saveState() {
  localStorage.setItem(STORAGE_KEYS.dashboard, JSON.stringify(appState.dashboard));
  localStorage.setItem(STORAGE_KEYS.logs, JSON.stringify(appState.logs));
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(appState.settings));
}

function getCurrentLanguage() {
  return localStorage.getItem(STORAGE_KEYS.language) || "en";
}

function t(key, vars = {}) {
  const lang = getCurrentLanguage();
  const source = i18n[lang]?.[key] ?? i18n.en[key] ?? key;

  return source.replace(/\{(\w+)\}/g, (_, variableName) => {
    return vars[variableName] ?? `{${variableName}}`;
  });
}

function applyLanguage() {
  const lang = getCurrentLanguage();
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function setLanguage(lang) {
  localStorage.setItem(STORAGE_KEYS.language, lang);
  applyLanguage();

  if (document.body.dataset.page !== "index") {
    renderDashboard();
    renderActivitySummary(appState.logs);
    renderLogs();

    const saveMessage = document.getElementById("saveMessage");
    if (saveMessage && saveMessage.textContent) {
      saveMessage.textContent = t("settings.savedSuccessfully");
    }

    const filterText = document.getElementById("filterResultText");
    if (filterText && !filterText.textContent.trim()) {
      filterText.textContent = t("activity.filterShowingAll");
    }
  }
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatCurrentTime() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

function updateSensitivityValue(value) {
  setText("sensitivityValue", value);
}

function getBadgeClass(status) {
  if (status === "activityDetected") return "active-badge";
  if (status === "noActivity") return "inactive-badge";
  if (status === "bedExit") return "warning-badge";
  return "inactive-badge";
}

function renderDashboard() {
  setText("motionStatus", t(`status.${appState.dashboard.motionStatus}`));
  setText("temperature", appState.dashboard.temperature);
  setText("humidity", appState.dashboard.humidity);
  setText("lightStatus", t(`status.${appState.dashboard.lightStatus}`));
  setText("bedStatus", t(`status.${appState.dashboard.bedStatus}`));
  setText("lastUpdate", appState.dashboard.lastUpdate);

  const activityList = document.getElementById("activityList");
  if (activityList) {
    const latestLogs = [...appState.logs].slice(-3).reverse();

    if (!latestLogs.length) {
      activityList.innerHTML = `<li>${escapeHtml(t("dashboard.noRecentActivity"))}</li>`;
      return;
    }

    activityList.innerHTML = latestLogs
      .map(log => {
        return `
          <li>
            ${escapeHtml(log.time)} - ${escapeHtml(t(`status.${log.status}`))} (${escapeHtml(t(`location.${log.location}`))})
          </li>
        `;
      })
      .join("");
  }
}

function getActivitySummary(logs) {
  const totalActivities = logs.length;
  const bedExits = logs.filter(log => log.status === "bedExit").length;
  const inactivePeriods = logs.filter(log => log.status === "noActivity").length;
  const lastEvent = logs.length ? logs[logs.length - 1].time : "--:--";

  return {
    totalActivities,
    bedExits,
    inactivePeriods,
    lastEvent
  };
}

function renderActivitySummary(logs = appState.logs) {
  const summary = getActivitySummary(logs);
  setText("totalActivities", summary.totalActivities);
  setText("bedExits", summary.bedExits);
  setText("inactivePeriods", summary.inactivePeriods);
  setText("lastEvent", summary.lastEvent);
}

function renderLogs(logs = appState.logs) {
  const tbody = document.getElementById("logTableBody");
  if (!tbody) return;

  if (!logs.length) {
    tbody.innerHTML = `
      <tr>
        <td colspan="3" class="empty-state">${escapeHtml(t("activity.noRecords"))}</td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = logs
    .map(log => {
      const badgeClass = getBadgeClass(log.status);
      return `
        <tr>
          <td>${escapeHtml(log.time)}</td>
          <td><span class="badge ${badgeClass}">${escapeHtml(t(`status.${log.status}`))}</span></td>
          <td>${escapeHtml(t(`location.${log.location}`))}</td>
        </tr>
      `;
    })
    .join("");
}

function parseTimeToMinutes(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
}

function withinTimeRange(timeString, rangeValue) {
  if (rangeValue === "all") return true;

  const time = parseTimeToMinutes(timeString);

  const ranges = {
    "00-03": [0, 180],
    "03-06": [180, 360],
    "06-09": [360, 540]
  };

  const selectedRange = ranges[rangeValue];
  if (!selectedRange) return true;

  return time >= selectedRange[0] && time < selectedRange[1];
}

function getFilteredLogs() {
  const timeFilter = document.getElementById("timeFilter")?.value || "all";
  const statusFilter = document.getElementById("statusFilter")?.value || "all";

  return appState.logs.filter(log => {
    const timeMatch = withinTimeRange(log.time, timeFilter);
    const statusMatch = statusFilter === "all" || log.status === statusFilter;
    return timeMatch && statusMatch;
  });
}

function applyFilter() {
  const filteredLogs = getFilteredLogs();
  renderActivitySummary(filteredLogs);
  renderLogs(filteredLogs);

  const filterText = document.getElementById("filterResultText");
  if (filterText) {
    filterText.textContent = t("activity.filterMatched", { count: filteredLogs.length });
  }
}

function resetFilter() {
  const timeFilter = document.getElementById("timeFilter");
  const statusFilter = document.getElementById("statusFilter");
  const filterText = document.getElementById("filterResultText");

  if (timeFilter) timeFilter.value = "all";
  if (statusFilter) statusFilter.value = "all";

  renderActivitySummary(appState.logs);
  renderLogs(appState.logs);

  if (filterText) {
    filterText.textContent = t("activity.filterShowingAll");
  }
}

function exportLogs() {
  const filteredLogs = getFilteredLogs();

  if (!filteredLogs.length) {
    alert(t("activity.noLogsExport"));
    return;
  }

  const rows = [
    [t("activity.table.time"), t("activity.table.status"), t("activity.table.location")],
    ...filteredLogs.map(log => [log.time, t(`status.${log.status}`), t(`location.${log.location}`)])
  ];

  const csv = rows
    .map(row => row.map(value => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "activity_logs.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

function clearLogs() {
  const confirmed = window.confirm(t("activity.confirmClear"));
  if (!confirmed) return;

  appState.logs = [];
  appState.dashboard.motionStatus = "idle";
  appState.dashboard.lastUpdate = formatCurrentTime();

  saveState();
  renderDashboard();
  renderActivitySummary(appState.logs);
  renderLogs(appState.logs);

  const filterText = document.getElementById("filterResultText");
  if (filterText) {
    filterText.textContent = t("activity.logsCleared");
  }
}

function loadSettings() {
  const settings = appState.settings;

  const lightToggle = document.getElementById("lightToggle");
  const sensitivityRange = document.getElementById("sensitivityRange");
  const delayMinutes = document.getElementById("delayMinutes");
  const tempLow = document.getElementById("tempLow");
  const tempHigh = document.getElementById("tempHigh");
  const humidityLow = document.getElementById("humidityLow");
  const humidityHigh = document.getElementById("humidityHigh");
  const indicatorMode = document.getElementById("indicatorMode");
  const abnormalReminder = document.getElementById("abnormalReminder");

  if (!lightToggle) return;

  lightToggle.checked = Boolean(settings.lightToggle);
  sensitivityRange.value = settings.sensitivityRange;
  delayMinutes.value = settings.delayMinutes;
  tempLow.value = settings.tempLow;
  tempHigh.value = settings.tempHigh;
  humidityLow.value = settings.humidityLow;
  humidityHigh.value = settings.humidityHigh;
  indicatorMode.value = settings.indicatorMode;
  abnormalReminder.checked = Boolean(settings.abnormalReminder);

  updateSensitivityValue(sensitivityRange.value);
}

function saveSettings() {
  const lightToggle = document.getElementById("lightToggle");
  const sensitivityRange = document.getElementById("sensitivityRange");
  const delayMinutes = document.getElementById("delayMinutes");
  const tempLow = document.getElementById("tempLow");
  const tempHigh = document.getElementById("tempHigh");
  const humidityLow = document.getElementById("humidityLow");
  const humidityHigh = document.getElementById("humidityHigh");
  const indicatorMode = document.getElementById("indicatorMode");
  const abnormalReminder = document.getElementById("abnormalReminder");
  const saveMessage = document.getElementById("saveMessage");

  if (!lightToggle) return;

  appState.settings = {
    lightToggle: lightToggle.checked,
    sensitivityRange: Number(sensitivityRange.value),
    delayMinutes: Math.max(1, Math.min(120, Number(delayMinutes.value) || 3)),
    tempLow: Number(tempLow.value),
    tempHigh: Number(tempHigh.value),
    humidityLow: Number(humidityLow.value),
    humidityHigh: Number(humidityHigh.value),
    indicatorMode: indicatorMode.value,
    abnormalReminder: abnormalReminder.checked
  };

  appState.dashboard.lightStatus = appState.settings.lightToggle ? "on" : "off";
  appState.dashboard.lastUpdate = formatCurrentTime();

  saveState();
  renderDashboard();

  if (saveMessage) {
    saveMessage.textContent = t("settings.savedSuccessfully");
  }
}

function initIndexPage() {
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1200);
}

function initAppPage() {
  renderDashboard();
  renderActivitySummary(appState.logs);
  renderLogs();
  loadSettings();

  const filterText = document.getElementById("filterResultText");
  if (filterText) {
    filterText.textContent = t("activity.filterShowingAll");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();

  if (document.body.dataset.page === "index") {
    initIndexPage();
    return;
  }

  initAppPage();
});