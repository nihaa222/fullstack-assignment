// Header.js
function Header() {
  return (
    <header className="w-full bg-black text-white py-4 sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-4 flex pl-14 justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="h-4 w-4 bg-white"></div>
          <div className="h-5 w-0.5 rounded-md bg-white"></div>
          <p className="text-white">Help Center</p>
        </div>
        <div className="pr-20">
          <button className="text-white text-sm flex  items-center p-3 rounded-md h-5 bg-gray-800">
            Submit a request
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
