import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Resume = () => {
    return (
        <>
            <section id="home" className="relative bg-gradient-to-br from-[#05001e] via-[#1a0d67] to-[#3716ac] text-white px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 overflow-hidden">
                {/* Top Left Tagline */}
                <div className="absolute top-6 left-8 flex items-start gap-2 z-20">
                    <div className="w-1 h-6 bg-green-400 mt-1"></div>
                    <div className="uppercase text-xs font-semibold tracking-widest leading-tight">
                        IT Specialist <br /> and Data <br /> Visualization
                    </div>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between mt-10">
                    {/* Main Text */}
                    <div className="z-10 ">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center leading-tight">
                            Stephen <br /> Awili <br /> Mugenya
                        </h1>
                        <div className="flex gap-4 flex-wrap mb-6">
                            <span className="bg-white text-black px-4 py-2 rounded-full">Nairobi</span>
                            <span className="bg-white text-black px-4 py-2 rounded-full">Kenya</span>
                            <span className="bg-white text-black px-4 py-2 rounded-full">awilisteve076@gmail.com</span>
                        </div>
                        <p className="text-lg max-w-xl text-center leading-relaxed">
                            Turning tech headaches into smooth systems | Visualizing data for smarter decisions | Automating the boring stuff
                        </p>
                        <div className="flex justify-center md:justify-start">
                        {/* Button with animation */}
                        <motion.a
                            href="/assets/Stephen Awili Resume.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 inline-flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-400 transition-colors"
                        >
                            <Download size={20} /> Download Resume
                            </motion.a>
                        </div>
                    </div>

                    {/* Image + CTA */}
                    <div className="relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-end">
                        <div className="relative w-[300px] h-[400px] bg-[#271e75] rounded-bl-[100px] overflow-hidden shadow-lg rotate-3">
                            {/* Replace with your actual image path */}
                            <img
                                src="/your-image.jpg"
                                alt="Stephen Awili Mugenya"
                                className="absolute inset-0 w-full max-w-full h-full object-cover"
                            />

                            {/* CTA Button */}
                            <div className="absolute bottom-0 w-full bg-green-500 text-black text-lg font-semibold py-4 text-center cursor-pointer hover:bg-green-600 transition duration-300">
                                Tell me more →
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional animated element */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-green-400 opacity-20 rounded-full animate-pulse blur-3xl"></div>
            </section>

            <section id="about" className="bg-gradient-to-r from-green-100 to-blue-200 px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src="/assets/stephen.jpg"
                            alt="Career Summary Visual"
                            className="w-full max-w-full object-cover"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-serif font-semibold mb-4 relative">
                            Career Summary
                            <span className="block w-40 h-1 bg-green-500 mt-1 rounded-full"></span>
                        </h2>
                        <p className="text-sm leading-relaxed text-center text-gray-800">
                            Detail-oriented IT professional with hands-on experience in Python-based data visualization, system
                            networking, cybersecurity, and software development. Skilled in using Python libraries such as
                            Matplotlib, Seaborn, and Pandas to create clear, insightful visual reports that support data-driven
                            decision-making. Proven ability to manage databases (SQL, MySQL), troubleshoot complex technical
                            issues, and optimize system performance. Experienced in web development (HTML, JavaScript),
                            network security, and technical support. Adept at translating complex data into actionable insights,
                            collaborating with cross-functional teams, and improving IT operations through analytical thinking
                            and effective communication. Eager to contribute to innovative IT solutions and enhance business
                            intelligence through data visualization.
                        </p>
                    </div>

                </div>
            </section>


            <section id="background" className="bg-gradient-to-r from-green-100 via-blue-100 to-blue-300 px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20 text-black">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-10">Background</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Education */}
                        <div>
                            <h3 className="text-lg font-bold tracking-wider uppercase mb-2">Education</h3>
                            <p className="mb-4">
                                <strong>Bachelor in Information Technology (BA)</strong><br />
                                Machakos University<br />
                                <span className="text-gray-700">2020 – 2024</span>
                            </p>
                            <p>
                                <strong>CISCO Cybersecurity Badge</strong><br />
                                CISCO Networking Academy (Online)<br />
                                <a
                                    href="https://www.credly.com/go/mTT7k-aRfNrkLuXdhZZpbCg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    View Certificate
                                </a>
                            </p>
                        </div>

                        {/* Work Experience */}
                        <div>
                            <h3 className="text-lg font-bold tracking-wider uppercase mb-2">Work</h3>
                            <p className="mb-4">
                                <strong>IT Technician & Support</strong><br />
                                Taylor Movers<br />
                                <span className="text-gray-700">Jan 2025 – Present</span>
                            </p>
                            <p>
                                <strong>IT Assistant (Intern)</strong><br />
                                VisionOne Industries LTD<br />
                                <span className="text-gray-700">May 2023 – Aug 2023</span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section id="skills" className="bg-gradient-to-r from-green-100 to-blue-200 p-10 rounded-lg shadow-md px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
                <h2 className="text-3xl font-bold mb-8">SKILLS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Programming & Scripting */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">💻 PROGRAMMING & SCRIPTING</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>PYTHON, C, C++</li>
                            <li>BASH SCRIPTING</li>
                            <li>ZOHO DELUGE SCRIPTING</li>
                        </ul>
                    </div>

                    {/* Data & Visualization */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">🧠 DATA & VISUALIZATION</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>GOOGLE SHEETS DASHBOARDS (KPIs, OPERATIONS, QA)</li>
                            <li>DATA AUTOMATION AND REPORTING</li>
                            <li>SQL, MYSQL</li>
                            <li>PYTHON LIBRARIES (PANDAS, MATPLOTLIB, SEABORN)</li>
                        </ul>
                    </div>

                    {/* Web & App Development */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">🌐 WEB & APP DEVELOPMENT</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>HTML, CSS, JAVASCRIPT, NEXT.JS</li>
                            <li>ZOHO CREATOR (CUSTOM BUSINESS APPS)</li>
                            <li>GOOGLE APPS SCRIPT (AUTOMATION IN SHEETS)</li>
                        </ul>
                    </div>

                    {/* IT Support & Security */}
                    <div>
                        <h3 className="text-xl font-bold mb-2">🔐 IT SUPPORT & SECURITY</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>WINDOWS OS SETUP & TROUBLESHOOTING</li>
                            <li>NETWORK SETUP AND DIAGNOSTICS</li>
                            <li>SYSTEM HEALTH CHECKS & OPTIMIZATION</li>
                            <li>CISCO CYBERSECURITY ESSENTIALS CERTIFIED</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section id="experience" className="bg-gradient-to-r from-green-100 to-blue-200 text-black px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-serif font-semibold mb-10 relative w-fit">
                        <span className="relative z-10">My Professional Experience</span>
                        <span className="absolute left-0 bottom-1 w-full h-5 bg-green-300 rounded-full transform -skew-x-12 -z-10"></span>
                    </h2>

                    {/* Job 1 */}
                    <div className="mb-10">
                        <h3 className="text-xl md:text-2xl font-bold">
                            IT Technician &amp; Support – <span className="italic">Taylor Movers</span>
                        </h3>
                        <p className="text-sm text-gray-800 mb-2">Jan 2025 – Present | Nairobi, Kenya</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Built and maintained real-time dashboards for sales, operations, and QA.</li>
                            <li>Developed a custom business app in Zoho Creator for task management and approvals.</li>
                            <li>Provided daily IT support for hardware, software, and networking issues.</li>
                            <li>Created a podcast series to support employee training and onboarding.</li>
                            <li>Automated repetitive tasks with scripting tools to save time and reduce errors.</li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold">
                            IT Technician (Intern) – <span className="italic">VisionOne Industries LTD</span>
                        </h3>
                        <p className="text-sm text-gray-800 mb-2">May – Aug 2023 | Nairobi, Kenya</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Conducted system health checks, reducing downtime by 50%.</li>
                            <li>Assisted in network setup and cybersecurity updates, improving network reliability.</li>
                            <li>Provided hands-on IT support, helping reduce issue resolution time by 35%.</li>
                            <li>Supported users in resolving system, software, and connectivity problems.</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section id="projects" className="bg-gradient-to-r from-green-100 to-blue-200 text-black px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10">Projects Section</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {/* Project 1 */}
                        <div>
                            <img
                                src="/assets/download data.png"
                                alt="Business Operations Dashboard"
                                className="w-full max-w-full h-48 object-cover border border-black mb-4"
                            />
                            <h3 className="uppercase font-bold tracking-wide mb-2">
                                Business Operations Dashboard – Taylor Movers
                            </h3>
                            <p className="text-sm mb-2 text-center">
                                Designed and managed Google Sheets dashboards to monitor performance in sales, operations,
                                and quality assurance. Enabled real-time tracking and decision-making through automated data
                                visualization and reporting.
                            </p>
                            <p className="text-sm text-gray-800 font-medium">Tools: Google Sheets, Google Apps Script</p>
                        </div>

                        {/* Project 2 */}
                        <div>
                            <img
                                src="/assets/downloaddata2.jpeg"
                                alt="Zoho Workflow Automation"
                                className="w-full max-w-full h-48 object-cover border border-black mb-4"
                            />
                            <h3 className="uppercase font-bold tracking-wide mb-2">
                                Zoho Workflow Automation – Taylor Movers
                            </h3>
                            <p className="text-sm mb-2 text-center">
                                Developed a fully customized Zoho Creator application to digitize and automate internal company
                                workflows. This significantly reduced manual processes and improved accuracy across departments.
                            </p>
                            <p className="text-sm text-gray-800 font-medium">Tools: Zoho Creator, Deluge, Zoho Workflows</p>
                        </div>
                    </div>
                </div>
            </section>


            <footer id="contact" className="bg-gradient-to-r from-black via-indigo-900 to-blue-900 text-white px-8 py-16">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

                    {/* Left Side */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">CONNECT WITH ME</h2>
                        <hr className="border-t border-gray-400 w-24" />

                        <div className="space-y-2">
                            <p className="font-semibold text-xl">Stephen Awili Mugenya</p>
                            <p>awilisteve076@gmail.com</p>
                            <p>+254705360439</p>
                            <p><a href="https://SteveCodeK.github.io" target="_blank" rel="noopener noreferrer" className="underline">www.SteveCodeK.github.io</a></p>
                            <p>Find my resume <a href="/assets/Stephen Awili Resume.pdf" className="underline font-semibold">here</a></p>
                        </div>

                        <div>
                            <p className="font-semibold mb-2">CONNECT WITH ME</p>
                            <div className="flex space-x-4 text-2xl">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white p-6 rounded-xl w-full sm:max-w-xl md:w-1/2 md:w-1/2 space-y-4 shadow-md">
                        <div>
                            <label className="block text-black font-semibold mb-1">Your Name</label>
                            <input type="text" className="w-full px-4 py-2 rounded bg-white border border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-black font-semibold mb-1">Your E-Mail</label>
                            <input type="email" className="w-full px-4 py-2 rounded bg-white border border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-black font-semibold mb-1">Message</label>
                            <textarea className="w-full px-4 py-2 h-24 rounded bg-white border border-gray-300"></textarea>
                        </div>
                        <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold py-2 px-6 rounded-full hover:opacity-90">
                            SEND
                        </button>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Resume;

