import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SkillGroup from '../components/SkillGroup.jsx'
import { LuDownload } from 'react-icons/lu'
import {
  education,
  experience,
  profile,
  projects,
  services,
  skillGroups,
} from '../data/portfolio.js'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section container" id="home">
          <div className="hero-copy">
            <span className="availability"><span /> Java backend developer · Freelance</span>
            <h1 className="hero-name">Keval <span>Sukase</span></h1>
            <p className="hero-tagline">
              Reliable Java backends. <span>Practical applications, built to work.</span>
            </p>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/contact">
                Discuss Your Project <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="/resume.pdf" download="Keval-Sukase-Resume.pdf">
                <LuDownload aria-hidden="true" focusable="false" />
                Download Resume
              </a>
              <a className="button button-secondary" href="#projects">
                View my work <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof">
              <span className="proof-line" />
              <span>Thoughtful engineering, grounded in real project experience.</span>
            </div>
          </div>
          <div className="architecture-visual" aria-label="Illustration of a connected application architecture" role="img">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="architecture-card">
              <div className="code-window-top"><span /><span /><span /><i>service.java</i></div>
              <div className="code-window-body" aria-hidden="true">
                <span><b>01</b> <em>@RestController</em></span>
                <span><b>02</b> <strong>class</strong> VendorService {'{'}</span>
                <span><b>03</b> &nbsp; <strong>public</strong> Response</span>
                <span><b>04</b> &nbsp; &nbsp; reviewPolicy()</span>
                <span><b>05</b> {'}'}</span>
              </div>
              <div className="architecture-flow">
                <span>API</span><i /><span>Service</span><i /><span>Data</span>
              </div>
            </div>
            <span className="floating-label label-api">REST APIs</span>
            <span className="floating-label label-java">Java · Spring Boot</span>
            <span className="visual-caption">Built for clarity. Ready to grow.</span>
          </div>
        </section>

        <section className="section container about-section" id="about">
          <div className="about-marker"><span>01</span><i /></div>
          <div className="about-content">
            <SectionTitle eyebrow="A little about me" title="Reliable systems start with understanding the problem." />
            <div className="about-columns">
              <p>{profile.about}</p>
              <p>
                I bring a practical approach to debugging and modernizing applications, and
                use React as a supporting skill to help connect backend capabilities with
                the people who use them.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="services">
          <div className="container">
            <SectionTitle
              eyebrow="How I can help"
              title="Practical development for real business needs."
              description="From a focused API integration to a broader modernization effort, let's make the next step clear and useful."
            />
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card glass-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="skills">
          <SectionTitle
            eyebrow="My toolkit"
            title="The right tools for the work at hand."
            description="A practical range of technologies across backend systems, data, and supporting interfaces."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => <SkillGroup key={group.title} group={group} />)}
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="container">
            <SectionTitle
              eyebrow="Selected work"
              title="Project experience, built around real workflows."
              description="These are examples of professional project experience—not personal demos or public client case studies."
            />
            <div className="projects-grid">
              {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <SectionTitle
            eyebrow="My journey"
            title="Experience shaped by building and improving software."
          />
          <div className="timeline">
            {experience.map((role) => (
              <article className="timeline-item" key={role.company}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content glass-card">
                  <div className="timeline-heading">
                    <div><h3>{role.title}</h3><p>{role.company}</p></div>
                    <span className="timeline-date">{role.dates}</span>
                  </div>
                  {role.description && <p className="timeline-description">{role.description}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="container education-layout">
            <SectionTitle eyebrow="Education" title="A foundation in technology." />
            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.qualification}>
                  <div><h3>{item.qualification}</h3>{item.institution && <p>{item.institution}</p>}</div>
                  <span>{item.year}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-section container">
          <div className="closing-glow" />
          <span className="eyebrow">Have a project in mind?</span>
          <h2>Let&apos;s make something dependable and useful.</h2>
          <p>Tell me what you&apos;re working on, and we can talk through the right next step.</p>
          <a className="button button-primary" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
