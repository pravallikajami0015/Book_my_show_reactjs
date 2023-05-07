import React from "react";

const Crew = ({ image, crewName, job }) => {
  const image_data = `https://image.tmdb.org/t/p/original${image}`;
  return (
    <>
      <div className="flex flex-col gap-1 items-center">
        <div className="w-32 h-32 md:w-32 sm:w-28 crew_poster">
          <img
            src={
              image
                ? image_data
                : "https://cdn4.vectorstock.com/i/1000x1000/46/73/person-gray-photo-placeholder-man-material-design-vector-23804673.jpg"
            }
            alt="cast_image"
            className="object-center object-cover rounded-full w-full h-full"
          />
        </div>
        <h3 className="text-black text-md">{crewName}</h3>
        <h3 className="text-gray-600 text-sm text-center">as {job}</h3>
      </div>
    </>
  );
};

export default Crew;
