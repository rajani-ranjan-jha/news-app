import Link from 'next/link';

export default function Header() {
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
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link href="/" className="logo">
                        📰 NewsHub
                    </Link>
                    <nav className="nav">
                        {categories.map((category) => (
                            <Link
                                key={category.path}
                                href={category.path}
                                className="nav-link"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
