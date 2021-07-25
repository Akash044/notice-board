import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 h-20">
      <div className="py-3">
        <div>
          <img
            src="https://media.istockphoto.com/photos/empty-pinboard-picture-id105684279?k=6&m=105684279&s=612x612&w=0&h=Nt647qCFxr6cF0HFXR9u8FvlC318pStpc5wpSsMIp-A="
            alt=""
            className="h-16"
          />
          <div className="relative bottom-14 left-6">
            <p className="italic">
              Notice <br /> Board
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-end items-center gap-14  py-5 px-4">
          <div>Home</div>
          <div>Archive</div>
          <div className="text-indigo-600 hover:text-indigo-500">
            <button>Sign in</button>
          </div>
          <div>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
