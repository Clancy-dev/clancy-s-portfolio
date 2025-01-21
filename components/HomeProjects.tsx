import { fetchProject } from '@/actions/Project';
import Image from 'next/image';

interface HomeProject {
  link: string;
  id: string;
  title: string;
  image: string;
  description: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

interface HomeProjectsCardProps {
  category: HomeProject;
}

// ********************************
//  The Container of Category Card *********
// ********************************
export default async function HomeProjects() {
  // Ensure categories is never undefined by providing a fallback value
  const projects = (await fetchProject()) || [];
  console.log(projects)

  return (
    // <section className="py-12 bg-green-50">
    //   <div className="w-full p-4">
    //     <h2 className="text-3xl font-bold mb-8 text-center text-green-800 logo-font">
    //       Shop by Categories
    //     </h2>
    //     <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 logo-font">
    //       {categories.length > 0 ? (
    //         categories.map((category) => (
    //           <HomeProjectsCard key={category.id} category={category} />
    //         ))
    //       ) : (
    //         <p className="text-gray-500 text-center col-span-full">No categories available.</p>
    //       )}
    //     </div>
    //   </div>
    // </section>
  );
}

// ********************************
//  The Actual Category Card *********
// ********************************
function HomeProjectsCard({ category }: HomeProjectsCardProps) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden transition-opacity duration-500 opacity-100 p-2 bg-white">
      <div className="w-full flex items-center justify-center h-[47vh] rounded-[50%] border-[2px] border-green-300 p-2 bg-green">
        <Image
          src={category.image || '/placeholder.svg'}
          alt={category.title}
          width={200}
          height={200}
          className="w-full h-full object-cover rounded-[50%]"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center text-green-900">{category.title}</h3>
      </div>
    </div>
  );
}
