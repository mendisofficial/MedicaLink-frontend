import './AdminPatientPanel.css';
import SearchResult, { SearchType } from '../search/SearchResult';
import Searchbar, { FilterCategory, FilterGroup, FilterList, FilterTitle, SearchFilter } from '../search/Searchbar';

function AdminPatientPanel() {

    const patientList = [
        {
            id:1, referenceNo: '200331020128', name: 'Jane Cooper', registeredHospital: 'Hemas pvt ltd',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022'
        },
        {
            id:2, referenceNo: '200331020128', name: 'Jane Cooper', registeredHospital: 'Hemas pvt ltd',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022'
        },
        {
            id:3, referenceNo: '200331020128', name: 'Jane Cooper', registeredHospital: 'Hemas pvt ltd',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022'
        },
        {
            id:4, referenceNo: '200331020128', name: 'Jane Cooper', registeredHospital: 'Hemas pvt ltd',
            registeredDate: '20/05/2022', lastUpdated: '10/05/2024', firstUpdated: '20/05/2022'
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
                            <a className="add-btn" href="./admin-registration-form.html">
                                <span className="me-2 d-none d-md-block">Add Patient</span>
                                <span className="material-symbols-outlined">
                                    person_add
                                </span>
                            </a>
                        </div>
                    </div>

                    <hr />

                    <div className="patient-list">

                        {
                            patientList.map(patient => {
                                return (
                                    <SearchResult key={patient.id} referenceNo={patient.referenceNo} name={patient.name} registeredHospital={patient.registeredHospital}
                                        registeredDate={patient.registeredDate} lastUpdated={patient.lastUpdated} firstUpdated={patient.firstUpdated}
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