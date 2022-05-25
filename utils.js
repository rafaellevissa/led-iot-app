import {Alert, Platform, StatusBar, Linking} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';

const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

export const openLink = async (url, statusBarStyle, animated = true) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      // A delay to change the StatusBar when the browser is opened
      const delay = animated && Platform.OS === 'ios' ? 400 : 0;
      setTimeout(() => StatusBar.setBarStyle('light-content'), delay);
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#453AA4',
        preferredControlTintColor: 'white',
        readerMode: true,
        animated,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'flipHorizontal',
        modalEnabled: true,
        enableBarCollapsing: true,
        // Android Properties
        showTitle: true,
        toolbarColor: '#6200EE',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        headers: {
          'my-custom-header': 'my custom header value',
        },
        hasBackButton: false,
        browserPackage: null,
        showInRecents: false,
        includeReferrer: true,
      });
      // A delay to show an alert when the browser is closed
      await sleep(800);
      Alert.alert('Response', JSON.stringify(result));
    } else {
      Linking.openURL(url);
    }
  } catch (error) {
    await sleep(50);
    const errorMessage = error.message || error;
    Alert.alert(errorMessage);
  } finally {
    // Restore the previous StatusBar of the App
    StatusBar.setBarStyle(statusBarStyle);
  }
};
