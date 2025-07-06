import Work from '../app/work_experience';

export default function Card({ experiences }: { experiences: Work[] }) {

    return(
    <section className="py-12 max-w-4xl mx-auto px-4">
      <div className="space-y-12">
        {experiences.map((exp: Work, index: number) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start"
          >
            {index % 2 === 0 ? ( //left side
              <>
                <div className="w-full md:w-1/2 p-4 hover:bg-green-700 rounded-lg border-gray-400 transition duration-300 ">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-200">{exp.date}</p>
                    <ul className='list-disc list-outside mt-2 text-sm text-gray-300 pl-4'>
                      {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                      ))}
                        {exp.link && <li><a href={exp.link} className="underline hover:text-gray-400">Repository on Github</a></li>}
                    </ul>

                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </>
            ) : (//right side
              <>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="w-full md:w-1/2 p-4 text-left md:text-right hover:bg-green-700 rounded-lg border-gray-400 transition duration-300 ">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-200">{exp.date}</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 text-right">
                    {exp.bullets.map((b, i) => (
                        <li className="text-right" key={i}>{b}</li>
                    ))}
                        {exp.link && <li><a href={exp.link} className="underline hover:text-gray-400">
                            <span>{exp.linkText}</span>
                        </a></li>}

                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
    );
}
   