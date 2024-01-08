import React, { useState, useEffect } from "react";
import "../CSS/matematika.css";
import Leaderbotmm from "../components/LeaderbotMatematika.jsx";

function MatematikaPage() {
  const [materiData, setMateriData] = useState(null);

  useEffect(() => {
    const fetchMateriData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/materi/details/MATEMATIKA"
        ); // Update with your actual API endpoint
        const data = await response.json();
        setMateriData(data);
      } catch (error) {
        console.error("Error fetching materi data:", error);
      }
    };

    fetchMateriData();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <Leaderbotmm />
      {materiData ? (
        <div>
          <h1>{materiData.Title}</h1>
          <p>{materiData.Content}</p>
          {/* Display children data if available */}
          {materiData.children && (
            <div>
              <h2>Children Materi</h2>
              {materiData.children.map(child => (
                <div key={child.Name}>
                  <h3>{child.Title}</h3>
                  <p>{child.Content}</p>
                  {/* Add more JSX to display other details of the children materi */}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>Loading materi details...</p>
      )}
    </div>
  );
}

export default MatematikaPage;
