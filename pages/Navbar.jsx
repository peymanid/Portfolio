const Navbar = () => {
    return ( 
        <nav className="bg-[] backdrop-blur-lg text-white w-screen h-[12vh] flex justify-between sticky top-0 z-[1]">
            <div className="w-[150px] h-full flex items-center justify-center">
                <p>Peyman</p>
            </div>
            <div className="flex nav-section-wrapper">
                <div className="w-[200px] h-full flex items-center justify-center">
                    <p className="relative">About</p>
                </div>
                <div className="w-[200px] h-full flex items-center justify-center">
                    <p className="relative">Stack</p>
                </div>
                <div className="w-[200px] h-full flex items-center justify-center bg-[#842cdd] rounded-bl-[20px]"> 
                    <p className="relative">Contact</p>
                </div>
            </div>

        </nav>
     );
}
 
export default Navbar;