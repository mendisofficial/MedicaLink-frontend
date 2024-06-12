
function Popup(){

    return (
        <div id="pop-up-container" className="d-none">

            <div className="pop-up" id="pop-up">
                <button className="close-btn" id="pop-up-close">
                    <span className="material-symbols-outlined">
                        cancel
                    </span>
                </button>

                <div className="content" id="pop-up-content">

                </div>
            </div>

        </div>
    );
}

export default Popup;