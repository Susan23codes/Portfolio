import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Sidebar from './Sidebar';



export default function Header() {
    return (
        <>
            <div className="sidebar-and-header">
                <Sidebar />
                <div className="main-header">
                    <img className="headshot" src="/headshot cropped.jpg" alt="my headshot"></img>
                    <div className="my-info">
                        <h2 style={{  marginBottom: '0px' }}>Susan Brown</h2>
                        <h3>Software Developer</h3>
                        <span style={{ marginBottom: '15px' }}>susan23codes@gmail.com</span>
                        <span>Raleigh/Durham, NC</span>
                        <div className='icons'>
                        <a href="https://github.com/susan23codes" target="_blank" style={{color:'white'}}><GitHubIcon fontSize='medium' /></a>
                        <a href="https://www.linkedin.com/in/susan-brown23/" target="_blank" style={{color:'white'}}> <LinkedInIcon fontSize='medium' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}