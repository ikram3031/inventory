import '@/styles/globals.scss';
import Router from 'next/router';
import { Fragment } from 'react';
import SideBar from '@/components/sections/SideBar/sideBar';
import NavBar from '@/components/sections/NavBar/navBar';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

function App({ Component, pageProps }) {
  const LayOut = Component.withLoginLayout ? withLoginLayout :  withOutLoginLayout;

  return (
    <Provider store={store}>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </Provider>
  )
}

export default App;

function withLoginLayout({ children }) {
  return (
    <>
      {children}
    </>      
  )
}

function withOutLoginLayout({ children }) {
  return (
    <>
      <NavBar />
      <section className="layOut">
          <SideBar />
          {children}
      </section>
    </>
  )
}
