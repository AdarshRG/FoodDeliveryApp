import React from "react";
import Card from "react-bootstrap/Card";

export default function MyCard(props) {

let options=props.options
let priceOptions=Object.keys(options)





  return (
    <div>
      <div>
        
        <Card className="mt-3" style={{ width: "18rem", maxHeight: "400px" }}>
          <Card.Img
            variant="top"  
            src={props.imgSrc}
            style={{ objectFit: "cover", maxHeight: "200px" }}
          />
          <Card.Body className="" >
            <Card.Title>{props.foodName}</Card.Title>
            <div className="container w-100">
              <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                {priceOptions.map((data)=>{
                  return<option key={data} value={data}>{data}</option>
                })}
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
