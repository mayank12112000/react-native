/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppPro1 from './AppPro1';
import AppPro2 from './AppPro2/AppPro2';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppPro2);
