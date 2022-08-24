import { Center } from "@chakra-ui/react";
import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./singlePage.css";
const SingleProduct = () => {
  return (
    <>
      <p></p>
      <br></br> {/* Navbar Import Here.... */}
      <div className="singlepage">
        <h6>Home/India/Goa/Calangute/Property/#22476138</h6>
        <div className="main">
          <div className="part-1">
            <div style={{ width: "100%" }}>
              <br></br>
              <div>
                <img
                  src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/22476138/13d3cf81f20b11e790160a8e1b1ce4da_watermarked_image_1024.jpeg"
                  className="image-"
                  width={"100%"}
                  height="30%"
                ></img>
              </div>
              <div style={{ display: "flex" }}>
                <img
                  src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/22476138/422ac8dff20b11e790160a8e1b1ce4da_watermarked_image_1024.jpeg"
                  width={"50%"}
                />
                <img
                  src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/22476138/146e632ff20b11e790160a8e1b1ce4da_watermarked_image_1024.jpeg"
                  width={"50%"}
                />
              </div>
            </div>
            <div style={{ border: "1px solid green", width: "100%" }}>
              <h2>
                4 Bhk Private Villa With Swimming <br></br> Pool
              </h2>
              <h6>Location Calangute, Goa, India | Saligao</h6>
              <hr></hr>
              <div
                style={{ textAlign: "center", display: "flex", gap: "30px" }}
                className="feture"
              >
                <div>Resort</div>
                <div>4 BEDROOMS</div>
                <div>4 BATHROOM</div>
                <div>12 Max Gate</div>
              </div>
              <br></br>
              <div
                style={{ textAlign: "center", display: "flex", gap: "30px" }}
                className="feture"
              >
                <div>Kitchen</div>
                <div>Swiming pool</div>
              </div>
            </div>
          </div>{" "}
          {/* Part-1 */}
          <div className="part-2">
            <div>
              <h2>Starting</h2>
              <div style={{ display: "flex" }}>
                <h1>₹40000</h1>
                <div>
                  <h4>Per Night</h4>
                </div>
              </div>
            </div>
            <div class="alert alert-success" role="alert">
              Your dates are available to book
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                padding: "5px 10px 5px 10px",
              }}
              className="date"
            >
              <div>
                <input type="date" />
              </div>
              <div>
                <input type="date" />
              </div>
            </div>
            <br></br>
            <div
              style={{
                border: "1px solid gray",
                padding: "10px 20px 10px 20px",
              }}
            >
              <select>
                <option value="Select Guests">Select Guests</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5</option>
              </select>
            </div>
            Rateplan: Morning Breakfast (Continental Plan)
            <br></br>
            <div>
              <Center>
                <button
                  style={{
                    padding: "15px 100px 15px 100px",
                    textAlign: "center",
                    backgroundColor: "rgb(84, 84, 252)",
                    color: "white",
                  }}
                >
                  INSTANT BOOK
                </button>
              </Center>
            </div>
          </div>{" "}
          {/* Part-2 div */}
        </div>
      </div>

      
    </>
  );
};

export default SingleProduct;
