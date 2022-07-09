import {FaSlackHash} from 'react-icons/fa'

function Footer() {
    const curYear = new Date().getFullYear()

    return (
        <footer className="footer footer-center p-10 shadow-sm bg-base-200">
            <div>
                <FaSlackHash size={50}/>
                <p>Copyright © {curYear} - All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer