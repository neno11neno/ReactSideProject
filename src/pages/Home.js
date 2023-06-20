import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function Home(){
    return(
        <div className=''>
            <Header />
            <p className='w-screen text-center text-3xl mt-20'>This is Home</p>
            <Footer />
        </div>
    )
}