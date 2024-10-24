const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div
        className="hero min-h-screen rounded-3xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/nLrT9Xv/DALL-E-2024-10-22-13-14-42-A-vibrant-banner-image-for-a-recipe-based-web-application-called-Chefs-Ta.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-80  rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className=" flex flex-col justify-center items-center">
            <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="mb-5 md:w-[60%]">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
            </p>
            <div className="flex items-center gap-2">
            <a href="#main"><button className="btn bg-[#0BE58A] rounded-full border-none">Explore Now</button></a>
            <button className="btn bg-transparent rounded-full text-white hover:bg-transparent hover:border-2">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
