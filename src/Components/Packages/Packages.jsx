import React, { useEffect, useState } from "react";
import Package from "./Package";
import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import {TiArrowLeftOutline} from "@react-icons/all-files/ti/TiArrowLeftOutline";
import {TiArrowRightOutline} from "@react-icons/all-files/ti/TiArrowRightOutline";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("https://trip-to-trip-server.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className="my-12 bg-slate-300 p-4 mx-4">
      <div className="flex justify-center gap-6 items-center text-slate-900 text-3xl">
        <TiArrowLeftOutline></TiArrowLeftOutline>
        <h1 className="text-center font-bold">Our Tour Packages</h1>
        <TiArrowRightOutline></TiArrowRightOutline>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-12">
        {packages.map((pack) => (
          <Package
            key={pack.id}
            pack={pack}
          ></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
