import {Link} from 'react-router-dom'

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='flex items-center shadow-lg p-2 rounded-lg bg-base-100 hover:bg-base-200'>
        <div className="avatar">
            <div className="w-24 rounded">
                <img src={avatar_url} alt="User Profile"/>
            </div>
        </div>
        <div className='pl-6'>
            <p className='text-xl mb-1 font-bold'>{login}</p>
            <Link to={`/users/${login}`} className='link link-hover text-sm text-gray-400'>Visit profile</Link>
        </div>
    </div>
  )
}

export default UserItem