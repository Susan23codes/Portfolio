

export default function AboutMe() {
    return (
        <>
            <div className="about-me-main">
                <h2 style={{ marginLeft: '3rem' }}>About Me</h2>
                <div style={{ fontSize: '.75rem', marginLeft: '3rem', marginRight: '3rem' }}>I am a Software Developer
                    experienced in HTML, CSS, JavaScript, React, Python, and Django.  I'm
                    passionate about using technology to solve business challenges.  Also
                    an avid puzzler, I enjoy bringing my problem-solving skills to the world of tech.
                    My love of music and background as a performer and music teacher
                    has given me a strength in explaining technical concepts to others and the
                    discipline to stick with something until I get it right.</div>
                <h2 style={{ marginLeft: '3rem', marginTop:'3rem' }}>Technical Skills</h2>
                <div className="about-me-skills">
                    <p className="skill-name">HTML</p>
                    <p className="skill-name">CSS</p>
                    <p className="skill-name">JavaScript</p>
                    <p className="skill-name">React</p>
                    <p className="skill-name">Python</p>
                    <p className="skill-name">Django</p>
                </div>
            </div>
        </>
    )
}