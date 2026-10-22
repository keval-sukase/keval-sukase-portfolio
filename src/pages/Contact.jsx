import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { profile } from '../data/portfolio.js'

function Contact() {
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const projectType = formData.get('projectType')
    const message = formData.get('message')
    const subject = `Project inquiry: ${projectType}`
    const body = `Hi Keval,\n\n${message}\n\nProject type: ${projectType}\nName: ${name}\nEmail: ${email}`

    setFeedback('Your email app should open with your message ready. If it does not, email me directly at the address below.')
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <Navbar activePage="contact" />
      <main className="contact-page container">
        <section className="contact-intro">
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s talk about what you&apos;re building.</h1>
          <p>
            Share a little about your project or the challenge you&apos;re solving. I&apos;ll be
            glad to learn more and explore how I can help.
          </p>
          <div className="contact-details">
            <a className="contact-detail" href={`mailto:${profile.email}`}>
              <span className="contact-icon" aria-hidden="true">@</span>
              <span><small>Email</small><strong>{profile.email}</strong></span>
              <span className="detail-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="contact-detail" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              <span className="contact-icon" aria-hidden="true">↗</span>
              <span><small>Phone</small><strong>{profile.phone}</strong></span>
              <span className="detail-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-note">
            <span className="note-dot" />
            <p>Prefer email? You can reach me directly anytime.</p>
          </div>
        </section>
        <section className="contact-form-card glass-card" aria-labelledby="form-title">
          <span className="eyebrow">Project inquiry</span>
          <h2 id="form-title">Tell me a little about it.</h2>
          <p className="form-intro">Fields marked with <span aria-hidden="true">*</span> are required.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name <span aria-hidden="true">*</span>
                <input type="text" name="name" autoComplete="name" placeholder="Name" required />
              </label>
              <label>
                Email address <span aria-hidden="true">*</span>
                <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label>
              Project type <span aria-hidden="true">*</span>
              <select name="projectType" defaultValue="" required>
                <option value="" disabled>Select a project type</option>
                <option>Java / Spring Boot development</option>
                <option>REST API development or integration</option>
                <option>Application modernization or migration</option>
                <option>Database integration or migration</option>
                <option>React UI development</option>
                <option>Other / not sure yet</option>
              </select>
            </label>
            <label>
              Project details <span aria-hidden="true">*</span>
              <textarea name="message" rows="5" placeholder="What are you looking to build or improve?" required />
            </label>
            <button className="button button-primary form-submit" type="submit">
              Prepare email <span aria-hidden="true">↗</span>
            </button>
            <p className="form-disclaimer">
              This form opens your default email application with the details filled in. It
              does not send anything to a server.
            </p>
            {feedback && <p className="form-feedback" role="status">{feedback}</p>}
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact
