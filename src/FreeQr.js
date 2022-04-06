import React from 'react'
import qrious from 'qrious';

import './styles/index.scss'
import {AuthProvider} from './context/authContext'
import { AppRouter } from './router/AppRouter';

export const FreeQr = () => {

    // var qr = new qrious();
    // qr.set({
    //     background: 'white',
    //     backgroundAlpha: 1,
    //     foreground: 'black',
    //     foregroundAlpha: 0.8,
    //     level: 'Q',
    //     padding: 30,
    //     size: 250,
    //     value: 'https://github.com/neocotic/qrious'
    // });
  return(
  <div>     
    {/* <img src={qr.toDataURL('image/jpeg')} alt='' /> */}
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </div>
  )
}
