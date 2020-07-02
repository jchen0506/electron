/* Require the electron module */
const electron = require("electron");

/* Destructure off the 'app' process from electron */
const { app, BrowserWindow } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow();
  return mainWindow.loadFile("index.html");
});
