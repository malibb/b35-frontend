import React from 'react';
import Navbar from './Navbar';
import Head from './Head';

function Layout({ head, subhead, children, cover }){
    return (
    <>
      <Navbar title="POSTEALO BLOG GRAPHQL"/>
      <Head title={head} subheading={subhead} cover={cover} />
        {children}
      {/* <Head title="Bienvenidos a postealo!" subheading="Busca el post que más te guste."/> */}
    </>
  );
}

export default Layout;