import React from "react";

const Currrent = ({ current, location, isDarkMode }) => {
    const cardStyle = {
        padding: "10px",
        fontSize: "1rem",
        background: isDarkMode ? "linear-gradient(135deg, #444, #333)" : "linear-gradient(135deg, #fff, #eee)",
        color: isDarkMode ? "#fff" : "#000",
        borderRadius: "8px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const cardHoverStyle = {
        transform: "scale(1.05)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    };

    const imgStyle = {
        width: "60px",
        margin: "auto",
    };

    const headerStyle = {
        color: isDarkMode ? "#fff" : "#000",
    };

    return (
        <>
            <div className="container mt-5">
                <h4 className="text-center fw-bold mb-4" style={headerStyle}>
                    Current Weather in {location.name}, {location.region}
                </h4>

                {/* Row 1 */}
                <div className="row mt-4 text-center">
                    {/* Weather Condition Card */}
                    <div className="col-6 col-md-3 mb-3">
                        <div
                            className="card shadow-sm h-100"
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        >
                            <img
                                src={current.condition.icon}
                                className="card-img-top"
                                alt={current.condition.text}
                                style={imgStyle}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    <strong>{current.condition.text}</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Temperature in Celsius */}
                    <div className="col-6 col-md-3 mb-3">
                        <div
                            className="card shadow-sm h-100"
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        >
                            <div className="card-body">
                                <p className="card-text">
                                    <i className="bi bi-thermometer-half text-danger me-2"></i>
                                    <strong>{current.temp_c}°C</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Temperature in Fahrenheit */}
                    <div className="col-6 col-md-3 mb-3">
                        <div
                            className="card shadow-sm h-100"
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        >
                            <div className="card-body">
                                <p className="card-text">
                                    <i className="bi bi-thermometer text-info me-2"></i>
                                    <strong>{current.temp_f}°F</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Humidity */}
                    <div className="col-6 col-md-3 mb-3">
                        <div
                            className="card shadow-sm h-100"
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        >
                            <div className="card-body">
                                <p className="card-text">
                                    <i className="bi bi-droplet-half text-primary me-2"></i>
                                    <strong>{current.humidity}% Humidity</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row mt-3 text-center">
                    {/* Wind Speed */}
                    <div className="col-6 col-md-3 mb-3">
                        <div
                            className="card shadow-sm h-100"
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        >
                            <div className="card-body">
                                <p className="card-text">
                                    <i className="bi bi-wind text-secondary me-2"></i>
                                    <strong>{current.wind_kph} kph Wind</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Air Quality: CO */}
                    <div className="col-6 col-md-3 mb-3">
                        <div
                            className="card shadow-sm h-100"
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        >
                            <div className="card-body">
                                <p className="card-text">
                                    <i className="bi bi-cloud-haze text-warning me-2"></i>
                                    <strong>CO: {current.air_quality.co.toFixed(2)}</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Air Quality: NO2 */}
                    <div className="col-6 col-md-3 mb-3">
                        <div
                            className="card shadow-sm h-100"
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        >
                            <div className="card-body">
                                <p className="card-text">
                                    <i className="bi bi-cloud-drizzle text-danger me-2"></i>
                                    <strong>NO₂: {current.air_quality.no2.toFixed(2)}</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Air Quality: Ozone */}
                    <div className="col-6 col-md-3 mb-3">
                        <div
                            className="card shadow-sm h-100"
                            style={cardStyle}
                            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
                        >
                            <div className="card-body">
                                <p className="card-text">
                                    <i className="bi bi-cloud-lightning text-success me-2"></i>
                                    <strong>O₃: {current.air_quality.o3.toFixed(2)}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Currrent;
