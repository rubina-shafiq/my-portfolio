// components/ContactSection.tsx
'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 text-lg">
            Have a project or opportunity? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you're looking to hire, collaborate, or just want to chat about web development,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:Rubinashafiq088@gmail.com" className="text-blue-600 hover:underline">
                    Rubinashafiq088@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">💼</div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/rubina-shafiq/" target="_blank" className="text-blue-600 hover:underline">
                    linkedin.com/in/rubina-shafiq
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🐙</div>
                <div>
                  <p className="font-semibold text-gray-900">GitHub</p>
                  <a href="https://github.com/rubina-shafiq" target="_blank" className="text-blue-600 hover:underline">
                    github.com/rubina-shafiq
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
            {submitted && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded">
                ✓ Thanks! I'll get back to you soon.
              </div>
            )}

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="John Doe"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="john@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}