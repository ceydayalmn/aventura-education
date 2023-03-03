
import './App.css';
import getProducts from './product.js';

function App() {
  const products = getProducts();

  return (
    <div className="App">
      <div className='container'>
        {products.map((product) => (
          <div className='products'>
            <div className="image"> 
             {product.isHot && <span className="hot-text">HOT</span>}
            <img src={product.productPic} alt='' />
            </div>
            <h5>{product.productName}</h5>
            <p>{product.productDesc}</p>
          </div>
        ))}
      </div>
   </div>
  );
}

export default App;


