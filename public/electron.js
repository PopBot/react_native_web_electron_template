const electron = require("electron");
const path = require("path");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: { nodeIntegration: true, contextIsolation: false },
	});

	mainWindow.loadFile(path.join(__dirname, "../build/index.html")).then(() => {});
	// Open the DevTools.
	mainWindow.webContents.openDevTools({ mode: 'detach'});
}


app.on('window-all-closed', () => {
	app.quit();	// Quit app regardless of platform
});


app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();	// Create window if none exist. We only want one window
		}
	})
})

