import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            Welcome to Job Junction, your ultimate destination for navigating
            the world of opportunities and career advancement. At Job Junction,
            we believe that every individual's journey is unique, and we're here
            to guide you through every twist and turn along your professional
            path.
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          <b>Our Mission:</b> <br />
          Our mission is to bridge the gap between job seekers and employers by
          providing a comprehensive platform that simplifies the job search
          process. We are dedicated to empowering individuals to find their
          dream careers while assisting companies in discovering exceptional
          talent. <br/>
          <b> What we Offer:</b> <br />
          At Job Junction, we offer a user-friendly and intuitive interface that
          enables job seekers to explore a wide range of job listings across
          various industries. Our platform is designed to streamline your job
          search, allowing you to discover opportunities that align with your
          skills, passions, and aspirations. For employers, we provide a
          powerful recruitment platform that enables you to connect with
          top-notch candidates who are ready to contribute to your
          organization's success. <br/>
          <b>Why Choose Job Junction: </b> <br /><b>Diverse Opportunities:</b>{" "}
          With an extensive and constantly updated database of job listings,
          you'll have access to a plethora of opportunities tailored to your
          preferences. <br/> <b>Simplicity and Efficiency:</b> Our user-centric
          design ensures that you can easily navigate and interact with our
          platform, making your job search experience efficient and hassle-free.
          <br/> <b>Quality Matches:</b> For employers, we strive to provide you with
          a curated selection of candidates who are the right fit for your
          organization's culture and requirements. <br/>
          <b>Our Commitment:</b> <br/>
          At Job Junction, we are committed to fostering a community of growth,
          collaboration, and success. Whether you're a recent graduate taking
          your first steps into the workforce or a seasoned professional seeking
          new horizons, we're here to support you every step of the way. Join us
          on this exciting voyage as we connect talent with opportunity, and
          together, we'll redefine what it means to advance in your career.
          Thank you for choosing Job Junction as your partner in career
          exploration and achievement. Your journey starts here.
        </p>
      </div>
    </div>
  );
};

export default About;
