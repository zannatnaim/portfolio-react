function Education() {
   const education = [
    {
        degree: "B.Sc. in Computer Science (ongoing)",
        institution: "Xian Shiyou University, China"
    },
    {
        degree: "HSC — GPA 5.00 (Golden, all A+)",
        institution: "Bangladesh"
    },
    {
        degree: "SSC — GPA 5.00 (Golden, all A+)",
        institution: "Bangladesh"
    },
    {
        degree: "JSC — GPA 5.00 (Golden, all A+)",
        institution: "Bangladesh"
    }
];

    return (
        <section id="education" className="education">
            <h2>Education</h2>
            {education.map((edu) => (
                <div className="education-item" key={edu.degree}>
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution}</p>
                </div>
            ))}
        </section>
    )
}

export default Education