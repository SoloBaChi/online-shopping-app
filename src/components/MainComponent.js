import React,{Component,useState} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Products from './ProductComponent';
import {ITEMS} from '../shared/items';
import {Switch, Route} from 'react-router-dom';

class Main  extends Component{
	constructor(props){
		super(props);
		this.state = {
		  items:ITEMS
		}
	}

render(){
	return(
	<div className="main-wrapper">
	<Header/>
	<Switch>
	<Route exact path="/">
	{this.state.items.map(({id,...item})=>(<Home {...item} key={id}/>))}
	</Route>
	<Route path="/products" component={Products}/>
	</Switch>
	<Footer/>
	</div>
	);
}

}

export default Main;