import TrendingArticle from "@/components/TrendingArticle";
import CarInsurenceCompareCard from "@/components/ui/trendingPageUI/CarInsurenceCompareCard";
import TrendingPageUnknownCard from "@/components/ui/trendingPageUI/TrendingPageUnknownCard";
import React from "react";

function trending() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <TrendingPageUnknownCard /> */}
      {/* <CarInsurenceCompareCard /> */}
      <TrendingArticle
        articleNumber={1}
        title={"Liberty Mutual Auto Insurance"}
        imageUrl={"/images/trend-info-img-1.jpg"}
        // paragraph="Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum
        //   primis in faucibus orci luctus et ultrices posuere cubilia Curae; In
        //   ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis
        //   arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
        //   Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
        //   consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
        //   ullamcorper ipsum rutrum nunc. Aenean leo ligula, porttitor eu,
        //   consequat vita eleifend ac, enim. Aliquam lorem ante, dapibus in,
        //   viverra quis, feugiat a, tellus.                                
                                                                                           
        //   Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
        paragraph={<>
          Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae; In
          ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis
          arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
          Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
          consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus
          ullamcorper ipsum rutrum nunc. Aenean leo ligula, porttitor eu,
          consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
          viverra quis, feugiat a, tellus.
          <br /><br />
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. <strong>Curabitur ullamcorper ultricies nisi. Nam eget dui.</strong> Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
        </>}
      />
    </div>
  );
}

export default trending;
