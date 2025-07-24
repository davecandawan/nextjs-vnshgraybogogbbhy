import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PackageSelection from '../PackageSelection/PackageSelection';
import StickyBanner from '../StickyBanner/StickyBanner';
import Reviews from '../Reviews/Reviews';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { primaryFont } from '@/app/fonts';

const Slideshow = dynamic(() => import('../Slideshow/Slideshow'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>,
});
const YotpoReview = dynamic(() => import('../Yotpo/YotpoReview').then(mod => mod.default), {
  ssr: false,
});

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="w-full bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
        <div className="w-full max-w-[1240px] mx-auto pt-5 lg:px-20 bg-white">
          <Slideshow />
        </div>
      </div>
      <div className="w-full max-w-[1240px] mx-auto px-5 py-1 lg:px-20 bg-white">
        <div className="space-y-2">
          <div className="mt-1 mb-8">
            <div className="mt-1">
              <AddToCartButton />
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <div className="relative w-6 h-6">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="font-semibold text-[16px] md:text-[22px] lg:text-[22px] whitespace-nowrap font-inter">
                6234 Reviews
              </span>
            </div>
            <div className="bg-[#f7f2f2] py-2 sm:py-2 sm:px-2 inline-block text-[15px] sm:text-2xl whitespace-nowrap overflow-x-auto w-full sm:w-auto">
              <span className="inline-flex items-center">
                <span className="mr-1">✨</span>
                <span className="font-semibold">
                  <span className="hidden sm:inline">Highly rated by customers for: </span>
                  <span className="sm:hidden">Highly rated by customers for: </span>
                  <u>fit</u>, <u>quality</u>
                </span>
              </span>
            </div>
          </div>
          {/* Testimonial Section */}
          <div className="max-w-4xl mx-auto mb-8 p-4 pt-2 bg-[#f9f9f9] rounded-lg shadow-sm border border-[#ddd]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="relative">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src="/contentimages/HolsterTest.webp"
                    alt="Jeff M"
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 56px, 64px"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2f78c9] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <span className="font-extrabold text-[14px]">✓</span>
                </div>
              </div>
              <div className="text-center sm:text-left min-w-[90px]">
                <div className="font-bold">Jeff M</div>
                <div className="text-[13px] text-[#555] mb-1">Verified Buyer</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold mb-0 font-inter">Top Review</div>

                <div className="text-yellow-400 text-xl">★★★★★</div>

                <span className="font-semibold text-[16px] mb-1 block font-inter">
                  There Is No Comparison - Best Holster Ever
                </span>

                <span className="text-[14px] text-[#555] leading-tight block font-inter">
                  "I've been using the VNSH for 3 weeks, and it's a huge upgrade from an IWB
                  holster. It's way more comfortable and lets me dress more freely. As a heavy
                  equipment operator, carrying can be tough, but the VNSH makes it much easier and
                  more secure—no shifting, even with constant movement. If it's this good at work,
                  it's even better anywhere else. Comfort and security are key for everyday carry,
                  and this holster delivers. Highly recommend."
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[82%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/VNSH-CamoHolster-BlockImages-V2-Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-4 px-2">
              <div className={`font-jawbreak uppercase ${primaryFont.className}`}>
                You Love It Or You Get Your Money Back
              </div>
            </h1>
          </header>
          <div className="mt-1 mb-8">
            <div className="mt-1">
              <AddToCartButton />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="w-full max-w-4xl mx-auto my-6 px-3 py-5">
            <div className="flex justify-between items-center sm:flex-wrap sm:justify-center sm:gap-4">
              <div className="w-[22%] sm:w-[140px] h-auto aspect-[140/120] relative">
                <Image
                  src="/contentimages/VNSH_MONEY-BACK.webp"
                  alt="Money Back Guarantee"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[165px] h-auto aspect-[165/120] relative">
                <Image
                  src="/contentimages/VNSH_SECURE-CHECKOUT.webp"
                  alt="Secure Checkout"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[170px] h-auto aspect-[170/120] relative">
                <Image
                  src="/contentimages/VNSH_aMERICAN.webp"
                  alt="American Made"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[170px] h-auto aspect-[170/120] relative">
                <Image
                  src="/contentimages/VNSH_FAST-SHIP.webp"
                  alt="Fast Shipping"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <header id="benefits" className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-4 px-2">
              <div className={`font-jawbreak uppercase ${primaryFont.className}`}>
                See Why 232,041 Americans Say The VNSH Holster Is Their Favorite
              </div>
            </h1>
          </header>
          <div className="space-y-4 text-xl !leading-tight md:text-xl font-inter">
            <p className="text-lg !leading-tight mb-4">
              📈 <span className="font-bold">America’s Fastest-Growing Holster Company</span>: More
              than 250,000 sold since Jan 1, 2023. All because of exceptional comfort, safety and
              our commitment to customer satisfaction.
            </p>
            <p className="text-lg !leading-tight mb-4">
              🏃‍♂️😌 <span className="font-bold">Made For Comfort and Durability</span>: We made the
              VNSH holster to be comfortable first. We used top-shelf materials from premium
              athletic wear, along with ultra soft and supportive “yoga pant” material, supple
              microfiber and 1000D Denier Nylon.
            </p>
            <p className="text-lg !leading-tight mb-4">
              🔄{' '}
              <span className="font-bold">Works With Any Clothes + Multiple Carry Positions</span>:
              Our belt (available in 48" or 68" works with any clothes and gets you carrying in
              multiple positions.
            </p>
          </div>
          <div className="w-full md:w-[80%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/VNSH-BlackHolster-BlockImages-V2-_Block_Img2-Desktop.webp"
              alt="VNSH Black Holster"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 text-xl !leading-tight md:text-xl font-inter">
            <p className="text-lg !leading-tight mb-4">
              🛡️ <span className="font-bold">(Safe and Secure):</span> Trigger protection guaranteed
              thanks to thermo-molded plastic trigger guard and our magnetic retention strap keeps
              your firearms locked down.
            </p>
          </div>
          <div className="w-full md:w-[80%] mx-auto max-w-[1120px] py-0 px-0">
            <Image
              src="/contentimages/VNSH-BlackHolster-BlockImages-V2-_Block_Img3-Desktop.webp"
              alt="VNSH Black Holster"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 text-xl leading-tight md:text-xl md:py-4 py-4 font-inter">
            <p className="text-lg !leading-tight mb-4">
              🔄 <span className="font-bold">(Works with MOST Pistols):</span> Our unique holster
              works with 99% of pistols and many small-frame revolvers so you can use 1 holster for
              all your guns* (will not work with most weapon lights).
            </p>
          </div>
          <div className="w-full md:w-[80%] mx-auto max-w-[1120px] px-0 md:px-0">
            <Image
              src="/contentimages/CamoImage2-Desktop.webp"
              alt="Camo Holster"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="my-8 w-full">
            <YotpoReview />
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-4 px-0 md:px-0">
            <Image
              src="/contentimages/VNSH-BlackHolster-BlockImages-V2-_Block_Img6-Desktop.webp"
              alt="VNSH Black Holster"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="w-full md:w-[75%] mx-auto max-w-[1120px] pt-0 pb-4 px-0 md:px-0">
            <Image
              src="/contentimages/VNSH_COMPARE.webp"
              alt="VNSH Black Holster"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:py-4">
            <h1 className="text-3xl sm:text-3xl md:text-[42px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className={`font-jawbreak uppercase ${primaryFont.className}`}>
                Our Commitment to you...
              </div>
            </h1>
          </header>
          <header className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:py-4">
            <h1 className="text-3xl sm:text-3xl md:text-[42px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className={`font-jawbreak uppercase ${primaryFont.className}`}>
                You're Getting An Iron-Clad, Money-Back Guarantee
              </div>
            </h1>
          </header>
          <div className="space-y-6">
            <div className="w-4/5 md:w-[30%] mx-auto px-4 md:px-0">
              <Image
                src="/contentimages/VNSH_MONEY-BACK.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <div className="font-inter">
              <p>
                Love everything about your order, or we’ll refund you every penny with our 60-day
                moneyback guarantee.
              </p>
              <p>It’s that simple.</p>
              <p>
                If you aren’t totally thrilled, all you have to do is contact our US-Based Support
                Team within 60 days to get a full refund.
              </p>
              <p>You also get a 2-year workmanship guarantee as well!</p>
              <p>
                We know you’ll love your VNSH gear, which is why we’re happy to extend you these
                iron-clad guarantees.
              </p>
              <p>
                So if you want the comfiest holster on earth … plus a second one totally FREE on the
                house…
              </p>
              <p>Plus… get a FREE VNSH Holster with it…</p>
              <p id="package-selection" className="text-lg md:text-xl font-medium mb-8">
                Then you owe it to yourself to grab this deal now!
              </p>
            </div>
            <div className="w-full md:w-[80%] mx-auto max-w-[1120px] px-0 md:px-0 md:py-5">
              <Image
                src="/contentimages/CamoImage1-Desktop.webp"
                alt="VNSH Camo Holster"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            {/* Reviews Component */}
            <div className="mb-12">
              <Reviews />
            </div>

            {/* Package Selection Component */}
            <div id="targetselection" className="-mt-4">
              <PackageSelection />
            </div>

            <header id="faqs" className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:py-4">
              <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-0 px-2">
                <div className={`font-jawbreak uppercase ${primaryFont.className}`}>
                  Frequently Asked Questions
                </div>
              </h1>
            </header>
          </div>
        </div>
        <StickyBanner />
      </div>
    </div>
  );
};

export default Content;
