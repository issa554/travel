import React from 'react'
import {Link , graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import "../css/allcon.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{  background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{background: "black" }}
        onClick={onClick}
      />
    );
  }

const countrie = ({data}) => {
    console.log(data)
    var sectionStyle = {
        borderRadius: "0%",
        height: "700px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
        
        backgroundImage: "url(" +  data.Countrie.BackGround.childImageSharp.fluid.src + ")"
      };

      var settings = {
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Layout>

            <div style={sectionStyle}>
            <div className="container allcon">
        <h2> {data.Countrie.name} </h2>
        <Slider {...settings}>

          {data.Countrie.journeys.map((i)=>{

         return   <Link to={`/journey/${i.slug}`} className="item">
             
                 <Img className="img" fluid={i.photo.childImageSharp.fluid}   />
            </Link>
          })}
        </Slider>
        </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
  query GetSingleCountrie($slug: String) {
    Countrie: strapiCountries(slug: { eq: $slug }) {
       
        
            
              name
              slug
              BackGround {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              journeys {
                slug
                photo {
                  childImageSharp {
                    fluid{
          
                    src}
                  }
                }
              
            }
          }
          
        
      
      
  }
  `
export default countrie
