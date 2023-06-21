import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import postData from '../json/post.json';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='flex flex-col items-center'>
            <Header />
            <div className='text-center text-3xl mt-12 mb-8'>首頁</div>
            <div className='w-2/5 h-10 rounded-md'>
                <input type="text" value={"關鍵字"} onChange={() => console.log("Hello")} className='absoulte'></input>
                <MagnifyingGlassIcon className='absolute h-6 w-6 my-2 ml-2'></MagnifyingGlassIcon>
            </div>
            <div className="w-4/5 h-auto grid grid-cols-3 gap-6">
                {postData.map((el, index) => (
                    <Link to={`/post/${el.id}`} className="w-full h-30 bg-white rounded-lg drop-shadow-md overflow-hidden" key={index}>
                        <img src={el.image} alt={""} className="object-cover w-full h-30" />
                        <div className="p-4">
                            <div className="text-xl bold">{el.title}</div>
                            <div className="text-sm">{el.author} <span>{el.created_at}</span></div>
                            <div className="">{el.content}</div>
                        </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}