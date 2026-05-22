//  {/* Other Similar Projects Section */}
//         <div className="mt-12 border-t border-border pt-8">
//           <h2 className="text-2xl font-bold text-foreground mb-8">
//             Other Similar Projects
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projectsData
//               .filter((p) => p.tier === project.tier && !p.isMainProject && p.id !== projectId)
//               .slice(0, 6)
//               .map((similarProject) => (
//                 <Link
//                   key={similarProject.id}
//                   href={`/projects/${similarProject.id}`}
//                   className="group"
//                 >
//                   <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                     {/* Image */}
//                     <div className="relative aspect-video overflow-hidden bg-muted">
//                       <img
//                         src={similarProject.image || '/placeholder.svg'}
//                         alt={similarProject.title}
//                         className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>

//                     {/* Content */}
//                     <div className="p-4">
//                       <h3 className="font-semibold text-foreground text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
//                         {similarProject.companyName}
//                       </h3> */}
//                     <p className="text-sm text-muted-foreground line-clamp-2">
//                         {similarProject.description}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div>