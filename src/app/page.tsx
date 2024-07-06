// import MissionCard from "@/components/ui/MissionCard";
// import CreditCardBadge from "@/components/ui/SquareBadgeCard";
// import SubscriptionCard from "@/components/ui/SubscriptionCard";
// import SubscriptionCardHorizontal from "@/components/ui/SubscriptionCardHorizontal";
// import TrendingCard from "@/components/ui/TrendingCard";
// import Head from "next/head";

// export default function Home() {
//   return (
//     <div>
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         {/* <TrendingCard
//           imageUrl="/images/trending_img1.jpg"
//           title="Cras Ultriciesmi Eu Turpis Hendrerit Fringilla"
//           description="Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,"
//           buttonText={"Read More"}
//           buttonLink={"/trending"}
//         />
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//           <CreditCardBadge
//             imageUrl="/images/credit_card_icn.png"
//             link={"/lists"}
//           />
//           <CreditCardBadge imageUrl="/images/debit_icn.png" link={""} />
//           <CreditCardBadge imageUrl="/images/home_buy_icn.png" link={""} />
//           <CreditCardBadge imageUrl="/images/insure_icn.png" link={""} />
//           <CreditCardBadge imageUrl="/images/invest_icn.png" link={""} />
//           <CreditCardBadge imageUrl="/images/loan_icn.png" link={""} />
//           <CreditCardBadge imageUrl="/images/retire_icn.png" link={""} />
//           <CreditCardBadge imageUrl="/images/tax_icn.png" link={""} />
//         </div> */}
//         {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
//           <MissionCard
//             logoUrl="/images/mission-bx-icn1.png" // Update this path to your logo image
//             title="Who Are We?"
//             description="Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
//           />
//         </div> */}

//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//           <main className="p-4">
//             <SubscriptionCard />
//           </main>
//         </div>

//         {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
//           <main className="p-4">
//             <SubscriptionCardHorizontal />
//           </main>
//         </div> */}

//       </div>
//     </div>
//   );
// }

// import type { NextPage } from "next";
// import ReviewCard from "@/components/ui/EditorPicksAccordion/TopEditorPicks";
// import EditorPicks from "@/components/ui/EditorPicksAccordion/EditorPicks";
// import AccordionEditor from "@/components/ui/EditorPicksAccordion/AccordionEditor";

// const Home: NextPage = () => {
//   return (
//     // <div className="container mx-auto p-4">
//     //   <EditorPicks />
//     // </div>
//     <div className="container mx-auto p-4">
//       <AccordionEditor />
//     </div>
//   );
// };

// export default Home;

import Head from 'next/head';
import Accordion from "@/components/ui/EditorPicksAccordion/AccordionEditor";
import TrendingCard from '@/components/ui/TrendingCard';
import RelatedPosts from '@/components/RelatedPosts';
import BlogContent from '@/components/BlogContent';

export default function Home() {
  return (
    <div >
      <RelatedPosts />
      <BlogContent />
    </div>
  );
}

