import React from "react";

export default function Header() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mx-2 mt-3 flex">
          <div className="inline-block align-middle content-center">
            <ul className="flex space-x-5">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
