import { ArrowRight } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'PTG',
        description: "Using augmented reality to guide users through real-world procedural tasks.",
        image: '/projectPics/PTG_MeInteracting.png',
        tags: ['Unity', 'AR', 'Frontend', 'C#'],
    },
    {
        id: 2,
        title: 'Blindpots',
        description: "Using virtual reality to provide a low-cost screening for visual blindspots in stroke victims.",
        image: '/projectPics/Blindspots_Grid1.PNG',
        tags: ['Unity', 'VR', 'Frontend', 'C#'],
    },
    {
        id: 3,
        title: 'Medical Rendering',
        description: "A scientific study analyzing the effectivness of several rendering techniques for visual comprehension of medical scan data.",
        image: '/projectPics/Rendering_Teaser.png',
        tags: ['Unity', 'VR', 'Frontend', 'C#', 'Python'],
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text0muted-foreground mb-12 max-w-2xl mx-auto">
                    Take a look at some of my recent projects. 
                </p>

                {/* Grid of Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <h3 className="text-xl font-semibold mt-2 mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-0 p-3"> {project.description}</p>

                            {/* Project Tags */}
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-1">
                                    {project.tags.map((tag, key) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-secondar-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/brheault">
                        Check out my GitHub<ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    );
}