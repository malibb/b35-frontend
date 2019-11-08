import React from 'react';
import Navbar from './Navbar';
import Head from './Head';

function Layout({ head, subhead, children }){
    return (
    <>
      <Navbar title="POSTEALO BLOG GRAPHQL"/>
      <Head title={head} subheading={subhead} />
        {children}
      {/* <Head title="Bienvenidos a postealo!" subheading="Busca el post que más te guste."/> */}
    </>
  );
}

export default Layout;