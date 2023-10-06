import React from 'react'
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineArtTrack } from "react-icons/md";
import { MdAudiotrack } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { SiApplemusic } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="flex flex-col font-semibold">
      <section className="gap-6 flex-col flex">
        <div>
          <img src={""} alt="image" />
          <div>
            <p>Hi</p>
            <article className="text-2xl">Adetunji Joel</article>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-2xl tracking-wider'>Menu</p>
          <ul className='flex flex-col gap-3'>
            <li className='flex flex-row gap-2 hover:bg-gray-700 rounded-xl cursor-pointer px-1 pt-1'>
              <p>
                <BiSolidHomeAlt2 />
              </p>
              Explore
            </li>
            <li className='flex flex-row gap-2 hover:bg-gray-700 rounded-xl cursor-pointer px-1 pt-1'> <p>
                <MdOutlineArtTrack />
              </p>Album</li>
            <li className='flex flex-row gap-2 hover:bg-gray-700 rounded-xl cursor-pointer px-1 pt-1'> <p>
                <BsPersonFill />
              </p>Artists</li>
          </ul>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-2xl tracking-wider'>Library</p>
          <ul className='flex flex-col gap-3 '>
            <li className='flex flex-row gap-2 hover:bg-gray-700 rounded-xl cursor-pointer px-1 pt-1'> <p>
                <AiFillHeart/>
              </p>Liked</li>
            <li className='flex flex-row gap-2 hover:bg-gray-700 rounded-xl cursor-pointer px-1 pt-1'> <p>
                <MdAudiotrack/>
              </p>Popular Songs</li>
            <li className='flex flex-row gap-2 hover:bg-gray-700 rounded-xl cursor-pointer px-1 pt-1'> <p>
                <SiApplemusic/>
              </p>My Music</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
