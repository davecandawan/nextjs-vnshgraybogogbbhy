import React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const PackageSelection: React.FC = () => {
  const searchParams = useSearchParams();

  // Get all current URL parameters
  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center items-center gap-6 -mt-4">
        {/* Starter Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-[#cdcdcd] w-[320px] flex flex-col order-3 lg:order-1">
          <div className="relative w-full h-auto overflow-hidden bg-white aspect-square">
            <Image
              src="/contentimages/StarterMobileU.webp"
              alt="Starter Package"
              fill
              className=""
              priority
            />
          </div>
          <div className="pt-0 px-4 pb-4 flex-grow flex flex-col bg-white">
            <div className="flex justify-center items-center gap-2">
              <span className="text-[40px] font-bold text-black">$79.00</span>
              <span className="text-[#ff0000] text-lg font-bold">+ S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">
              You Saved $79.00
            </div>
            <div className="mt-auto">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vnshcamobogogbbhy/starter-checkout')}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultimate Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-[3px] border-[#a3a0a0] w-[320px] flex flex-col order-1 lg:order-2">
          <div className="relative w-full h-64 overflow-hidden bg-[#ededed] flex items-start">
            <Image
              src="/contentimages/AdvancedMobileU2.webp"
              alt="Ultimate Package"
              fill
              className=""
              priority
            />
          </div>
          <div>
            <div className="list-none p-0 m-0">
              <div className="text-center bg-black text-white px-3 py-0.5">
                <span className="text-white mr-2 text-base font-bold">+</span>
                <span className="text-base font-bold">
                  4 Colors <span className="text-sm font-normal">(Black, Gray, Camo, Nude)</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pl-0 pr-1 pt-0 pb-4 flex items-center gap-4 bg-[#e8e8e8]">
            <div className="w-1/2">
              <Image
                src="/contentimages/SpecialOffer2.avif"
                alt="Special Offer"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="bg-[#fafd28] rounded-sm font-bold text-black px-1 py-0 inline-block mb-1 text-[12px]">
                The Operator's Choice
              </div>
              <p className="!text-[11px] !leading-tight">
                A 20-gallon, military-grade tactical range bag with plenty of room for multiple
                handguns, hearing protection, and ammo for the entire day.
              </p>
            </div>
          </div>

          <div className="p-4 flex-grow flex flex-col bg-[#fff]">
            <div className="flex justify-center items-center gap-2">
              <span className="text-[40px] font-bold text-black">$199.00</span>
              <span className="text-[#ff0000] text-lg font-bold">+ Free S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">
              You Saved $188.91
            </div>

            <div className="mt-auto">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vnshcamobogogbbhy/advanced-checkout')}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border-2 border-[#cdcdcd] w-[320px] flex flex-col order-2">
          <div className="relative w-full h-[290px] overflow-hidden bg-white">
            <Image
              src="/contentimages/EnhancedMobileU2.webp"
              alt="Enhanced Package"
              fill
              className=""
              priority
            />
          </div>
          <div className="mb-1">
            <div className="list-none p-0 m-0">
              <div className="text-center bg-black text-white px-3 py-0.5">
                <span className="text-white mr-2 text-base font-bold">+</span>
                <span className="text-base font-bold">
                  4 Colors <span className="text-sm font-normal">(Black, Gray, Camo, Nude)</span>
                </span>
              </div>
            </div>
          </div>
          <div className="pt-0 px-4 pb-4 flex-grow flex flex-col bg-white">
            <div className="flex justify-center items-center gap-2">
              <span className="text-[40px] font-bold text-black">$149.00</span>
              <span className="text-[#ff0000] text-lg font-bold">+ Free S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">
              You Saved $168.94
            </div>
            <div className="mt-auto">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vnshcamobogogbbhy/enhanced-checkout')}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSelection;
