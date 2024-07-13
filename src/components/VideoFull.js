// import { useEffect, useRef } from "react";
// import VideoPlayer from "./VideoPlayer";
// const VideoFull = () => {
//   const playerRef = useRef(null);
//   const videoLink = async () => {
//     const data = await fetch(
//       "https://api.pexels.com/videos/popular?per_page=1",
//       {
//         Authorization:
//           "N8h8A6K2EapRtI87iPs4WNLnSKnz6QEKUwrXucqJMPW1p9ce3o3P4In8",
//       }
//     );
//     const json = data.json();
//     console.log(json);
//   };
//   useEffect(() => {
//     videoLink();
//   }, []);

//   const VideoPlayerOptions = {
//     autoplay: true,
//     controls: true,
//     responsive: true,
//     fluid: true,
//     sources: [
//       {
//         src: {"/path/to/video.mp4"},
//         type: "video/mp4",
//       },
//     ],
//   };

//   const handlePlayerReady = (player) => {
//     playerRef.current = player;

//     // You can handle player events here, for example:
//     player.on("waiting", () => {
//       VideoPlayer.log("player is waiting");
//     });

//     player.on("dispose", () => {
//       VideoPlayer.log("player will dispose");
//     });
//   };
//   return (
//     <>
//       <div className="text-white">Rest of app here</div>
//       <VideoPlayer options={VideoPlayerOptions} onReady={handlePlayerReady} />
//       <div>Rest of app here</div>
//     </>
//   );
// };
// export default VideoFull;
