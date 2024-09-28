import React from 'react'

function HeroSection() {
  return (
    <div><div className="h-screen flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Blogging Website</h1>
      <p className="text-xl mb-6">Explore the latest posts, stories, and articles</p>
      <button className="bg-white text-purple-500 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  </div></div>
  )
}

export default HeroSection