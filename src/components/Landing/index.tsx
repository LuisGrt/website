import {Container} from 'react-bootstrap';
import {FaChevronRight} from 'react-icons/fa';
import Typed from 'react-typed';

import styles from './Landing.module.scss';
import Particles from 'react-tsparticles';

const Landing = () => {
    return (
        <section id='home'>
            <div className={`${styles.landing} p-5 mb-4 bg-light`}>
                <Container fluid className='py-5'>
                    <h1 className="display-3">Software Developer</h1>
                    <div className={styles.movingText}>
                        <span>
							<FaChevronRight/>{' '}
						</span>
                        <Typed
                            strings={[
                                "^1500 Hello there! ^500 What can I do for you?^1500",
                                "I do front-end development",
                                "I do mobile apps",
                                "I do back-end development",
                                "I do SEO",
                                "I speak HTML5",
                                "I speak CSS3",
                                "I speak Sass",
                                "I speak JavaScript/ES6",
                                "I speak TypeScript",
                                "I speak EJS",
                                "I speak JSX",
                                "I speak Flutter",
                                "I speak SQL",
                                "I speak NoSQL"
                            ]}
                            typeSpeed={55}
                            loop={true}
                            backDelay={1800}
                            backSpeed={30}
                            cursorChar={'_'}
                            smartBackspace={true}
                        />
                    </div>
                </Container>
                <Particles
                    id="tsparticles"
                    className={styles.particlesJS}
                    options={{
                        background: {
                            color: {
                                value: "#0d47a1",
                            },
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 5,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </section>
    );
};

export default Landing;
