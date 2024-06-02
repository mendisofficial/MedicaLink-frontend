import './AdminSearchPanel.css';
import Searchbar, { FilterCategory, FilterGroup, FilterList, FilterTitle, SearchFilter } from './Searchbar';

function AdminSearchPanel() {

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
                            <FilterList activeCategoryKey="reference_no">
                                <FilterCategory key="reference_no"># Reference Number</FilterCategory>
                                <FilterCategory key="patient_name"># Patient Name</FilterCategory>
                                <FilterCategory key="registered_hospital"># Registered Hospital</FilterCategory>
                            </FilterList>

                        </FilterGroup>

                        <FilterGroup>

                            <FilterTitle>Select registration type</FilterTitle>
                            <FilterList activeCategoryKey="all">
                                <FilterCategory key="hospital"># Your Hospital</FilterCategory>
                                <FilterCategory key="associated"># Associated With</FilterCategory>
                                <FilterCategory key="all"># All</FilterCategory>
                            </FilterList>

                        </FilterGroup>

                        <FilterGroup>

                            <div className="control mb-2">
                                <h6 className="me-2">Select Start Date: </h6>
                                <input type="date"/>
                            </div>
                            <div className="control">
                                <h6 className="me-2">Select End Date: </h6>
                                <input type="date"/>
                            </div>

                        </FilterGroup>

                    </SearchFilter>

                </Searchbar>

            </div>

            <div className="col-12">

                <div id="search-result-section" className="section-blur">

                    <div className="d-flex align-items-center">
                        <h4 className="mb-0">Patient Details</h4>
                        <span className="ms-auto">Showing 10 results</span>
                    </div>

                    <hr />

                    <div className="patient-list">

                        <div className="patient">

                            <img src="/assets/img/profile/profile-image.jpg" alt="profile-image" />

                            <div className="info">
                                <span className="highlight">Reference No: 200331020128</span>
                                <span>Name: Jane Cooper</span>
                            </div>

                            <div className="info temp">
                                <span>Registered Hospital: Hemas pvt ltd</span>
                                <span>Registered Date: 20/05/2022</span>
                            </div>

                            <div className="info temp">
                                <span>Last Updated Date: 10/05/2024</span>
                                <span>First Updated Date: 20/05/2022</span>
                            </div>

                            <a className="view-btn d-none d-md-flex" href="/admin-profile-overview.html">
                                <span className="me-2">View Profile</span>
                                <span className="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </div>

                        <div className="patient">

                            <img src="/assets/img/profile/profile-image.jpg" alt="profile-image" />

                            <div className="info">
                                <span className="highlight">Reference No: 200331020128</span>
                                <span>Name: Jane Cooper</span>
                            </div>

                            <div className="info temp">
                                <span>Registered Hospital: Hemas pvt ltd</span>
                                <span>Registered Date: 20/05/2022</span>
                            </div>

                            <div className="info temp">
                                <span>Last Updated Date: 10/05/2024</span>
                                <span>First Updated Date: 20/05/2022</span>
                            </div>

                            <a className="view-btn d-none d-md-flex" href="/admin-profile-overview.html">
                                <span className="me-2">View Profile</span>
                                <span className="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </div>

                        <div className="patient">

                            <img src="/assets/img/profile/profile-image.jpg" alt="profile-image" />

                            <div className="info">
                                <span className="highlight">Reference No: 200331020128</span>
                                <span>Name: Jane Cooper</span>
                            </div>

                            <div className="info temp">
                                <span>Registered Hospital: Hemas pvt ltd</span>
                                <span>Registered Date: 20/05/2022</span>
                            </div>

                            <div className="info temp">
                                <span>Last Updated Date: 10/05/2024</span>
                                <span>First Updated Date: 20/05/2022</span>
                            </div>

                            <a className="view-btn d-none d-md-flex" href="/admin-profile-overview.html">
                                <span className="me-2">View Profile</span>
                                <span className="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </div>

                        <div className="patient">

                            <img src="/assets/img/profile/profile-image.jpg" alt="profile-image" />

                            <div className="info">
                                <span className="highlight">Reference No: 200331020128</span>
                                <span>Name: Jane Cooper</span>
                            </div>

                            <div className="info temp">
                                <span>Registered Hospital: Hemas pvt ltd</span>
                                <span>Registered Date: 20/05/2022</span>
                            </div>

                            <div className="info temp">
                                <span>Last Updated Date: 10/05/2024</span>
                                <span>First Updated Date: 20/05/2022</span>
                            </div>

                            <a className="view-btn d-none d-md-flex" href="/admin-profile-overview.html">
                                <span className="me-2">View Profile</span>
                                <span className="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminSearchPanel;