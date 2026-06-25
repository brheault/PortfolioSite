import {useEffect, useState} from "react"

export const StarBackground = () => {
    //Create the state objects for our stars and meteors
    const [stars, setStars] = useState([]);
    // const [meteors, setMeteors] = useState([]);

    //When the page is loaded, generate all the stars
    useEffect(() => {
        generateStars();
        // generateMeteors();

        const handleResize = () => {
            generateStars()
        };

        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const generateStars = () => {
        //Determine the number of stars by the size of the window.
        const numberofStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        //Create n stars, each with random size, location, opacity, and twinkling duration
        const newStars = [];
        for (let i  = 0; i < numberofStars; i++){
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    }

    /*
    const generateMeteors = () => {
        //Determine the number of stars by the size of the window.
        const numberofMeteors = 4;
        //Create n stars, each with random size, location, opacity, and twinkling duration
        const newMeteors = [];
        for (let i  = 0; i < numberofMeteors; i++){
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20, //Meteors should always start near the top of the screen
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeteors);
    }
        */

    //With all of our star data created, make a div for each one to render them
    return (
        // <div>
        //     Hello world
        // </div>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div 
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + '%',
                        top: star.y + '%',
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's',
                    }}
                />
            ))}
            {/*meteors.map((meteor) => (
                <div 
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 50 + 'px',
                        height: meteor.size + 'px',
                        left: meteor.x + '%',
                        top: meteor.y + '%',
                        delay: meteor.opacity,
                        animationDuration: meteor.animationDuration + 's',
                    }}
                />
            )) */}
        </div>
    );
}