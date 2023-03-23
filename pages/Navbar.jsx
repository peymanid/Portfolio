const Navbar = ({ ToggleMode, setToggleMode }) => {
  return (
    <nav className={`backdrop-blur-lg dark:text-white text-black w-[93%] h-[10vh] flex justify-between fixed top-0 z-[1]`}>
      <div className="w-[150px] h-full flex items-center justify-center">
      </div>
      <div className="flex nav-section-wrapper">
        <div className="w-[200px] h-full flex items-center justify-center cursor-pointer">
          <p className="relative">About</p>
        </div>
        <div className="w-[200px] h-full flex items-center justify-center cursor-pointer">
          <p className="relative">Stack</p>
        </div>
        <div className="contact w-[200px] h-full flex items-center justify-center">
          <p className="relative">Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
