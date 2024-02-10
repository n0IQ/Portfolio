import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="bg-[#002D62]">
        <ul className="flex justify-center gap-16 mt-16">
          <li>
            <a href="/" className="border rounded-full px-5 py-3">
              <span className="text-[#00FFFF] opacity-95">Home</span>
            </a>
          </li>
          <li>
            <a href="/work-experience">
              <span className="text-[#00FFFF] opacity-95">Work</span>
            </a>
          </li>
          <li>
            <a href="/projects">
              <span className="text-[#00FFFF] opacity-95">Project</span>
            </a>
          </li>
          <li>
            <a href="#footer">
              <span className="text-[#00FFFF] opacity-95">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
