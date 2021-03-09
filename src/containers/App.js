import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as booksActions from "../actions/books";
import App from '../components/App'
import orderBy from 'lodash/orderBy'

const sortBy = (books,filterBy) => {

  switch(filterBy){
    case 'price_high':
      return orderBy(books,'price','desc');
    case 'price_low':
      return orderBy(books,'price','asc')  
    case 'author':
      return orderBy(books,'author') 
    default:
      return books
  }
  
}

const filterBooks = (books,search) => books.filter(o=>
  o.title.toLowerCase().indexOf(search.toLowerCase()) >= 0||
  o.author.toLowerCase().indexOf(search.toLowerCase())>=0 );

  const searchBooks =(books,filterBy,search)=>{
    return sortBy(filterBooks(books,search),filterBy);
  }

const mapStateToProps = ({booksReducer,filterReducer})=>{
    return {books:
      searchBooks(booksReducer.items,
      filterReducer.filterBy,
      filterReducer.search),
      isReady:booksReducer.isReady} 
  }
  
  
  const mapDispatchToProps = (dispatch)=>({
    ...bindActionCreators(booksActions,dispatch),
  });
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(App);