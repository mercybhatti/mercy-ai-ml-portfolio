import { useEffect, useRef } from "react";

import "./App.css";

function CursorAvatar() {
  const avatarRef = useRef(null);

  useEffect(() => {
    const avatar = avatarRef.current;

    if (!avatar) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame;

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      targetX = Math.max(-1, Math.min(1, x));
      targetY = Math.max(-1, Math.min(1, y));
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;

      avatar.style.transform = `
        translate3d(${currentX * 12}px, ${currentY * 8}px, 0)
        scale(1.04)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="avatar-scene">
      <div className="avatar-glow" />

      <div className="orbit orbit-large" />
      <div className="orbit orbit-medium" />
      <div className="orbit orbit-small" />

      <div className="avatar-circle">
        <img
          ref={avatarRef}
          src="/mercy-avatar (1).png"
          alt="Mercy - AI/ML Engineer"
          className="mercy-avatar"
        />
      </div>

      {/* Outer labels */}
      <div className="avatar-label label-ai">
        <span />
        AI / ML
      </div>

      <div className="avatar-label label-gen">
        <span />
        GEN AI
      </div>

      <div className="avatar-label label-python">
        <span />
        PYTHON
      </div>

      <div className="avatar-label label-rag">
        <span />
        RAG
      </div>

      <div className="avatar-star star-one">✦</div>
      <div className="avatar-star star-two">✦</div>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          Mercy<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let&apos;s talk <span>↗</span>
        </a>
      </header>

      {/* HERO */}
      <main id="home" className="hero">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            AVAILABLE FOR AI/ML OPPORTUNITIES
          </div>

          <div className="eyebrow">
            AI / ML ENGINEER · GENERATIVE AI
          </div>

          <h1>
            I build
            <br />
            <span>intelligent</span>
            <br />
            systems.
          </h1>

          <p className="hero-description">
            I&apos;m Mercy — an MCA Post graduate with a specialized in AI &amp; Machine
            Learning, passionate about building practical intelligent
            applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore my work <span>↗</span>
            </a>

            <a href="#about" className="secondary-button">
              More about me <span>↓</span>
            </a>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-line" />
            <span>SCROLL TO EXPLORE</span>
          </div>
        </div>

        <div className="hero-visual">
          <CursorAvatar />
        </div>
      </main>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-label">
          <span>01</span>
          ABOUT ME
        </div>

        <div className="about-grid">
          <h2>
            Building AI that is
            <span> useful, practical &amp; human.</span>
          </h2>

          <div className="about-text">
            <p>
              I&apos;m an MCA (Hons.) Post graduate with a specialization in
              Artificial Intelligence &amp; Machine Learning from Lovely
              Professional University.
            </p>

            <p>
              My focus is on building practical AI systems using machine
              learning, Generative AI, LLMs, RAG, APIs and modern deployment
              tools.
            </p>

            <p>
              I’ve built and deployed projects including an Enterprise RAG &
              Agentic Knowledge Assistant, AI Data Analyst / SQL Agent, and
              Production ML + Deep Learning Fraud Detection System — taking
              ideas from experimentation to working applications.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-label">
          <span>02</span>
          SKILLS
        </div>

        <h2 className="section-title">
          Technologies I work with.
        </h2>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>AI &amp; Generative AI</h3>
            <p>
              LLMs · RAG · Embeddings · Vector Search · AI Agents ·
              LangChain · Hugging Face · Gemini API
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>Machine Learning</h3>
            <p>
              Scikit-learn · Regression · Classification · Clustering ·
              Feature Engineering · Model Evaluation
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>Deep Learning</h3>
            <p>
              Neural Networks · ANN Fundamentals · TensorFlow · Keras
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>Programming &amp; Data</h3>
            <p>
              Python · SQL · Pandas · NumPy · Matplotlib
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">05</div>
            <h3>Backend &amp; Deployment</h3>
            <p>
              FastAPI · Streamlit · Docker · Git · GitHub
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-number">06</div>
            <h3>Database &amp; Analytics</h3>
            <p>
              MySQL · SQLite · Power BI · Excel
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <div className="section-label">
          <span>03</span>
          PROJECTS
        </div>

        <h2 className="section-title">
          Selected work.
        </h2>

        <div className="projects-list">
          <article className="project-card">
            <div className="project-index">01</div>

            <div className="project-main">
              <div className="project-type">
                GENERATIVE AI · RAG
              </div>

              <h3>
                Enterprise RAG + Agentic
                <br />
                Knowledge Assistant
              </h3>

              <p>
                An AI-powered knowledge assistant designed to retrieve,
                understand and answer questions from enterprise documents.
              </p>

              <div className="project-tech">
                Python · RAG · LLMs · LangChain · FAISS · FastAPI ·
                Streamlit · Docker
              </div>
            

            <div className="project-links">
              <a
                href="https://enterprise-rag-knowledge-assistant-bvmkr6x8p2veswqdctmtcj.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>

              <a
                href="https://github.com/mercybhatti"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
            </div> 
          </article>

          <article className="project-card">
            <div className="project-index">02</div>

            <div className="project-main">
              <div className="project-type">
                AI · SQL · LLM
              </div>

              <h3>
                AI Data Analyst /
                <br />
                SQL Agent
              </h3>

              <p>
                A natural-language data analysis system that converts user
                questions into SQL and returns useful business insights.
              </p>

              <div className="project-tech">
                Python · SQL · Gemini API · FastAPI · Streamlit ·
                SQLAlchemy · Docker
              </div>

              <div className="project-links">
                <a
                  href="https://ai-data-analyst-sql-agent-lskenm9is3syjnwmuuimud.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/mercybhatti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-index">03</div>

            <div className="project-main">
              <div className="project-type">
                MACHINE LEARNING · DEEP LEARNING
              </div>

              <h3>
                Production ML +
                <br />
                Deep Learning Fraud Detection
              </h3>

              <p>
                A production-oriented fraud detection system combining machine
                learning and deep learning with an application-ready workflow.
              </p>

              <div className="project-tech">
                Python · Scikit-learn · TensorFlow · Keras · Pandas ·
                FastAPI · Streamlit · Docker
              </div>

              <div className="project-links">
                <a
                  href="https://fraud-detection-system-uxysxsw9ebgdfqmu5nzlmm.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>

                <a
                  href="https://github.com/mercybhatti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <div className="section-label">
          <span>04</span>
          EDUCATION
        </div>

        <div className="education-card">
          <div>
            <div className="education-year">CURRENT</div>

            <h2>Master of Computer Applications(Hons.)</h2>

            <p>
              Artificial Intelligence &amp; Machine Learning
            </p>
          </div>

          <div className="education-university">
            Lovely Professional University
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-label">
          <span>05</span>
          CONTACT
        </div>

        <div className="contact-content">
          <div>
            <div className="contact-eyebrow">
              OPEN TO AI/ML OPPORTUNITIES
            </div>

            <h2>
              Let&apos;s build
              <br />
              something intelligent.
            </h2>
          </div>

          <div className="contact-right">
            <p>
              I&apos;m currently looking for opportunities where I can build
              practical AI and machine learning systems.
            </p>

            <a
              href="mailto:mercybhatti36@gmail.com"
              className="primary-button"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          Mercy<span>.</span>
        </div>

        <p>
          AI/ML Engineer · Generative AI · Machine Learning
        </p>

        <div>
          © 2026 Mercy
        </div>
      </footer>
    </div>
  );
}

export default App;