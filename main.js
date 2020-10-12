const { app, BrowserWindow } = require('electron')
const electronreloader = require('electron-reloader')

function createWindow() {
  // Crea la finestra del browser
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // carica il file index.html
  win.loadFile('dist/index.html')

  // Apre il Pannello degli Strumenti di Sviluppo.
  win.webContents.openDevTools()
}

// Quando electron è pronto creiamo la finestra del browser
// Alcune API possono essere utilizzate solo dopo che si verifica questo evento.
app.whenReady().then(createWindow)

// Tranne per MacOS terminiamo l'applicazione se tutte le finestre ad essa collegate vengono chiuse
// Su MacOS è uso comune che l'utente chiuda le applicazioni usando Cmd + Q
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Su macOS ricrea la finestra quando l'utente clicca sull'icona al'interno della dock
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

if (process.env.NODE_ENV === 'development') {
  console.log('start relaoder')
  electronreloader(module, {
    ignore: './src'
  })
}
