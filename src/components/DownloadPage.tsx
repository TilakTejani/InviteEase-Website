import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Apple, Cpu, ArrowLeft, Download, Monitor, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const CONFIG_URL = 'https://raw.githubusercontent.com/TilakTejani/InviteEase-Website/main/public/config.json';

const DownloadPage = () => {
    const [config, setConfig] = useState<any>({
        latest_version: '1.0.0',
        min_required_version: '1.0.0',
        mac_arm: 'https://github.com/TilakTejani/InviteEase-Website/releases/download/{version}/InviteEaseDesktop-{version}-arm64.dmg',
        mac_intel: 'https://github.com/TilakTejani/InviteEase-Website/releases/download/{version}/InviteEaseDesktop-{version}.dmg'
    });

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const response = await fetch(CONFIG_URL);
                if (response.ok) {
                    const data = await response.json();
                    setConfig(data);
                }
            } catch (error) {
                console.error('Failed to fetch download config:', error);
            }
        };

        fetchConfig();
    }, []);

    const handleDownload = (url: string) => {
        const processedUrl = url.replace(/{version}/g, config.latest_version);
        window.location.href = processedUrl;
    };

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

            <main className="max-w-6xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        Download <BrandLogo size="xl" />
                    </h1>
                    <p className="text-xl text-inviteease-textSecondary max-w-2xl mx-auto leading-relaxed">
                        Get the professional campaign management platform on your desktop for the best experience.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* macOS Download */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-10 rounded-[2.5rem] border border-inviteease-border shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Apple size={120} />
                        </div>
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                            <Apple size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">macOS</h2>
                        <p className="text-inviteease-textSecondary mb-8 text-lg font-medium leading-relaxed">
                            Optimized for Apple Silicon (M1/M2/M3) and Intel Macs. Requires macOS 11.0 or later.
                        </p>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => handleDownload(config.mac_arm)}
                                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-slate-900/10 active:scale-[0.98]"
                            >
                                <Download size={20} />
                                Apple Silicon (M1/M2/M3)
                            </button>
                            <button
                                onClick={() => handleDownload(config.mac_intel)}
                                className="w-full bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-50 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                            >
                                <Download size={20} />
                                Intel Chip
                            </button>
                        </div>
                        <p className="mt-6 text-center text-sm text-inviteease-textSecondary font-medium">Version {config.latest_version} • 65MB • .dmg</p>
                    </motion.div>

                    {/* Windows Download */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-10 rounded-[2.5rem] border border-inviteease-border shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-inviteease-primary">
                            <Monitor size={120} />
                        </div>
                        <div className="w-16 h-16 bg-inviteease-primary rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                            <Monitor size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Windows</h2>
                        <p className="text-inviteease-textSecondary mb-8 text-lg font-medium leading-relaxed">
                            Compatible with Windows 10 and 11 (64-bit). Built for performance and stability.
                            <br />
                            <span className="text-sm font-bold mt-2 inline-block text-amber-600 italic">
                                Note: For better performance, minimum 8GB RAM is needed.
                            </span>
                        </p>
                        <button className="w-full bg-inviteease-primary hover:bg-inviteease-primaryLight text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-teal-700/10 active:scale-[0.98]">
                            <Download size={20} />
                            Download for Windows (.exe)
                        </button>
                        <p className="mt-4 text-center text-sm text-inviteease-textSecondary font-medium">Version {config.latest_version} • 58MB</p>
                    </motion.div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-8 pt-20 border-t border-inviteease-border">
                    <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-3xl border border-white">
                        <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-inviteease-primary mb-6">
                            <Zap size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Native Performance</h3>
                        <p className="text-inviteease-textSecondary font-medium">Bypass browser limitations with our highly optimized desktop core.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-3xl border border-white">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                        <p className="text-inviteease-textSecondary font-medium">Your data stays local. We prioritize privacy and secure connections.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white/50 rounded-3xl border border-white">
                        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                            <Cpu size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Full System Access</h3>
                        <p className="text-inviteease-textSecondary font-medium">Seamlessly access your local files and automate workflows efficiently.</p>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="py-12 border-t border-inviteease-border text-center">
                <p className="text-inviteease-textSecondary font-medium text-sm">
                    © 2026 InviteEase. Professional Campaign Management.
                </p>
            </footer>
        </div>
    );
};

export default DownloadPage;
