

export default function Projects() {
    return (
        <>
            <div className="projects">
                <h2 style={{ marginLeft: '3rem', marginBottom: '2rem' }}>Projects</h2>
                <div className="projects-container">
                    <div className="project-pic-and-description">
                        <img className="project-pic-one" src="/OnMyWatch.png" alt="screenshot of On My Watch landing page" />
                        <div className="project-description-and-sites">
                            <p>On My Watch, an app for the user who wants new inspiration for what to watch next.  Made with React and Django and styled with Material UI.</p>
                            <div className="project-links">
                                <a href="https://github.com/Team-On-My-Watch" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                                <a href="https://transcendent-basbousa-7ac957.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-one" src="Plantspace.png" alt="screen shot of plantspace header" />
                        <div className="project-description-and-sites">
                            <p>PlantSpace, a forum for all things green!  A React app with a Django backend, this app allows you to ask your plant questions, receive answers, and search.</p>
                            <div className="project-links">
                                <a href="https://github.com/Susan23codes/PlantSpace" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                                <a href="https://super-semolina-259059.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-one" src="NASA App.png" alt="screen shot of NASA shot of the day" />
                        <div className="project-description-and-sites">
                            <p>NASA's Shot of the Day.  A one-page React app which hits the NASA API to bring you a new beautiful picture every day.</p>
                            <div className="project-links">
                                <a href="https://github.com/Susan23codes/NASA-Shot-of-the-Day" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                                <a href="https://nasa-shot-of-the-day.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-one" src="React Trivia.png" alt="screen shot of PlantSpace homepage" />
                        <div className="project-description-and-sites">
                            <p>A React Trivia App--answer questions from many different categories!</p>
                            <div className="project-links">
                                <a href="https://github.com/Susan23codes/React-Trivia" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                                <a href="https://joyful-kangaroo-14de94.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-one" src="Django Music.png" alt="screen shot album covers and album names" />
                        <div className="project-description-and-sites">
                            <p>A Django Music App that hits the iTunes API to dynamically render album covers.</p>
                            <div className="project-links">
                                <a href="https://github.com/Susan23codes/Django-Music" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp; </span></a>
                                {/* <a href="#" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="project-pic-and-description">
                        <img className="project-pic-one" src="JS Calculator.png" alt="screen shot of a calculator" />
                        <div className="project-description-and-sites">
                            <p>A simple calculator made with JavaScript.</p>
                            <div className="project-links">
                                <a href="https://github.com/Susan23codes/JS-Calculator" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>GitHub&ensp;| </span></a>
                                <a href="https://celadon-hotteok-12b528.netlify.app/" target="_blank" style={{ color: 'white', textDecoration: "none" }}><span>&ensp; Site</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}