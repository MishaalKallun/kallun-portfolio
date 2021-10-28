// React Library
import React from 'react'

// Bootstrap Components
import ListGroup from 'react-bootstrap/ListGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function About(){
	return(
		<Jumbotron>
		  <h1>About me!</h1>
		  <ListGroup>
		  	<ListGroup.Item>I like cheese</ListGroup.Item>
		  	<ListGroup.Item>I like card games</ListGroup.Item>
		  	<ListGroup.Item>I like cactuses</ListGroup.Item>
		  </ListGroup>
		</Jumbotron>
		
	)
}