// Require the electron module
const electron = require("electron");

// Destructure off the 'app' process & 'BrowserWindow' from electron
const { app, BrowserWindow, Tray } = electron;

// Once the app is ready for connection, start up a new window with the contents of the 'index.html' file
app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    }
  });

  //  Add a tray icon!
  const iconPath = require('path').join(__dirname, './icons/iconTemplate@2x.png');
  const tray = new Tray(iconPath);

  // Render the index.html file
  return mainWindow.loadFile("./index.html");

  // Render an integrated web page
  // return mainWindow.loadURL("https://www.github.com");
});



