import React from "react";
import Card from "react-bootstrap/Card";

export default function MyCard() {
  return (
    <div>
      <div>
        {" "}
        <Card className="mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <Card.Img
            variant="top"
            src="https://i.postimg.cc/LXbGQynX/CTT-fy-2-768x768.webp"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
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
                <option value="half">Half</option>
                <option value="Full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Prrice</div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
