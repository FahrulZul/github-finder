import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {FaGithubAlt} from 'react-icons/fa'

function Navbar({title}) {
  return (
    <nav className="bg-base-100 text-base-content drop-shadow-sm">
      <div className='flex justify-between items-center h-28 container mx-auto px-4'>
        <div className="flex-1">
          <Link to='/' className='my-4 flex items-center'>
              <FaGithubAlt size={30} className="mr-1"/>
              <h1 className='text-xl font-bold'>{title}</h1>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-500">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder'
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar