// Require the electron module
const electron = require("electron");
const path = require('path');

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
  // const iconPath = path.join(__dirname, './icons/iconTemplate@2x.png');
  // const tray = new Tray(iconPath);

  return mainWindow.loadFile("index.html");
});


// Load up a web page inside of the electron app!
// app.on("ready", () => {
//   const mainWindow = new BrowserWindow();
//   return mainWindow.loadURL("https://www.github.com");
// });

