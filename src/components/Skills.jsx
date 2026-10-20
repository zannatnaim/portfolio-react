function Skills() {
    const skillCategories = [
        {
            category: "Languages",
            items: ["Python", "JavaScript"]
        },
        {
            category: "Frontend",
            items: ["HTML5", "CSS3", "React.js"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
        },
        {
            category: "Database",
            items: ["MongoDB"]
        },
        {
            category: "Tools",
            items: ["Git & GitHub", "Postman", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skillCategories.map((cat) => (
                    <div className="skill-category" key={cat.category}>
                        <h3>{cat.category}</h3>
                        <div className="skill-tags">
                            {cat.items.map((item) => (
                                <span className="skill-tag" key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills