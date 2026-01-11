import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>


            <nav>
                <div className="logoname">
                    <h1>ProfilePoint</h1>
                </div>

                <div className="navlinks">
                    <a href="" onClick={(e) => {
                        e.preventDefault();
                        navigate('/')
                    }}>Home</a>
                    <a href="" onClick={(e) => {
                        e.preventDefault();
                        navigate('/about')
                    }}>About</a>
                    <a href=""
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/users')
                        }}>Users</a>
                </div>

            </nav>
        </>
    )
}

export default Navbar;