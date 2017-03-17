import React, { Component } from 'react';
import {hashHistory} from 'react-router';
import { Link } from 'react-router';

class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Locked: false,
			Flipped: false
		}
	this.handleLock = this.handleLock.bind(this);
	this.handleFlip = this.handleFlip.bind(this);	
	}

	handleLock = function() {
		console.log("im locking")
		if(this.state.Locked === false){
	        this.setState({
	            Locked: true

	        })
	    }else if(this.state.Locked === true){
	    	this.setState({
	    		Locked: false

	    	})
	    }
	}

	handleFlip = function() {
		console.log("flipping" + this.state.Locked + this.state.Flipped);
		if(this.state.Locked === false){
			if(this.state.Flipped === true){
				this.setState({
					Flipped: false
			})
		
			}else if(this.state.Flipped === false){
				this.setState({
					Flipped: true
				})
			}
		}
	}
	render(){

			if(this.state.Locked === true){
				var lockStatus = "locked lock-image text-center";				
			}else if(this.state.Locked === false){
				var lockStatus = "unlocked lock-image text-center";
			}
		
			if(this.state.Flipped === true){
				var flippedStatus = "text-center back-image container";
				var image = this.props.card.cardImageBack;	
			}else if(this.state.Flipped === false){
				var flippedStatus = "text-center front-image container";
				var image = this.props.card.cardImageFront;
			}
		return (
			<div className="main-card col-sm-3 col-sm-offset-1">
				<div className={lockStatus} onClick={this.handleLock}>
					<img src="../Images/LockBevel.png" role="presentation" />
				</div>
				<div className="card-wrapper container">
					<div className={flippedStatus} onClick={this.handleFlip}>
						{image}
					</div>
				</div>
			</div>
		)
	}
}


export default Card;