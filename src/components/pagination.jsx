import React from 'react'

function pagination() {
  return (
    <div className="flex justify-center items-center mt-10">
            <div className="flex rounded-md">
                <a
                    href="/?page=2"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span className="sr-only">Previous</span>
                    {/* Heroicon name: solid/chevron-left */}
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.707 3.293a1 1 0 010 1.414L7.414 9H15a1
                                1 0 110 2H7.414l3.293 3.293a1 1 0 11-1.414
                                1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0
                                011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="/?page=1"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    1
                </a>
                <a
                    href="/?page=2"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    2
                </a>
                <a

                    href="/?page=3"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                    <span className="sr-only">Next</span>
                    {/* Heroicon name: solid/chevron-right */}
                    <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.293 16.707a1 1 0
                                010-1.414L12.586 11H5a1 1 0 010-2h7.586l-3.293
                                -3.293a1 1 0 011.414-1.414l5 5a1 1 0
                                010 1.414l-5 5a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
                </div>
    </div>
  )
}

export default pagination