import React from "react";

function Footer() {
    return (
        <footer
            className="text-center text-white  bg-indigo-600"
        >
            {/* <div className="container p-6">
                <div className="">
                    <p className="flex items-center justify-center">
                        <span className="mr-4">Register for free</span>
                        <button
                            type="button"
                            className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Sign up!
                        </button>
                    </p>
                </div>
            </div> */}

            <div
                className="p-4 text-center"
            >
                © 2023 Copyright:
                <a className="text-white" href="https://tailwind-elements.com/">
                    Tailwind Elements
                </a>
            </div>
        </footer>
    );
}

export default Footer;
