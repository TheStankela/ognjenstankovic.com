import React from 'react'
import Connect from './Connect'

export default function Contact() {
  return (
    <section className="bg_dark_blue">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">Informations, suggestions, sponsorship... anything. Responding to you shortly!</p>
            <form action="#" className="space-y-8">
                <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
                    <input type="email" id="email" className="shadow-sm border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="contact@ognjenstankovic.com" required />
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium  text-gray-300">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm  rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required />
                </div>
                <div className="sm:col-span-2">
                    <label  className="block mb-2 text-sm font-medium  text-gray-400">Your message</label>
                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Describe your problem..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
            </form>
        </div>
        <Connect></Connect>
    </section>
  )
}
