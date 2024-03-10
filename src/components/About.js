import React, { useState } from 'react'

function About() {

  let darkcolor={
    color:"#fff",
    backgroundColor:"#000",
  }
  let defaultColor={
    color:"black",
    backgroundColor:"white",
  }

  const [mystyles, setMystyles] = useState(defaultColor);
  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const darkMode =()=>{
    
    if(mystyles.color === "black"){
      setMystyles(darkcolor);
      console.log("Dark Mode");
      setBtnText("Enable Light Mode"); //
    }else{
      setMystyles(defaultColor);
      console.log("Light Mode");
      setBtnText("Enable dark Mode");
    }
    
  }


  return (
    <>
    <div style={mystyles}>
        <div className="container my-3" > 
  <h2>About Us</h2>

  <button className="accordion">Website Design and Development</button>
  <div className="accordion-content">
    <p>
      Whether you need a wordpress website, a shopify site, or a custom fullstack application, we got you! No matter what kind of website or application you need, it will be made with clean and maintable code that follows modern development standards. We also have top notch designers that can make unique designs that will make your website look different and unique. Not to mention that we also provide 24/7 website maintenance so that you get all the support you need.
    </p>
  </div>

  <button className="accordion">Website Analytics and Performance</button>
  <div className="accordion-content">
    <p>
      We believe that in order to have a successful website, you need to constantly adjust and adapt to the data provided by your website visitors. Here at Pierre Web Development, we have narrowed down the specific key performance indicators that will dramatically boost your success with connecting to target markets. We will provide a basic metric dashboard based on how much traffic your site gets, detailed analytical reports that show which parts of your website is the most popular among visitors as well as access to tools you can use to make meaningful decisions based on this data.
    </p>
  </div>

  <button className="accordion">Digital Marketing</button>
  <div className="accordion-content">
    <p>
      We know that every great website focuses on helping you get more business and building a brand that your ideal customers will love and support. We can help you set up a great, SEO-focused content strategy, a paid ads campaign, email marketing integration with Mailchimp as well as a social media marketing campaign. We also use popular website analytic tools to track your site's performance and provide you with weekly analytic reports to help bolster your growth.
    </p>
  </div>
</div>
<div className="container my-4">
  <button type='button' className='btn btn-dark' onClick={darkMode}>{btnText}</button>
</div>
</div>
    </>
    
  )
}

export default About