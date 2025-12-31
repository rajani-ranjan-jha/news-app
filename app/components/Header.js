'use client'
import Link from 'next/link';
import { useState } from 'react';
import SearchWindow from './SearchWindow';

export default function Header() {

    const [OpenSearch, setOpenSearch] = useState(false)

    function toggleSearch(){
        setOpenSearch((prev) => !prev)
    }

    const categories = [
        { name: 'Home', path: '/' },
        { name: 'Business', path: '/business' },
        { name: 'Technology', path: '/technology' },
        { name: 'Sports', path: '/sports' },
        { name: 'Entertainment', path: '/entertainment' },
        { name: 'Health', path: '/health' },
        { name: 'Science', path: '/science' }
    ];

    return (
        <div className='flex justify-between items-center bg-gray-500'>
            <Link className='p-4 font-semibold text-2xl' href={'/'}>News App</Link>
            <input type="text" placeholder='search news' className='border-white focus:outline-none ring-1 rounded-md px-5 h-10'
            onClick={() => toggleSearch()} readOnly/>
            <nav className='flex flex-wrap items-center gap-0'>
                {categories.map((cat,i) => 
                    <Link key={i} className='rounded-md px-4 py-2 hover:bg-primary-hover text-primary' href={cat.path}>{cat.name}</Link>
                )}
            </nav>


            {OpenSearch && (
                <div
                className='fixed top-0 left-0 inset-1 w-screen h-screen'
                onClick={(e)=> e.stopPropagation()}
                >

                    <SearchWindow onClose={toggleSearch}/>
                </div>
            )}
        </div>
    );
}
