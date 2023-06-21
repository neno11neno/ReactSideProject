import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useParams } from "react-router-dom";

export default function PostDetail() {
    const { id } = useParams();

    return (
        <div className=''>
            <Header />
            <p className='w-screen text-center text-3xl mt-20'>This is About is {id}</p>
            <Footer />
        </div>
    )
}