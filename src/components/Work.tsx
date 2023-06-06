import React, { useState, useEffect } from "react";
// import "../css/work.scss";

// export default function Work(props: any) {
//   const [projects, setProjects] = useState(null);

//   useEffect(() => {
//     fetchAll();
//   }, []);

//   const fetchAll = async () => {
//     const key = process.env.REACT_APP_AIRTABLE_API_KEY;
//     const url = "https://api.airtable.com/v0/appa3x0Ddhl3fU1h9/Table%201%20/";

//     const resp = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${key}`,
//       },
//     });

//     const data = await resp.json();
//     setProjects(data.records);
//   };

//   const allProjects =
//     projects &&
//     projects.reverse().map((project) => {
//       return (
//         <div className="project">
//           <div className="images">
//             {project.fields.Image &&
//               project.fields.Image.map((image) => (
//                 <img src={image.url} alt={project.fields.altText} />
//               ))}
//           </div>
//           <div className="info">
//             <h1 className="name">{project.fields.Name}</h1>
//             <p className="description">{project.fields.Description}</p>
//             <p className="created-using">created using</p>
//             <p className="stack">{project.fields.Stack}</p>
//             <div className="links">
//               <a href={project.fields.Link}>visit site</a>
//               {project.fields.Github && (
//                 <a href={project.fields.Github}>github</a>
//               )}
//             </div>
//           </div>
//         </div>
//       );
//     });

//   return <div className="work">{allProjects}</div>;
// }

export const Work = () => {
  return <>Work</>;
};
