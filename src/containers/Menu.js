import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from "../actions/cart";
import MenuComponent from "../components/Menu"
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({cartReducer})=>{
    return {
    totalPrice:cartReducer.items.reduce((total,book)=>total+book.price,0),
    count: cartReducer.items.length,
    items:uniqBy(cartReducer.items, o => o.id)
    } 
  }
  
  
  const mapDispatchToProps = (dispatch)=>({
    ...bindActionCreators(cartActions,dispatch)
  });
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(MenuComponent);

