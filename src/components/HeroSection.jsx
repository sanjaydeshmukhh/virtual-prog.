import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"


const HeroSection = () => {
  return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-tight">
              VirtualVR build tools <br />
              <span className="bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-700 text-transparent bg-clip-text">
                  for developers
              </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
              Empower your creativity and bring your VR app ideas to life with
              our intuitive development tools. Get started today and turn your
              imagination into immersive reality!
          </p>
          <div className="flex justify-center my-10">
              <a
                  href="#"
                  className="bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-700 py-3 px-4 mx-3 rounded-md"
              >
                Start for Free
              </a>
              <a href="#" className="py-3 px-4 rounded-md border">Documentation</a>
          </div>
          <div className="video_box flex flex-col sm:flex-row mt-10 justify-center items-center " >
            <video autoPlay loop muted className="rounded-lg w-3/4 border sm:w-1/2 border-lime-400 shadow-teal-400 mx-2 my-4" >
                <source src={video1} type="video/mp4" />
                your browser does not support this video tag
            </video>
            <video autoPlay loop muted className="rounded-lg w-3/4 sm:w-1/2 border border-lime-400 shadow-teal-400 mx-2 my-4" >
                <source src={video2} type="video/mp4" />
                your browser does not support this video tag
            </video>
          </div>
      </div>
  );
}

export default HeroSection