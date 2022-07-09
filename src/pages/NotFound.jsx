import {AiOutlineRollback} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="hero">
        <div className="hero-content text-center ">
            <div className="max-w-md">
                <h1 className="text-8xl font-bold">404</h1>
                <p className="py-6">The page you're looking for might have been removed had it's name changed or is temporarily unavailable.</p>
                <Link to="/" className="btn btn-secondary"><AiOutlineRollback size={20} className="mr-2"/> Back to Home</Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound