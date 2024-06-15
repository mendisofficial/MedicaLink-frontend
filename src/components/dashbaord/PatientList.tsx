import Chiranga from "../../assets/img/patients/Chiranga.jpg";
import Nisala from "../../assets/img/patients/Nisala.jpg";
import Seneli from "../../assets/img/patients/Seneli.jpg";
import Chathusha from "../../assets/img/patients/Chathusha.jpg";
import Nishadi from "../../assets/img/patients/Nishadi.jpg";

function PatientList() {

    let patientData = [
        {
            id:1, referenceNo: '200311513520', name: 'Chiranga Shalitha', user: 'Dr. Dhashantie',
            registeredDate: '20/05/2022', image : Chiranga
        },
        {
            id:2, referenceNo: '200331012273', name: 'Nisala Develigoda', user: 'Dr. Banu',
            registeredDate: '20/05/2022', image : Nisala
        },
        {
            id:3, referenceNo: '200466901046', name: 'Seneli Jayasinghe', user: 'Dr. Suresh',
            registeredDate: '20/05/2022', image : Seneli
        },
        {
            id:4, referenceNo: '200331020128', name: 'Chathusha Mendis', user: 'Dr. Kushan',
            registeredDate: '20/05/2022', image : Chathusha
        },
        {
            id:5, referenceNo: '200331020128', name: 'Nishadi Wijesinghe', user: 'Dr. Poorni',
            registeredDate: '20/05/2022', image : Nishadi
        }
    ];

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Patient</th>
                    <th scope="col">Added Date</th>
                    <th scope="col">Added By</th>
                </tr>
            </thead>

            <tbody>

                {
                    patientData.map(patient => {

                        return (
                            <tr key={patient.id}>
                                <th scope="row">{patient.id}</th>
                                <td>
                                    <div className="patient">
                                        <img src={patient.image} alt="profile-image" />
                                        <div>
                                            <span className="fw-medium">{patient.referenceNo}</span>
                                            <span>{patient.name}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>{patient.registeredDate}</td>
                                <td>{patient.user}</td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
    );
}

export default PatientList;