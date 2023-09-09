import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyCard from "../components/MyCard";
import Carousel from "../components/Carousel";
import { fireEvent } from "@testing-library/react";
import { Card, Col, Row } from "react-bootstrap";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
const [search,setSearch]=useState("")

  const loadData = async () => {
    try {
      // Fetch data from the server
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setFoodItem(data[0]);
        setFoodCat(data[1]);
      } else {
        console.error("Failed to fetch data from the server.");
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      <div><div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel"  >
  <div className="carousel-inner"id="carousel"  >
  <div className="d-flex justify-content-center " >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"value={search}onChange={(e)=>{setSearch(e.target.value)}} />
      {/* <button className="btn btn-outline-success text-white bg-primary" type="submit">Search</button> */}
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..."style={{objectFit:"cover",maxHeight: "600px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..."style={{objectFit:"cover",maxHeight: "600px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?cake" className="d-block w-100" alt="..."style={{objectFit:"cover",maxHeight: "600px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  
</div>

<div className="container">
        {foodCat.length !== 0 ? (
          foodCat.map((data) => (
            <div key={data._id} className="mb-3">
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              <Row>
                {foodItem.length !== 0 ? (
                  foodItem
                    .filter((item) =>( item.CategoryName === data.CategoryName)&&(item.name.toLowerCase().includes(search.toLowerCase())))
                    .map((filterItems) => (
                      <Col key={filterItems._id} xs={12} md={6} lg={3}>
                        <MyCard
                          foodName={filterItems.name}
                          options={filterItems.options[0]}
                          imgSrc={filterItems.img}
                        />
                      </Col>
                    ))
                ) : (
                  <div>No such data found</div>
                )}
              </Row>
            </div>
          ))
        ) : (
          <div>No food categories available</div>
        )}
      </div>

      <Footer />
    </div>
  );
}