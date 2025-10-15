import Image from 'next/image';
import React from 'react';

// image
import newsletterBg from '../../../../public/Section/NewsLetter.png';
import SectionHeading from '../../../../components/Dynamic/SectionHeading';

const NewsLetter = () => {
    return (
        <div className=''>
            <div className='w-[95%] lg:w-[1100px] xl:w-[1200px] 2xl:w-[1700px] mx-auto py-10'>
                <div className='relative p-10 w-[100%] md:w-[90%] lg:w-[80%]  mx-auto rounded-2xl overflow-hidden'>
                    {/* bg image */}
                    <div className='absolute top-0 left-0 w-full h-full z-0'>
                        <Image src={newsletterBg}
                                alt="newsletter-bg" 
                                width={1920} 
                                height={1080} 
                                className="w-full h-full object-cover brightness-50" />
                    </div>
                    {/* bg image */}


                    {/* Start text */}
                     <div className='relative z-10'>
                        <SectionHeading
                            badge="Subscribe"
                            badgeColor="#E53E3E"
                            badgeTextColor="white"
                            title="Where Your Vision Finds Its Residence"
                            h2Textcolor="white"
                            description="Mivar offers more than just a place to live"
                            descriptionClolor="#E3E4E4"
                          />

                          <div>
                            <form className='w-full  md:w-[60%] mx-auto mt-8 flex flex-col sm:flex-row justify-center gap-2 md:gap-0'>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className='w-full bg-white sm:w-auto flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500'
                                />
                                <button 
                                    type="submit"
                                    className='bg-[#FA6741] hover:bg-[#FA6741]/60 hover:border border-[#FA6741] cursor-pointer text-white font-semibold py-3 px-6 rounded-full '
                                >
                                    Subscribe
                                </button>
                            </form>
                          </div>
                     </div>
                    {/* End   text */}
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;