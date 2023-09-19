import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="w-10/12 mx-auto mt-16" id="education">
      <p className="text-center text-gray-700 text-lg">See details of</p>
      <p className="text-center text-gray-700 text-2xl underline mb-8">
        Education
      </p>
      <div className="flex flex-wrap justify-around">
        <EducationCard
          title="Secondary School Certificate"
          university="Mount Carmel Convent School"
          duration="06/2012-05/2013"
          percentage="86.73 %"
        />
        <EducationCard
          title="Higher Secondary Certificate"
          university="Tarkunde Dharampeth Junior College"
          duration="06/2014-05/2015"
          percentage="81.82 %"
        />
        <EducationCard
          title="B.E. (Mechanical Engineering)"
          university="Rashtrasanth Tukadoji Maharaj Nagpur University"
          duration="06/2015-05/2019"
          percentage="7.75 CGPA"
        />
      </div>
    </div>
  );
};

export default Education;
