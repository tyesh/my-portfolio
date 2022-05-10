import React, { useEffect, useState } from "react";
import sanityCliend from "../../client.js";

const MyExperience = () => {
    const [experiences, setExperiences] = useState(null);
  
    useEffect(() => {
        sanityCliend.fetch(`*[]{
            name,
            description
            fromDate,
            toDate,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then(data => setExperiences(data))
        .catch(error => console.log(error));
    }, []);
  return (
    <div>MyExperience</div>
  );
};

export default MyExperience;