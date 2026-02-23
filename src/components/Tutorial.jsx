import React, { useState } from "react";
import "./Tutorial.css";
import datastruct from "./datastruct.jpg";
import frontend from "./frontend.jpg";
import Communicatiion from "./Communicatiion.webp";
import digital from "./digital.jpg";
import maths from "./maths.jpg";
const tutorial = [
  { img: datastruct, Coursecode: "25SC1204E", course: "Data Structures and Algorithms", completion: 75 },
  { img: frontend, Coursecode: "25CS1204E", course: "Frontend Development", completion: 90 },
  { img: Communicatiion,Coursecode: "25UC1204E", course: "Communication Skills", completion: 90 },
  { img: digital,  Coursecode: "25EC1204E", course: "Digital Design", completion: 55 },
  { img: maths,Coursecode: "25MT1205E", course: "Mathematics for AI", completion: 80 }
];
export default function Tutorial() {
  const [tutorials] = useState(tutorial);
  return (
    <div>
      <h1>Student Tutorials</h1>
      <hr />
      <div className="card-container">
        {tutorials.map((student, index) => (
          <div className="student-card" key={index}>
            <img src={student.img} alt={student.name} className="student-image" />
            <p><strong>Course Code:</strong> {student.Coursecode}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${student.completion}%` }}
              ></div>
            </div>
            <p>{student.completion}% completed</p>
          </div>
        ))}
      </div>
    </div>
  );
}