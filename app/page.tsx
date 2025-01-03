"use client";

import Image from "next/image";
import { useState } from "react";
import { ThreeDCard } from "@/components/card";
import PulsatingButton from "@/components/ui/pulsating-button";
import NumberTicker from "@/components/ui/number-ticker";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import projects from "@/components/json/projects.json";
import { Divider } from "@mui/material";
import Link from "next/link";

const projectTypes = ["All", "Designs", "Electrical", "Mechanical"];

export default function Home() {
  const [projectType, setProjectType] = useState("All");

  const handleChange = (type: string) => {
    setProjectType(type);
  };

  return (
    <div className='w-full text-white'>
      {/* About section */}
      <div
        id='about'
        className='bg-secondary md:p-20 md:pt-48 text-primary md:text-xl'>
        <div className='bg-white md:flex justify-between gap-10 md:p-20 px-5 pt-7'>
          <Image
            width='1000'
            height='1000'
            src='/assets/eng1.png'
            alt=''
            className='md:-mt-44 md:w-[150%] h-80 md:h-full'
          />
          <div className='relative'>
            <div className='md:absolute md:-mt-36 my-5 md:text-white md:text-4xl text-3xl font-bold before:absolute before:h-0.5 before:w-20 before:bg-white/40 before:-top-3'>
              About Gmeth
            </div>
            <div className='md:-mt-16'>
              <span className='font-semibold'>G-METH</span> is an indigenous
              engineering firm registered with the corporate affairs commission
              and has successfully completed projects for a number of her
              clients.
              <br /> <br />
              At <span className='font-semibold'>G-METH</span>, our commitment
              is to execute projects with highest quality on schedule and within
              budget while adhering to excellent standard practices.
              <br /> <br />
              Our wealth of experience is our edge when it comes to how we
              design, execute and manage projects effectively.
            </div>
            <Link href='/about'>
              <PulsatingButton
                pulseColor='#6b1d50'
                className='bg-secondary px-6 py-2 my-10 rounded-md'>
                Learn More
              </PulsatingButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id='services' className='bg-slate-300 md:p-20 p-5 text-primary'>
        <div className='relative text-3xl font-bold before:absolute before:h-0.5 before:w-20 before:bg-secondary before:-top-2'>
          Services
        </div>
        <div className='flex flex-col md:flex-row flex-wrap justify-between md:gap-1 gap-3 mt-5'>
          <ThreeDCard
            image='/assets/service-three.svg'
            title='STRUCTURAL DESIGN'
            body='We ensure that our clients get best solution tailor-made for their specific purpose.'
          />
          <ThreeDCard
            image='/assets/service-one.svg'
            title='MECHANICAL SERVICE'
            body='We ensure that our clients get best solution tailor-made for their specific purpose.'
          />
          <ThreeDCard
            image='/assets/service-two.svg'
            title='ELECTRICAL SERVICE'
            body='We ensure that our clients get best solution tailor-made for their specific purpose.'
          />
        </div>
      </div>

      {/* Status */}
      <div className='py-5 bg-secondary md:px-20 px-5 flex flex-wrap justify-between items-center text-white gap-y-5'>
        <div className='md:text-xl text-lg md:w-1/4 w-full text-center md:text-start'>
          Doing the right things, <br />{" "}
          <span className='text-slate-400'>at the right time</span>
        </div>
        <div className='flex items-center gap-2 text-sm'>
          <NumberTicker value={20} className='font-bold text-4xl' />
          <p>
            Specified <br /> employees
          </p>
        </div>
        <div className='flex items-center gap-2 text-sm'>
          <NumberTicker value={100} className='font-bold text-4xl' />
          <p>
            Completed <br /> Projects
          </p>
        </div>
        <div className='flex items-center gap-2 text-sm'>
          <NumberTicker value={100} className='font-bold text-4xl' />
          <p>
            Standard <br /> Clients
          </p>
        </div>
      </div>

      {/* Projects */}
      <div id='projects' className='md:px-20 px-5 md:py-10 text-primary'>
        <div className='sticky top-0 z-30 pt-10 bg-white w-full'>
          <div className='relative text-3xl font-bold before:absolute before:h-0.5 before:w-20 before:bg-secondary before:-top-2'>
            Projects
          </div>
          <div className='flex items-center gap-7 mt-3 pb-5'>
            {projectTypes.map((type, index) => {
              return (
                <p
                  key={index}
                  onClick={() => handleChange(type)}
                  className={`cursor-pointer ${
                    projectType === type &&
                    "text-secondary font-semibold relative before:absolute before:h-1 before:w-full before:bg-secondary before:-bottom-0.5"
                  }`}>
                  {type}
                </p>
              );
            })}
          </div>
        </div>
        <div className='flex flex-wrap justify-start items-center text-slate-100 gap-y-5 gap-[2%]'>
          {projects.map((project, index) => {
            return (
              <DirectionAwareHover
                imageUrl={project.images}
                key={index}
                className='w-[32%] h-60'>
                <h1 className='font-semibold mb-1'> {project.title} </h1>
                <p> {project.text} </p>
              </DirectionAwareHover>
            );
          })}
        </div>
      </div>

      <Divider />

      
      
    </div>
  );
}
