import React, { useState, useEffect } from "react";
import "../css/about.scss";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const key = process.env.REACT_APP_AIRTABLE_API_KEY;
    const url =
      "https://api.airtable.com/v0/appa3x0Ddhl3fU1h9/About?maxRecords=3&view=Grid%20view";

    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    });

    const data = await resp.json();
    setAbout(data.records[0]);
  };

  const paragraphs = about && about.fields.Notes.split("<br/>");

  return (
    <div className="about">
     {about ? <> <div className="img-border">
        <img src={about && about.fields.Attachments[0].url} alt='Haley Barlar in front of a brick wall'/>
      </div>
      <div className="paragraphs">
        <p>{paragraphs && paragraphs[0]}</p>
        <p>{paragraphs && paragraphs[1]}</p>
        <p>{paragraphs && paragraphs[2]}</p>
      </div></>: <p>Loading...</p>}
    </div>
  );
}
