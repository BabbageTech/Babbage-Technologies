import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">Babbage Technologies</h3>
          <p className="mt-2 text-sm">
            Building innovative software and cloud solutions for all industries.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gray-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="mt-2 text-sm">
            Email: babbagetechnologies@gmail.com
            <br />
            Phone: +1 (555) 123-4567
            <br />
            Address: 123 Tech Street, Innovation City
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Babbage Technologies. All rights reserved.
      </div>
    </footer>
  );
}