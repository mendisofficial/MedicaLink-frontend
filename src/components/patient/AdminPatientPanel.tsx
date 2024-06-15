import './AdminPatientPanel.css';
import SearchResult, { SearchType } from '../search/SearchResult';
import Chiranga from "../../assets/img/patients/Chiranga.jpg";
import Nisala from "../../assets/img/patients/Nisala.jpg";
import Seneli from "../../assets/img/patients/Seneli.jpg";
import Chathusha from "../../assets/img/patients/Chathusha.jpg";
import Nishadi from "../../assets/img/patients/Nishadi.jpg";
import { NavLink } from 'react-router-dom';
import Searchbar, { FilterCategory, FilterGroup, FilterList, FilterTitle, SearchFilter } from '../search/Searchbar';

function AdminPatientPanel() {

    const patientList = [
        {
            id:1, referenceNo: '200311513520', name: 'Chiranga Shalitha', registeredHospital: 'Hemas PVT LTD',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022', image : Chiranga
        },
        {
            id:2, referenceNo: '200331012273', name: 'Nisala Develigoda', registeredHospital: 'Nawaloka Hospitals PVT LTD',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022', image : Nisala
        },
        {
            id:3, referenceNo: '200466901046', name: 'Seneli Jayasinghe', registeredHospital: 'Durdans Hospital PVT LTD',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022', image : Seneli
        },
        {
            id:4, referenceNo: '200331020128', name: 'Chathusha Mendis', registeredHospital: 'Asiri Hospitals PVT LTD',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022', image : Chathusha
        },
        {
            id:5, referenceNo: '200331020128', name: 'Nishadi Wijesinghe', registeredHospital: 'Nawaloka Hospitals PVT LTD',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022', image : Nishadi
        }
    ];

    return (
        <>
            <div className='col-12'>
                <h2 className='mb-4'># Patients</h2>
            </div>

            <div className="col-12">

                <Searchbar className='mb-4'>

                    <SearchFilter>

                        <FilterGroup>

                            <FilterTitle>Select search type</FilterTitle>
                            <FilterList>
                                <FilterCategory key="reference_no"># Reference Number</FilterCategory>
                                <FilterCategory key="patient_name"># Patient Name</FilterCategory>
                                <FilterCategory key="registered_hospital"># Registered Hospital</FilterCategory>
                            </FilterList>

                        </FilterGroup>

                        <FilterGroup>

                            <FilterTitle>Select registration type</FilterTitle>
                            <FilterList>
                                <FilterCategory key="hospital"># Your Hospital</FilterCategory>
                                <FilterCategory key="associated"># Associated With</FilterCategory>
                                <FilterCategory key="all"># All</FilterCategory>
                            </FilterList>

                        </FilterGroup>

                        <FilterGroup>

                            <div className="control mb-2">
                                <h6 className="me-2">Select Start Date: </h6>
                                <input type="date" />
                            </div>
                            <div className="control">
                                <h6 className="me-2">Select End Date: </h6>
                                <input type="date" />
                            </div>

                        </FilterGroup>

                    </SearchFilter>

                </Searchbar>

            </div>

            <div className="col-12">

                <div id="search-result-section" className="section-blur">

                    <div className="d-flex align-items-center">
                        <h4 className="mb-0">Your Patients</h4>
                        <div className="ms-auto d-flex align-items-center">
                            <span className="me-2 me-md-3 text-nowrap">Showing {patientList.length} results</span>
                            <NavLink className="add-btn" to="add">
                                <span className="me-2 d-none d-md-block">Add Patient</span>
                                <span className="material-symbols-outlined">
                                    person_add
                                </span>
                            </NavLink>
                        </div>
                    </div>

                    <hr />

                    <div className="patient-list">

                        {
                            patientList.map(patient => {
                                return (
                                    <SearchResult key={patient.id} referenceNo={patient.referenceNo} name={patient.name} registeredHospital={patient.registeredHospital}
                                        registeredDate={patient.registeredDate} lastUpdated={patient.lastUpdated} firstUpdated={patient.firstUpdated} imagePath={patient.image}
                                        searchType={SearchType.EDIT}></SearchResult>
                                );
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    );
}

export default AdminPatientPanel;