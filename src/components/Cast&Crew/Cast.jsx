import React from "react";

const Cast = ({ Image, castName, role }) => {
  const image_data = `https://image.tmdb.org/t/p/original${Image}`;
  return (
    <>
      <div className="flex flex-col gap-1 items-center ">
        <div className="w-32 h-32 md:w-32 sm:w-28 cast_poster">
          <img
            src={
              Image
                ? image_data
                : "https://cdn4.vectorstock.com/i/1000x1000/46/73/person-gray-photo-placeholder-man-material-design-vector-23804673.jpg"
            }
            alt="cast_image"
            className="object-center object-cover rounded-full w-full h-full"
          />
        </div>
        <h3 className="text-black text-md">{castName}</h3>
        <h3 className="text-gray-600 text-sm">as {role}</h3>
      </div>
    </>
  );
};

export default Cast;
