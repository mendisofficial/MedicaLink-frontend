import { ClipboardPulse, Virus2 } from 'react-bootstrap-icons';
import { NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom';
import Searchbar, { FilterCategory, FilterGroup, FilterList, FilterTitle, SearchFilter } from '../../search/Searchbar';
import { usePopup } from '../../popup/Popup';
import { VaccinationInsertForm, VaccinationForm } from './VaccinationForm';
import './ProfileReports.css';
import { RecordForm, RecordInsertForm } from './RecordForm';
import { UseUser } from '../../auth/UserContext';
import { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import axiosInstance from '../../../axiosInstance';
import { Vaccination } from '../../../models/Vaccination';
import { MedicalRecord } from '../../../models/MedicalRecord';

export function MedicalRecordsTable() {
    const { openPopup } = usePopup();
    const { user } = UseUser();
    const { medicalRecords, isLoading, setType } = useOutletContext<searchProps>();

    useEffect(() => {
        setType("Report");

        return () => { }
    }, []);

    return (
        <>
            <div className="d-flex align-items-center" id="result-titles">
                <h5 className="mb-0">Medical Reports</h5>
                <div className="ms-auto d-flex align-items-center">
                    <span className="me-2 me-md-3 text-nowrap">Showing <span className="result-count">{medicalRecords.length}</span> results</span>
                    {
                        user?.role == 'Admin' ? (
                            <button className="add-btn" onClick={() => {
                                openPopup(<RecordInsertForm />);
                            }}>
                                <span className="me-2 d-none d-md-block">Add Record</span>
                                <span className="material-symbols-outlined">
                                    note_add
                                </span>
                            </button>
                        ) : null
                    }
                </div>
            </div>

            <div className="table-container mt-2 py-2 px-md-4">
                <table className="table mt-md-2 mb-0">
                    <thead>
                        <tr>
                            <th scope="col" className="d-none d-lg-table-cell">#</th>
                            <th scope="col">Report Type</th>
                            <th scope="col" className="d-none d-md-table-cell">Medical Institution</th>
                            <th scope="col">Date</th>
                            <th scope="col" className="d-none d-lg-table-cell"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            isLoading ? (
                                medicalRecords.map((medicalRecord: MedicalRecord) => {
                                    return (
                                        <tr key={medicalRecord.id}>
                                            <th scope="row" className="d-none d-lg-table-cell"><Skeleton variant='text' /></th>
                                            <td><Skeleton variant='text' /></td>
                                            <td className="d-none d-md-table-cell"><Skeleton variant='text' /></td>
                                            <td><Skeleton variant='text' /></td>
                                            <td className="d-none d-lg-table-cell">
                                                <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                    <Skeleton variant="rounded" />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                medicalRecords.map((medicalRecord: MedicalRecord) => {
                                    return (
                                        <tr key={medicalRecord.id} onTouchStart={() => {
                                            openPopup(<RecordForm record={medicalRecord}/>);
                                        }} className={medicalRecord.isEditable ? 'editable' : ''}>
                                            <th scope="row" className="d-none d-lg-table-cell">22 : 25</th>
                                            <td>{medicalRecord.recordType}</td>
                                            <td className="d-none d-md-table-cell">{medicalRecord.admin?.hospital?.name}</td>
                                            <td>{medicalRecord.date}</td>
                                            <td className="d-none d-lg-table-cell">
                                                <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                    <button className="view-more" onClick={() => {
                                                        openPopup(<RecordForm record={medicalRecord}/>);
                                                    }}>
                                                        <span className="material-symbols-outlined">
                                                            read_more
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        }
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
        </>
    );
}

export function VaccinationTable() {
    const { openPopup } = usePopup();
    const { user } = UseUser();
    const { vaccinations, isLoading, setType } = useOutletContext<searchProps>();

    useEffect(() => {
        setType("Vaccination");

        return () => { }
    }, []);

    return (
        <>

            <div className="d-flex align-items-center" id="result-titles">
                <h5 className="mb-0">Vaccination Details</h5>
                <div className="ms-auto d-flex align-items-center">
                    <span className="me-2 me-md-3 text-nowrap">Showing <span className="result-count">{vaccinations.length}</span> results</span>
                    {
                        user?.role == 'Admin' ? (
                            <button className="add-btn" onClick={() => {
                                openPopup(<VaccinationInsertForm />);
                            }}>
                                <span className="me-2 d-none d-md-block">Add Vaccination</span>
                                <span className="material-symbols-outlined">
                                    note_add
                                </span>
                            </button>
                        ) : null
                    }
                </div>
            </div>

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

                        {
                            isLoading ? (
                                Array.from({ length: 5 }).map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row" className="d-none d-lg-table-cell"><Skeleton variant="text" /></th>
                                            <td><Skeleton variant="text" /></td>
                                            <td className="d-none d-md-table-cell"><Skeleton variant="text" /></td>
                                            <td><Skeleton variant="text" /></td>
                                            <td><Skeleton variant="text" /></td>
                                            <td className="d-none d-md-table-cell"><Skeleton variant="text" /></td>
                                            <td className="d-none d-lg-table-cell">
                                                <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                    <Skeleton variant="rounded" />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                vaccinations.map((vaccination: Vaccination) => {
                                    return (
                                        <tr key={vaccination.id} onTouchStart={() => {
                                            openPopup(<VaccinationForm vaccination={vaccination}/>);
                                        }} className={vaccination.isEditable ? 'editable' : ''}>
                                            <th scope="row" className="d-none d-lg-table-cell">22 : 25</th>
                                            <td>{vaccination.vaccineBrand?.vaccine?.name}</td>
                                            <td className="d-none d-md-table-cell">{vaccination.vaccineBrand?.brandName}</td>
                                            <td>{vaccination.hospital?.name}</td>
                                            <td>{vaccination.dateOfVaccination}</td>
                                            <td className="d-none d-md-table-cell">{vaccination.dose}</td>
                                            <td className="d-none d-lg-table-cell">
                                                <div className="d-none d-lg-flex justify-content-end align-items-center">
                                                    <button className="view-more" onClick={() => {
                                                        openPopup(<VaccinationForm vaccination={vaccination}/>);
                                                    }}>
                                                        <span className="material-symbols-outlined">
                                                            read_more
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        }
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

        </>
    );
}

interface searchProps {
    vaccinations: Vaccination[];
    medicalRecords: MedicalRecord[];
    isLoading: boolean;
    setType: (reportType: string) => {};
}

function ProfileReports() {
    const { patientId } = useParams(); //Use this for all the backend requests
    const [searchType, setSearchType] = useState("Name");
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [reportType, setReportType] = useState<string>("Vaccination");
    const [vaccinations, setVaccinations] = useState<Vaccination[]>([]);
    const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

    const handleSearchTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchType(e.target.value);
    }

    const onSearch = async () => {
        if (!isLoading) setIsLoading(true);

        try {
            if (reportType == "Vaccination") {
                let response = await axiosInstance.get(`/api/vaccinations/search?patientId=${patientId}&query=${searchQuery}&type=${searchType}`);

                setVaccinations(response.data);
                setIsLoading(false);
                console.log(vaccinations);
                console.log(response);
            } else {
                let response = await axiosInstance.get(`/api/medicalRecord/search?patientId=${patientId}&query=${searchQuery}&type=${searchType}`);

                setMedicalRecords(response.data);
                setIsLoading(false);
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await onSearch();
        };

        fetchData();

        return () => { };
    }, [reportType]);

    return (
        <>
            <div className="col-12">

                <Searchbar className='mb-4' onChange={(e) => setSearchQuery(e.target.value)} onSearch={onSearch}>

                    <SearchFilter>

                        <FilterGroup>

                            <FilterTitle>Select search type</FilterTitle>
                            <FilterList>
                                <FilterCategory key={1} name='type' value='Name' checked={true} onChange={handleSearchTypeChange}># Record Type/ Name</FilterCategory>
                                <FilterCategory key={2} name='type' value='Location' onChange={handleSearchTypeChange}># Record Location</FilterCategory>
                                <FilterCategory key={3} name='type' value='All' onChange={handleSearchTypeChange}># All</FilterCategory>
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
                            <NavLink to="." className="me-2 px-3 py-2 d-flex align-items-center" end>
                                <span className="d-none d-md-inline">Vaccinations</span>
                                <Virus2 className='ms-3' size={18} />
                            </NavLink>
                            <NavLink to="medicals" className="me-2 px-3 py-2 d-flex align-items-center">
                                <span className="d-none d-md-inline">Medical Reports</span>
                                <ClipboardPulse className='ms-3' size={18} />
                            </NavLink>
                        </div>

                        <div className="tag-links">
                            <a href="/vaccinations" className="me-1 px-3 py-1 active d-none d-md-block"># Last Week</a>
                            <a href="/reports" className="me-1 px-3 py-1 d-none d-lg-block"># Last Month</a>
                            <a href="/reports" className="me-2 px-3 py-1 d-none d-md-block"># All Time</a>
                        </div>

                    </div>

                    <hr />

                    <div className="record-data mt-4" id="record-data-container">
                        <Outlet context={{ vaccinations, medicalRecords, isLoading, setType: (type: string) => setReportType(type) }} />
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProfileReports;