import disneyLogo from "../assets/images/disney.png";
import marvelLogo from "../assets/images/marvel.png";
import nationalGLogo from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwars from "../assets/images/starwars.png";
import disneyVideo from "../assets/videos/disney.mp4";
import marvelVideo from "../assets/videos/marvel.mp4";
import nationalGeoVideo from "../assets/videos/national-geographic.mp4";
import pixarVideo from "../assets/videos/pixar.mp4";
import starwarsVideo from "../assets/videos/star-wars.mp4";

function Categories() {
  const ListCategories = [
    { id: 1, logo: disneyLogo, video: disneyVideo },
    { id: 2, logo: marvelLogo, video: marvelVideo },
    { id: 3, logo: nationalGLogo, video: nationalGeoVideo },
    { id: 4, logo: pixar, video: pixarVideo },
    { id: 5, logo: starwars, video: starwarsVideo },
  ];

  return (
    <>
      <div className="flex items-center gap-5 px-5 md:px-16 p-2 overflow-hidden relative">
        {ListCategories.map((item) => (
          <div
            key={item.id}
            className="bg-transparent border-2 border-gray-200 rounded-md cursor-pointer hover:scale-110 transition-all shadow-xl shadow-black"
          >
            <video
              muted
              loop
              autoPlay
              playsInline
              src={item.video}
              className="w-full h-full absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
            ></video>
            <img
              src={item.logo}
              alt="logo categories"
              className="w-full z-[1]"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Categories;
