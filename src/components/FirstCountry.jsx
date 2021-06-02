import React from 'react'
import {graphql , Link, useStaticQuery } from 'gatsby'
import Image from "gatsby-image"
 import "../css/FirstCountry.scss"
const FirstCountry = () => {
    const query = graphql`
query MyQuery {
  strapiCountries {
       slug
      name
      BackGround {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    
  }
}

`
const data = useStaticQuery(query)
const {name , BackGround , slug} =data.strapiCountries
var sectionStyle = {
  borderRadius: "1%",
  height: "400px",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  margin: "60px ",
  
  backgroundImage: "url(" +  BackGround.childImageSharp.fluid.src + ")"
};

    return (
     <Link to={`/countrie/${slug}`}>  <div className="FirstCountry" style={sectionStyle}>
         
          <div className="container">

<div className="row ">
    <div className="col-lg-6 text">
    <h1>{name}</h1>
    </div>
</div>
</div>
        </div></Link> 
    )
}

export default FirstCountry
