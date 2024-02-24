import React from "react";

const Work = () => {
  return (
    <div className="w-10/12 mx-auto mt-16" id="work">
      <p className="text-center text-gray-700 text-lg">Explore my</p>
      <p className="text-center text-gray-700 text-2xl underline mb-8">
        Work Experience
      </p>
      <div className="flex flex-wrap justify-around">
        <div className="w-96 rounded-lg m-2 p-2 border border-black">
          <p className="font-bold text-2xl m-1 p-1">
            Tata Consultancy Services
          </p>
          <p className="text-lg font-semibold m-1 p-1">System Engineer</p>
          <p className="text-sm text-slate-700 m-1 p-1">April 2021 - Present</p>
          <p className="text-sm text-slate-700 m-1 p-1">
            <ul className="list-disc pl-2 ml-2">
              <li>
                E-Commerce Domain:- Currently working as a front-end developer
                for UK based E-Commerce client.
              </li>
              <li>Skills:-Reactjs, Javascript, Amplience CMS</li>
              <li className="mt-3">
                Payment Application Domain :- Involved in performing regression
                & performance testing and providing production support to the
                RTGS application.
              </li>
              <li>
                Experience of UAT & Production deployment and generating reports
                & insights on payment data using SQL, monitoring and management.
              </li>
              <li>
                Experience in DR drills, performing archival on production data
                and post production movement sanity testing.
              </li>
            </ul>
          </p>
        </div>

        <div className="w-96 rounded-lg m-2 p-2 border border-black">
          <p className="font-bold text-2xl m-1 p-1">Tech Mahindra Ltd</p>
          <p className="text-lg font-semibold m-1 p-1">Associate</p>
          <p className="text-sm text-slate-700 m-1 p-1">Sep 2019 - Apr 2021</p>
          <p className="text-sm text-slate-700 m-1 p-1">
            <ul className="list-disc pl-2 ml-2">
              <li>Telecom Domain</li>
              <li>
                Displayed a commitment to team development by providing
                comprehensive training and support to new team members,
                fostering a highly collaborative work environment
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
