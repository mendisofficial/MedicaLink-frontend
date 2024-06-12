import './AdminSearchPanel.css';
import SearchResult, { SearchType } from './SearchResult';
import Searchbar, { FilterCategory, FilterGroup, FilterList, FilterTitle, SearchFilter } from './Searchbar';

function AdminSearchPanel() {

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
                <h2 className='mb-4'># Admin Search</h2>
            </div>

            <div className="col-12">

                <Searchbar className='mb-4'>

                    <SearchFilter>

                        <FilterGroup>

                            <FilterTitle>Select search type</FilterTitle>
                            <FilterList>
                                <FilterCategory key={1} name='type' value='nic' checked={true}># Reference Number</FilterCategory>
                                <FilterCategory key={2} name='type' value='name'># Patient Name</FilterCategory>
                                <FilterCategory key={3} name='type' value='hospital'># Registered Hospital</FilterCategory>
                            </FilterList>

                        </FilterGroup>

                        <FilterGroup>

                            <FilterTitle>Select registration type</FilterTitle>
                            <FilterList>
                                <FilterCategory key={1} name='reg_type' value='your'># Your Hospital</FilterCategory>
                                <FilterCategory key={2} name='reg_type' value='associated'># Associated With</FilterCategory>
                                <FilterCategory key={3} name='reg_type' value='all' checked={true}># All</FilterCategory>
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
                        <h4 className="mb-0">Patient Details</h4>
                        <span className="ms-auto">Showing {patientList.length} results</span>
                    </div>

                    <hr />

                    <div className="patient-list">

                        {
                            patientList.map(patient => {
                                return (
                                    <SearchResult key={patient.id} referenceNo={patient.referenceNo} name={patient.name} registeredHospital={patient.registeredHospital}
                                        registeredDate={patient.registeredDate} lastUpdated={patient.lastUpdated} firstUpdated={patient.firstUpdated}
                                        searchType={SearchType.VIEW}></SearchResult>
                                );
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminSearchPanel;