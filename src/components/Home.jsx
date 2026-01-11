import Background from '../assets/images/Background.jpg'

import { useNavigate } from 'react-router-dom'


let Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <div
                className="home"
                style={{
                    backgroundImage: `linear-gradient(
      rgba(0,0,0,0.5),
      rgba(0,0,0,0.5)
    ), url(${Background})`
                }}
            >
                <div className="home-content">
                    <h1 className="text">
                        <span className="text-2">Hi there..,</span><br />
                        Welcome! <br />
                        This app helps you manage your personal information
                        quickly and securely.
                    </h1>
                    <button className="home-btn" onClick={() => {
                        navigate('/users')
                    }}>Get Started</button>
                </div>
            </div >


        </>
    )
}

export default Home;
