# Collapsible Scroll Demo

A **React Native** sample app that will demonstrate a **collapsible profile header** with a **sticky tab bar**, where **list scroll position stays coherent across tabs** (the usual “banking / wallet” pattern: large header shrinks as you scroll, tabs pin under the status area, switching tabs preserves scroll).

## Preview

Before scrolling — initial screen (header expanded, tab bar below): 
<img src="assets/basic.gif" alt="App before scrolling" width="360" height="826" />

## Requirements

- [React Native environment](https://reactnative.dev/docs/set-up-your-environment) (Xcode for iOS, Android Studio / SDK for Android)
- **Node.js** ≥ **22.11.0** (see `package.json` → `engines`)

## Install

```sh
npm install
# or: yarn
```

### iOS (CocoaPods)

From the project root:

```sh
bundle install
cd ios && bundle exec pod install && cd ..
```

Run `pod install` again whenever native dependencies change.

## Run

Start Metro (keep this terminal open):

```sh
npm start
# or: yarn start
```

In another terminal:

```sh
npm run ios
# or: npm run android
```

## Stack

- React Native **0.84**
- React **19**
- TypeScript
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) + [react-native-worklets](https://github.com/software-mansion/react-native-worklets) (Babel plugin in `babel.config.js`) — reserved for upcoming scroll-linked UI

## Troubleshooting

See the official [React Native troubleshooting](https://reactnative.dev/docs/troubleshooting) guide if builds or Metro fail.
