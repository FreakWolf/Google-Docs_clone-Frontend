import React from 'react';
import { Icon } from "@material-ui/core";

function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md">
             <button className="focus:outline-none bg-transparent md:inline-flex dark-ripple">
                <Icon className='text-gray' style={{ fontSize: "1.5rem", color: "#5f6368" }}>menu</Icon>
            </button>
            <div className="ml-4">
                <Icon className="text-blue-500" style={{ fontSize: "2.25rem" }}>
                    description
                </Icon>
            </div>
            <h1 className='mx-2' style={{display: "inline-block", fontFamily: "Product Sans,Arial,sans-serif", fontSize: "22px", opacity: "1", color: "#5f6368"}}>
                Docs
            </h1>

            <div className="mx-5 md:mx-20 flex flex-grow items-center p-2 pl-4 pr-6 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon className="text-gray-500" style={{ fontSize: "1.75rem" }}>search</Icon>
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            <button className='focus:outline-none bg-transparent md:inline-flex ml-5 md:ml-20'>
                <Icon className='text-gray' style={{ fontSize: "1.5rem", color: "#5f6368" }}>apps</Icon>
            </button>

            <img
                loading='lazy'
                className='cursor-pointer h-8 w-8 rounded-full ml-5'
                src="https://lh3.googleusercontent.com/ogw/AOLn63G6qwBkXh20ovWB1oghlKm0NSuCoUSwDsjDk0jIdw=s32-c-mo"
            />
        </header>
    );
}

export default Header;
