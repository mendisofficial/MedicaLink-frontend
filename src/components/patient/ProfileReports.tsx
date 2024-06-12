import Searchbar, { FilterCategory, FilterGroup, FilterList, FilterTitle, SearchFilter } from '../search/Searchbar';
import './ProfileReports.css';

function ProfileReports() {

    return (
        <>
            <div className="col-12">
                
                <Searchbar className='mb-4'>

                    <SearchFilter>

                        <FilterGroup>

                            <FilterTitle>Select search type</FilterTitle>
                            <FilterList>
                                <FilterCategory key={1} name='type' value='name' checked={true}># Record Type/ Name</FilterCategory>
                                <FilterCategory key={2} name='type' value='location'># Record Location</FilterCategory>
                                <FilterCategory key={1} name='type' value='all'># All</FilterCategory>
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

            <div className="col">

                <div className="record-container px-4 py-3 section-blur shadow">

                    <div className="section-controls py-3">

                        <div className="section-links">
                            <a href="/vaccinations" className="me-2 active px-3 py-2">
                                <span className="d-none d-md-inline">Vaccinations</span>
                                <i className="bi bi-virus2 ms-md-2"></i>
                            </a>
                            <a href="/reports" className="me-2 px-3 py-2">
                                <span className="d-none d-md-inline">Medical Reports</span>
                                <i className="bi bi-clipboard2-pulse ms-md-2"></i>
                            </a>
                        </div>

                        <div className="tag-links">
                            <a href="/vaccinations" className="me-1 px-3 py-1 active d-none d-md-block"># Last Week</a>
                            <a href="/reports" className="me-1 px-3 py-1 d-none d-lg-block"># Last Month</a>
                            <a href="/reports" className="me-2 px-3 py-1 d-none d-md-block"># All Time</a>
                        </div>

                    </div>

                    <hr />

                    <div className="record-data mt-4" id="record-data-container">

                        <h5>Vaccination Details</h5>

                        <div className="table-container mt-2 py-2 px-md-4">
                            <table className="table mt-md-2 mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col" className="d-none d-lg-table-cell">#</th>
                                        <th scope="col">Vaccine Type</th>
                                        <th scope="col" className="d-none d-md-table-cell">Brand</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Date</th>
                                        <th scope="col" className="d-none d-md-table-cell">Dose</th>
                                        <th scope="col" className="d-none d-lg-table-cell"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="d-none d-lg-table-cell">22 : 25</th>
                                        <td>BCG</td>
                                        <td className="d-none d-md-table-cell">TheraCys® BCG</td>
                                        <td>Heymas Hospitals</td>
                                        <td>12/06/2003</td>
                                        <td className="d-none d-md-table-cell">10 Liters</td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                <button className="view-more">
                                                    <span className="material-symbols-outlined">
                                                        read_more
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="d-none d-lg-table-cell">22 : 25</th>
                                        <td>BCG</td>
                                        <td className="d-none d-md-table-cell">TheraCys® BCG</td>
                                        <td>Heymas Hospitals</td>
                                        <td>12/06/2003</td>
                                        <td className="d-none d-md-table-cell">10 Liters</td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                <button className="view-more">
                                                    <span className="material-symbols-outlined">
                                                        read_more
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="d-none d-lg-table-cell">22 : 25</th>
                                        <td>BCG</td>
                                        <td className="d-none d-md-table-cell">TheraCys® BCG</td>
                                        <td>Heymas Hospitals</td>
                                        <td>12/06/2003</td>
                                        <td className="d-none d-md-table-cell">10 Liters</td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                <button className="view-more">
                                                    <span className="material-symbols-outlined">
                                                        read_more
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="d-none d-lg-table-cell">22 : 25</th>
                                        <td>BCG</td>
                                        <td className="d-none d-md-table-cell">TheraCys® BCG</td>
                                        <td>Heymas Hospitals</td>
                                        <td>12/06/2003</td>
                                        <td className="d-none d-md-table-cell">10 Liters</td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                <button className="view-more">
                                                    <span className="material-symbols-outlined">
                                                        read_more
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="d-none d-lg-table-cell">22 : 25</th>
                                        <td>BCG</td>
                                        <td className="d-none d-md-table-cell">TheraCys® BCG</td>
                                        <td>Heymas Hospitals</td>
                                        <td>12/06/2003</td>
                                        <td className="d-none d-md-table-cell">10 Liters</td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                <button className="view-more">
                                                    <span className="material-symbols-outlined">
                                                        read_more
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="d-none d-lg-table-cell">22 : 25</th>
                                        <td>BCG</td>
                                        <td className="d-none d-md-table-cell">TheraCys® BCG</td>
                                        <td>Heymas Hospitals</td>
                                        <td>12/06/2003</td>
                                        <td className="d-none d-md-table-cell">10 Liters</td>
                                        <td className="d-none d-lg-table-cell">
                                            <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                <button className="view-more">
                                                    <span className="material-symbols-outlined">
                                                        read_more
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="result-nav my-4" id="result-navigation">
                            <button>
                                <span className="material-symbols-outlined">
                                    chevron_left
                                </span>
                            </button>
                            <div className="numbers">
                                <div className="active">1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                            <button>
                                <span className="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProfileReports;