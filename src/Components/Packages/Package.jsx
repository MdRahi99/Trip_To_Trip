import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleFill } from "@react-icons/all-files/ri/RiArrowRightCircleFill";

const Package = ({ pack }) => {
  const { id, title, ratings, views, img } = pack;

  return (
    <Link
      to={`/packages/${id}`}
      className="p-4 hover:outline hover:outline-2 hover:outline-slate-900 bg-white text-slate-900 mx-4 my-2"
    >
      <div className="p-0 m-0">
        <img className="h-60 w-full mb-6" src={img} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex gap-2">
            <p className="text-sm">
              Ratings: <span className="font-bold">{ratings}</span>
            </p>
            <p className="text-sm">
              Views: <span className="font-bold">{views}</span>
            </p>
          </div>
        </div>
        <button className="text-3xl animate-pulse">
          <Link to={`/packages/${id}`}>
            <RiArrowRightCircleFill></RiArrowRightCircleFill>
          </Link>
        </button>
      </div>
    </Link>
  );
};

export default Package;
