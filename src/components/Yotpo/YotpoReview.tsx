'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { primaryFont } from '@/app/fonts';

interface Review {
  name: string;
  date: string;
  title: string;
  body: string;
}

const YotpoReview: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewWidth = 350; // Adjust based on actual review card width + margin

  // Original reviews list
  const reviews: Review[] = [
    {
      name: 'Graciano O.',
      date: '03/31/25',
      title: 'Fits my Glock 43x perfectly!',
      body: "Fits my Glock 43x perfectly. I don't have any attachments to it but it should not be a problem.",
    },
    {
      name: 'Matt E.',
      date: '05/10/25',
      title: 'Incredibly comfortable',
      body: 'Incredibly comfortable. I’ve worn under several shirts and completely conceals. Excellent product.',
    },
    {
      name: 'Timothy N.',
      date: '04/25/25',
      title: 'Very comfortable. No hard surfaces.',
      body: 'Very comfortable. No hard surfaces to pinch or dig in. All my handguns fit in this holster. Everything from my 1911 to my subcompact.',
    },
    {
      name: 'Sarah B.',
      date: '04/25/25',
      title: 'Feels comfortable!',
      body: 'Feels comfortable and easy to use. Though, we had thought we were getting the holsters in Camo. Oh well, not a big deal. TY',
    },
    {
      name: 'Jay P.',
      date: '03/29/25',
      title: 'Fits well, soft and comfortable!',
      body: 'Fits well, soft and comfortable, secures the pistol and magazines! I am very happy with this product.',
    },
    {
      name: 'Michael B.',
      date: '03/06/25',
      title: 'The fit is nice.',
      body: 'The fit is nice and really comfortable. I was nervous with getting one at first because of the belly I have. Everything worked out and fit amazing.',
    },
    {
      name: 'Stacie B.',
      date: '03/20/25',
      title: 'Durable, yet comfortable.',
      body: 'Durable, yet comfortable holster. I liked it a lot I purchased another one.',
    },
    {
      name: 'Kyle M.',
      date: '03/21/25',
      title: 'Super comfortable.',
      body: 'Super comfortable, breathable and I can pack in my basketball shorts!!!',
    },
    {
      name: 'Peter S.',
      date: '02/24/25',
      title: 'Very pleased so far.',
      body: 'Very pleased so far. Shipped quickly. Very comfortable and can be worn in many different positions to work with different clothing and situations.',
    },
  ];

  // Duplicate the reviews array for seamless looping
  const loopingReviews = [...reviews, ...reviews];

  const slideCarousel = (direction: 'left' | 'right') => {
    setCurrentIndex(prevIndex => {
      if (direction === 'right') {
        return (prevIndex + 1) % reviews.length;
      } else {
        return (prevIndex - 1 + reviews.length) % reviews.length;
      }
    });
  };

  // Calculate the number of items to show based on screen size
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1; // Mobile - 1 item
    if (window.innerWidth < 1024) return 2; // Tablet - 2 items
    return 3; // Desktop - 3 items
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const [transformValue, setTransformValue] = useState('translateX(0)');

  // Update transform based on current index
  const updateTransform = () => {
    if (!containerRef.current) return;

    const itemsToShow = getItemsPerView();
    const totalReviews = reviews.length;

    if (itemsToShow === 1) {
      // For mobile: simple full-width slides
      const position = (currentIndex % totalReviews) * 100;
      setTransformValue(`translateX(-${position}%)`);
    } else {
      // For tablet/desktop: show multiple items
      const itemWidth = 100 / itemsToShow;
      const position = (currentIndex % totalReviews) * itemWidth;
      setTransformValue(`translateX(-${position}%)`);
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      if (newItemsPerView !== itemsPerView) {
        setItemsPerView(newItemsPerView);
      }
      updateTransform();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, itemsPerView]);

  // Update transform when currentIndex or itemsPerView changes
  useEffect(() => {
    updateTransform();
  }, [currentIndex, itemsPerView]);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
    }, 5000);

    // Clear interval on component unmount or when currentIndex changes
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="w-full relative py-2 md:py-2">
      <div className="w-full max-w-4xl mx-auto px-6">
        <header id="benefits" className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
          <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-4 px-2">
            <div className={`font-jawbreak uppercase ${primaryFont.className}`}>
              What Our Customers Are Saying
            </div>
          </h1>
        </header>

        {/* Star Rating and Review Count */}
        <div className="flex flex-col items-start mt-8 mb-2 px-4 md:px-0 w-full">
          <div className="yotpo-reviews-carousel-bottomline-seco w-full">
            <div className="yotpo-reviews-carousel-bottomline-container">
              <div
                className="pl-1 md:pl-4 pb-3 reviews-carousel-reviews-bottomline flex items-center gap-2"
                aria-label="4.45 star rating"
              >
                <div className="flex items-center">
                  <div className="yotpo-star-ratings">
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      {[1, 2, 3, 4].map(star => (
                        <div
                          key={`full-${star}`}
                          className="yotpo-star-container"
                          style={{ marginRight: '4px' }}
                        >
                          <svg
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                          >
                            <path
                              d="M9 14.118L14.562 17.475L13.086 11.148L18 6.891L11.529 6.342L9 0.375L6.471 6.342L0 6.891L4.914 11.148L3.438 17.475L9 14.118Z"
                              stroke="#e7721b"
                              fill="#e7721b"
                            ></path>
                          </svg>
                        </div>
                      ))}
                      <div className="yotpo-star-container">
                        <svg
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                        >
                          <defs>
                            <linearGradient id="half-star" x1="0" x2="100%" y1="0" y2="0">
                              <stop offset="50%" stopColor="#e7721b" />
                              <stop offset="50%" stopColor="#FFFFFF" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M9 14.118L14.562 17.475L13.086 11.148L18 6.891L11.529 6.342L9 0.375L6.471 6.342L0 6.891L4.914 11.148L3.438 17.475L9 14.118Z"
                            stroke="#e7721b"
                            fill="url(#half-star)"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-gray-700 font-medium">(6234 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Left Arrow - Visible on all screen sizes */}
          <button
            onClick={() => slideCarousel('left')}
            className="flex absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-[#d7d7d7] text-white rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center hover:bg-[#929191] hover:opacity-100 opacity-50 transition-all duration-300"
            aria-label="Previous review"
          >
            ❮
          </button>

          {/* Carousel */}
          <div className="relative w-full text-center">
            <div ref={containerRef} className="w-full overflow-hidden">
              <div className="w-full">
                <div
                  ref={carouselRef}
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: transformValue,
                    width: itemsPerView === 1 ? '100%' : '100%',
                    gap: itemsPerView === 1 ? '0' : '16px',
                    padding: itemsPerView === 1 ? '0' : '0 4px',
                  }}
                >
                  {loopingReviews.map((review, index) => (
                    <div
                      key={`${review.name}-${index}`}
                      className={`flex-shrink-0 ${
                        itemsPerView === 1
                          ? 'w-full'
                          : itemsPerView === 2
                            ? 'w-[calc(50%-8px)]'
                            : 'w-[calc(33.333%-11px)]'
                      } px-4 py-4 border border-gray-200 rounded-lg bg-white shadow-sm flex flex-col min-h-[350px] md:min-h-[350px]`}
                    >
                      <div className="mb-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center space-x-1">
                            <span className="text-[12px] font-bold text-gray-800">
                              {review.name}
                            </span>
                            <span className="flex items-center text-xs">
                              <svg
                                className="w-3 h-3 mr-0.5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-500">Verified Buyer</span>
                            </span>
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex text-[#ffa500] text-2xl mt-3">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="mr-1">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="!text-[17px] font-semibold mb-2">{review.title}</p>
                      <p className="text-black !text-[14px] break-words whitespace-normal overflow-visible line-clamp-5">
                        {review.body}
                      </p>
                      <div className="mt-4 flex items-center justify-center w-full">
                        <div className="relative w-7 h-7 mr-1.5">
                          <Image
                            src="/contentimages/square.webp"
                            alt="VNSH"
                            width={30}
                            height={30}
                            className="object-contain"
                            quality={100}
                            priority
                          />
                        </div>
                        <span className="text-[15px] font-medium text-gray-500">VNSH Holster</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Arrow - Visible on all screen sizes */}
            <button
              onClick={() => slideCarousel('right')}
              className="flex absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-[#d7d7d7] text-white rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center hover:bg-[#929191] hover:opacity-100 opacity-50 transition-all duration-300"
              aria-label="Next review"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YotpoReview;
