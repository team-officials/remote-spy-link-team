import React from 'react'




const LoginPage = () => {
    
    return (
        <div>
            <div className='w-full'>
                <div className=' flex '>
                    <div className=' h-full'>
                        {/* left column container */}
                        {/* <video className='h-[100vh] w-full ' muted autoPlay loop>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}

                        <div className='fixed font-bold text-2xl z-2 top-[50%] left-[2%] text-center text-white'>
                            <h1>Welcome To Hacker Team Officials Portal</h1>
                            <p className='mt-10'>Real-time-spy-link</p>
                            </div>
                    </div>

                    <div className=''>
                        <div className=" min-h-full w-[189%] overflow-hidden bg-slate-600 lg:px-8">
                          <div className='w-full'>
                          <div className=" w-full sm:mx-auto sm:w-full sm:max-w-sm w-">
                                <img
                                    alt="Your Company"
                                    src=""
                                    className="pt-4 rounded-full mx-auto h-24 "
                                />
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Sign in to your Remote Link
                                </h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm w-full">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                              Access Pass-Code
                                            </label>
                                           
                                           
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                   
                                    <a href="#" className="font-semibold leading-6 text-gray-900 hover:text-green-500">
                                        Hacker Team official
                                    </a>

                                    
                                </p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
