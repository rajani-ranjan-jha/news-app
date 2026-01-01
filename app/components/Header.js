'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SearchWindow from './SearchWindow';

export default function Header() {

    const [OpenSearch, setOpenSearch] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();


    useEffect(() => {
        if (OpenSearch) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [OpenSearch]);

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
        <div className='flex justify-between items-center bg-zinc-900 px-4 py-2 relative'>
            <Link className='font-semibold text-2xl text-white' href={'/'}>News App</Link>
            
            <input type="text" placeholder='search news' className='hidden lg:block border-white focus:outline-none ring-1 rounded-md px-5 h-10 cursor-pointer'
            onClick={() => toggleSearch()} readOnly/>
            
            <nav className='hidden lg:flex flex-wrap items-center gap-2'>
                {categories.map((cat,i) => 
                    <Link key={i} className={`${cat.path === pathname ? 'bg-primary-hover':''} rounded-md px-4 py-2 hover:bg-primary-hover text-primary transition-all duration-200`} href={cat.path}>{cat.name}</Link>
                )}
            </nav>

            <button className='lg:hidden text-white p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    )}
                </svg>
            </button>

            {isMenuOpen && (
                <div className='absolute top-full left-0 w-full bg-zinc-900 flex flex-col items-center py-4 gap-4 lg:hidden z-50 shadow-lg'>
                    <div className='w-11/12 border border-white rounded-md px-4 py-2 text-center text-white cursor-pointer' onClick={() => { toggleSearch(); setIsMenuOpen(false); }}>
                        Search News
                    </div>
                    {categories.map((cat,i) => 
                        <Link key={i} className={`${cat.path === pathname ? 'bg-primary-hover':''} w-11/12 text-center rounded-md px-4 py-2 hover:bg-primary-hover text-primary transition-all duration-200`} 
                        href={cat.path} onClick={() => setIsMenuOpen(false)}>{cat.name}</Link>
                    )}
                </div>
            )}


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
