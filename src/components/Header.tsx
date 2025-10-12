import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b border-black/10">
      <nav className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <img
              src="/studiolepinelogo.png"
              alt="Studio Lepine"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold tracking-tight">Studio Lepine</span>
          </Link>

          <div className="flex gap-8">
            <Link
              to="/"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
