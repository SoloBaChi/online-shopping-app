import React from 'react';
require('../Product.css');

const Products = () => {
	return(
		<React.Fragment>
	 {/*Each section spans four colums*/}
      {/*section 1*/}
		<section className="product-section">
		<h2>Popular Headphones</h2>
		<div className="row">
		<figure>
		  <div className="card">
            
		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure className="span-1">
		  <div className="card">
            
		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure>
		  <div className="card">
            
		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure>
		  <div className="card">

		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 </div>
		</section>
		{" "}
		<section>
		<h2>Best Selling Products</h2>
		<div className="row">
		<figure>
		  <div className="card">

		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure>
		  <div className="card">
            
		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure>
		  <div className="card">

		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure>
		  <div className="card">

		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 </div>
		</section>
		{" "}
	    {/*section 2*/}
	    <section>
	    <h2>Products in Stalk</h2>
	    <div className="row">
		<figure className="span-1">
		  <div className="card">

		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure>
		  <div className="card">

		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure>
		  <div className="card">

		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 <figure>
		  <div className="card">

		   </div>
		   <figcaption>
		   <button className="action-button" type="submit">Add to cart</button>
		   </figcaption>
		 </figure>
		 </div>
		</section>
	</React.Fragment>
	);
}
export default Products;
