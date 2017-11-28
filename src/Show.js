import React, { Component } from 'react';
import "./Show.css"

class Show extends Component {
	
	render(){
		console.log(this.props.data)
		const data = this.props.data.map((datum, i) => {
			if (datum.total_grads_n === "s"){
				datum.total_grads_n = "n/a"
			}
			return <li key={i} onClick={this.}>School: {datum.school_name} Graduating Year:{datum.cohort} Class Size:{datum.total_cohort} Number of Graduates:{datum.total_grads_n}</li>
		})
		return(
			<div>
				<h1>Graduation Data</h1>
				<ul>
				{data}
				</ul>
				</div>
		)
	}
}

export default Show;