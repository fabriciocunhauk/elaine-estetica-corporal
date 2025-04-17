import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-purple-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-amber-200 transition duration-300"
        >
          Mobile Massage
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#services"
            className="hover:text-amber-200 transition duration-300"
          >
            Services
          </Link>
          <Link
            href="#benefits"
            className="hover:text-amber-200 transition duration-300"
          >
            Benefits
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-amber-200 transition duration-300"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="hover:text-amber-200 transition duration-300"
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
