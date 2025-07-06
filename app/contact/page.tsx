import thumbsup from '../../public/thumbsup.gif';
import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>
      <p>Email: <a href="mailto:ryanshanz10@gmail.com" className="text-green-500 underline">ryanshanz10@gmail.com</a></p>
      <p>Github: <a href="https://github.com/ryanshanz" className="text-green-500 underline">ryanshanz</a></p>
      <p>Linkedin: <a href="https://www.linkedin.com/in/ryan-shanz-03856a2b5/" className="text-green-500 underline">Ryan Shanz</a></p>
      <span className="flex items-center justify-center pt-4">
              <Image src={thumbsup} alt="Thumbs Up!" className='w-120 h-80' />
      </span>
      <span className='flex items-center justify-center'>
                            <p className="font-medium text-lg pt-4">Thanks for reaching out!</p>

      </span>

    </div>
  );
}
