import React, { Component } from 'react';

class Select extends Component {
	render(){
		const modal = this.props.showDatum ? "Select" : "Select-Hidden"
		return (
			<h1> Select Modal </h1>
			<p> </p>
		)
	}
}

export default Select;