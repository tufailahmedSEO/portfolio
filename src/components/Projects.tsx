import { ArrowUpRight } from "lucide-react";

const EXPERIENCES = [
    {
        company: "Digital Web Solutions",
        role: "Assistant Manager - SEO",
        duration: "Oct 2025 - Present",
        highlights: [
            "Lead end-to-end SEO strategy for SaaS clients using AI",
            "Architected link-building campaigns achieving 2K+ placements",
            "Implemented AI-powered content optimization using Perplexity"
        ]
    },
    {
        company: "Uplers",
        role: "Link Building Analyst",
        duration: "Oct 2023 - Oct 2025",
        highlights: [
            "Executed link acquisition securing 5K+ white-hat editorial backlinks",
            "Used AI chatbots for outreach personalization (+35% response rates)",
            "Conducted backlink profile analysis and competitor assessments"
        ]
    },
    {
        company: "Thrillophilia",
        role: "Digital Marketing Associate",
        duration: "Mar 2022 - Oct 2023",
        highlights: [
            "Optimized 200+ high-traffic pages (+30% organic traffic)",
            "Executed technical SEO for a 10,000+ page website",
            "Performed keyword research using Ahrefs, SEMrush, and GSC"
        ]
    }
];

export default function Projects() {
    return (
        <section className="bg-[#121212] relative z-20 py-24 px-8 lg:px-24 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <h3 className="text-sm font-mono tracking-widest text-neutral-400 mb-4 uppercase">Professional Experience</h3>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Career Highlights</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
                    {EXPERIENCES.map((exp, i) => (
                        <div key={i} className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 p-8 flex flex-col justify-between min-h-[400px]">

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />

                            <div className="relative z-10 flex flex-col gap-8 h-full">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-2xl font-medium tracking-tight mb-2">{exp.company}</h4>
                                        <p className="text-sm text-neutral-400 font-light">{exp.role}</p>
                                    </div>
                                    <span className="text-xs text-neutral-500 font-mono px-3 py-1 bg-white/5 rounded-full border border-white/10">{exp.duration}</span>
                                </div>

                                <ul className="flex-1 flex flex-col justify-end gap-3">
                                    {exp.highlights.map((highlight, j) => (
                                        <li key={j} className="text-sm text-neutral-300 font-light flex items-start gap-2">
                                            <span className="text-neutral-500 mt-1">▹</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mb-32">
                    <h3 className="text-sm font-mono tracking-widest text-neutral-400 mb-8 uppercase">Key Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-xl font-medium mb-4 text-white">SEO Expertise</h4>
                            <p className="text-sm text-neutral-400 font-light leading-relaxed">
                                Technical SEO, On-Page Optimization, SaaS SEO, International SEO, Link Building, Content SEO, Digital PR.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-xl font-medium mb-4 text-white">AI Workflows</h4>
                            <p className="text-sm text-neutral-400 font-light leading-relaxed">
                                ChatGPT, Claude AI, Gemini, DeepSeek, Perplexity, Prompt Engineering, AI-Powered Content Workflows.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="text-xl font-medium mb-4 text-white">Technical Stack</h4>
                            <p className="text-sm text-neutral-400 font-light leading-relaxed">
                                Ahrefs, SEMrush, Screaming Frog, HTML/CSS, Schema Markup, Log File Analysis, Core Web Vitals.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <h3 className="text-3xl font-medium mb-2">Let's build organic growth.</h3>
                                <p className="text-neutral-400">Achieved 10,000+ total links and consistent ROI for 25+ SaaS clients.</p>
                            </div>
                            <a href="mailto:tufailahmed7864@gmail.com" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                                Contact Me <ArrowUpRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                <p>© 2026 Tufail Ahmed. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="mailto:tufailahmed7864@gmail.com" className="hover:text-white transition-colors">Email</a>
                    <a href="https://linkedin.com/in/tufailah" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </footer>
        </section>
    );
}
