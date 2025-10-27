import { useState } from "react";
import { dummyTrailers } from "../assets/assets";
// import ReactPlayer from "react-player"; // <-- Hata diya
import YouTube from 'react-youtube'; // <-- Nayi library import ki
import BlurCircle from "./BlurCircle";
import { PlayCircle } from "lucide-react";

function TrailerSection() {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  
  // Nayi library ko poora URL nahi, sirf videoId chahiye
  // e.g., "https://www.youtube.com/watch?v=WpW36ldAqnM" se "WpW36ldAqnM" nikal rahe hain
  let videoId = "";
  try {
    const urlParams = new URLSearchParams(new URL(currentTrailer.videoUrl).search);
    videoId = urlParams.get("v");
  } catch (e) {
    console.error("Error parsing video URL", currentTrailer.videoUrl, e);
  }

  // react-youtube player ke liye options
  const opts = {
    height: '540',
    width: '100%', // Yeh container ka 100% width lega
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // Autoplay band rakha hai
      controls: 1, // Controls dikhayega
    },
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* Player ke container par max-width aur margin lagaya hai,
        taaki player iske andar 100% width le sake.
      */}
      <div 
        className="relative mt-6" 
        style={{ maxWidth: '960px', margin: '0 auto' }}
      >
        <BlurCircle top="-100px" right="-100px" />
        
        {/* YouTube component ko render kar rahe hain */}
        {/* Check kar rahe hain ki videoId mili ya nahi */}
        {videoId ? (
          <YouTube 
            videoId={videoId} 
            opts={opts} 
            // Style de rahe hain taaki width 100% ho aur BlurCircle ke upar rahe
            style={{ width: '100%', position: 'relative', zIndex: 10 }}
          />
        ) : (
          <p>Error loading video.</p> // Agar URL galat ho toh fallback
        )}
      </div>
      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) =>(
          <div key={trailer.image} className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1
          duration-300 transition max-md:h-60 md:max-h-60 cursor-pointer" onClick={() => setCurrentTrailer(trailer)}>
            <img src={trailer.image} alt="trailer" className="rounded-lg w-full
            h-full object-cover brightness-75"/>
            <PlayCircle strokeWidth={1.6} className="absolute top-1/2 left-1/2
            w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"/>
          </div>
        ))}

      </div>
    </div>
  );
}

export default TrailerSection;