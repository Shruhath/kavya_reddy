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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Kavya Reddy</h1>
          <p className="text-xl md:text-2xl">Exquisite Bridal Collection</p>
        </div>
      </div>
    </section>
  )
}

