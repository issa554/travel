import React from 'react'
import {Link , graphql } from 'gatsby'
import Layout from "../components/layout"
const journey = ({data}) => {
    console.log(data)
    const timeGo =new Date (data.journey.travelschedule.TakeOff)
    const timeend =new Date (data.journey.travelschedule.landing)
    var sectionStyle = {
      borderRadius: "0%",
      height: "700px",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      
      
      backgroundImage: "url(" +  data.journey.photo.childImageSharp.fluid.src + ")"
    };
    return (
        <Layout>
                <div className="Journey" style={sectionStyle}>
            <div className="container">

     <h1><Link to={`/countrie/${data.journey.country.slug}`}>{data.journey.country.name}</Link>{` > ${data.journey.title}`}</h1>
    
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
              <p>from : {data.journey.travelschedule.from}</p>
            </div>
          {/* {  <div class="card mid">
              <h4>15:22</h4>
              <p>Start With A Baseline</p>
            </div>} */}
            <div class="card">
            <h4>{timeend.getFullYear() +" / "+timeend.getMonth()+" / "+timeend.getDay()}</h4>  <br /> <h4>{timeend.getHours() +" : "+timeend.getMinutes()}</h4>
              <p>to : {data.journey.travelschedule.to}</p>
            </div>
          </div>
          
          
          
        </div>
        
        
        
        
     
      </div>
      
      
    </div>
</div>
</div>
        </div>
        </Layout>
    )
}

export const query = graphql`
  query GetSinglejourney($slug: String) {
    journey: strapiJourneys(slug: { eq: $slug }) {
        country{
            name
         slug}
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
export default journey
