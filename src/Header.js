import React from'react';

export default function Header(){
    return(
        <header className='w-screen bg-yellow-800/5 text-yello-900'>
            <div className='sticky z-50 h-50 text-xl flex flex-row item-center'>
                <div className='mr-auto ml-5 mt-2'>Logo</div>
                <button className='mx-5 hover:text-yellow-700'>文章列表</button>
                <button className='mx-5 hover:text-yellow-700'>關於我</button>
                <button className='mx-5 text-white font-medium px-5 py-2 bg-yellow-700'>文章列表</button>
            </div>
            <div className='w-screen h-14 absolute bottom-0 flex justify-center'>
                <div className=''>@ 2023 iThome x Sofffia</div>
            </div>
        </header>
    )
}
