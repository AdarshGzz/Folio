// 'use client';

// import { Github, Mail, Linkedin, FileText, MapPin, Calendar } from 'lucide-react';
// import { Card } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-background px-4 py-6 sm:p-8 md:p-12 lg:p-16">
//       <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
//         {/* Header Section */}
//         <section className="space-y-4">
//           <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">John Developer</h1>
//           <h2 className="text-xl sm:text-2xl text-muted-foreground">Senior Software Engineer</h2>
//           <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-muted-foreground">
//             <div className="flex items-center gap-2">
//               <MapPin size={16} />
//               <span>San Francisco, CA</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail size={16} />
//               <a href="mailto:john@example.com" className="hover:text-primary">john@example.com</a>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
//               <Github size={16} />
//               GitHub
//             </Button>
//             <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
//               <Linkedin size={16} />
//               LinkedIn
//             </Button>
//             <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
//               <FileText size={16} />
//               Resume
//             </Button>
//           </div>
//         </section>

//         <Separator />

//         {/* About Section */}
//         <section className="space-y-3 sm:space-y-4">
//           <h3 className="text-lg sm:text-xl font-semibold">About</h3>
//           <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
//             Passionate software engineer with 8+ years of experience in building scalable web applications.
//             Specialized in React, Node.js, and cloud architecture. Committed to writing clean, maintainable
//             code and mentoring junior developers.
//           </p>
//         </section>

//         {/* Experience Section */}
//         <section className="space-y-4 sm:space-y-6">
//           <h3 className="text-lg sm:text-xl font-semibold">Experience</h3>
//           <div className="space-y-4 sm:space-y-6">
//             <Card className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
//                   <div>
//                     <h4 className="font-semibold">Senior Software Engineer</h4>
//                     <p className="text-sm sm:text-base text-muted-foreground">Tech Corp Inc.</p>
//                   </div>
//                   <div className="text-sm text-muted-foreground">2020 - Present</div>
//                 </div>
//                 <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-2">
//                   <li>Led development of microservices architecture serving 1M+ users</li>
//                   <li>Reduced API response time by 40% through optimization</li>
//                   <li>Mentored team of 5 junior developers</li>
//                 </ul>
//               </div>
//             </Card>

//             <Card className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
//                   <div>
//                     <h4 className="font-semibold">Software Engineer</h4>
//                     <p className="text-sm sm:text-base text-muted-foreground">StartUp Co.</p>
//                   </div>
//                   <div className="text-sm text-muted-foreground">2018 - 2020</div>
//                 </div>
//                 <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-2">
//                   <li>Developed full-stack features using React and Node.js</li>
//                   <li>Implemented CI/CD pipeline reducing deployment time by 60%</li>
//                 </ul>
//               </div>
//             </Card>
//           </div>
//         </section>

//         {/* Skills Section */}
//         <section className="space-y-4 sm:space-y-6">
//           <h3 className="text-lg sm:text-xl font-semibold">Skills</h3>
//           <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
//             <Card className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 <h4 className="font-semibold">Frontend Development</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge variant="secondary" className="text-xs sm:text-sm">JavaScript</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">TypeScript</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">React</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Next.js</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Vue.js</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">HTML5</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">CSS3</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Tailwind CSS</Badge>
//                 </div>
//               </div>
//             </Card>
            
//             <Card className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 <h4 className="font-semibold">Backend Development</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Node.js</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Express.js</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Python</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Django</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">GraphQL</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">REST APIs</Badge>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 <h4 className="font-semibold">Database & Infrastructure</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge variant="secondary" className="text-xs sm:text-sm">PostgreSQL</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">MongoDB</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Redis</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">AWS</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Docker</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Kubernetes</Badge>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 <h4 className="font-semibold">Tools & Practices</h4>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Git</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">CI/CD</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Jest</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Cypress</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">Agile</Badge>
//                   <Badge variant="secondary" className="text-xs sm:text-sm">TDD</Badge>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </section>

//         {/* Education Section */}
//         <section className="space-y-4 sm:space-y-6">
//           <h3 className="text-lg sm:text-xl font-semibold">Education</h3>
//           <Card className="p-4 sm:p-6">
//             <div className="space-y-3 sm:space-y-4">
//               <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
//                 <div>
//                   <h4 className="font-semibold">B.S. Computer Science</h4>
//                   <p className="text-sm sm:text-base text-muted-foreground">University of Technology</p>
//                 </div>
//                 <div className="text-sm text-muted-foreground">2014 - 2018</div>
//               </div>
//               <p className="text-sm sm:text-base text-muted-foreground">
//                 Graduated with Honors, GPA: 3.8
//               </p>
//             </div>
//           </Card>
//         </section>

