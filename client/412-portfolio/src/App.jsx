import './App.css'

function App() {
  return (
    <main className="portfolio">
      <header className="hero-section">
        <div className="hero-main">
          <h1>Yasin Sazid</h1>
          <p className="subtitle">Computer Science Graduate Student | Full-Stack Developer</p>
          <p className="location">University of Example | City, Country</p>
          <div className="badges">
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>Machine Learning</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact</a>
          </div>
        </div>
      </header>

      <section id="about" className="section-card">
        <h2>About Me</h2>
        <p>
          I am a graduate student in Computer Science with hands-on experience in
          web and data-driven applications. I build thoughtful UX, write clean
          code, and contribute to open source. Currently focused on
          scalable architecture, real-time systems, and generative AI research.
        </p>
        <div className="details-grid">
          <div>
            <strong>Email</strong>
            <p>yasin.sazid@example.com</p>
          </div>
          <div>
            <strong>Phone</strong>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <strong>LinkedIn</strong>
            <p><a href="https://www.linkedin.com/in/yasinsazid" target="_blank">linkedin.com/in/yasinsazid</a></p>
          </div>
          <div>
            <strong>GitHub</strong>
            <p><a href="https://github.com/yasinsazid" target="_blank">github.com/yasinsazid</a></p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-card">
        <h2>Technical Skills</h2>
        <ul className="skill-list">
          <li>JavaScript / TypeScript</li>
          <li>React + Vite</li>
          <li>Node.js + Express</li>
          <li>Python, Flask, FastAPI</li>
          <li>PostgreSQL, MongoDB</li>
          <li>Docker, Git, CI/CD</li>
          <li>Machine Learning (PyTorch, scikit-learn)</li>
        </ul>
      </section>

      <section id="projects" className="section-card">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <article className="project-card">
            <h3>SmartCampus Dashboard</h3>
            <p>Real-time analytics dashboard for campus IoT data with alerting and visualizations.</p>
            <div className="project-tags">React · D3 · WebSocket · PostgreSQL</div>
          </article>

          <article className="project-card">
            <h3>AI Review Classifier</h3>
            <p>End-to-end ML pipeline for sentiment analysis using NLP transforms and deployment on AWS.</p>
            <div className="project-tags">Python · scikit-learn · FastAPI · Docker</div>
          </article>

          <article className="project-card">
            <h3>StudyBuddy</h3>
            <p>Peer-matching web app for study sessions with scheduling, chat, and collaboration tools.</p>
            <div className="project-tags">Next.js · Node.js · MongoDB · Socket.IO</div>
          </article>
        </div>
      </section>

      <section id="experience" className="section-card">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineering Intern</h3>
          <p>Aug 2025 – Dec 2025 • ExampleTech Inc.</p>
          <ul>
            <li>Built microservices for user-auth and events, reducing latency by 30%.</li>
            <li>Implemented automated tests and improved deployment pipeline.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Research Assistant</h3>
          <p>Jan 2025 – Jul 2025 • University of Example</p>
          <ul>
            <li>Designed multimodal ML models for document classification and extraction.</li>
            <li>Published a conference paper on “Efficient Transformer Pruning”.</li>
          </ul>
        </div>
      </section>

      <section id="education" className="section-card">
        <h2>Education</h2>
        <p><strong>M.S. in Computer Science</strong> – University of Example (2023–2025)</p>
        <p><strong>B.S. in Computer Science</strong> – City College (2019–2023)</p>
      </section>

      <section id="contact" className="section-card">
        <h2>Contact</h2>
        <p>I’m open to full-time roles, internships, and research collaborations.</p>
        <ul className="contact-list">
          <li>Email: <a href="mailto:yasin.sazid@example.com">yasin.sazid@example.com</a></li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>GitHub: <a href="https://github.com/yasinsazid" target="_blank">github.com/yasinsazid</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2026 Yasin Sazid. Created with React + Vite.</p>
      </footer>
    </main>
  )
}

export default App
