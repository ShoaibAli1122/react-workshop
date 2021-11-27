import React, { Component, useState } from "react";
// import AboutChild from "./aboutChild";
import AboutChild from "./aboutChild";

function About() {
  // States

  const [count, setcount] = useState(0);
  const [name, setname] = useState("Shoaib Ali");

  const [cities, setcities] = useState(["Rwp", "Multan", "Karachi"]);
  const [med, setmed] = useState({
    medications: [
      {
        aceInhibitors: [
          {
            name: "lisinopril",
            strength: "10 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "1",
          },
          {
            name: "lisinopril",
            strength: "10 mg Tab",
            dose: "1 tab",
            route: "Sho",
            sig: "daily",
            pillCount: "#90",
            refills: "2",
          },
        ],
        antianginal: [
          {
            name: "nitroglycerin",
            strength: "0.4 mg Sublingual Tab",
            dose: "1 tab",
            route: "SL",
            sig: "q15min PRN",
            pillCount: "#30",
            refills: "Refill 1",
          },
        ],
        anticoagulants: [
          {
            name: "warfarin sodium",
            strength: "3 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
          {
            name: "DUMMY DATA",
            strength: "3 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
        betaBlocker: [
          {
            name: "metoprolol tartrate",
            strength: "25 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
        diuretic: [
          {
            name: "furosemide",
            strength: "40 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
        mineral: [
          {
            name: "potassium chloride ER",
            strength: "10 mEq Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
      },
    ],
    labs: [
      {
        name: "Arterial Blood Gas",
        time: "Today",
        location: "Main Hospital Lab",
      },
      {
        name: "BMP",
        time: "Today",
        location: "Primary Care Clinic",
      },
      {
        name: "BNP",
        time: "9 Weeks",
        location: "Primary Care Clinic",
      },
      {
        name: "BUN",
        time: "1 Year",
        location: "Primary Care Clinic",
      },
      {
        name: "Cardiac Enzymes",
        time: "Today",
        location: "Primary Care Clinic",
      },
      {
        name: "CBC",
        time: "1 Year",
        location: "Primary Care Clinic",
      },
      {
        name: "Creatinine",
        time: "1 Year",
        location: "Main Hospital Lab",
      },
      {
        name: "Electrolyte Panel",
        time: "1 Year",
        location: "Primary Care Clinic",
      },
      {
        name: "Glucose",
        time: "1 Year",
        location: "Main Hospital Lab",
      },
      {
        name: "PT/INR",
        time: "999 Weeks",
        location: "Primary Care Clinic",
      },
      {
        name: "PTT",
        time: "3 Weeks",
        location: "Coumadin Clinic",
      },
      {
        name: "TSH",
        time: "1 Year",
        location: "Primary Care Clinic",
      },
    ],
    imaging: [
      {
        name: "Chest X-Ray",
        time: "Today",
        location: "Main Hospital Radiology",
      },
      {
        name: "Chest X-Ray",
        time: "Today",
        location: "Main Hospital Radiology",
      },
      {
        name: "Chest X-Ray",
        time: "Today",
        location: "Main Hospital Radiology",
      },
    ],
  });

  //   function incCount() {}
  const sum = () => {
    console.log("Sum is called");
  };
  // Arrow Function
  const incCount = () => {
    setcount(count + 1);
    const jobs = [
      { id: 1, isActive: true },
      { id: 2, isActive: false },
      { id: 3, isActive: true },
    ];

    const jobList = jobs.filter((job) => job.isActive == false);
    console.log(jobList);
    // const cityItems = cities.map((city) => "<li>" + city + "</li>");

    console.log("Button Clicked");
  };
  // const [state, setstate] = useState(initialState)
  return (
    <div>
      {/* <AboutChild citiessss={name} country="Pakistan" /> */}
      <h1>My Info</h1>
      <p>{name}</p>
      <p>BCS163112</p>
      <p>Count is: {count}</p>
      {cities.map((color) => (
        <li>{color}</li>
      ))}
      <p> {cities[1]}</p>
      condition?true:false
      {cities[1] == "Isl" ? (
        <p>This is Islamabad</p>
      ) : (
        <p>City is: {cities[1]}</p>
      )}
      <button onClick={incCount}>Submit</button>
      <AboutChild nickname={name} citynames={cities} sumfun={sum} />
      {/* {med.medications[0].aceInhibitors.map((m)=>(
          <ul >
          <li key={m.refills}>{m.name}</li>
                  <li key={m.refills}>{m.route=="Sho"?"Shoaib":m.route}</li>
        </ul>
      ))} */}
    </div>
  );
}

export default About;
