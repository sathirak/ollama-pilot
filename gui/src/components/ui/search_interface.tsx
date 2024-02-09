import React, { useState, useEffect } from "react";

const UI_SEARCH_INTERFACE = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const { value } = props;
    const textareaElement = React.useRef<HTMLTextAreaElement>(null);
    const [showBackToBottom, setShowBackToBottom] = useState(false);

    const updateTextareaHeight = () => {
        if (textareaElement.current) {
            const $element = textareaElement.current;

            $element.style.height = "auto";
            $element.style.height = `${$element.scrollHeight}px`;
            $element.style.resize = "none";

            setShowBackToBottom($element.scrollTop + 50 + $element.clientHeight < $element.scrollHeight);
        }
    };

    const handleBackToBottom = () => {
        if (textareaElement.current) {
            const $element = textareaElement.current;
            $element.scrollTop = $element.scrollHeight;
        }
    };

    const handleScroll = () => {
        updateTextareaHeight();
    };

    useEffect(() => {
        updateTextareaHeight();
    }, [value]);

    return (
        <>

            <div className="search-interface">
                {showBackToBottom && (
                    <div
                        className="textarea-to-bottom"
                        onClick={handleBackToBottom}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M19 3H5"/><path d="M12 21V7"/><path d="m6 15 6 6 6-6"/></svg>
                    </div>
                )}
                
                <textarea
                    ref={textareaElement}
                    {...props}
                    onScroll={handleScroll}
                />
                <button id="sendButton" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                </button>
            </div>
        </>
    );
};

export default UI_SEARCH_INTERFACE;
