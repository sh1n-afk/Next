// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Poornank Purohit</h1>
        <div>
          <Link href="/">
            <a className="text-white mx-2">Home</a>
          </Link>
          <Link href="/projects">
            <a className="text-white mx-2">Projects</a>
          </Link>
          <Link href="/resume">
            <a className="text-white mx-2">Resume</a>
          </Link>
          <Link href="/about">
            <a className="text-white mx-2">About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
