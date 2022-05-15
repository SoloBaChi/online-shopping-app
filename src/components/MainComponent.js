import React,{Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import UserLogin from './UserLoginComponent';
import UserSignUp from './UserSignUpComponent';
import Cart     from       './CartComponent';
import Footer from './FooterComponent';
import Products from './ProductComponent';
import AboutUs from './AboutUsComponent';
import {ITEMS} from '../shared/items';
import { PRODUCTS } from '../shared/items';
import {Switch, Route} from 'react-router-dom';



class Main  extends Component{
	constructor(props){
		super(props);
		this.state = {
		  items:ITEMS
		}
	}

render(){
    
	const ProductPage = () => {
		return(<Products products={PRODUCTS}/>)
	}

	return(
	<div className="main-wrapper">
	<Header/>
	<Switch>
	<Route exact path="/">
	{this.state.items.map(({id,...item})=>(<Home {...item} key={id}/>))}
	</Route>
	<Route path="/products" component={ProductPage}/>
	<Route path="/aboutus" component ={AboutUs} />
	<Route path="/login" component ={UserLogin}/>
	<Route path="/signup" component={UserSignUp}/>
	<Route path="/cart" component ={Cart}/>
	</Switch>
	<Footer/>
	</div>
	);
}

}

export default Main;