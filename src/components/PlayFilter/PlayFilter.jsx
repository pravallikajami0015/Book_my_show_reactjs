import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const PlayFilter = ({ title, tags }) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center gap-3 my-2">
              {open ? <BiChevronUp /> : <BiChevronDown />}
              <span className={open ? "text-red-500" : "text-gray-800"}>
                {title}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="px-2 my-1">
              <div className="flex items-center gap-2 flex-wrap">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="border-2 bg-gray-100 text-red-500 p-1 rounded px-3"
                  >
                    <span className="text-sm">{tag}</span>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default PlayFilter;
