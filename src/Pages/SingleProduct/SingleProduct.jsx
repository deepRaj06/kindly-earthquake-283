import { Center,Image,Box,Badge,Alert,AlertIcon,Select,Tab,TabList,TabPanels,Tabs,TabPanel } from "@chakra-ui/react";
import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar";
import style from './singlePage.module.css';
import { IoMdLocate } from "react-icons/io";
const SingleProduct = () => {
  return (
    <>
    <Navbar/>
    <br></br>
    <div className={style.main}>
      <div className={style.one}>
       
        <div>
           <hr></hr>
        <br></br>
          <div><Image src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/21459385/zebra-room-4_watermarked_image_1024.jpeg" width="80%"/></div>
          <div className={style.image}><Image src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/21459385/zebra-room-2_watermarked_image_1024.jpeg"/>
          <Image src="https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/21459385/sitting-area-11_watermarked_image_1024.jpeg"/>
          </div>
        </div>
        <div  className={style.details}>
        <div style={{fontSize:"25px"}}>Amezing Specious Guests House-Porvoriom</div>
        <br></br>
        <div  className={style.repflex}><h3><IoMdLocate/></h3><h3> Porvoriom Goa INDIA</h3></div>
        <br></br>
        <div className={style.extra1}>
          <div  className={style.repflex}>Rated<b style={{backgroundColor:"blue",color:"white",borderRadius:"4px"}}>5.5/5</b>By One Travelers</div>
        <div><b style={{backgroundColor:"blue",color:"white"}}>See More Review</b></div>
        </div>
        <br/>
        <hr></hr>
        <br></br>
        <div className={style.feture}>
          <b>Resort</b><b>4 Bedroom</b><b>4 Bathroom</b>
        </div>
        <br></br>
        <div className={style.feture}>
          <b>20 Max GUESTS</b><b>WIFI</b><b>Kitchen</b><b>AC</b>
        </div>
        <br></br>
        <div className={style.feture}>
          <b>Pet Not Allowed</b>
        </div>

    </div>
        


      </div>

        <div className={style.two}>
          <div>
           Starting
            <div className={style.repflex}><p style={{fontSize:"50px"}}>₹2000</p>Per Night</div>
            <div>
              <Alert status="warning">
                <AlertIcon />
                Select dates
              </Alert>
            </div>
            <br></br>
            <div className={style.repflex} style={{border:"1px solid black"}}>
          <input type='date' placeholder="Check In" />
          <input type='date' placeholder="Check Out" />
            </div>
            <br></br>
            <div><Select placeholder='Select Guests'>
  <option value='option1'>1</option>
  <option value='option2'>2</option>
  <option value='option3'>3</option>
</Select><br/>
<p>Rateplan: Cooked Breakfast</p>
</div>


          </div>
          
        </div> {/*two div  */}


    </div> {/* Main */}
    <br/>
    <div>
<Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</div>
    </>
  );
};

export default SingleProduct;
