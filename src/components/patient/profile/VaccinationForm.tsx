
export function VaccinationForm() {

    return (
        <div className="container-fluid mt-3 px-0">
            <div className="row gx-0">

                <div className="col-12 col-md-6">
                    <div className="record">
                        <span className="title">Vaccine Brand :</span>
                        <span className="value">BCG</span>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="record">
                        <span className="title">Vaccine Name :</span>
                        <span className="value">TheraCys® BCG</span>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="record">
                        <span className="title">Vaccinated Location :</span>
                        <span className="value">Heymas Hospitals</span>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="record">
                        <span className="title">Dose :</span>
                        <span className="value">10 Liters</span>
                    </div>
                </div>

                <div className="col-12">
                    <div className="record">
                        <span className="title">Description :</span>
                        <p className="value">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae id possimus laudantium quam impedit.
                            Nobis blanditiis qui temporibus voluptatum quos?
                        </p>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="record">
                        <span className="title">Created On :</span>
                        <span className="value">12/06/2003</span>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="record">
                        <span className="title">Last Updated :</span>
                        <span className="value">12/06/2003</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

interface VaccinationFormProps{
    isEdit? : boolean
}

export function VaccinationEditForm({isEdit = false} : VaccinationFormProps) {

    return (
        <>
            <h4 className="mt-3 mt-md-0">Vaccination Details - 20/12/2003</h4>

            {
                isEdit? (
                    <div className="d-flex my-3 mt-md-0 cancel-btn-container">
                        <button className="cancel-btn shadow" id="cancel-btn">
                            <span className="me-2">Cancel</span>
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    </div>
                ) : null
            }
            <form className={`row g-3 mx-0 ${isEdit? '' : 'mt-5'}`}>
            <input type="hidden" id="vaccination_id" name="vaccination_id" value=""/>
                <div className="col-12 col-md-6">
                    <label htmlFor="vaccineBrand" className="form-label">Vaccine Brand</label>
                    <select id="vaccineBrand" className="form-select">
                        <option disabled>Select Vaccine Brand</option>

                    </select>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="vaccineNames" className="form-label">Vaccine Name</label>
                    <select id="vaccineNames" className="form-select" name="vaccine_id">
                        <option disabled>Select Vaccine Name</option>
                        
                    </select>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" value="" disabled={isEdit}/>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" className="form-control" id="date" name="date_administered" value=""/>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="dose" className="form-label">Dose</label>
                    <input type="text" className="form-control" name="dose" id="dose" value=""/>
                </div>
                <div className="col-12">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea id="description" name="description" className="form-control"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save Record</button>
                </div>
            </form>
        </>
    );
}