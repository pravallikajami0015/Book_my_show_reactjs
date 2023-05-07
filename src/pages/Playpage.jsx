import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import PlayPoster from "../components/PlayPoster/PlayPoster";
import PlayFilter from "../components/PlayFilter/PlayFilter";
import "../css/Style.css";

const Playpage = () => {
  return (
    <>
      <div className="container mx-auto my-10 px-1 ">
        <div className="flex flex-row-reverse items-start 2xl:flex-row-reverse xl:flex-row-reverse lg:flex-row-reverse md:flex-row-reverse sm:flex-col-reverse play_poster">
          <h2 className="text-2xl font-bold mb-1 my-2 ">Plays In Ahemdabad</h2>
          <div className="flex flex-wrap gap-3 items-center">
            <div className="w-60 2xl:w-60 xl:w-6o lg:w-52 md:w-52 sm:w-52 play_image">
              <PlayPoster
                isplay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-60 2xl:w-60 xl:w-6o lg:w-52 md:w-52 sm:w-52 play_image">
              <PlayPoster
                isplay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-60 2xl:w-60 xl:w-6o lg:w-52 md:w-52 sm:w-52 play_image">
              <PlayPoster
                isplay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-60 2xl:w-60 xl:w-6o lg:w-52 md:w-52 sm:w-52 play_image">
              <PlayPoster
                isplay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sunburn-arena-ft-dj-snake-delhi-ncr-0-2022-8-19-t-11-31-17.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-60 2xl:w-60 xl:w-6o lg:w-52 md:w-52 sm:w-52 play_image">
              <PlayPoster
                isplay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
            <div className="w-60 2xl:w-60 xl:w-6o lg:w-52 md:w-52 sm:w-52 play_image">
              <PlayPoster
                isplay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-100 border rounded-md p-2 w-3/12 2xl:w-3/12 xl:w-3/12 lg:w-3/12 md:w-2/4 sm:w-2/4 my-3 px-2">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilter
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilter
              title="Language"
              tags={["Hindi", "English", "Gujrati"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout(Playpage);
