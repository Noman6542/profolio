import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="w-full bg-background-light dark:bg-background-dark py-4 px-6 md:px-12 border-b border-gray-200/10 dark:border-gray-800/50 fixed top-0 z-50 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80">
            <nav className="container mx-auto flex justify-between items-center">
                <a className="text-2xl font-bold" href="#">
                    <span className="text-gray-900 dark:text-white">Noman</span>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        &lt;/&gt;
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 pb-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
