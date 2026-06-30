import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Intro } from "../components/Intro";
import { NavBar } from "../components/NavBar";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <Intro />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </main>

        {/* Footer */}
    </div>;
};