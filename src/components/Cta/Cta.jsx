import React from 'react'

const Cta = () => {
  return (
    <section className="w-full py-40 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white text-center">
  <div className="max-w-2xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
    <p className="text-lg md:text-xl mb-8">
      Got a project or idea in mind? Reach out and let's make something great!
    </p>
    <a
      href="#contact-form" // Replace with your actual form ID or route
      className="inline-block border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300 text-sm"
    >
      Contact Me
    </a>
  </div>
</section>

  )
}

export default Cta
