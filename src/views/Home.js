import React from 'react';
import Layout from '../common/Layout';
import Feed from '../common/Feed';

function Home() {
    return(
        <>
        < Layout head = "Bienvenidos a postealo!"
        subhead = "Busca el post que más te guste en postealo." />
        <Feed/>
        </>
    );
}

export default Home;