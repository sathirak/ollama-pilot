import React from "react";

import './home.css'

import UI_HOME_SCREEN from "../components/ui/home_screen.tsx";
import UI_SEARCH_INTERFACE from '../components/ui/search_interface';
import UI_SEARCH_CONSOLE from "../components/ui/search_console";
import UI_INTERACT_SCREEN from "../components/ui/interact_screen.tsx";

const HOME = () => {

    const [user_query, set_user_query] = React.useState("");

    return (
        <>
            <div className="lo-home">

                <div className="model-sheet">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="model-icon">
                        <path
                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                    <h4 className={"model-name"}>Llama 2 / <span className={"model-version"}>V6 engine</span></h4>
                </div>

                <UI_INTERACT_SCREEN />
                <UI_HOME_SCREEN />


                <div className="interface">

                    <div className='inputface'>

                        <UI_SEARCH_INTERFACE id="userInput" placeholder="Message Ollama..." value={user_query} rows={1}
                                             onChange={(e) => set_user_query(e.target.value)} autoFocus
                                             spellCheck={false}/>
                        <UI_SEARCH_CONSOLE/>
                        <p className='hero-warning'>AI models in general can make mistakes. Consider checking important
                            information as a precaution.</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default HOME;
