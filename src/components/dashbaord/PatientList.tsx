import avatar from '../../assets/img/profie/profile-image.jpg';

function PatientList() {

    let patientData = [
        { id: 1, imgUrl: avatar, nic: '200331015154', name: 'Jane Cooper', dateTime: '22/10/2024 21:25', user: '@doctor_Johnny' },
        { id: 2, imgUrl: avatar, nic: '200331015154', name: 'Jane Cooper', dateTime: '22/10/2024 21:25', user: '@doctor_Johnny' },
        { id: 3, imgUrl: avatar, nic: '200331015154', name: 'Jane Cooper', dateTime: '22/10/2024 21:25', user: '@doctor_Johnny' }
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
                                        <img src={patient.imgUrl} alt="profile-image" />
                                        <div>
                                            <span className="fw-medium">{patient.nic}</span>
                                            <span>{patient.name}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>{patient.dateTime}</td>
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