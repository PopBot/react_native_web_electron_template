# React Native Web Electron Template

This is an updated template repo (as of February 2023) for creating an [Electron](https://www.electronjs.org/) app using [React](https://reactjs.org/) -> [React Native](https://reactnative.dev/) -> [React Native Web](https://necolas.github.io/react-native-web/) -> Electron.

The concept is to hack the Electron [render process](https://www.electronjs.org/docs/latest/tutorial/process-model#the-renderer-process) to serve the React Native Web app, while using the [Main Process](https://www.electronjs.org/docs/latest/tutorial/process-model#the-main-process) for long-running tasks and background app management.
This allows us to get the best of both worlds, as the developer gets access to the rich [Electron API](https://www.electronjs.org/docs/latest/api/app), as well as [React Native's web-compatible packages](https://reactnative.directory/?web=true).

Script commands are included in `package.json`.

### Running

```shell
npm run build
npm run start
```

This project was hacked together because of Lucas Mórawski's [How to: React Native Web app. A Happy Struggle.], the [MongoDB Guide for setting up React and Electron](https://www.mongodb.com/docs/realm/sdk/node/integrations/electron-cra/), (https://blog.bitsrc.io/how-to-react-native-web-app-a-happy-struggle-aea7906f4903), [babel-plugin-react-native-web](https://www.npmjs.com/package/babel-plugin-react-native-web) npmjs page, and the [Electron Quick Start](https://www.electronjs.org/docs/latest/tutorial/quick-start).
