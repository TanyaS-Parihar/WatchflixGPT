import { Cloudinary } from "@cloudinary/url-gen";
// import { AdvancedImage } from "@cloudinary/react";
// import { fill } from "@cloudinary/url-gen/actions/resize";

export const cld = new Cloudinary({
  cloud: {
    cloudName: "dyvkxkecp",
  },
});

// const myImage = cld.image("docs/modelss");
// myImage.resize(fill().height(60));

// return( <div className="absolute z-[10] -left-5 py-3 pt-6  bg-gradient-to-b w-screen from-black ">
//   <AdvancedImage cldImg={myImage} />
// </div>)
