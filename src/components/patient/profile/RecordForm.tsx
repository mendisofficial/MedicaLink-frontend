import { ReactNode, useState } from 'react';
import medicalReport from '../../../assets/img/record.png'
import { MedicalRecord } from '../../../models/MedicalRecord';

interface RecordFormProps {
    record? : MedicalRecord;
    isEdit?: boolean
}

export function RecordForm({record} : RecordFormProps) {
    const [formNode, setFormNode] = useState<ReactNode>(<RecordOverviewForm record={record}/>);
    const [isEdit,setIsEdit] = useState<boolean>(false);

    return (
        <div className="container-fluid mt-3 px-0">
            <h4 className="mt-3 mt-md-0">Medical Record Details{record?.recordType} - 20/12/2003</h4>

            {
                record?.isEditable ? (
                    isEdit? (
                        <div className="d-flex my-3 mt-md-0 cancel-btn-container">
                            <button className="cancel-btn shadow" id="cancel-btn" onClick={() => {
                                setIsEdit(false);
                                setFormNode(<RecordOverviewForm record={record}/>);
                            }}>
                                <span className="me-2">Cancel</span>
                                <span className="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                        </div>
                    ) : (
                        <div className="d-flex mt-3 mt-md-0 edit-btn-container">
                        <button className="edit-btn shadow" id="edit-btn" onClick={() => {
                            setIsEdit(true);
                            setFormNode(<RecordEditForm isEdit={true} record={record} />);
                        }}>
                            <span className="me-2">Edit Record</span>
                            <span className="material-symbols-outlined">
                                edit_note
                            </span>
                        </button>
                    </div>
                    )
                ) : null
            }

            {formNode}
        </div>
    )
}

function RecordOverviewForm({record} : RecordFormProps) {

    return (
        <div className="row gx-0">

            <div className="col-12 col-md-6">
                <div className="record">
                    <span className="title">Record Type :</span>
                    <span className="value">{record?.recordType}</span>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="record">
                    <span className="title">Medical Institute :</span>
                    <span className="value">{record?.admin.hospital?.name}</span>
                </div>
            </div>

            <div className="col-12">
                <div className="record">
                    <span className="title">Notes / Description :</span>
                    <p className="value">
                        {record?.description || 
                        'Blood test was done to prepare for upcoming septoplasty. He seems to be very healthy and fit.'}
                    </p>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="record">
                    <span className="title">Created On :</span>
                    <span className="value">{record?.date}</span>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="record">
                    <span className="title">Last Updated :</span>
                    <span className="value">{record?.date}</span>
                </div>
            </div>

            <div className="col-12">

                {/* <div className='mt-3 border border-1'>
                        <img src={medicalReport} alt="" className='record-image' />
                    </div> */}

                <div className="record">
                    <span className="title">Attachment :</span>
                    <span className="value">
                        <a href={record?.filePath} target='_blank'>Download report - </a>
                    </span>
                </div>

            </div>

        </div>
    );
}

function RecordEditForm({isEdit = false, record} : RecordFormProps) {

    return (
        <form className={`row g-3 mx-0 ${isEdit ? '' : 'mt-5'}`}>
            <div className="col-12 col-md-6">
                <label htmlFor="inputState" className="form-label">Vaccine</label>
                <select id="inputState" className="form-select">
                    <option>Choose...</option>
                    <option>BCG - TheraCys® BCG</option>
                    <option>BCG - TheraCys® BCG</option>
                    <option>BCG - TheraCys® BCG</option>
                </select>
            </div>
            <div className="col-12 col-md-6">
                <label htmlFor="inputAddress" className="form-label">Location</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12 col-md-6">
                <label htmlFor="inputAddress2" className="form-label">Date</label>
                <input type="date" className="form-control" id="inputAddress2" />
            </div>
            <div className="col-12 col-md-6">
                <label htmlFor="inputCity" className="form-label">Dose</label>
                <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-12">
                <label htmlFor="inputDesc" className="form-label">Notes / Description</label>
                <textarea name="description" id="inputDesc" className="form-control form-text"
                    placeholder="A small description of the record or a special note"></textarea>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Save Record</button>
            </div>
        </form>
    )
}

export function RecordInsertForm({ isEdit = false }: RecordFormProps) {

    return (
        <>
            <h4 className="mt-3 mt-md-0">Medical Record Details - 20/12/2003</h4>

            {isEdit ? (
                <div className="d-flex my-3 mt-md-0 cancel-btn-container">
                    <button className="cancel-btn shadow" id="cancel-btn">
                        <span className="me-2">Cancel</span>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>
            ) : null}

            <RecordEditForm />
        </>
    );
}