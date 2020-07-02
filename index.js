/* Require the electron module */
const electron = require("electron");

/* Destructure off the 'app' process & 'BrowserWindow' from electron */
const { app, BrowserWindow } = electron;

/* Once the app is ready for connection, start up a new window with the contents of the 'index.html' file */
app.on("ready", () => {
  const mainWindow = new BrowserWindow();
  return mainWindow.loadFile("index.html");
});
