import React from "react";

import './home.css'
import logo_home from '../../public/logo.svg'
import UI_SEARCH_INTERFACE from '../components/ui/search_interface';
import UI_SEARCH_CONSOLE from "../components/ui/search_console";

const HOME = () => {

    const [user_query, set_user_query] = React.useState("");

    return (
        <>
            <div className="lo-home">

                <div className='outerface'>
                    <div className="logo">
                        <img src={logo_home} alt="ollama pilot logo" />
                        <p className='hero-greeting'>Hi there!</p>
                    </div>

                </div>

                

                <div className="interface">
                    
                    <div className='inputface'>
                        <UI_SEARCH_CONSOLE />
                        <UI_SEARCH_INTERFACE id="userInput" placeholder="Message Ollama..." value={user_query} rows={1} onChange={(e) => set_user_query(e.target.value)} autoFocus spellCheck={false} />


                    </div>

                    <p className='hero-warning'>AI models in general can make mistakes. Consider checking important information.</p>
                </div>

            </div>
        </>
    );
};

export default HOME;
