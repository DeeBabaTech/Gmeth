"use client";

import Image from "next/image";
import { useState } from "react";
import { ThreeDCard } from "@/components/card";
import PulsatingButton from "@/components/ui/pulsating-button";
import NumberTicker from "@/components/ui/number-ticker";
import BoxReveal from "@/components/ui/box-reveal";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import projects from "@/components/json/projects.json";
import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import TextField from "@/components/text-field";
import { Button, Divider } from "@mui/material";
import DrawerNav from "@/components/ui/drawer";

const projectTypes = ["All", "Designs", "Electrical", "Mechanical"];

export default function Home() {
  const [projectType, setProjectType] = useState("All");

  const handleChange = (type: string) => {
    setProjectType(type);
  };

  return (
    <div className='w-full text-white'>
      {/* Nav */}
      <div className='bg-secondary flex items-center justify-between px-5'>
        <Image
          src='/logo.svg'
          width='1000'
          height='1000'
          alt='Gmeth logo'
          className='md:w-32 w-24'
          priority
        />
        <div className='w-3/5 hidden md:flex justify-around items-center'>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Projects</p>
          <p>Testimonials</p>
          <p>Contact Us</p>
        </div>
        <DrawerNav />
      </div>

      {/* Hero section */}
      <div className='w-full relative bg-secondary'>
        <Image
          src='/assets/img1.png'
          height='1000'
          width='1000'
          alt='hero'
          className='w-full h-[60vh] md:h-[80vh] opacity-65'
        />
        <div className='md:w-2/5 w-3/4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <BoxReveal boxColor={"#6b1d50"} duration={0.5}>
            <div className='md:text-6xl text-center text-3xl font-bold md:leading-[4rem]'>
              You Think it, We Build it
            </div>
          </BoxReveal>
          <div className='md:mt-5 mt-4 md:mb-10 mb-7 text-lg'>
            We offer our clients the best constuction service
          </div>
          <PulsatingButton
            pulseColor='#6b1d50'
            className='text-secondary text-lg md:text-base md:px-6 px-3 md:py-2 py-1 bg-slate-100 w-fit mx-auto rounded-md'>
            Contact Us
          </PulsatingButton>
        </div>
      </div>

      {/* About section */}
      <div className='bg-secondary md:p-20 md:pt-48 text-primary md:text-xl'>
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
            <PulsatingButton
              pulseColor='#6b1d50'
              className='bg-secondary px-6 py-2 my-10 rounded-md'>
              Learn More
            </PulsatingButton>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className='bg-slate-300 md:p-20 p-5 text-primary'>
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
      <div className='md:px-20 px-5 md:py-10 text-primary'>
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

      {/* Contact Information */}
      <div className='md:flex gap-10 md:p-20 py-10'>
        <div className='md:w-2/5 p-10 py-7 bg-secondary md:rounded-md'>
          <h1 className='text-xl font-semibold mb-1'>Contact Information</h1>
          <p className='text-slate-300'>Say something to start a live chat</p>
          <div className='flex items-center gap-3 my-3'>
            <PhoneCall size={19} />
            <div>
              <p>+2348072610767</p>
              <p>+2347060558733</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Mail size={20} />
            <div>
              <p>gmethproject@gmail.com</p>
              <p>moses.agboola@gmail.com</p>
            </div>
          </div>
          <div className='flex items-center gap-3 my-3'>
            <MapPin size={20} />
            <p>88/9 Ondo Street Ebute Meta, Lagos Nigeria.</p>
          </div>
        </div>

        {/* form */}
        <form className='md:w-1/2 p-5'>
          <TextField
            id='fname'
            type='text'
            name='fname'
            placeholder='First Name'
            // value={fname}
            // errorText={
            //   error && fname.length === 0 && "Please enter your first name"
            // }
            // error={error && fname.length === 0}
            // handleChange={handleChange}
          />
          <TextField
            id='lname'
            type='text'
            name='lname'
            placeholder='Last Name'
          />{" "}
          <br />
          <TextField
            id='Email'
            type='email'
            name='Email'
            placeholder='Email Address'
          />
          <TextField
            id='Phone'
            type='phone'
            name='Phone'
            placeholder='Phone Number'
          />
          <TextField
            id='Message'
            type='text'
            name='Message'
            placeholder='Message'
            multiline={true}
            rows={5}
            width='98%'
          />
          <Button className='bg-secondary text-white px-5'>Send Message</Button>
        </form>
      </div>

      {/* Footer */}
      <div className='bg-secondary md:px-20 px-5 md:pt-10'>
        <Image
          src='/logo.svg'
          width='1000'
          height='1000'
          alt='Gmeth logo'
          className='w-32 mx-auto'
        />

        <Divider className='bg-white md:my-5 mb-3' />

        <div className='flex flex-wrap gap-y-5 md:justify-between justify-start'>
          <div className=' bg-secondary rounded-md'>
            <h1 className='text-xl font-semibold mb-1'>Reach us</h1>
            <div className='flex items-center gap-3 my-3'>
              <PhoneCall size={19} />
              <div>
                <p>+2348072610767</p>
                <p>+2347060558733</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Mail size={20} />
              <div>
                <p>gmethproject@gmail.com</p>
                <p>moses.agboola@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-3 my-3'>
              <MapPin size={20} />
              <p>88/9 Ondo Street Ebute Meta, Lagos Nigeria.</p>
            </div>
          </div>

          <div className='bg-secondary rounded-md w-1/2 md:w-fit'>
            <h1 className='text-xl font-semibold mb-1'>Company</h1>
            <div className='flex flex-col gap-3 my-3'>
              <p>About</p>
              <p>Contact</p>
              <p>Projects</p>
            </div>
          </div>

          <div className='bg-secondary rounded-md md:w-fit w-1/2'>
            <h1 className='text-xl font-semibold mb-1'>Services</h1>
            <div className='flex flex-col gap-3 my-3'>
              <p>Mechanical</p>
              <p>Electrical</p>
              <p>Communications</p>
              <p>Structural Design</p>
              <p>Civil</p>
            </div>
          </div>

          <div className='bg-secondary rounded-md'>
            <h1 className='text-xl font-semibold mb-1'>Social Handles</h1>
            <div className='flex gap-3 my-3'>
              <Twitter />
              <Linkedin />
              <Instagram />
              <Facebook />
              <Mail />
            </div>
          </div>
        </div>
        <div className='flex gap-1 justify-center md:py-5 py-10'>
          <Copyright /> 2024 Gmeth Engineering
        </div>
      </div>
    </div>
  );
}
