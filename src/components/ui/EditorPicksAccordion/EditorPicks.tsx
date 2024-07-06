import React from 'react';
import SuggestedEditorPicks from './SuggestedEditorPicks';
import TopEditorPicks from './TopEditorPicks';

const EditorPicks: React.FC = () => {
  return (
    <div className="border-3 border-gray-200 rounded-lg mt-0 p-2 sm:p-4 md:p-6 bg-white h-auto w-full max-w-[725.39px]">
      <TopEditorPicks
        imageUrl="/images/editor-pic.jpg"
        title="Lorem Ipsum Dolorsit Amet Consetuer Adipiscg Elit Aenean Comodo"
        date="April 12, 2024"
        readMoreLink="#"
        readingTime="9 Minutes Read"
      />

      {/* SuggestedEditorPicks components */}
      <div className="flex flex-col md:flex-row justify-between border-t border-gray-300 pt-6 mt-6">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <SuggestedEditorPicks
            imageUrl="/images/sugest-mig-1.jpg"
            title="Lorem Ipsm Dolrsit Amet Contuer"
            location="San Francisco, CA"
            date="Mar, 2024"
          />
        </div>
        <div className="hidden md:block border-l border-gray-200 mx-4"></div>
        <div className="md:w-1/2">
          <SuggestedEditorPicks
            imageUrl="/images/sugest-mig-2.jpg"
            title="Lorem Ipsm Dolrsit Amet Contuer"
            location="San Francisco, CA"
            date="Mar, 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default EditorPicks;
