import React from 'react';
import Image from 'next/image';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Fred H',
      stars: '★★★★★',
      date: 'I really like it',
      text: '"I really like it and how it fits. I gave my other VNSH holster to a Vietnam Vet friend of mine and he loves it too."',
      textClass: 'pl-2 mr-auto',
      image: '/contentimages/review7mobile.jpg',
      width: 120,
      height: 239,
    },
    {
      id: 2,
      name: 'Allen C',
      stars: '★★★★★',
      date: "I've purchased a lot of holsters",
      text: "\"I've purchased a lot of holsters, this one is by far the best one I've purchased and will stick to. I've recommended it to my coworkers.\"",
      image: '/contentimages/review5mobile.webp',
      width: 120,
      height: 142,
    },
    {
      id: 3,
      name: 'Frank S',
      stars: '★★★★★',
      date: 'What more can you ask for?',
      text: "\"What more can you ask for? Fits great, very comfortable. I've used it wearing Pajamas, sweatpants, basketball shorts, jeans, dress pants with no problem at all. I have Glock 45g 9mm gen 5 with a red dot optic, tactical flashlight with green dot láser with total of 3 17rd clips all loaded so 51+1 chambered total 52rds all is easily carried with the VNSH HOLSTER. At first, the gun was a little snug and not easily holstered with the tactical flashlight installed, but I got it holstered, left it alone for a day or two hoping it would stretch just enough to make it easier to pull and reholster, and it's getting better every day. It's now easy to pull, still a little resistance on reholstering but getting better. I'm more than positive it will conform to fit even more. All in all, I have zero complaints and I'm 200% satisfied. I also got the buy 1 get 1 sale so I actually got 2 holsters - the other one I gave to my wife for her S&W Bodyguard 2.0 .380 which is a micro. I thought it would get lost in the holster but it fits great. Just remember the outer thumb snap strap is velcroed inside the holster so just remove it and adjust it to the length you need. You won't be disappointed. All that's left is to see how durable it is and how long it will last - it feels and looks like it will last without any issues, only time will tell. So if there's no more updates to this review (written January 2024) then that means it's still holding up to my everyday carrying. Definitely recommended - don't short yourself on a cheap Amazon knockoff, get the real deal - the only one VNSH.\"",
      textClass: 'pl-2 mr-auto',
      image: '/contentimages/review3mobile.avif',
      width: 120,
      height: 239,
    },
    {
      id: 4,
      name: 'Darin P',
      stars: '★★★★★',
      date: 'Most comfortable off duty holster',
      text: '"Most comfortable off duty holster I’ve had. Finally, dumped the fanny pack for carry."',
      textClass: 'md:ml-auto',
      image: '/contentimages/review6mobile.jpg',
      width: 120,
      height: 142,
    },
    {
      id: 5,
      name: 'Aaron M',
      stars: '★★★★★',
      date: 'One of the best I’ve ever owned',
      text: "\"This holster has to be one of the best holsters I've ever owned. This thing is extremely versatile in terms how and where you can carry. Certain clothing don't allow me to carry at all but with this holster it's no longer a problem. They had an option for a larger sized person and I didn't believe i...\"",
      textClass: 'md:ml-auto',
      image: '/contentimages/reviewmobile.webp',
      width: 120,
      height: 119,
    },
    {
      id: 6,
      name: 'Deborah P',
      stars: '★★★★★',
      date: '10/10 Would Recommend',
      text: 'As a dedicated concealed carry enthusiast and firearms instructor, I own a LOT of holsters. (As a female, I own a corset holster, thigh holster, and multiple OWB and IWB kydex holsters, as well as a belly band.) The Vanish holster is well made and extremely comfortable, attaching very firmly. (As a lady, it makes trips to the bathroom a breeze, too!) My Glock 19 with red dot optic fits snugly, but withdraws quickly when needed. My only suggestion for improvement would be to offer an option that would incorporate a custom kydex insert, as a claw attachment would help to tuck in the grip for even more effective concealment. But at the end of the day, this holster is a game changer and for some it could make the difference between carrying...or leaving their gun at home. 10/10... Highly recommend!',
      textClass: 'md:ml-auto',
      image: '/contentimages/review2mobile.webp',
      width: 120,
      height: 119,
    },
    {
      id: 7,
      name: 'Estaban H',
      stars: '★★★★★',
      date: 'Perfect Holster!',
      text: 'This VNSH holster is by far the most comfortable holster I have ever owned . It fits my S&W feather weight just right, perfect.',
      textClass: 'pl-2 mr-auto',
      image: '/contentimages/review1mobile.webp',
      width: 120,
      height: 300,
    },
  ];

  const firstColumn = reviews.slice(0, 3);
  const secondColumn = reviews.slice(3);

  return (
    <div className="mt-10 mb-12 px-1 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-3">
          {firstColumn.map(review => (
            <div
              key={review.id}
              className={`bg-white p-3 px-4 sm:px-3 flex flex-row-reverse gap-4 border-[1px] border-[#c4c1c1] ${review.id === 7 ? 'min-h-[195px]' : ''}`}
            >
              {review.image ? (
                <div className="flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s review`}
                    width={review.width}
                    height={review.height}
                    className="rounded"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-24 flex-shrink-0"></div>
              )}
              <div className="flex-1">
                <div className={`${review.textClass || ''}`}>
                  <div className="mb-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-bold text-lg">{review.name}</span>
                      <span className="text-[#ffd700] text-xl">{review.stars}</span>
                    </div>
                  </div>
                  <span className="font-bold text-black-600 text-[15px] mb-3 block">
                    {review.date}
                  </span>
                </div>
                <div
                  className={`text-[#555] text-sm block mt-2 leading-tight ${review.textClass || ''}`}
                >
                  {review.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {secondColumn.map(review => (
            <div
              key={review.id}
              className={`bg-white p-3 px-4 sm:px-3 flex flex-row-reverse gap-4 border-[1px] border-[#c4c1c1] ${review.id === 7 ? 'min-h-[195px]' : ''}`}
            >
              {review.image ? (
                <div className="flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s review`}
                    width={review.width}
                    height={review.height}
                    className="rounded"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-24 flex-shrink-0"></div>
              )}
              <div className="flex-1">
                <div className={`${review.textClass || ''}`}>
                  <div className="mb-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-bold text-lg">{review.name}</span>
                      <span className="text-[#ffd700] text-xl">{review.stars}</span>
                    </div>
                  </div>
                  <span className="font-bold text-black-600 text-[15px] mb-3 block">
                    {review.date}
                  </span>
                </div>
                <div
                  className={`text-[#555] text-sm block mt-2 leading-tight ${review.textClass || ''}`}
                >
                  {review.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
