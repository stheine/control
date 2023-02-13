/* eslint-disable unicorn/prefer-at */

import _           from 'lodash';
import React       from 'react';
import {useParams} from 'react-router-dom';

import Grid        from '../Grid/Grid.jsx';
import Refresh     from '../../svg/sargam/Refresh.jsx';

import Beep        from '../Beep/Beep.jsx';
import Button      from '../Button/Button.jsx';
import Display     from '../Display/Display.jsx';
import LedToggle   from '../LedToggle/LedToggle.jsx';

const reloadPage = function() {
  // eslint-disable-next-line no-undef
  window.location.replace(window.location.pathname);
};

const pages = {
  1: {
    lo: <Display />,
    mo: <Button type='Upper' />,
    ro: <LedToggle color='Red' />,
    lu: <Beep />,
    mu: <Button type='Lower' />,
    ru: <LedToggle color='White' />,
  },
  2: {
    ro: <Refresh dark={true} onClick={() => reloadPage()} />,
  },
};

export default function Settings() {
  const params = useParams();
  const page = Number(params.page);

  // console.log('Settings', {params, page, pages});

  return (
    <Grid page={page} settings={true} {...pages[page]} maxPages={Number(_.last(_.keys(pages)))} />
  );
}