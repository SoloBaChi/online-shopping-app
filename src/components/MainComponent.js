import React,{Component,useState} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import {ITEMS} from '../shared/items';

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
	{this.state.items.map(({id,...item})=>(<Home {...item} key={id}/>))}
	<Footer/>
	</div>
	);
}

}

export default Main;