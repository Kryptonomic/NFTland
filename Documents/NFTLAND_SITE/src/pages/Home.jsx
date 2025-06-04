import React from "react";
import banner from "../assets/banner/9377734f-2e11-4a27-a50c-f24e80319d8b.png";
import logo from "../assets/logo/Untitled (Website) (6).png";
import doge from "../assets/avatars/doge (2).png";
import moonpie from "../assets/avatars/moonpie.png";
import ansem from "../assets/avatars/ansem.png";
import gake from "../assets/avatars/gake.png";
import alon from "../assets/avatars/Alon.png";
import pepe from "../assets/avatars/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg";

export const Home = () => (
  <div className="min-h-screen text-white bg-gradient-to-b from-black via-purple-900 to-blue-900">
    <header className="w-full p-4 flex justify-between items-center">
      <img src={logo} alt="NFTLAND Logo" className="h-12" />
      <h1 className="text-2xl font-bold tracking-wide">NFTLAND</h1>
    </header>

    <img src={banner} alt="NFTLAND Banner" className="w-full object-cover max-h-96" />

    <section className="p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {[doge, moonpie, ansem, gake, alon, pepe].map((img, idx) => (
        <div key={idx} className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
          <img src={img} alt={`Avatar ${idx + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </section>
  </div>
);
