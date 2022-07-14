import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css';

const product: Product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
};

const product2: Product = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png'
};

const products: Product[] = [ product, product2 ];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map( product => (
            <ProductCard 
              key={ product.id }
              product={ product }
              className='bg-dark text-white'
            >
              <ProductImage className='text-bold custom-image' />
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }

      </div>

        <div className='shopping-cart'>
          <ProductCard
            product={ product2 }
            className='bg-dark text-white'
            style={{ width: '100px' }}
          >
            <ProductImage className='text-bold custom-image' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
          <ProductCard
            product={ product }
            className='bg-dark text-white'
            style={{ width: '100px' }}
          >
            <ProductImage className='text-bold custom-image' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        </div>

    </div>
  );
}
