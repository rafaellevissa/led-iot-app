/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {openLink} from './utils';

const App = () => {
  const [statusBarStyle] = useState('dark-content');

  useEffect(() => {
    const onOpenLink = async () =>
      await openLink('http://3.80.75.203', statusBarStyle);
    onOpenLink();
  }, [statusBarStyle]);

  return <></>;
};

export default App;
