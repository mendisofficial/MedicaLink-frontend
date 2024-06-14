import { useState } from 'react';

export function RecordForm() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="container-fluid mt-3 px-0">
            <div className="row gx-0">

            <div className="col-12 col-md-6">
                <div className="record">
                    <span className="title">Record Type :</span>
                    <span className="value">Diagnosis</span>
                </div>
            </div>

            <div className="col-12 col-md-6">
                <div className="record">
                    <span className="title">Medical Institute :</span>
                    <span className="value">Heymas Hospitals</span>
                </div>
            </div>

            <div className="col-12">
                <div className="record">
                    <span className="title">Notes / Description :</span>
                    <p className="value">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Quidem voluptate consequatur recusandae harum pariatur placeat, doloremque ipsam ex doloribus hic.
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

            <div className="col-12">
                <div className="record">
                    <span className="title">Attachment :</span>
                    <span className="value">
                    No attachments
                    </span>
                </div>
            </div>

            <div className="col-12">

            <div>



            </div>

            </div>

            </div>
        </div>
    )
}