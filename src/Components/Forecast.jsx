import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Forecast = ({ forecast, location }) => {

  return (
    <div className="container mt-4">
      <h4 className="text-center fw-bold mb-5">
        3-Day Weather Forecast for {location.name}, {location.region}
      </h4>

      {forecast.forecastday.map((data, index) => {
        return (
          <div className="accordion accordion-flush" id="accordionFlushExample" key={index}>
            <div className="accordion-item shadow-sm mb-3">
              <h2 className="accordion-header" id={`flush-heading-${index}`}>
                <button
                  className="accordion-button collapsed bg-light shadow-sm text-dark fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse-${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse-${index}`}
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <div className="p-2">
                      <h6 className="mb-0">{data.date}</h6>
                    </div>
                    <div className="p-2">
                      <img
                        src={data.day.condition.icon}
                        alt={data.day.condition.text}
                        className="me-2"
                      />
                      <span>{data.day.condition.text}</span>
                    </div>
                    <div className="p-2">
                      <h6 className="mb-0">
                        <span className="text-danger">Max:</span> {data.day.maxtemp_c}°C
                        <span className="text-primary ms-3">Min:</span> {data.day.mintemp_c}°C
                      </h6>
                    </div>
                  </div>
                </button>
              </h2>

              <div
                id={`flush-collapse-${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`flush-heading-${index}`}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body bg-light">
                  {data.hour.map((hourData, hourIndex) => {
                    return (
                      <div key={hourIndex} className="mb-3">
                        <h6 className="d-flex justify-content-between">
                          <span>{new Date(hourData.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                          <span>
                            <i className="bi bi-thermometer-half text-danger me-2"></i>
                            {hourData.temp_c}°C
                          </span>
                        </h6>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-label="Temperature Progress"
                          aria-valuenow={hourData.temp_c}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-gradient"
                            style={{ width: `${hourData.temp_c}%`, backgroundColor: `hsl(${Math.max(0, 60 - hourData.temp_c * 2)}, 100%, 50%)` }}
                          >
                            {hourData.temp_c}°C
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
