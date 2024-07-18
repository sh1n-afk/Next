// components/Header.js
const Header = ({ title, subtitle }) => {
    return (
      <header className="bg-gray-900 text-white text-center py-20">
        <h1 className="text-4xl mb-2">{title}</h1>
        <p className="text-xl">{subtitle}</p>
      </header>
    );
  };
  
  export default Header;
  