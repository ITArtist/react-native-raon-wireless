# react-native-raon-wireless

## Getting started

`$ npm install react-native-raon-wireless --save`

### Mostly automatic installation

`$ react-native link react-native-raon-wireless`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-raon-wireless` and add `RaonWireless.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRaonWireless.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.RaonWirelessPackage;` to the imports at the top of the file
  - Add `new RaonWirelessPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-raon-wireless'
  	project(':react-native-raon-wireless').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-raon-wireless/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-raon-wireless')
  	```


## Usage
```javascript
import RaonWireless from 'react-native-raon-wireless';

// TODO: What to do with the module?
RaonWireless;
```
