import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

interface FaqData {
  question: string;
  answer: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-2.5 overflow-hidden shadow-sm transition-all border-b border-[#656c80] pb-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center h-5 w-5 min-w-[1.25rem] rounded-full bg-[#10d467] text-white font-bold text-sm leading-none">
            ?
          </span>
          <span className="text-white font-bold text-left text-base sm:text-lg md:text-[22px] font-stratum">
            {question}
          </span>
        </div>
        <span
          className="ml-4 text-white transition-transform duration-200 flex-shrink-0"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          aria-hidden="true"
        >
          ▼
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        aria-hidden={!isOpen}
        style={{ borderTop: isOpen ? 'none' : 'none' }}
      >
        {typeof answer === 'string' ? (
          <p className="!text-[15px] md:!text-[18px] !px-4 !text-gray-200 !leading-relaxed !py-4">
            {answer}
          </p>
        ) : (
          <div className="!text-[15px] md:!text-[18px] !px-4 !text-gray-200 !leading-relaxed !space-y-1">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

const faqData: FaqData[] = [
  {
    question: 'Q: Does this come in right-handed and left-handed configurations?',
    answer: 'A: No, the VNSH holster is a true ambidextrous holster.',
  },
  {
    question: 'Q: Will This Work With My Laser Sights or a Mounted Light?',
    answer:
      'A: Depending on the light or sight you are using it may fit. Smaller lights and lasers do fit with most compact and some full-size guns. You can safely purchase the holster and if it doesn’t work for your setup we’ll give you a prepaid return label for a full refund.',
  },
  {
    question: 'Q: Will this work for my revolver?',
    answer:
      "A: The holster will fit most compact revolvers but we don't have an exhaustive list of which revolvers do and don't fit.",
  },
  {
    question: 'Q: Do I Need a Belt? How Does It Connect Around The Waist?',
    answer:
      'A: NO! The holster has a built in Waist Band. It secures around your waist with built-in, high quality molded velcro. You do not need a belt... or anything else for that matter. You could even wear it naked if you wanted too. ;)',
  },
  {
    question: "Q: My Semi-automatic Isn't Listed Above. Will it fit?",
    answer:
      'A: Yes, all semi-automatic firearms fit. In fact, that is what our design is specifically set for. This is the only holster on the market that will fit any semi-automatic firearm. The exception is the C.O.R.E. series from Smith and Wesson.',
  },
  {
    question: 'Q: Will My Magazines Fit in the Pouches?',
    answer:
      'A: Yes, all magazines for all semi-automatics will fit in any or all of the two magazine pouches.',
  },
  {
    question: 'Q: Does this holster work with slide-mounted optics (Red dots, etc)?',
    answer:
      'A: In most cases no, though some smaller, sub-compact weapons may work with a slide-mounted optic. If you want to try the holster out with your optic and it doesn’t work, please remember we offer an any-reason return policy for the first 60-days you own the holster.',
  },
];

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full bg-[#242833] py-5 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleFaqClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
