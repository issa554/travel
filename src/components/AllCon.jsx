import React from "react"
import { useStaticQuery, graphql , Link } from "gatsby"
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

  
const AllCon = () => {
  const query = graphql`
  {
    allStrapiCountries {
      nodes {
        BackGround {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        slug
        strapiId
      }
    }
  }
`
const data =useStaticQuery(query)
const {allStrapiCountries:{nodes}}= data
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
        <div className="container allcon">
        <h2> all Countries </h2>
        <Slider {...settings}>

          {nodes.map((i)=>{

         return   <Link to={`countrie/${i.slug}`} className="item">
             
                 <Img className="img" fluid={i.BackGround.childImageSharp.fluid}   />
            </Link>
          })}
        </Slider>
        </div>
    )
}

export default AllCon
