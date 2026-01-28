import { motion } from 'framer-motion';
import {
    FileEdit,
    Database,
    Zap,
    Send,
    ArrowLeft,
    Shield,
    Type,
    FileSearch,
    Cpu,
    Lock,
    BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const HowItWorks = () => {
    const steps = [
        {
            id: "editor",
            icon: <FileEdit size={32} />,
            title: "1. Advanced PDF Editor & Font Support",
            desc: "Upload your invitation template and use our pro-grade editor to map dynamic fields for names, person counts, and dates. You can use any custom font files (.ttf, .otf) directly to maintain your brand's unique look.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            id: "data",
            icon: <Database size={32} />,
            title: "2. Data Injection & Advanced Captioning",
            desc: "Connect your recipient list and define dynamic captions. Our system supports sophisticated data injection, allowing you to personalize every message and caption with person-specific details automatically.",
            color: "text-inviteease-primary",
            bg: "bg-inviteease-primary/10"
        },
        {
            id: "customisation",
            icon: <Zap size={32} />,
            title: "3. Real-time Generation & Page Deletion",
            desc: "Our high-speed engine generates personalised PDFs on-the-fly. It intelligently handles dynamic page deletion automatically, ensuring every recipient gets a perfectly tailored document without blank pages.",
            color: "text-inviteease-warning",
            bg: "bg-inviteease-warning/10"
        },
        {
            id: "delivery",
            icon: <Send size={32} />,
            title: "4. Multi-filetype Automated Delivery",
            desc: "Deliver custom PDFs, HD Videos, and Images in a unified automated workflow. Our system sends everything directly to WhatsApp numbers at scale, ensuring your campaign reaches its audience instantly.",
            color: "text-green-600",
            bg: "bg-green-50"
        }
    ];

    return (
        <div className="min-h-screen bg-inviteease-bgDefault text-inviteease-text selection:bg-inviteease-primary/20">
            {/* Navigation */}
            <nav className="p-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group text-inviteease-text hover:text-inviteease-primary transition-colors">
                        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                        <span className="font-semibold">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-inviteease-border shadow-sm p-1">
                            <img src="/logo_no_bg.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <BrandLogo size="lg" />
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-inviteease-text">
                        The <BrandLogo size="xl" /> Workflow
                    </h1>
                    <p className="text-xl text-inviteease-textSecondary max-w-3xl mx-auto leading-relaxed font-medium">
                        Automating your professional campaign delivery from design to distribution.
                    </p>
                </motion.div>

                {/* Steps Section */}
                <div className="space-y-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            id={step.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 rounded-[3.5rem] border border-inviteease-border bg-white shadow-xl shadow-slate-200/50 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className={`w-28 h-28 shrink-0 rounded-[2.5rem] flex items-center justify-center ${step.bg} ${step.color} shadow-inner`}>
                                {step.icon}
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">{step.title}</h2>
                                <p className="text-xl text-inviteease-textSecondary leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Live Tracking Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 p-12 md:p-16 rounded-[3.5rem] bg-white border border-inviteease-border shadow-xl shadow-slate-200/50 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-12 text-inviteease-warning/5 transition-transform group-hover:scale-110 duration-700">
                        <BarChart3 size={200} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-24 h-24 bg-inviteease-warning/10 rounded-3xl flex items-center justify-center text-inviteease-warning shadow-inner">
                            <BarChart3 size={40} />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-4">Live Tracking & Analytics</h2>
                            <p className="text-xl text-inviteease-textSecondary leading-relaxed max-w-2xl font-medium">
                                Monitor your campaign's progress in real-time. Track successfully delivered messages, pending items, and overall completion status through our integrated <span className="text-inviteease-warning font-bold">Live Dashboard</span>.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Security Feature Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    id="security"
                    className="mt-20 p-12 md:p-16 rounded-[3.5rem] bg-gradient-appbar border border-inviteease-border shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Shield size={200} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-inviteease-primary shadow-xl">
                            <Lock size={40} />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-bold mb-4">Enterprise Security & Privacy</h2>
                            <p className="text-xl text-inviteease-textSecondary leading-relaxed max-w-3xl font-medium">
                                We prioritize your data sovereignty. <span className="text-inviteease-text font-bold text-2xl block mt-2">All data storage is 100% local.</span> No recipient information, campaign assets, or sensitive logs ever leave your machine, ensuring no data is ever stored outside of your reach.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Specs */}
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <MediaCard
                        icon={<Cpu size={32} />}
                        title="Native Performance"
                        desc="Built for speed with optimized binary execution for all campaigns."
                    />
                    <MediaCard
                        icon={<FileSearch size={32} />}
                        title="Deep Verification"
                        desc="Every PDF page is verified after generation to ensure data accuracy."
                    />
                    <MediaCard
                        icon={<Type size={32} />}
                        title="Font Rendering"
                        desc="Advanced text layout engine supports complex scripts and custom fonts."
                    />
                </div>

                {/* Final CTA */}
                <div className="mt-20 text-center py-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-10">Ready to experience the automation?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/download" className="bg-inviteease-primary hover:bg-inviteease-primaryLight text-white font-bold px-12 py-5 rounded-2xl shadow-2xl shadow-teal-500/30 transition-all active:scale-95 text-xl">
                            Download InviteEase
                        </Link>
                        <Link to="/contact" className="bg-white border border-inviteease-border text-inviteease-text font-bold px-12 py-5 rounded-2xl hover:bg-slate-50 transition-all active:scale-95 text-xl">
                            Speak to Support
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-inviteease-border text-center bg-white/50">
                <p className="text-inviteease-textSecondary font-semibold text-sm">
                    © 2026 InviteEase. Security-first campaign automation.
                </p>
            </footer>
        </div>
    );
};

const MediaCard = ({ icon, title, desc }: any) => (
    <div className="bg-white p-10 rounded-[3rem] border border-inviteease-border shadow-xl shadow-slate-100/50 text-center group hover:border-inviteease-primary/30 transition-all">
        <div className="w-16 h-16 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-sm">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-inviteease-textSecondary font-medium leading-relaxed">{desc}</p>
    </div>
);

export default HowItWorks;
