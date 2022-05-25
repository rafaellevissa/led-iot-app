/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {openLink} from './utils';
import {APP_URL} from '@env';

const App = () => {
  const [statusBarStyle] = useState('dark-content');

  useEffect(() => {
    const onOpenLink = async () => await openLink(APP_URL, statusBarStyle);
    onOpenLink();
  }, [statusBarStyle]);

  return <></>;
};

export default App;
