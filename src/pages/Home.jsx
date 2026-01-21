// Core React imports and state management
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Custom components for homepage sections
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import TimelineSection from '../components/core/HomePage/TimelineSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';

// Common components used across the application
import Footer from '../components/common/Footer';
import ReviewSlider from '../components/common/ReviewSlider';
import Course_Slider from '../components/core/Catalog/Course_Slider';

// API service for course data fetching
import { getAllCourses } from '../services/operations/courseDetailsAPI';

// Icon library imports
import {  FaBookOpen } from "react-icons/fa";

// Animation library and motion variants
import { motion } from 'framer-motion';
import { fadeIn } from './../components/common/motionFrameVarients';

// Image optimization component and styles
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

// Background image assets for random hero backgrounds
import backgroundImg1 from '../assets/Images/random bg img/BG1.jpg';
import backgroundImg2 from '../assets/Images/random bg img/BG2.jpg';
import backgroundImg3 from '../assets/Images/random bg img/BG3.jpg';
import backgroundImg4 from '../assets/Images/random bg img/BG4.jpg';
import backgroundImg5 from '../assets/Images/random bg img/BG5.jpg';
import backgroundImg6 from '../assets/Images/random bg img/BG6.jpg';
import backgroundImg7 from '../assets/Images/random bg img/BG7.jpg';
import backgroundImg8 from '../assets/Images/random bg img/BG8.jpg';
import backgroundImg9 from '../assets/Images/random bg img/BG9.jpg';
import backgroundImg10 from '../assets/Images/random bg img/BG10.jpg';
import backgroundImg111 from '../assets/Images/random bg img/BG11.jpg';

// Array of background images for random hero section display
const randomImges = [
    backgroundImg1, backgroundImg2, backgroundImg3, backgroundImg4, backgroundImg5,
    backgroundImg6, backgroundImg7, backgroundImg8, backgroundImg9, backgroundImg10, backgroundImg111,
];

