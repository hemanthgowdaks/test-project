// import React from "react";
// import Image from "next/image";
// import {createRoot} from 'react-dom/client'
// import Markdown from 'react-markdown'

// type blog = {
//   title: string;
//   coverImg: string;
// };

// const BlogContent = () => {

//   const blog =
//     {
//       title: "Lorem Ipsum Dolorst Amet Consect Adipiscing Elit",
//       coverImg: "/images/blog-det-img1.jpg",
//       blogContent:createRoot(document.body).render(<Markdown>{**Nullam Dictum Feliseupede Mollis**

//         -  Maecenas nec odio et ante
//        -   Tincidunt tempus Donec vitae sapien
//        -   Utlibero venenatis faucibus Nullam quis ante
//        -   Etiam sit amet orci eget eros

//        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.

//        Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
//        ![enter image description here](https://hitsdesignclients.com/Millenial_Dollar/images/blog-det-img2.jpg)

//        **Maecenas Necodio Etante Tincidunt Empus**
//        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.

//        **Curabitur ullamcorper ultricies nisi. Nam eget dui.**  Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.

//        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.

//        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.
//        ![enter image description here](https://hitsdesignclients.com/Millenial_Dollar/images/blog-det-img3.jpg)

//         **Maecenas Necodio Etante Tincidunt Empus**

//        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
//        <div style="float: right; margin: 0 0 10px 10px;">
//          <img src="https://hitsdesignclients.com/Millenial_Dollar/images/blog-det-rgt.png" alt="description" width="200">
//        </div>
//        Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.

//        **Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.**

//        ## Maecenas Necodio Etante Tincidunt Empus
//        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
//        ![enter image description here](https://hitsdesignclients.com/Millenial_Dollar/images/blog-det-img4.jpg)
//        **Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.**

//        Aunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.

//        Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed.}</Markdown>)

//     };
//   return (
//     <div className="max-w-[770px]">
//       <div className="text-[#2d2d2d] font-bold text-3xl leading-10">
//         {blog.title}
//       </div>
//       <div className="bg-[#fff] p-[3px] max-w-full rounded-xl mt-6 mx-auto mb-2.5 border border-solid drop-shadow-lg">
//         <Image
//           src={blog.coverImg}
//           alt="article image"
//           width={737}
//           height={436}
//           className="flex justify-center items-center rounded-xl"
//         />
//         <div>{blog.blogContent}</div>
//       </div>
//     </div>
//   );
// };

// export default BlogContent;

// ////////////////////////////////////////////////////////////////////
// 'use client';
// import React from "react";
// import Image from "next/image";
// import { createRoot } from "react-dom/client";
// import Markdown from "react-markdown";
// import ReactMarkdown from "react-markdown";

// type Blog = {
//   title: string;
//   coverImg: string;
//   blogContent: string;
// };

// const BlogContent: React.FC = () => {
//   const blog: Blog = {
//     title: "Lorem Ipsum Dolorst Amet Consect Adipiscing Elit",
//     coverImg: "/images/blog-det-img1.jpg",
//     blogContent: `
// **Nullam Dictum Feliseupede Mollis**

// - Maecenas nec odio et ante
// - Tincidunt tempus Donec vitae sapien
// - Utlibero venenatis faucibus Nullam quis ante
// - Etiam sit amet orci eget eros

// Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.

// Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
// ![enter image description here](https://hitsdesignclients.com/Millenial_Dollar/images/blog-det-img2.jpg)

// **Maecenas Necodio Etante Tincidunt Empus**
// Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.

// **Curabitur ullamcorper ultricies nisi. Nam eget dui.** Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.

// Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.

// Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae.
// ![enter image description here](https://hitsdesignclients.com/Millenial_Dollar/images/blog-det-img3.jpg)

// **Maecenas Necodio Etante Tincidunt Empus**
// Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
// <div style="float: right; margin: 0 0 10px 10px;">
//   <img src="https://hitsdesignclients.com/Millenial_Dollar/images/blog-det-rgt.png" alt="description" width="200">
// </div>
// Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.

// **Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis.**

// ## Maecenas Necodio Etante Tincidunt Empus
// Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
// ![enter image description here](https://hitsdesignclients.com/Millenial_Dollar/images/blog-det-img4.jpg)
// **Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.**

// Aunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.

// Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed.
// `
//   };

//   return (
//     <div className="max-w-[770px]">
//       <div className="text-[#2d2d2d] font-bold text-3xl leading-10">
//         {blog.title}
//       </div>
//       <div className="bg-[#fff] p-[3px] max-w-full rounded-xl mt-6 mx-auto mb-2.5 border border-solid drop-shadow-lg">
//         <Image
//           src={blog.coverImg}
//           alt="article image"
//           width={737}
//           height={436}
//           className="flex justify-center items-center rounded-xl"
//         />
//         <div className="prose">
//           <ReactMarkdown>{blog.blogContent}</ReactMarkdown>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type Blog = {
  title: string;
  coverImg: string;
  // blogContent: string;
};

const BlogContent: React.FC = () => {
  const blog: Blog = {
    title: "Lorem Ipsum Dolorst Amet Consect Adipiscing Elit",
    coverImg: "/images/blog-det-img1.jpg",
  };

  return (
    <div className="max-w-[737px]">
      <div className="text-[#2d2d2d] font-bold text-3xl leading-10">
        {blog.title}
      </div>
      <div className="bg-[#fff] p-[3px] max-w-full rounded-xl mt-6 mx-auto mb-2.5 border border-solid drop-shadow-lg">
        <Image
          src={blog.coverImg}
          alt="article image"
          width={770}
          height={436}
          className="flex justify-center items-center rounded-xl"
        />
      </div>
        <div className="text-left">
          

        </div>
    </div>
  );
};

export default BlogContent;
