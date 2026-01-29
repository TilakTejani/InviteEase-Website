import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowLeft, Mail, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const ContactUs = () => {
    return (
        <div className="min-h-screen text-inviteease-text">
            {/* Header / Nav */}
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

            <main className="max-w-4xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Get in Touch</h1>
                    <p className="text-xl text-inviteease-textSecondary max-w-2xl mx-auto leading-relaxed">
                        Have questions about our professional campaign platform? Our team is here to help you scale your outreach.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Call Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-[2rem] border border-inviteease-border shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all group"
                    >
                        <div className="w-16 h-16 bg-inviteease-primary/10 rounded-2xl flex items-center justify-center mb-6 text-inviteease-primary group-hover:scale-110 transition-transform">
                            <Phone size={32} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Call Us</h2>
                        <p className="text-inviteease-textSecondary mb-6">Available Monday to Friday, 9am - 6pm.</p>
                        <a
                            href="tel:+919998597136"
                            className="inline-flex items-center gap-3 text-2xl font-bold text-inviteease-primary hover:text-inviteease-primaryLight transition-colors"
                        >
                            +91 9998597136
                        </a>
                    </motion.div>

                    {/* WhatsApp Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-[2rem] border border-inviteease-border shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all group"
                    >
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                            <MessageCircle size={32} />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">WhatsApp</h2>
                        <p className="text-inviteease-textSecondary mb-6">Chat with us for quick support and inquiries.</p>
                        <a
                            href="https://wa.me/919998597136"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-2xl font-bold text-green-600 hover:text-green-500 transition-colors"
                        >
                            Chat Now
                        </a>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 grid md:grid-cols-3 gap-8 pt-12 border-t border-inviteease-border"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="font-bold">Email</p>
                            <p className="text-inviteease-textSecondary">support@inviteease.it.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="font-bold">Location</p>
                            <p className="text-inviteease-textSecondary">Surat, Gujarat, India</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                            <Zap size={24} />
                        </div>
                        <div>
                            <p className="font-bold">Quick Support</p>
                            <p className="text-inviteease-textSecondary">Response within 2h</p>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default ContactUs;
