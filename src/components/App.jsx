import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import BookCard from '../containers/BookCard'
import Filter from '../containers/Filter'
import MenuComponent from '../containers/Menu'


class App extends Component {

  render(){
    const {books,isReady} = this.props
    
  return (
  <Container>
    <MenuComponent/>
    <Filter/>
    <Card.Group itemsPerRow={4}>
     { !isReady 
     ?'Loading' 
     :books.map((book,i)=>(
     <BookCard key={i} {...book}></BookCard>))}
    </Card.Group>
  </Container>
     )
}
}

export default App;
