import './AdminPatientPanel.css';
import Searchbar, { FilterCategory, FilterGroup, FilterList, FilterTitle, SearchFilter } from '../search/Searchbar';

function AdminPatientPanel() {

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
                                <FilterCategory active={true}># Reference Number</FilterCategory>
                                <FilterCategory># Patient Name</FilterCategory>
                                <FilterCategory># Registered Hospital</FilterCategory>
                            </FilterList>

                        </FilterGroup>

                        <FilterGroup>

                            <FilterTitle>Select registration type</FilterTitle>
                            <FilterList>
                                <FilterCategory># Your Hospital</FilterCategory>
                                <FilterCategory># Associated With</FilterCategory>
                                <FilterCategory active={true}># All</FilterCategory>
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
                            <span className="me-2 me-md-3 text-nowrap">Showing 10 results</span>
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

                            <div className="controls">
                                <button className="edit mb-2 mb-md-0 me-md-2">
                                    <span className="material-symbols-outlined">
                                        edit_square
                                    </span>
                                </button>
                                <button className="delete">
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
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

                            <div className="controls">
                                <button className="edit mb-2 mb-md-0 me-md-2">
                                    <span className="material-symbols-outlined">
                                        edit_square
                                    </span>
                                </button>
                                <button className="delete">
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
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

                            <div className="controls">
                                <button className="edit mb-2 mb-md-0 me-md-2">
                                    <span className="material-symbols-outlined">
                                        edit_square
                                    </span>
                                </button>
                                <button className="delete">
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
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

                            <div className="controls">
                                <button className="edit mb-2 mb-md-0 me-md-2">
                                    <span className="material-symbols-outlined">
                                        edit_square
                                    </span>
                                </button>
                                <button className="delete">
                                    <span className="material-symbols-outlined">
                                        delete
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default AdminPatientPanel;