import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Detelis = () => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]); // حالة لتخزين عناصر عربة التسوق
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/Sarvices/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  // إضافة المنتج إلى عربة التسوق
  const addToCart = () => {
    setCart([...cart, product]);

    Swal.fire({
      icon: 'success',
      title: 'Successfully added to cart',
      showConfirmButton: true,
      timer: 5000, // Set a timer for 5 seconds (adjust as needed)
      confirmButtonText: 'OK',
    });
  };

  return (
    <div>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2">
              <div className="sticky top-0 z-10 overflow-hidden">
          <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
            <img
              src={product.image}
              alt=""
              className="object-cover w-full lg:h-full "
              
            />
          </div>
    
        </div>
      </div>
      <div className="w-full px-4 md:w-1/2 ">
        <div className="lg:pl-20">
          <div className="mb-8 ">
     
            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
            {product.title}
            </h2>
            <div className="flex items-center mb-6">
            </div>
            <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
           {product.content}
            </p>
            <p id='priceee' className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400">
              <span>{product.price}</span>
            
            </p>
          </div>
 

      
          <div className="flex flex-wrap items-center -mx-4 ">
            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
             <Link to="/BookNow">
              
             < button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                Book Now
              </button>
              
              </Link> 
            </div>
          
          </div>
          <div id='osa' className="flex flex-wrap items-end -mx-4 justify-end">
          <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
            
            <button
          onClick={addToCart} // انقر على هذا الزر لإضافة المنتج إلى عربة التسوق
          className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
        >
          Add to Cart
        </button>

            

      </div>
          
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Detelis