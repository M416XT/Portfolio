import Link from 'next/link';

const awards = [
  {
    title: 'All India Rank 677 in JEE Advance',
    description: 'Secured a top rank in the Joint Entrance Examination Advanced conducted by IIT Bombay among 0.2 Million students.',
    imageUrl: "IIT_Madras_Logo.svg.png",
    caseStudyUrl: '#',
  },
  {
    title: "99.971 percentile in JEE Mains 2021",
    description: 'Achieved a top rank of AIR 405 with 99.971 among 1.4 Million students appeared for JEE MAINS 2021.',
    imageUrl: 'Jee_main.jpg',
    caseStudyUrl: '#',
  },
  {
    title: 'KVPY scholorship 2020',
    description: 'Selected for the prestigious KVPY scholorship securing All India Rank of 800 in examination conducted by IISC.',
    imageUrl: 'iisc.png',
    caseStudyUrl: '#',
  },
  

];

const Awards: React.FC = () => {
  return (
    <div id='awards' className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Awards</h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {awards.map((award) => (
            <div key={award.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={award.imageUrl} alt={award.title} style={{ objectFit: 'contain' }} />
              </div>
              <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                <div className="flex-1">
                  <div className="block mt-2">
                    <span className="text-xl font-semibold text-gray-300 flex flex-row ">
                      {award.title}

                      { award.caseStudyUrl !== '#' &&
                        <div className="text-[14px] ml-auto ">
                          <Link href={award.caseStudyUrl} target='_blank'>
                            View
                          </Link>
                        </div>
                      }
                    </span>
                    <p className="mt-3 text-base text-gray-300">{award.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
