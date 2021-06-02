import React from 'react'
import {graphql , useStaticQuery , Link} from 'gatsby'
import "../css/Journet.scss"
import Image from "gatsby-image"


const Journey = () => {
  const data = useStaticQuery(query)
  const timeGo =new Date (data.strapiJourneys.travelschedule.TakeOff)
  const timeend =new Date (data.strapiJourneys.travelschedule.landing)
  var sectionStyle = {
    borderRadius: "0%",
    height: "700px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
    
    backgroundImage: "url(" +  data.strapiJourneys.photo.childImageSharp.fluid.src + ")"
  };
    return (
        <div className="Journey" style={sectionStyle}>
            <div className="container">

     <h1>{data.strapiJourneys.title}</h1>
    
    <div class="main">
  
  
  
  
    <div class="timeline">
      
      <h3>`</h3>
      
      <div class="box">
        
        <div class="container">
          
          <div class="lines">
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            {/* {<div class="dot"></div>
            <div class="line"></div>} */}
          </div>
          
          <div class="cards">
            <div class="card">
              
              <h4>{timeGo.getFullYear() +" / "+timeGo.getMonth()+" / "+timeGo.getDay()}</h4>  <br /> <h4>{timeGo.getHours() +" : "+timeGo.getMinutes()}</h4>
              <p>from : {data.strapiJourneys.travelschedule.from}</p>
            </div>
          {/* {  <div class="card mid">
              <h4>15:22</h4>
              <p>Start With A Baseline</p>
            </div>} */}
            <div class="card">
            <h4>{timeend.getFullYear() +" / "+timeend.getMonth()+" / "+timeend.getDay()}</h4>  <br /> <h4>{timeend.getHours() +" : "+timeend.getMinutes()}</h4>
              <p>to : {data.strapiJourneys.travelschedule.to}</p>
            </div>
          </div>
          
          
          
        </div>
        
        
        
        
        <div class="bottom">
          
          <Link to={`journey/${data.strapiJourneys.slug}`} class="btn">Show all detlies</Link>
          
        </div>
      </div>
      
      
    </div>
</div>
</div>
        </div>
    )
}

export const query = graphql`
  {
    strapiJourneys(travelschedule: {TakeOff: {gt: "2021"}}) {
      price
      title
      slug
        photo {
          
          childImageSharp {
            fluid {
              src
            }
          }
        }
      
      travelschedule {
        TakeOff
        from
        landing
        to
      }
    }
  }
`

export default Journey
