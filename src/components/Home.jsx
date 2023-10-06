import React from "react";
import { BiSolidBell } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlayCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <main className="flex flex-row py-2 px-5 gap-8 min-h-screen capitalize rounded-xl bg-gray-300 text-black">
      <section className="my-2 ">
        <p className="font-semibold text-lg">Home</p>
        <article className="rounded-lg px-4 py-2 border border-black">
          <p className="text-4xl font-semibold uppercase">
            Listen to trending songs all the time
          </p>
          <div className="bg-slate-950 rounded-2xl px-4 py-2 w-32 cursor-pointer text-white border border-black hover:shadow-2xl">
            Explore now
          </div>
          <img></img>
        </article>
        <br />
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold">Playlist</h3>
          <p className="hover:underline font-semibold cursor-pointer">
            See More
          </p>
        </div>

        <br />

        <div className="flex flex-row justify-between">
          <div className="bg-slate-100 rounded-lg px-4 py-2 border border-black">
            <img />
            <div className="bg-black rounded-3xl text-white py-2 px-2">
              <p className="text-sm">I told them</p>
              <p className="text-xs">Burna boy </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg px-4 py-2 border border-black">
            <img />
            <div className="bg-black rounded-3xl text-white py-2 px-2">
              <p className="text-sm">Timeless</p>
              <p className="text-xs">Davido </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg px-4 py-2 border border-black">
            <img />
            <div className="bg-black rounded-3xl text-white py-2 px-2">
              <p className="text-sm">Love, damini</p>
              <p className="text-xs">Burna boy </p>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg px-4 py-2 border border-black">
            <img />
            <div className="bg-black rounded-3xl text-white py-2 px-2">
              <p className="text-sm">Work of Art</p>
              <p className="text-xs">Asake </p>
            </div>
          </div>
        </div>

        <br />

        <div className="flex flex-col gap-3">
          <div className="flex flex-row justify-between">
            <div>
              <img />
              <div>
                <p className="font-semibold">one and only</p>
                <p className="text-sm">Adele</p>
              </div>
            </div>
            <BsPlayCircleFill />
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <img />
              <div>
                <p className="font-semibold">can't feel my face</p>
                <p className="text-sm">The Weeknd</p>
              </div>
            </div>
            <BsPlayCircleFill />
          </div>

          </div>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-row gap-3">
          <BiSolidBell />
          <div className="flex flex-row gap-1 rounded-lg shadow-2xl bg-gray-300 text-black ">
            <BiSearchAlt2 /> Search
          </div>
        </div>
        <div>
          <p>Top Tracks </p>
          <article>
            <div className="flex flex-row">
              <img />
              <div>
                <p>one and only</p>
                <p>Adele</p>
              </div>
              <BiDotsVerticalRounded />
            </div>
            <div className="flex flex-row">
              <img />
              <div>
                <p>legend</p>
                <p>drake</p>
              </div>
              <BiDotsVerticalRounded />
            </div>
            <div className="flex flex-row">
              <img />
              <div>
                <p> can't feel my face</p>
                <p>the weeknd</p>
              </div>
              <BiDotsVerticalRounded />
            </div>
          </article>
          <p className="hover:underline cursor-pointer">See More</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
