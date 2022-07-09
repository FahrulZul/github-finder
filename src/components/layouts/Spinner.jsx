import spinner from './assets/spinner.svg'

function Spinner() {
  return (
    <div>
        <img className='mx-auto w-12' src={spinner} alt="Loading..." />
    </div>
  )
}

export default Spinner