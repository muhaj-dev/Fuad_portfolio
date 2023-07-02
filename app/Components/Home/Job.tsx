"use client";

import React, { useRef, useContext } from "react";
import { ButtonContext } from "@/Hooks/BtnContext";
import Image from "next/image";
import fire from "../../../public/img/fire.svg";
import vahalla from "../../../public/img/vahalla.svg";
import listo from "../../../public/img/listo.svg";
import bibox from "../../../public/img/bibox.svg";
import think from "../../../public/img/think.svg";
import inge from "../../../public/img/inge.svg";
import food from "../../../public/img/food.svg";
import Ecommerce from "../../../public/img/Ecommerce.svg";
import AiLearning from "../../../public/img/AiLearning.svg";
import car from "../../../public/img/car.svg";
import product from "../../../public/img/product.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, useScroll } from "framer-motion";

export const Job = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  
  const contextValue = useContext(ButtonContext);

  if (!contextValue) {
    // Handle the case where contextValue is undefined
    return null;
  }

  const { veiwAs } = contextValue;

  return (
    <div className="my-4">
      <div className="flex gap-2">
        <Image
          src={fire}
          className=" "
          alt="lang"
          width={25}
          height={25}
          priority
        />
        <p className="text-[#068C95] text-[24px] font-[600]">Job Experience</p>
      </div>

     { veiwAs ? <div>
        <ul ref={ref} className="hidden tablet_l:flex">
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className="py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">june 1</p>
              </div>
              <Image
                src={vahalla}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">888valhalla</p>
                  <p className="text-t_blue text-[12px] font-[500]">
                    community manager
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className=" py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">March 12</p>
              </div>
              <Image
                src={listo}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">Listoxio</p>
                  <p className="text-t_blue text-[10px] font-[500]">
                    community manager
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className="py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">2022</p>
              </div>
              <Image
                src={bibox}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">Bibox Exchange</p>
                  <p className="text-t_blue text-[10px] font-[500]">
                    moderator
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className="py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">2022</p>
              </div>
              <Image
                src={think}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">Thinkin.xyz</p>
                  <p className="text-t_blue text-[10px] font-[500]">
                    Ambassador
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className="py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">2022</p>
              </div>
              <Image
                src={inge}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">Invigorate DAO</p>
                  <p className="text-t_blue text-[10px] font-[500]">
                    moderator
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
        </ul>
        <div className="tablet_l:hidden w-full mt-5 flex flex-col gap-4 ">
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={vahalla}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[18px] font-[500]">888valhalla</p>
                <p className="text-t_blue text-[14px] font-[500]">
                  community manager
                </p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={listo}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[18px] font-[500]">888valhalla</p>
                <p className="text-t_blue text-[14px] font-[500]">
                  community manager
                </p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={bibox}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[18px] font-[500]">888valhalla</p>
                <p className="text-t_blue text-[14px] font-[500]">
                  community manager
                </p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={think}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[18px] font-[500]">888valhalla</p>
                <p className="text-t_blue text-[14px] font-[500]">
                  community manager
                </p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={inge}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[18px] font-[500]">888valhalla</p>
                <p className="text-t_blue text-[14px] font-[500]">
                  community manager
                </p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
        </div>
      </div>
      :
      <div>
        <ul ref={ref} className="hidden tablet_l:flex">
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className="py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">june</p>
              </div>
              <Image
                src={food}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">
                    Food & reservation app
                  </p>
                  <p className="text-t_blue text-[10px] font-[500]">
                    Forrest Jump
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className=" py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">on-going</p>
              </div>
              <Image
                src={Ecommerce}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">E-commerce website</p>
                  <p className="text-t_blue text-[10px] font-[500]">Personal</p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className="py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">May</p>
              </div>
              <Image
                src={AiLearning}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">Ai Learning</p>
                  <p className="text-t_blue text-[10px] font-[500]">
                    School Project
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className="py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">March</p>
              </div>
              <Image
                src={car}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">Car hiring App</p>
                  <p className="text-t_blue text-[10px] font-[500]">
                    Fun project
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
          <li>
            <div className="basis-fit">
              <div className="flex justify-between items-center">
                <p className="py-1.5 pl-2 pr-[1.45rem] text-[12px] font-[500] rounded-tr-[35px] bg-blue">
                  Recent
                </p>
                <p className=" text-[12px] font-[500]">Feb</p>
              </div>
              <Image
                src={product}
                className=" "
                alt="lang"
                width={130}
                height={65}
                priority
              />
              <div className="flex items-center">
                <div className="mt-2">
                  <p className="text-[10px] font-[500]">Product Page</p>
                  <p className="text-t_blue text-[10px] font-[500]">
                    Fun project
                  </p>
                </div>
                <AiOutlineArrowRight className="text-light_blue mt-auto ml-auto w-[20px] h-[15px] font-bold" />
              </div>
            </div>
          </li>
        </ul>

        <div className="tablet_l:hidden w-full mt-5 flex flex-col gap-4 ">
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={food}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[16px] font-[500]"> Forrest Jump</p>
                <p className="text-t_blue text-[14px] font-[500]">
                Food & reservation app
                </p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={Ecommerce}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[16px] font-[500]">Spaac.com</p>
                <p className="text-t_blue text-[14px] font-[500]">E-commerce</p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={AiLearning}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[16px] font-[500]">Ai Learning</p>
                <p className="text-t_blue text-[14px] font-[500]">
                  School project
                </p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={car}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[16px] font-[500]">Car hiring App</p>
                <p className="text-t_blue text-[14px] font-[500]">
                  Fun project
                </p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
          <div className="flex">
            <div className="h-[5rem] overflow-y-hidden rounded-[0.625rem]">
              <Image
                src={product}
                className="relative -top-12"
                alt="lang"
                width={200}
                height={200}
                priority
              />
            </div>
            <div className="flex w-[65%] items-center">
              <div className="ml-2">
                <p className="text-[16px] font-[500]">Product Page</p>
                <p className="text-t_blue text-[14px] font-[500]">Fun Page</p>
              </div>
              <AiOutlineArrowRight className="text-light_blue ml-auto w-[35px] h-[25px] font-bold" />
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};
