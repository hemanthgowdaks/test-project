// 'use client';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// type Post = {
//   id: number;
//   coverImg: string;
//   title: string;
//   description: string;
// };

// const RelatedPosts: React.FC = () => {
//   // const [posts, setPosts] = useState<Post[]>([]);

//   // useEffect(() => {
//   //   // Fetch related posts from Strapi API
//   //   const fetchPosts = async () => {
//   //     try {
//   //       const response = await axios.get('http://localhost:1337/api/related-posts');
//   //       const data = response.data.data.map((item: any) => ({
//   //         id: item.id,
//   //         title: item.attributes.title,
//   //         description: item.attributes.description,
//   //       }));
//   //       setPosts(data);
//   //     } catch (error) {
//   //       console.error('Error fetching related posts', error);
//   //     }
//   //   };

//   //   fetchPosts();
//   // }, []);

//   const blogs=[
//         {
//             "id":1,
//             'title':'Blog 1',
//             'description':"Lorem Ipsum has been the industry's ",
//             'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',

//         },
//         {
//             "id":2,
//             'title':'Blog 2',
//             'description':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//             'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',

//         },
//         {
//             "id":3,
//             'title':'Blog 3',
//             'description':"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
//             'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',

//         },
//     ]

//   return (
//     <div className="w-full lg:w-[30%] lg:max-w-[351px] lg:ml-auto lg:mt-0 mt-8 mx-auto lg:relative lg:top-0 relative top-8">
//       <p className="text-[27px] leading-[37px] font-bold text-[#2d2d2d] mb-[12px] text-left">Related Posts</p>
//       <div className="space-y-4">
//         {blogs.map(blog) => (
//           // <a href={`/post/${post.id}`} key={post.id} className="flex items-start space-x-4 border-t py-4">
//             <img
//               src={blog.coverImg} // Update this to a real image URL if available
//               alt={blog.title}
//               className="w-[82px] h-[82px] inline-block align-top rounded-[5px] max-w-full border border-[#ddd]"
//             />
//             <div>
//               <h3 className="text-[20px] leading-[26px] mt-[-7px]">{blog.title}</h3>
//               <p className="text-[16px] leading-[22px] mt-[10px]">{blog.description}</p>
//             </div>
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RelatedPosts;

"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import axios from 'axios';
import Image from "next/image";


type Post = {
  id: number;
  coverImg: string;
  title: string;
  description: string;
};

const RelatedPosts: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Lorem Ipsum has been the industry's",
      coverImg:
        "/images/related_img1.jpg",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Lorem Ipsum has been the industry's",
      coverImg:
        "/images/related-img2.jpg",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "Lorem Ipsum has been the industry's",
      coverImg:
        "/images/related-img3.jpg",
    },
    {
      id: 4,
      title: "Blog 4",
      description: "Lorem Ipsum has been the industry's",
      coverImg:
        "/images/related-img4.jpg",
    },
  ];

  return (
    <div className="w-full lg:w-[30%] lg:max-w-[351px] lg:ml-auto lg:mt-0 mt-8 mx-auto lg:relative lg:top-0 relative top-8">
      <p className="text-[27px] leading-[37px] font-bold text-[#2d2d2d] mb-[12px] text-left">
        Related Posts
      </p>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <a
            href={`/lists/${blog.id}`}
            key={blog.id}
            className="flex items-start space-x-4 border-t py-4"
          >
            <Image
              src={blog.coverImg}
              alt={blog.title}
              width={82}
              height={82}
              className="inline-block align-top rounded-[5px] max-w-full border border-[#ddd]"
            />
            <div>
              <h3 className="text-[20px] leading-[26px] mt-[-7px] text-left font-blod">
                {blog.title}
              </h3>
              <p className="text-[16px] leading-[22px] mt-[10px] text-left">
                {blog.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
