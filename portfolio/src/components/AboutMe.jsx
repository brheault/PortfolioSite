import { Code, Lectern, Microscope } from "lucide-react";

export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/******** Left Column **********/}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Developer, Researcher, and Teacher </h3>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt diam eget sodales eleifend.
                            Vestibulum pulvinar laoreet lobortis. Praesent commodo odio sit amet accumsan sollicitudin. Nullam 
                            cursus purus at eleifend eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis varius turpis sed porta. Suspendisse potenti.
                            Maecenas ut sollicitudin mi. Aenean convallis ex nec congue condimentum. Maecenas interdum pharetra risus sit amet hendrerit.
                            Etiam tellus nibh, mollis quis nulla id, viverra porttitor tellus. Cras et euismod massa, ac mollis eros.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/******** Right Column **********/}
                    <div className="grid grid-cols-1 gap-6">
                        
                        {/**** Coding Tile ****/}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> AI Development </h4>
                                    <p>
                                        Etiam vestibulum tincidunt libero, at posuere nulla facilisis et. In hac habitasse platea dictumst.
                                        Maecenas pulvinar consectetur ante quis viverra. Sed vehicula aliquet magna in venenatis. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/**** Research Tile ****/}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Microscope className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> VR/AR Research </h4>
                                    <p>
                                        Etiam vestibulum tincidunt libero, at posuere nulla facilisis et. In hac habitasse platea dictumst.
                                        Maecenas pulvinar consectetur ante quis viverra. Sed vehicula aliquet magna in venenatis. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/**** Teaching Tile ****/}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Lectern className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Databases and Machine Learning </h4>
                                    <p>
                                        Etiam vestibulum tincidunt libero, at posuere nulla facilisis et. In hac habitasse platea dictumst.
                                        Maecenas pulvinar consectetur ante quis viverra. Sed vehicula aliquet magna in venenatis. 
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}