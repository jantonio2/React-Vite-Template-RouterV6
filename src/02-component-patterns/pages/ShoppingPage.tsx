import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
};

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
        <ProductCard product={ product }>
          <ProductCard.Image />
          <ProductCard.Title title={ '' } />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard 
          product={ product }
          className='bg-dark text-white'
        >
          <ProductImage className='text-bold custom-image' />
          <ProductTitle className='text-white' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>
      </div>
    </div>
  );
}
