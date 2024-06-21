import './PatientRegistrationForm.css';

export function PatientRegistrationForm() {

    return (
        <>
            <div className='col-12'>
                <h2 className='mb-4'># Patient Registration</h2>
            </div>

            <div className="col-12">
                <div id="patient-form" className="section-blur">

                    <h4>Patient Registration Form</h4>

                    <form className="patient-form mt-3">

                        <h6>Basic Information</h6>

                        <div className="row g-3 mb-4">

                            <div className="col-12">
                                <label htmlFor="inputPassword4" className="form-label">Patient Full Name :</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" id="inputCity" />
                            </div>

                            <div className="col-6">
                                <label htmlFor="gender" className="form-label">Gender :</label>
                                <div className="d-flex">

                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" id="gridCheck" name="gender" value="male" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Male
                                        </label>
                                    </div>

                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" id="gridCheck2" name="gender" value="female" />
                                        <label className="form-check-label" htmlFor="gridCheck2">
                                            Female
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id="gridCheck3" name="gender" value="n/a" />
                                        <label className="form-check-label" htmlFor="gridCheck3">
                                            N/A
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <textarea name="address" id="inputAddress" className="form-control"></textarea>
                            </div>

                        </div>

                        <h6>Other Information</h6>

                        <div className="row g-3">

                            <div className="col-md-4">
                                <label htmlFor="inputState" className="form-label">Blood Group</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>A positive</option>
                                    <option>A negative</option>
                                    <option>B positive</option>
                                    <option>B negative</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="inputHeight" className="form-label">Height :</label>
                                <input type="number" className="form-control" id="inputHeight" />
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="inputWeight" className="form-label">Weight :</label>
                                <input type="number" className="form-control" id="inputWeight" />
                            </div>

                            <div className="col-12">
                                <label htmlFor="inputImage" className='form-label'>Profile Photo</label>
                                <input type="file" name="profile" id="inputImage" className='form-control'/>
                            </div>

                            <div className="col-12 controls">
                                <button type="submit" id="register-btn" className="my-3 me-2">
                                    <span className="me-2 text-nowrap">Register Patient</span>
                                    <span className="material-symbols-outlined">
                                        how_to_reg
                                    </span>
                                </button>

                                <button type="button" id="cancel-btn">
                                    <span className="me-2">Cancel</span>
                                    <span className="material-symbols-outlined">
                                        cancel
                                    </span>
                                </button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}