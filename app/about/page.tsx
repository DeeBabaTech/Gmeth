export default function About() {
  return (
    <div id='projects' className='md:px-20 px-5 md:pt-10 text-primary text-xl'>
      <div className='sticky top-0 z-30 pt-5 bg-white w-full'>
        <div className='relative text-secondary text-3xl font-bold before:absolute before:h-0.5 before:w-20 before:bg-secondary before:-top-2 mb-3'>
          About Gmeth
        </div>
        <p>
          G-METH is an indigenous engineering firm registered with the corporate
          affairs commission and has successfully completed projects for a
          number of her clients. At G-METH, our commitment is to execute
          projects with highest quality on schedule and within budget while
          adhering to excellent standard practices. <br /> <br />
          Our wealth of experience is our edge when it comes to how we design,
          execute and manage projects effectively.
        </p>

        <h3 className='text-2xl text-secondary font-semibold mt-5 mb-3'>
          Mission
        </h3>
        <p>
          Our interest lies in the delivery of cutting edge offerings that drive
          the best customer experience. No matter how big the project, small the
          request, we strive for timeliness in our response. As a true team, we
          work together to routinely please our customer and drive our
          organization to greater heights
        </p>

        <h3 className='text-2xl text-secondary font-semibold mt-5 mb-3'>
          Vision
        </h3>
        <p>
          To Be A Top-Notch Electrical, Mechanical and Communication Engineering
          Service Company.
        </p>

        <h3 className='text-2xl text-secondary font-semibold mt-5 mb-3'>
          Core Values
        </h3>
        <ul className='list-disc list-inside'>
          <li>Integrity</li>
          <li>Professionalism</li>
          <li>Knowledgeable</li>
          <li>Customer focus</li>
        </ul>
      </div>
    </div>
  );
}
