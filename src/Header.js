import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Sidebar from './Sidebar';

export default function Header() {
    return (
        <>
            <div className="sidebar-and-header">
                <Sidebar />
                <div className="main-header">
                    <img className="headshot" src="/headshot cropped.jpg"></img>
                    <div className="my-info">
                        <h2 style={{ fontSize: '2em', marginBottom: '0px' }}>Susan Brown</h2>
                        <h3>Software Developer</h3>
                        <span style={{ marginBottom: '15px' }}>susan23codes@gmail.com</span>
                        <span>Raleigh/Durham, NC</span>
                        <div className='icons'>
                            <GitHubIcon fontSize='large' />
                            <LinkedInIcon fontSize='large' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}