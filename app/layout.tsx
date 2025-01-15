import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import DrawerNav from "@/components/ui/drawer";
import BoxReveal from "@/components/ui/box-reveal";
import PulsatingButton from "@/components/ui/pulsating-button";
import Image from "next/image";
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
import { Button, Divider } from "@mui/material";
import TextField from "@/components/text-field";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gmeth",
  description: "Engineering Company",
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased text-white`}>
        {/* Nav */}
        <div
          id='home'
          className='bg-secondary flex items-center justify-between px-5'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              width='1000'
              height='1000'
              alt='Gmeth logo'
              className='md:w-32 w-24'
              priority
            />
          </Link>
          <div className='w-2/5 hidden md:flex justify-around items-center'>
            <a href='/'>Home</a>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact Us</a>
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
              We offer our clients the best construction services
            </div>
            <Link href='#contact'>
              <PulsatingButton
                pulseColor='#6b1d50'
                className='text-secondary text-lg md:text-base md:px-6 px-3 md:py-2 py-1 bg-slate-100 w-fit mx-auto rounded-md'>
                Contact Us
              </PulsatingButton>
            </Link>
          </div>
        </div>

        {children}

        {/* Contact Information */}
        <div id='contact' className='md:flex gap-10 md:p-20 py-10'>
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
            <Button className='bg-secondary text-white px-5'>
              Send Message
            </Button>
          </form>
        </div>

        {/* Footer */}
        <div className='bg-secondary md:px-20 px-5 md:pt-10'>
          <a href='#home'>
            <Image
              src='/logo.svg'
              width='1000'
              height='1000'
              alt='Gmeth logo'
              className='w-32 mx-auto'
            />
          </a>

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
            <Copyright /> 2025 Gmeth Engineering
          </div>
        </div>
      </body>
    </html>
  );
}
