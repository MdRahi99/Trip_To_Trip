import React from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const PackageDetails = () => {
  const packageDetails = useLoaderData();
  const { title, img, description, ratings, views, price } = packageDetails;

  return (
    <div className="my-12 mx-4">
      <h1 className="text-2xl text-center bg-slate-900 p-3 text-white font-semibold mb-6">
        {title}
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-3">
        <div className="w-full lg:w-3/4 flex flex-col gap-5">
          <div className="bg-slate-300 p-4">
            <p className="text-justify text-xl text-slate-900 bg-white p-4">
              {description}
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-between w-full items-center gap-4 text-white text-center text-md lg:text-xl">
            <p className="bg-slate-900 p-2 w-1/4">
              Ratings: <span className="font-bold">{ratings}</span>
            </p>
            <p className="bg-slate-900 p-2 w-2/4">
              Price: <span className="font-bold text-xl">{price}</span>
            </p>
            <p className="bg-slate-900 p-2 w-1/4">
              Views: <span className="font-bold">{views}</span>
            </p>
          </div>
        </div>
        <div>
          <img className="lg:h-80 h-full" src={img} alt="" />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          className="bg-slate-900 hover:bg-slate-700 px-6 py-2 text-white"
          to="/"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default PackageDetails;
