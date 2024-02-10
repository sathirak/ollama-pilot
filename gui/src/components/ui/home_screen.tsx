import logo_home from "../../../public/logo.svg";

const UI_HOME_SCREEN = () => {

    return (
        <div className='outerface'>
            <div className="logo">
                <img src={logo_home} alt="ollama pilot logo"/>
                <p className='hero-greeting'>Hi there!</p>
            </div>
        </div>
    );
}

export default UI_HOME_SCREEN