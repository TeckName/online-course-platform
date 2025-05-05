import React, { useEffect, useState } from "react";

const CourseList = () => {
 const [courses, setCourses] = useState([]);
 useEffect(() => {
   fetch("http://localhost:8000/api/courses/")
     .then((response) => response.json())
     .then((data) => setCourses(data));
 }, []);

 return (
   <div>
     <h2>Kurslar</h2>
     <ul>
       {courses.map((course) => (
         <li key={course.id}>{course.title}</li>
       ))}
     </ul>
   </div>
 );
};

export default CourseList;
