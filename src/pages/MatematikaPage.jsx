import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import "../CSS/matematika.css";
import Leaderbotmm from "../components/LeaderbotMatematika.jsx";
import KuisPage from "./KuisPage";

function MatematikaPage() {
  const [materiData, setMateriData] = useState(null);
  const [selectedQuizId, setSelectedQuizId] = useState(null);

  useEffect(() => {
    const fetchMateriData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/materi/details/MATEMATIKA"
        );
        const data = await response.json();
        setMateriData(data.body);
        console.log(data);
      } catch (error) {
        console.error("Error fetching materi data:", error);
      }
    };

    fetchMateriData();
  }, []);

  const handleQuizClick = quizId => {
    console.log("Clicked QuizId:", quizId);
    setSelectedQuizId(quizId);
  };

  const handleMateriTitleClick = materi => {
    // Redirect to the specified API using window.location.href
    if (materi && materi.Content) {
      const apiUrl = `http://localhost:3000/materi/download/${materi.Content}`;
      window.location.href = apiUrl;
    }
  };

  return (
    <div>
      <Leaderbotmm />
      {materiData ? (
        <div>
          <h1>{materiData.Title}</h1>
          <p
          // onClick={handleMateriTitleClick(materiData)}
          // style={{ cursor: "pointer" }}
          >
            {materiData.Content}
          </p>

          {materiData.subMateries && (
            <div>
              <h2>Children Materi</h2>
              {materiData.subMateries.map(child => (
                <div key={child.Name}>
                  <h3>{child.Title}</h3>
                  <p
                  // onClick={handleMateriTitleClick(child)}
                  // style={{ cursor: "pointer" }}
                  >
                    {child.Content}
                  </p>
                </div>
              ))}
            </div>
          )}

          {materiData.quizes && (
            <div>
              <h2>Quizes</h2>
              {materiData.quizes.map(quiz => (
                <div key={quiz.Id}>
                  <Link
                    to={`/kuis/${quiz.Id}`}
                    onClick={() => handleQuizClick(quiz.Id)}
                  >
                    <h3>{quiz.Title}</h3>
                  </Link>
                  <p>Time Limit: {quiz.TimeLimit} seconds</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>Loading materi details...</p>
      )}

      {selectedQuizId && (
        <Route path="/kuis" element={<KuisPage quizId={selectedQuizId} />} />
      )}
    </div>
  );
}

export default MatematikaPage;
