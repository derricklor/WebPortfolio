import React from 'react';

function MainContentArea() {
    return (
        <div className="container mx-auto flex-grow p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* Left Sidebar (visible on md screens and up) */}
            <aside className="bg-white p-6 rounded-lg shadow-md md:col-span-1 lg:col-span-1 order-2 md:order-1 dark:bg-gray-800 dark:text-gray-200 dark:shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Left Sidebar</h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 dark:hover:text-blue-300">Category 1</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 dark:hover:text-blue-300">Category 2</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 dark:hover:text-blue-300">Category 3</a></li>
                    <li><a href="#" className="hover:text-blue-500 transition-colors duration-300 dark:hover:text-blue-300">Category 4</a></li>
                </ul>
                <div className="bg-red-50 text-red-700 text-sm rounded-md mt-6 p-4 dark:bg-red-900 dark:text-red-200">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus porro perspiciatis recusandae, hic provident autem nulla odio pariatur quaerat aliquid soluta molestias, et incidunt, ullam blanditiis libero eius tempora numquam.</p>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-md text-blue-700 text-sm dark:bg-blue-900 dark:text-blue-200">
                    <p>This is a small ad or notice section within the sidebar.</p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="bg-white p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-2 order-1 md:order-2 dark:bg-gray-800 dark:text-gray-200 dark:shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Main Content Area</h2>
                <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    This is the primary content section of the page. On small screens, this content will appear directly below the header.
                    As the screen size increases (medium and large breakpoints), the sidebars will appear alongside this main content,
                    creating a multi-column layout. The design prioritizes readability and accessibility across various devices.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    We're using Tailwind CSS for a utility-first approach to styling, which makes it easy to build responsive designs
                    without writing custom CSS for every breakpoint. The `grid` and `flex` utilities are key to achieving this flexible layout.
                </p>
                <div className="bg-gray-100 p-4 rounded-md border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">Key Features:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 dark:text-gray-400">
                        <li>Mobile-first approach: Optimized for small screens first.</li>
                        <li>Responsive grid layout using Tailwind CSS.</li>
                        <li>Header, main content, two sidebars, and footer sections.</li>
                        <li>Clean and modern aesthetic with rounded corners and shadows.</li>
                    </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4 dark:text-gray-300">
                    Feel free to resize your browser window to see how the layout adapts!
                </p>
            </main>

            {/* Right Sidebar (visible on lg screens and up) */}
            <aside className="bg-white p-6 rounded-lg shadow-md lg:col-span-1 order-3 md:col-span-3 dark:bg-gray-800 dark:text-gray-200 dark:shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Right Sidebar</h2>
                <p className="text-gray-700 leading-relaxed mb-4 dark:text-gray-300">
                    This sidebar contains additional information or widgets. On smaller screens (mobile and tablet),
                    it will stack below the main content. On larger screens (desktop), it will appear to the right.
                </p>
                <div className="bg-green-50 p-4 rounded-md text-green-700 text-sm dark:bg-green-900 dark:text-green-200">
                    <p>Quick links or related articles could go here.</p>
                </div>
                <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                    <li><a href="#" className="hover:text-green-500 transition-colors duration-300 dark:hover:text-green-300">Related Link 1</a></li>
                    <li><a href="#" className="hover:text-green-500 transition-colors duration-300 dark:hover:text-green-300">Related Link 2</a></li>
                </ul>
            </aside>

        </div>
    );
}

export default MainContentArea;