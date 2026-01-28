import { motion } from 'framer-motion';
import {
    FileEdit,
    Database,
    Zap,
    Send,
    ArrowLeft,
    FileText,
    PlayCircle,
    ImageIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const steps = [
        {
            icon: <FileEdit size={32} />,
            title: "1. Design Your Template",
            desc: "Use our Advanced PDF Editor to upload your invitation template. Map dynamic text fields for names, number of persons, dates, or custom messages exactly where you want them to appear.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: <Database size={32} />,
            title: "2. Prepare Your Data",
            desc: "Upload your recipient list. Our platform supports complex data sets, allowing you to inject unique information for every single contact in your campaign.",
            color: "text-inviteease-primary",
            bg: "bg-inviteease-primary/10"
        },
        {
            icon: <Zap size={32} />,
            title: "3. Real-time Customisation",
            desc: "Our engine generates personalised PDFs on-the-fly, injecting your data and custom fonts. It even handles dynamic page deletion for empty values with millisecond precision.",
            color: "text-inviteease-warning",
            bg: "bg-inviteease-warning/10"
        },
        {
            icon: <Send size={32} />,
            title: "4. Automated Delivery",
            desc: "Once generated, InviteEase automatically delivers the custom PDFs, images, or videos directly to your recipients' WhatsApp numbers without manual intervention.",
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
                        <span className="font-bold text-xl tracking-tight">InviteEase</span>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                        How <span className="text-gradient-linear">InviteEase</span> Works
                    </h1>
                    <p className="text-xl text-inviteease-textSecondary max-w-3xl mx-auto leading-relaxed">
                        A seamless 4-step workflow designed to transform your manual invitation process into a high-speed automated engine.
                    </p>
                </motion.div>

                {/* Steps Section */}
                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-[3.5rem] border border-inviteease-border bg-white shadow-xl shadow-slate-200/50 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className={`w-24 h-24 shrink-0 rounded-[2rem] flex items-center justify-center ${step.bg} ${step.color}`}>
                                {step.icon}
                            </div>
                            <div className="flex-grow text-center md:text-left">
                                <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                                <p className="text-xl text-inviteease-textSecondary leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Multi-Format Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-24 border-t border-inviteease-border"
                >
                    <h2 className="text-4xl font-bold text-center mb-16">Supports All Your Media</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <MediaCard
                            icon={<FileText size={32} />}
                            title="Interactive PDFs"
                            desc="Real-time customised invitations with recipient-specific details."
                        />
                        <MediaCard
                            icon={<ImageIcon size={32} />}
                            title="High-Res Images"
                            desc="Static or dynamic images delivered instantly in original quality."
                        />
                        <MediaCard
                            icon={<PlayCircle size={32} />}
                            title="HD Videos"
                            desc="Automate video campaign delivery for maximum engagement."
                        />
                    </div>
                </motion.div>

                {/* Final CTA */}
                <div className="mt-40 text-center bg-gradient-appbar p-20 rounded-[4rem] border border-inviteease-border shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to automate your first campaign?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/download" className="bg-inviteease-primary hover:bg-inviteease-primaryLight text-white font-bold px-12 py-5 rounded-2xl shadow-xl shadow-teal-500/20 transition-all active:scale-95">
                            Download Now
                        </Link>
                        <Link to="/contact" className="bg-white border border-inviteease-border text-inviteease-text font-bold px-12 py-5 rounded-2xl hover:bg-slate-50 transition-all active:scale-95">
                            Speak to Sales
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-inviteease-border text-center">
                <p className="text-inviteease-textSecondary font-medium text-sm">
                    © 2026 InviteEase. Professional Workflow Automation.
                </p>
            </footer>
        </div>
    );
};

const MediaCard = ({ icon, title, desc }: any) => (
    <div className="bg-white p-8 rounded-[2.5rem] border border-inviteease-border shadow-lg shadow-slate-100/50 text-center group hover:border-inviteease-primary/30 transition-all">
        <div className="w-16 h-16 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-inviteease-textSecondary font-medium leading-relaxed">{desc}</p>
    </div>
);

export default HowItWorks;
