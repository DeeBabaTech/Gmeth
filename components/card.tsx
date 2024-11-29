"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCard({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border  '>
        <CardItem className='w-full'>
          <Image
            src={image}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-t-xl group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        <div className='p-6 bg-secondary rounded-b-xl text-white text-center'>
          <CardItem
            translateZ='20'
            className='text-xl font-bold  dark:text-white'>
            {title}
          </CardItem>
          <CardItem
            as='p'
            translateZ='20'
            className='text-sm max-w-sm mt-2 dark:text-neutral-300'>
            {body}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
