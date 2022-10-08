
import './Product.css'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Product = ({product, handleAddBtn}) => {
    
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='PerCart relative'>
           <div className='card-container'>
           <img src={img} alt="" />
            <div className='p-2'>
            <h1 className='my-5 text-xl name font-semibold'>{name?name.slice(0, 20) : 'Nam Nai'}</h1>
            <h3>Price: ${price}</h3>
            <h3>Seller: {seller}</h3>
            <h3 className='mb-10'>Ratings: {ratings}Stars</h3>
           
            </div>
           </div>
            <button onClick={()=>handleAddBtn(product)} className='flex bg-green-400 bottomBtn w-full absolute bottom-0 justify-center gap-3 p-2'>
                    <p className='text-md font-semibold'>Add to Cart</p>
                    <ShoppingCartIcon class="h-6 w-6"></ShoppingCartIcon>
            </button>
        
        </div>
    );
};

export default Product;