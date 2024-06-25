interface StatProps {
  className: string;
}

function Stats({ className }: StatProps) {
  return (
    <div className={`stat-container ${className}`}>
      
      <div className="stat section-blur d-flex align-items-center">
        <div className="icon">
          <span className="material-symbols-outlined me-3 display-6">task_alt</span>
        </div>
        <div className="d-flex flex-column gap-0">
          <h4 className="mb-0">10 <span className="percentage good">+10%</span></h4>
          <h6>Appointments Today</h6>
        </div>
      </div>

      <div className="stat section-blur d-flex align-items-center">
        <div className="icon">
          <span className="material-symbols-outlined me-3 display-6">group</span>
        </div>
        <div className="d-flex flex-column gap-0">
          <h4 className="mb-0">250 <span className="percentage bad">-5%</span></h4>
          <h6>Total Patients</h6>
        </div>
      </div>

      <div className="stat section-blur d-flex align-items-center">
        <div className="icon">
          <span className="material-symbols-outlined me-3 display-6">library_books</span>
        </div>
        <div className="d-flex flex-column gap-0">
          <h4 className="mb-0">560 <span className="percentage good">+10</span></h4>
          <h6>Total Records</h6>
        </div>
      </div>

      <div className="stat section-blur d-flex align-items-center">
        <div className="icon">
          <span className="material-symbols-outlined me-3 display-6">star</span>
        </div>
        <div className="d-flex flex-column gap-0">
          <h4 className="mb-0">4.5 <span className="percentage good"></span></h4>
          <h6>Rating</h6>
        </div>
      </div>
      
    </div>
  );
}

export default Stats;
