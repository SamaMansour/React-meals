import Modal from '../UI/Modal.js';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>
        {[
            {id : 'c1', name: 'Sushi', amount: 2, price: 12.99 },
        ].map((item)=><li>{item.name}</li>)}
    </ul>;
    return (
      <Modal>
        <div className={classes.cart}>
          {cartItems}
          <div>
            <span>Total Amount</span>
            <span>35.62</span>
          </div>
          <div className={classes.actions}>
            <button className={classes["button--all"]} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
          </div>
        </div>
      </Modal>
    );
};

export default Cart;