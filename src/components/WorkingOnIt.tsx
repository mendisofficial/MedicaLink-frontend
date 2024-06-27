import gif from '../assets/img/under-construction.gif';
import './WorkingOnIt.css';

function WorkingOnIt() {

    return (
        <div className="col-12">
            <div className="working-container section-blur">

                <div className="anime">

                    <img src={gif} alt="animation" />

                    <div className="desc">

                        <h3>Page Under Construction</h3>

                        <p className="mt-4">
                            This feature is not yet supported. We are currently working on it.
                            For more updates about all the latest features and services please visit our website.
                        </p>

                        <a href="" className="shadow mt-3">
                            <span className="me-2">Visit MedicaLink.co</span>
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default WorkingOnIt;