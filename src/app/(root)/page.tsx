import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { BsBuildingCheck } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <section className="max-w-7xl px-4 md:px-6 lg:px-8 mx-auto ">
          <div className=" flex flex-col md:flex-row items-center gap-8 md:gap-0 py-4 md:py-12">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl py-4 font-bold  "> <span  >Discover Your Perfect <br />Gateway Destination</span></h1>
              <p> unparalleled luxury and comfort hotel at the worlds <br /> most exclusive hotels.start you journey now</p>
                <div className=" py-2 my-4  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white  dark:bg-[#5C5C5C] rounded-md shadow-lg ">
                  <div>
                    <div className="flex items-center gap-1">
                      <FaLocationDot />
                      <span>Destination</span>
                    </div>
                  <input type="text" className="border-none p-2 w-full focus:outline-none" placeholder="destination" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <FaBuildingCircleCheck />
                      <span>Check in</span>
                    </div>
                      <input type="text" className="border-none p-2 w-full focus:outline-none" placeholder="destination" />
                    </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <BsBuildingCheck />
                      <span>check out</span>
                    </div>
                      <input type="text" className="border-none p-2 w-full focus:outline-none" placeholder="destination" />
                    </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <FaPeopleGroup />
                      <span>Guests</span>
                    </div>
                      <input type="text" className="border-none p-2 w-full focus:outline-none" placeholder="destination" />
                  </div>
                  <div className="flex items-center ">
                    <button className="flex items-center gap-1 px-4 py-2 rpunded- transition-colors btn-gradient-contrast btn-gradient-contrast:hover relative">
                      <FaSearch />Search
                    </button>
                  </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <Image
              src="/assets/khalefa.png"
                alt="Khalefa"
                width={500}
                height={500}
              />
            </div>
          </div>
      </section>
    </>
  );
}
