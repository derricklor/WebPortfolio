import { useState } from 'react'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>

        <div className="layout fixed top-0 inset-x-0 ">
            <div className="Header sticky inset-x-0 z-10 border-2">
                <h1>website portfolio</h1>
            </div>
                
                <div className="Main bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="">
                        <h1 className="">main content</h1>
                        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis doloribus possimus dolores provident rem reprehenderit quod placeat illo, molestias quos eius quibusdam voluptates alias odio est quia id ipsa ab!</p>
                    </div>
                </div>
               
                <div className="Footer row-start-2 border-2">
                    <p className="">footer copyright 2025</p>
                </div>
        </div>
        

        <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 m-2">© 2025 <b>Derrick Lor</b>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

            
        </>
    )
}

export default App
