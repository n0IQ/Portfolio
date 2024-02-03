import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className="flex justify-center gap-16 mt-16">
          <li>
            <a href="/" className="border rounded-full px-5 py-3 bg-FED9B7">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/work-experience">
              <span>Work</span>
            </a>
          </li>
          <li>
            <a href="/projects">
              <span>Project</span>
            </a>
          </li>
          <li>
            <a href="#footer">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
