const Footer = () => {
    return (
        <footer className="w-full bg-background-light dark:bg-background-dark py-6 px-6 md:px-12 mt-auto border-t border-gray-200/10 dark:border-gray-800/50">
            <div className="container mx-auto text-center md:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
