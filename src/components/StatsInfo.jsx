import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";

function StatsInfo() {
  const [statsInfo, setStatsInfo] = useState(null);

  useEffect(() => {
    const fetchStatsInfo = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref("Stats_Info")
          .once("value");
        if (snapshot.exists()) {
          const data = snapshot.val();
          const filteredData = data.filter((item) => item !== null);
          const statsData = {};
          filteredData.forEach((item) => {
            const { stat_id, ...rest } = item;
            switch (stat_id) {
              case 1:
                statsData.no_of_travels = rest.no_of_travels || 0;
                break;
              case 2:
                statsData.no_of_clients = rest.no_of_clients || 0;
                break;
              case 3:
                statsData.no_of_employees = rest.no_of_employees || 0;
                break;
              case 4:
                statsData.no_of_countries = rest.no_of_countries || 0;
                break;
              default:
                break;
            }
          });
          setStatsInfo(statsData);
        } else {
          console.error("Stats info not found in database");
        }
      } catch (error) {
        console.error("Error fetching stats info:", error);
      }
    };

    fetchStatsInfo();
  }, []);

  if (!statsInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="untree_co-section count-numbers py-5 "
      style={{ backgroundColor: "#6998ab" }}
    >
      <div className="container  ">
        <div className="row ">
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="counter-wrap ">
              <div className="counter">
                <span
                  className="text-white"
                  data-number={statsInfo.no_of_travels}
                >
                  {statsInfo.no_of_travels}
                </span>
              </div>
              <span className="caption text-white">No. of Travels</span>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="counter-wrap">
              <div className="counter">
                <span
                  className="text-white"
                  data-number={statsInfo.no_of_clients}
                >
                  {statsInfo.no_of_clients}
                </span>
              </div>
              <span className="caption text-white">No. of Clients</span>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="counter-wrap">
              <div className="counter">
                <span
                  className="text-white"
                  data-number={statsInfo.no_of_employees}
                >
                  {statsInfo.no_of_employees}
                </span>
              </div>
              <span className="caption text-white">No. of Employees</span>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-3">
            <div className="counter-wrap">
              <div className="counter">
                <span
                  className="text-white"
                  data-number={statsInfo.no_of_countries}
                >
                  {statsInfo.no_of_countries}
                </span>
              </div>
              <span className="caption text-white">No. of Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsInfo;