//         {/* Projects Section */}
//         <section className="space-y-4 sm:space-y-6">
//           <h3 className="text-lg sm:text-xl font-semibold">Projects</h3>
//           <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
//             <Card className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 <h4 className="font-semibold">E-commerce Platform</h4>
//                 <p className="text-sm sm:text-base text-muted-foreground">
//                   Built a scalable e-commerce platform using Next.js and Stripe
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge className="text-xs sm:text-sm">Next.js</Badge>
//                   <Badge className="text-xs sm:text-sm">Stripe</Badge>
//                   <Badge className="text-xs sm:text-sm">PostgreSQL</Badge>
//                 </div>
//               </div>
//             </Card>
//             <Card className="p-4 sm:p-6">
//               <div className="space-y-3 sm:space-y-4">
//                 <h4 className="font-semibold">Real-time Chat App</h4>
//                 <p className="text-sm sm:text-base text-muted-foreground">
//                   Developed a real-time chat application using WebSocket
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <Badge className="text-xs sm:text-sm">React</Badge>
//                   <Badge className="text-xs sm:text-sm">Socket.io</Badge>
//                   <Badge className="text-xs sm:text-sm">Redis</Badge>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
//           © 2024 John Developer. All rights reserved.
//         </footer>
//       </div>
//     </main>
//   );
// }


'use client';

import { Github, Mail, Linkedin, FileText, MapPin, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:p-8 md:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Header Section */}
        <section className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Adarsh Kumar Gupta</h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground">Fullstack Developer</h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Bhopal, MP, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:adarshgupta93012@gmail.com" className="hover:text-primary">adarshgupta93012@gmail.com</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
              <Github size={16} />
              <a href="https://github.com/AdarshGzz/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
              <Linkedin size={16} />
              <a href="https://www.linkedin.com/in/adarsh930/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
              <FileText size={16} />
              <a href="https://adarsh-kumar-gupta.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
              <FileText size={16} />
              <a href="https://drive.google.com/file/d/11r_Xghdo-dEgNtQ-z7y5zpUjZThcif9u/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">About</h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Passionate Fullstack Developer with experience in building scalable web and mobile applications.
            Proficient in JavaScript, TypeScript, React.js, Next.js, Node.js, and MongoDB. Committed to delivering
            high-quality, user-friendly solutions.
          </p>
        </section>

        {/* Experience Section */}
        <section className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold">Experience</h3>
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h4 className="font-semibold">Fullstack Developer Intern</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">RD Group of Industries</p>
                  </div>
                  <div className="text-sm text-muted-foreground">Sep 2024 - Dec 2024</div>
                </div>
                <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-2">
                  <li>Collaborated with a team to design, develop, and maintain 3 web applications using the MERN stack.</li>
                  <li>Integrated 10+ RESTful APIs and participated in 15+ code reviews, enhancing project efficiency by 20%.</li>
                  <li>Reduced bug count by 30% through troubleshooting and debugging.</li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold">Skills</h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs sm:text-sm">JavaScript</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">TypeScript</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">React.js</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">Next.js</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">Tailwind CSS</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">GSAP</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">Three.js</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold">Backend Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs sm:text-sm">Node.js</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">Express.js</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">Firebase</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">MongoDB</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">SQL</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold">Cloud & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs sm:text-sm">AWS S3</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">GitHub</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">Docker</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold">Problem Solving</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs sm:text-sm">Data Structures</Badge>
                  <Badge variant="secondary" className="text-xs sm:text-sm">Algorithms</Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold">Education</h3>
          <Card className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h4 className="font-semibold">Bachelor of Technology</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">Vellore Institute of Technology</p>
                </div>
                <div className="text-sm text-muted-foreground">2021 - 2025</div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Computer Science & Engineering 
                {/* | CGPA: 7.61 */}
              </p>
            </div>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-xl font-semibold">Projects</h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-semibold">AXIOM - AI-powered Interview Prep Platform</h4>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://axiom-lyart.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <span>Live</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </Button>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Developed an AI-driven platform to help students prepare for interviews with personalized tests and real-time feedback.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-xs sm:text-sm">Next.js</Badge>
                  <Badge className="text-xs sm:text-sm">Convex</Badge>
                  <Badge className="text-xs sm:text-sm">LiveKit</Badge>
                  <Badge className="text-xs sm:text-sm">Google Gemini</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-semibold">Apple Website Clone</h4>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://iphone-henna.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <span>Live</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </Button>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Engineered a visually captivating website clone inspired by Apple's design language.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-xs sm:text-sm">Next.js</Badge>
                  <Badge className="text-xs sm:text-sm">GSAP</Badge>
                  <Badge className="text-xs sm:text-sm">Three.js</Badge>
                  <Badge className="text-xs sm:text-sm">Tailwind CSS</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <h4 className="font-semibold">Agritech Mobile Application</h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Empowered farmers to sustainably manage stubble waste and connect with industries for sales.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-xs sm:text-sm">React Native</Badge>
                  <Badge className="text-xs sm:text-sm">Node.js</Badge>
                  <Badge className="text-xs sm:text-sm">Firebase</Badge>
                  <Badge className="text-xs sm:text-sm">Twilio</Badge>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-semibold">Ecommerce & CMS</h4>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://rd-project-q.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <span>Live</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </Button>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Engineered a visually captivating website clone inspired by Apple's design language.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-xs sm:text-sm">React.js</Badge>
                  <Badge className="text-xs sm:text-sm">Node.js</Badge>
                  <Badge className="text-xs sm:text-sm">Express.js</Badge>
                  <Badge className="text-xs sm:text-sm">Tailwind CSS</Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          © 2025 Adarsh Kumar Gupta. All rights reserved.
        </footer>
      </div>
    </main>
  );
}