import React from 'react';
import Typical from 'react-typical';
import StartButton from './StartButton';

function Home(props){
	//console.log(props.image)

	return(
		<div className="home-wrapper">
        <section className="row">
         {" "}
		 <h1 className="show-typical">
        <Typical
        loop={Infinity}
        steps={[
          "Welcome to our Shop...",2000,
          "Place Your Order Now...",2000,
          "and Get Your Delivery Fast.",2000,
        	]}
        />
        </h1>
		  <p>
		  <span>Experience</span>
		  <span>Purest Sound with Our</span>
		  <span> Classic</span> 
		  <span>HeadPhones</span>
		  </p>
		  </section>
		  <section className="row">
		   <img 
		   className="home-image"
		    src={props.image} 
		   alt="girl putting on headset"
		    height="300px"
		    width="200px"/>
		  </section>
		  <section className="row">
		   <StartButton/>
		  </section>

		</div>
		);
}
export default Home;