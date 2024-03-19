import React from 'react';
import Image from 'next/image';
const Section1: React.FC = () => {
    return (
      <div className='flex absolute top-80px sm:top-20px sm: w-full h-full overflow-hidden'>
        <div className="absolute block animate-backAnime5 bg-layer-5 bg-center bg-no-repeat bg-transparent w-marge h-full left-[-45px] "></div>
        <div className="absolute block animate-backAnime4 bg-layer-4 bg-top bg-no-repeat bg-transparent w-marge h-full left-[-15px] "></div>
        <div className="absolute block animate-backAnime3 bg-layer-3 bg-bottom bg-no-repeat bg-transparent w-marge h-full left-[-30px]"></div>
        <div className="absolute block bg-layer-2 bg-center bg-no-repeat bg-transparent w-screen h-full left-[-5px] "></div>
        <div className='absolute top-24 m-auto left-0 right-0 h-auto w-64 bg-gray-800 rounded-lg border border-gray-700'>
          <div className="flex flex-col items-center">
            <Image className="w-28 h-28 mb-3 mt-5 rounded-full shadow-lg" src="/photo/luffy.png" alt="Alan image" width={320} height={100} />
            <h5 className="mb-1 text-xl font-medium text-white">Alan JORDY</h5>
            <span className="text-sm text-gray-400">FullStack developer Js</span>
            <span className="text-sm text-white p-8">Website - Work in progress</span>
          </div>
        </div>
        <div className="absolute block animate-backAnime1 bg-layer-1 bg-center bg-repeat-y bg-transparent w-screen h-full left-[-5px] "></div>
        

      </div>
    );
};

export default Section1;