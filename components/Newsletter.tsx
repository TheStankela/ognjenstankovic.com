import React from 'react'

export default function Newsletter() {
  return (
    <section className="pb-12 bg_dark_blue">
        <div className="py-8 px-12 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
            <div className="mx-auto max-w-screen-md">
                <h2 className="mb-4 text-2xl md:text-3xl text-center tracking-tight font-extrabold text-white">
                    Sign up for our newsletter
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-center font-light md:mb-12 sm:text-xl text-gray-400">
                    Stay up to date with new topics in the tech industry
                    and learn something new everyday!
                    Feel free to sign up with your email.
                </p>
                <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label className="hidden mb-2 text-sm font-medium  text-gray-300">Email address</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input className="block p-3 pl-10 w-full text-sm rounded-lg border
                             bg-gray-700 border-blue-400 placeholder-gray-400 text-white" 
                             placeholder="Enter your email" 
                             type="email" 
                             id="email" 
                             required />
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-600 border-blue-700 sm:rounded-none sm:rounded-r-lg hover:bg-[#2880DA] focus:ring-4 focus:ring-blue-500">Subscribe</button>
                        </div>
                    </div>
                    <div className="mx-auto max-w-screen-sm pt-2 text-sm text-left newsletter-form-footer text-gray-300">We care about the protection of your data. <span className="font-medium text-primary-600 text-primary-500">We will not share your email</span>.</div>
                </form>
            </div>
        </div>
    </section>
  )
}
