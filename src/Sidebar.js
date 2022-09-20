
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <>

            <div className="sidebar">
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Me</Link>
                <Link to={'/projects'} style={{textDecoration:'none', color:'white'}}>Projects</Link>
                <Link to={'/experience'} style={{textDecoration:'none', color:'white'}}>Experience</Link>
                <Link to={'/education'} style={{textDecoration:'none', color:'white'}}>Education</Link>
            </div>

        </>
    )
}