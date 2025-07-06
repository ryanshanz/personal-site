import ryan from '../public/ryan.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 ">About Me</h1>
      <div className="flex justify-center">      
        <p>
        Hi there! My name is Ryan Shanz. I am a graduate of the University of Maine,
        where I received my degree in Computer Science. I am currently searching for jobs
        in the field of software development. I am passionate about technology and love 
        to learn new things. I am committed to continuous learning and growth in my career, 
        and am always trying to improve my skillset. I would love to connect and discuss 
        how my experience and skills can contribute to your team. Thank you for visiting my site!
      </p>
        <Image src={ryan} alt="Ryan Shanz" className="w-48 h-48 ml-8 rounded-full" />
       </div>

    </div>
  );
}
