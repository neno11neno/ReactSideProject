import React, { useState,useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default function AddPost(){
    const [title, setTitle] = useState('');
    const [author, setauthor] = useState('');
    const [image, setimage] = useState('');
    const [content, setcontent] = useState('');

    useEffect(()=> {
        console.log("The page is loaded!");
    }, []);

    return(
        <div className='flex flex-col items-center'>
            <Header />
            <p className='w-screen text-center text-3xl mt-20'>This is AddPost </p>
            <div className='w-1/2 h-auto rounded-lg drop-shadow-md overflow-hidden bg-white p-10'>
            <div className='text-2xl font-bold mb-4'>標題</div>
            <input type="text" placeholder={"標題"} value={title} maxLength={100} onChange={(e)=>setTitle(e.target.value)} className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"></input>
            <div className='text-2xl font-bold mb-4'>作者</div>
            <input type="text" placeholder={"作者"} value={author} maxLength={100} onChange={(e)=>setauthor(e.target.value)} className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"></input>
            <div className='text-2xl font-bold mb-4'>文章封面圖</div>
            <input type="text" placeholder={"文章封面圖"} value={image} maxLength={100} onChange={(e)=>setimage(e.target.value)} className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"></input>
            <div className='text-2xl font-bold mb-4'>內容</div>
            <input type="text" placeholder={"內容"} value={content} maxLength={100} onChange={(e)=>setcontent(e.target.value)} className="w-full h-10 rounded-md bg-gray-50 px-4 py-2 mb-10 focus:outline-0 focus:bg-yellow-700/5"></input>
            </div>
            <Footer />
        </div>
    )
}