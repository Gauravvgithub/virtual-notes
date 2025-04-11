// import React, { useEffect, useState } from "react";

// const Fetching = () => {
//   const [posts, setPosts] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getPosts = async () => {
//       try {
//         const response = await fetch(
//         //   "https://jsonplaceholder.typicode.com/posts"
//         "https://api.freeapi.app/api/v1/public/randomproducts/product/random"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.log("Fetch error", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getPosts();
//   }, []);
//   if (loading) return <p>loading...</p>;
//   return (
//     <>
//       <div>
//         <div>
//           <h2>Posts(using fetch)</h2>
//         </div>
//         <div>
//           <ul>
//             {posts.slice(0, 5).map((post) => (
//               <li key={post.id}>{post.title}{post.body}</li>
//             ))}
//           </ul>
//         </div>
//         {/* <div>
//             <ul>
//                 {posts.slice(0,5).map((post)=>(
//                     <li key={post.id}>{post.body}</li>
//                 ))}
//             </ul>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default Fetching;


import { useEffect, useState } from 'react';

function RandomProductFetch() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10');
        const json = await res.json();
        setProduct(json.data.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>No product found</p>;

  return (
    <>
      <div>
      <h2>Random Users (Fetch)</h2>
      <ul>
        {product.map((product, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <img src={product.picture.medium} alt={product.fullName} width="60" style={{ borderRadius: '50%' }} />
            <p>{product.fullName}</p>
            <p>{product.email}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default RandomProductFetch;
