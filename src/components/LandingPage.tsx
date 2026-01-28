import React, { useEffect, useState, useRef } from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Zap,
    Send,
    FileText,
    PlayCircle,
    ImageIcon,
    Shield,
    ChevronRight
} from 'lucide-react';
import { motion, animate, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const LandingPage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-inviteease-bgDefault text-inviteease-text selection:bg-inviteease-primary/20">
            {/* Navigation */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg border-b border-inviteease-border py-2 shadow-sm' : 'bg-transparent py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 border border-inviteease-border shadow-sm p-1">
                            <img src="/logo_no_bg.png" alt="InviteEase Logo" className="w-full h-full object-contain" />
                        </div>
                        <BrandLogo size="lg" />
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <NavLink href="#features">Features</NavLink>
                        <Link to="/how-it-works" className="text-inviteease-textSecondary hover:text-inviteease-primary font-bold transition-colors">How it works</Link>
                        <Link to="/pricing" className="text-inviteease-textSecondary hover:text-inviteease-primary font-bold transition-colors">Pricing</Link>
                        <Link to="/contact" className="text-inviteease-textSecondary hover:text-inviteease-primary font-bold transition-colors">Contact</Link>
                        <Link to="/download" className="text-inviteease-textSecondary hover:text-inviteease-primary font-bold transition-colors">Download</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/download" className="bg-inviteease-primary hover:bg-inviteease-primaryLight text-white font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-teal-700/20 active:scale-95">
                            Download Now
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden bg-gradient-main">
                <div className="absolute inset-0 opacity-20 bg-gradient-primary mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-inviteease-border mb-8 shadow-sm">
                                <span className="w-2 h-2 bg-inviteease-primary rounded-full animate-pulse"></span>
                                <span className="text-sm font-bold text-inviteease-textSecondary uppercase tracking-wider">Trusted by 500+ Businesses</span>
                            </div>

                            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-inviteease-text drop-shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
                                Professional <br />
                                <span className="text-gradient-linear">Campaign</span> Platform
                            </h1>

                            <p className="text-xl text-inviteease-textSecondary mb-12 max-w-xl leading-relaxed font-medium">
                                Transform your invitation campaigns with our powerful PDF annotation tools, automated WhatsApp delivery, and comprehensive analytics dashboard.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link to="/download" className="w-full sm:w-auto bg-gradient-warning text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-3 group">
                                    Download for Desktop
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button className="w-full sm:w-auto bg-white border border-inviteease-border px-10 py-5 rounded-2xl font-bold text-lg hover:bg-inviteease-bgLight transition-all flex items-center justify-center gap-3 shadow-sm text-inviteease-text">
                                    <ImageIcon className="w-5 h-5 text-inviteease-warning fill-inviteease-warning" />
                                    View Demo
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 p-4 bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-white/50 shadow-2xl overflow-hidden animate-tropical-glow">
                                <img
                                    src="/dashboard_preview.png"
                                    alt="InviteEase Dashboard Preview"
                                    className="rounded-[2rem] shadow-2xl border border-white/50"
                                />
                            </div>
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-inviteease-primaryLight/30 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-white border-y border-inviteease-border overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center items-center">
                        <StatItem value={10000} label="Invitations Sent" suffix="+" />
                        <StatItem value={20} label="Campaigns Managed" suffix="+" />
                        <StatItem value={2} label="Years of Experience" suffix="+" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 bg-gradient-main">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-inviteease-text">Powerful Features</h2>
                        <p className="text-inviteease-textSecondary text-xl max-w-2xl mx-auto font-medium">Everything you need to create, manage, and deliver successful campaigns.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<FileText />}
                            title="Advanced PDF Editor"
                            desc="Professional annotation tools with precise field mapping and layer management for any template."
                            link="/how-it-works#editor"
                        />
                        <FeatureCard
                            icon={<Zap />}
                            title="Real-time PDF Customisation"
                            desc="Instantly inject dynamic user data and handle on-the-fly page deletion with high-speed automated generation."
                            link="/how-it-works#customisation"
                        />
                        <FeatureCard
                            icon={<CheckCircle2 />}
                            title="Custom Font Support"
                            desc="Upload and use any font files directly to maintain perfect brand consistency across all assets."
                            link="/how-it-works#editor"
                        />
                        <FeatureCard
                            icon={<PlayCircle />}
                            title="Multi-filetype Automation"
                            desc="Seamlessly automate campaigns featuring Images, Videos, and PDFs in a unified workflow."
                            link="/how-it-works#delivery"
                        />
                        <FeatureCard
                            icon={<Send />}
                            title="Dynamic Advanced Captioning"
                            desc="Personalize every message with intelligent data injection and sophisticated text formatting."
                            link="/how-it-works#data"
                        />
                        <FeatureCard
                            icon={<Shield />}
                            title="Enterprise Security"
                            desc="All local data storage ensures no data is stored outside of your reach, providing total privacy and control."
                            link="/how-it-works#security"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="bg-gradient-appbar rounded-[3rem] p-16 text-center border border-inviteease-border shadow-2xl shadow-slate-200">
                        <h2 className="text-5xl font-bold mb-8 text-inviteease-text">Ready to Get Started?</h2>
                        <p className="text-inviteease-textSecondary text-xl mb-12 max-w-2xl mx-auto font-medium">Join thousands of professionals who trust InviteEase for their campaign management needs.</p>
                        <Link to="/download" className="inline-block bg-gradient-warning text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl hover:shadow-amber-500/30 active:scale-95">
                            Start Your Campaign
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-inviteease-border pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 border border-inviteease-border">
                            <img src="/logo_no_bg.png" alt="InviteEase Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                    <BrandLogo size="lg" className="mb-4" />
                    <p className="text-inviteease-textSecondary mb-16 max-w-lg mx-auto font-medium">Professional Campaign Management Platform</p>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-inviteease-border pt-12">
                        <p className="text-inviteease-textSecondary text-sm font-medium">© 2026 InviteEase. All rights reserved.</p>
                        <div className="flex flex-wrap justify-center gap-8 text-inviteease-textSecondary font-bold text-sm">
                            <a href="#features" className="hover:text-inviteease-primary transition-colors cursor-pointer">Features</a>
                            <Link to="/how-it-works" className="hover:text-inviteease-primary transition-colors">Automation</Link>
                            <Link to="/pricing" className="hover:text-inviteease-primary transition-colors">Pricing</Link>
                            <Link to="/contact" className="hover:text-inviteease-primary transition-colors">Contact Support</Link>
                            <a className="hover:text-inviteease-primary transition-colors cursor-pointer">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-inviteease-textSecondary hover:text-inviteease-primary font-bold transition-colors">
        {children}
    </a>
);

