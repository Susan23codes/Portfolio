

export default function Projects() {
    return (
        <>
            <div className="projects">
                <h2 style={{ marginLeft: '3rem', marginBottom:'2rem' }}>Projects</h2>
                <div className="projects-container">
                    <div className="project-pic-and-description">
                        <img className="project-pic-one" src="/OnMyWatch.png" alt="screenshot of On My Watch landing page" />
                        <p>On My Watch, an app for the user who wants new inspiration for what to watch next.</p>
                        <div className="project-links">
                            <a href="https://github.com/Team-On-My-Watch" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                            <a href="https://transcendent-basbousa-7ac957.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-two" src="Plantspace.png" alt="screen shot of plantspace header" />
                        <p>PlantSpace, a forum for all things green!</p>
                        <div className="project-links">
                            <a href="https://github.com/Susan23codes/Plant-Space" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                            <a href="https://super-semolina-259059.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-two" src="NASA App.png" alt="screen shot of NASA shot of the day" />
                        <p>NASA's Shot of the Day</p>
                        <div className="project-links">
                            <a href="https://github.com/Susan23codes/Plant-Space" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                            <a href="https://super-semolina-259059.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-two" src="React Trivia.png" alt="screen shot of PlantSpace homepage" />
                        <p>A React Trivia App--answer questions from many different categories!</p>
                        <div className="project-links">
                            <a href="https://github.com/Susan23codes/Plant-Space" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                            <a href="https://super-semolina-259059.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-two" src="Django Music.png" alt="screen shot album covers and album names" />
                        <p>A Django Music App that hits the iTunes API to dynamically render album covers</p>
                        <div className="project-links">
                            <a href="https://github.com/Susan23codes/Plant-Space" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                            <a href="https://super-semolina-259059.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}