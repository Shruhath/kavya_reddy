export default function Hero() {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
         {/* Replace the src with your photo's URL */}
         <img
            src="/only_kr.png"
            alt="Hero Center Photo"
            className="w-full max-w-md md:max-w-lg object-contain"
          />
          {/* <p className="text-sm md:text-base mt-4 font-serif">DEBUT : Season Beginnings</p> */}
        </div>
      </div>
    </section>
  )
}

