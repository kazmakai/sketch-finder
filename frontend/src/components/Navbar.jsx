import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Sketch Finder</Link>

      <div className='page-links'>
        <Link to={"/upload"}>Upload</Link>
        <Link to={"/profile"}>Profile</Link>
      </div>
    </nav>
  )
}

export default Navbar