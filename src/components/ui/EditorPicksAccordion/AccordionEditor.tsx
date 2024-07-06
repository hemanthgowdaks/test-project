"use client";
import { useState, useRef, useEffect } from 'react';
import EditorPicks from './EditorPicks';

interface AccordionItem {
  number: number;
  title: string;
  content: JSX.Element;
}

const items: AccordionItem[] = [
  {
    number: 1,
    title: 'Make Money Online',
    content: <EditorPicks />,
  },
  {
    number: 2,
    title: 'Credit Cards',
    content: <EditorPicks />,
  },
  {
    number: 3,
    title: 'Investing',
    content: <EditorPicks />,
  },
  {
    number: 4,
    title: 'Banking',
    content: <EditorPicks />,
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (el) {
        el.style.maxHeight = openIndex === index ? `${el.scrollHeight}px` : '0px';
      }
    });
  }, [openIndex]);

  return (
    <div className="w-[725.4px] mx-auto">
      {items.map((item, index) => (
        <div
          key={item.number}
          className="float-left w-full border-3 border-[#e8ebef] rounded-lg mt-6 relative overflow-hidden bg-white"
          style={{ marginTop: index === 0 ? '0' : '16px' }}
        >
          <div
            className="cursor-pointer relative h-[71.78px] flex items-center bg-[#e8ebef]"
            onClick={() => handleToggle(index)}
          >
            <div
              className="w-11 h-11 bg-white text-black rounded-full text-2xl font-semibold text-center absolute left-4 top-2.5"
              style={{ lineHeight: '44px' }}
            >
              {item.number}
            </div>
            <div className="text-2xl font-bold ml-[75px]">
              {item.title}
            </div>
            <div
              className="absolute right-4 top-3.5 text-4xl font-bold"
            >
              {openIndex === index ? '-' : '+'}
            </div>
          </div>
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
          >
            <div className="p-2 border-t border-[#e8ebef]">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

