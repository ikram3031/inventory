import '@/styles/globals.scss';
import Router from 'next/router';
import { Fragment } from 'react';
import SideBar from '@/components/sections/sideBar';
import NavBar from '@/components/sections/navBar';

function App({ Component, pageProps }) {
  const LayOut = Component.withLoginLayout ? withLoginLayout :  withOutLoginLayout;

  return (
    <LayOut>
      <Component {...pageProps} />
    </LayOut>
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
    <section className="layOut">
        <SideBar />
        <section>
            <NavBar />

            {children}
        </section>
    </section>
  )
}
