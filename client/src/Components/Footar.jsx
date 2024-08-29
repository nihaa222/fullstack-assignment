// Footer.js
function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 fixed bottom-0 left-0">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company
        </p>
        <nav className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