const Home = () => {
    // State for randomly selected background image
    const [backgroundImg, setBackgroundImg] = useState(null);
    // State for storing all available courses from API
    const [allCourses, setAllCourses] = useState(null);
    const dispatch = useDispatch();

    // Set random background image on component mount
    useEffect(() => {
        const bg = randomImges[Math.floor(Math.random() * randomImges.length)];
        setBackgroundImg(bg);
    }, []);

    // Fetch all courses data on component mount
    useEffect(() => {
        const fetchAllCourses = async () => {
            try {
                const result = await getAllCourses();
                setAllCourses(result);
            } catch (error) {
                console.log("Error fetching all courses:", error);
                setAllCourses([]);
            }
        };
        fetchAllCourses();
    }, []);

    return (
        <React.Fragment>
            {/* Full-screen background image with overlay effects */}
            <div>
                <div className="w-full h-screen absolute top-0 left-0 opacity-[0.3] overflow-hidden object-cover ">
                    <LazyLoadImage src={backgroundImg} alt="Background" className="w-full h-full object-cover" effect="opacity" />
                    <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
                </div>
            </div>

            {/* Main hero section with animated content */}
            <div className='relative h-screen justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white mb-0'>
                <motion.div
                    variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='text-center text-3xl lg:text-4xl font-semibold mt-7'
                >
                    Boost Your Career Prospects with
                    <HighlightText text={"Coding Expertise"} />
                </motion.div>
                <motion.div
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className=' mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300'
                >
                    Our online coding programs let you take control of your learning—study whenever and wherever suits you best. You'll gain access to a rich toolkit of resources, from interactive projects and engaging quizzes to tailored guidance from expert instructors.
                </motion.div>
            </div>

            {/* Code demonstration section with interactive examples */}
            <div className='min-h-screen flex items-center justify-center py-8'>
                <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
                    {/* First code block showcasing HTML/Web development */}
                    <div>
                        <CodeBlocks
                            position={"lg:flex-row"}
                            heading={
                                <div className='text-3xl lg:text-4xl font-semibold'>
                                    Ignite your
                                    <HighlightText text={" programming journey "} />
                                    our expert-led courses
                                </div>
                            }
                            subheading={
                                "Our courses are crafted and led by seasoned professionals with deep coding expertise and a genuine passion for teaching. They bring real-world experience to every lesson, helping you gain practical skills and insider insights that truly make a difference."
                            }
                            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                            codeColor={"text-white"}
                            backgroundGradient={"code-block1-grad"}
                        />
                    </div>
                    {/* Second code block showcasing React/JavaScript development */}
                    <div>
                        <CodeBlocks
                            position={"lg:flex-row-reverse"}
                            heading={
                                <div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">
                                    No waiting,
                                    <HighlightText text={" just coding"} />
                                </div>
                            }
                            subheading={
                                "Dive right in—our interactive platform gets you coding from day one. You'll be writing real code in a practical, hands-on environment designed to build confidence and skill."
                            }
                            ctabtn1={{
                                btnText: "Continue Lesson",
                                link: "/signup",
                                active: true,
                            }}
                            ctabtn2={{
                                btnText: "Learn More",
                                link: "/signup",
                                active: false,
                            }}
                            codeColor={"text-white"}
                            codeblock={`import React from "react";\nimport { FaHome, FaUser, FaCode } from "react-icons/fa";\nconst Navbar = () => {\n  return (\n    <nav>\n      <ul> <li><FaHome />Home</li><li><FaUser/>About</li><li><FaCode />Projects</li></ul>\n    </nav>);};\nexport default Navbar;`}
                            backgroundGradient={"code-block2-grad"}
                        />
                    </div>

                    {/* Course catalog section with dynamic content loading */}
                    <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
                        <div className='mx-auto w-11/12 max-w-maxContent py-12'>
                            <motion.div
                                variants={fadeIn('up', 0.1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.1 }}
                                className='text-center mb-8'
                            >
                                <h2 className='text-4xl lg:text-5xl font-bold text-white mb-4'>
                                    Explore Our <HighlightText text={"Learning Paths"} />
                                </h2>
                                <p className='text-richblack-300 text-lg max-w-2xl mx-auto'>
                                    Discover curated learning journeys designed to take you from beginner to expert in your chosen field
                                </p>
                            </motion.div>
                            {/* Conditional rendering based on course data availability */}
                            {allCourses ? (
                                <Course_Slider Courses={allCourses} />
                            ) : (
                                <div className="text-white text-center py-8">
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                        <span>Loading courses...</span>
                                    </div>
                                    <p className="text-sm text-richblack-300 mt-2">
                                        Fetching all available courses...
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Call-to-action button for complete course catalog */}
                        <div className='w-11/12 max-w-maxContent mx-auto flex justify-center py-8'>
                            <CTAButton active={true} linkto={"/all-courses"}>
                                <div className='flex items-center gap-3 text-base font-semibold px-2 py-1'>
                                    <FaBookOpen className="text-base" />
                                    Explore Full Catalog
                                </div>
                            </CTAButton>
                        </div>

                        {/* Additional content exploration section */}
                        <div className='w-11/12 max-w-maxContent mx-auto'>
                            <ExploreMore />
                        </div>
                    </div>
                </div>
            </div>

            {/* Light background sections for enhanced content readability */}
            <div className='bg-richblack-5'>
                {/* Educational timeline section showcasing learning progression */}
                <div className='text-richblack-700 py-14'>
                    <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-center'>
                        <div className='w-full mb-16'>
                            <TimelineSection />
                        </div>
                    </div>
                </div>
                {/* Combined instructor showcase and student review sections */}
                <div className='min-h-screen flex flex-col justify-start text-richblack-700 pt-4 pb-8'>
                    <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center gap-8'>
                        <div className='w-full'>
                            <InstructorSection />
                        </div>
                        <div className='w-full'>
                            <ReviewSlider />
                        </div>
                    </div>
                </div>
            </div>

            {/* Global footer component */}
            <Footer />
        </React.Fragment>
    );
};
export default Home;
