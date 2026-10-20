function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>

            <div className="project-card">
                <h3>Full-Stack Blog Platform</h3>
                <p>
                    A complete blog application with user authentication, built from the
                    ground up. Features JWT-based signup/login, full CRUD operations for
                    posts, and a MongoDB database — all connected to a React frontend.
                </p>
                <p className="project-tech">React · Node.js · Express · MongoDB · JWT</p>
                <div className="project-links">
                    <a href="https://zannatnaim.github.io/blog-frontend/" target="_blank">Live Demo</a>
                    <a href="https://github.com/zannatnaim/blog-frontend" target="_blank">Frontend Code</a>
                    <a href="https://github.com/zannatnaim/blog-backend" target="_blank">Backend Code</a>
                </div>
            </div>

            <div className="project-card">
                <h3>Real-Time Object Detection</h3>
                <p>A computer vision project that detects objects in real-time using a trained model.</p>
                <p className="project-tech">Python</p>
                <div className="project-links">
                    <a href="https://github.com/zannatnaim/VisionGuide_New" target="_blank">View on GitHub</a>
                </div>
            </div>

        </section>
    )
}

export default Projects