interface FeatureCardProps {
    icon: React.ReactElement;
    title: string;
    desc: string;
    link?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, link = "/how-it-works" }) => (
    <div className="bg-inviteease-bgLight p-10 rounded-3xl border border-inviteease-border hover:border-inviteease-primary/30 transition-all hover:bg-white hover:shadow-xl hover:shadow-teal-500/5 group">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
            <span className="w-8 h-8 text-white">
                {icon}
            </span>
        </div>
        <h3 className="text-2xl font-bold mb-4 text-inviteease-text">{title}</h3>
        <p className="text-inviteease-textSecondary leading-relaxed font-medium">{desc}</p>
        <Link to={link} className="mt-8 flex items-center text-inviteease-primary font-bold group-hover:gap-2 transition-all cursor-pointer">
            Learn more <ChevronRight className="w-4 h-4" />
        </Link>
    </div>
);

const StatItem = ({ value, label, suffix }: { value: number; label: string; suffix: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (v) => setDisplayValue(v)
            });
            return () => controls.stop();
        }
    }, [value, isInView]);

    const formatValue = (v: number) => {
        if (v >= 1000) {
            return (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + 'K';
        }
        return Math.round(v);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex flex-col gap-3"
        >
            <div className="text-6xl font-black text-inviteease-text tracking-tighter">
                <span className="text-gradient-linear">{formatValue(displayValue)}</span>
                <span className="text-inviteease-warning">{suffix}</span>
            </div>
            <span className="text-inviteease-textSecondary font-bold uppercase tracking-[0.2em] text-xs">
                {label}
            </span>
        </motion.div>
    );
};

export default LandingPage;
