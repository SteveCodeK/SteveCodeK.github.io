import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        { label: "About", to: "about" },
        { label: "Projects", to: "projects" },
        { label: "Experience", to: "experience" },
        { label: "Resume", to: "resume", isDownload: true },
        { label: "Contact", to: "contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-xl font-bold text-green-600 cursor-pointer">
                        <Link to="home" smooth={true} duration={500}>Stephen Mugenya</Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
                        {navLinks.map((link, index) =>
                            link.isDownload ? (
                                <a
                                    key={index}
                                    href="/assets/Stephen Awili Resume.pdf"
                                    download
                                    className="hover:text-green-600"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={index}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="hover:text-green-600 cursor-pointer"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="md:hidden bg-white mt-2 px-4 py-3 rounded shadow-lg space-y-2">
                        {navLinks.map((link, index) =>
                            link.isDownload ? (
                                <a
                                    key={index}
                                    href="/assets/Stephen-Mugenya-Resume.pdf"
                                    download
                                    onClick={toggleMenu}
                                    className="block text-gray-700 hover:text-green-600"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={index}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-60}
                                    onClick={toggleMenu}
                                    className="block text-gray-700 hover:text-green-600 cursor-pointer"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
