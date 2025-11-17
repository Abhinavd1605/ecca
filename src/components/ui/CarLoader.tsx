import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function CarLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center lg:justify-end lg:pr-32 xl:pr-40 bg-transparent">
      <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
        <DotLottieReact
          src="/models/carloader.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}

export default CarLoader;

