import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Info, Zap, MessageSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const CONFIG_URL = 'https://raw.githubusercontent.com/TilakTejani/InviteEase-Website/main/public/config.json';

const PricingPage = () => {
    const [pricingType, setPricingType] = useState<'credits' | 'unlimited'>('credits');
    const [creditConsumption, setCreditConsumption] = useState({
        text_only: 3,
        media_pdf: 5,
        personalized_pdf: 7
    });
    const [offerConfig, setOfferConfig] = useState({
        start_date: '2025-01-01',
        monthly_decrease: 5,
        total_spots: 99
    });

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const response = await fetch(`${CONFIG_URL}?t=${Date.now()}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.credit_consumption) {
                        setCreditConsumption(data.credit_consumption);
                    }
                    if (data.offer_config) {
                        setOfferConfig(data.offer_config);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch credit consumption config:', error);
                // Fallback to default values already set in state
            }
        };
        fetchConfig();
    }, []);

    const calculateRemainingSpots = () => {
        const start = new Date(offerConfig.start_date);
        const now = new Date();
        const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
        const decrease = Math.max(0, months * offerConfig.monthly_decrease);
        return Math.max(0, offerConfig.total_spots - decrease);
    };

    const remainingSpots = calculateRemainingSpots();

    return (
        <div className="min-h-screen text-inviteease-text selection:bg-inviteease-primary/20">
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

            <main className="max-w-7xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                        Simple, <span className="text-gradient-linear">Flexible</span> Pricing
                    </h1>
                    <p className="text-xl text-inviteease-textSecondary max-w-2xl mx-auto leading-relaxed">
                        Choose between flexible credit packs for smaller campaigns or unlimited monthly plans for high-volume needs.
                    </p>
                </motion.div>

                {/* Credit Consumption Guide (Common to both) */}
                <div className="flex flex-col items-center mb-16 px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-5xl bg-white/40 backdrop-blur-xl rounded-[2rem] border border-inviteease-border p-5 shadow-xl shadow-teal-500/5"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-white border border-inviteease-border rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                    <MessageSquare className="text-inviteease-primary w-5 h-5" />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-inviteease-text leading-none">{creditConsumption.text_only}</span>
                                    <span className="text-[10px] font-bold text-inviteease-textSecondary uppercase tracking-[0.15em] whitespace-nowrap">Credits / Text Only</span>
                                </div>
                            </div>

                            <div className="hidden md:block w-px h-8 bg-inviteease-border/50"></div>

                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-white border border-inviteease-border rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                                    <FileText className="text-inviteease-primary w-5 h-5" />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-inviteease-text leading-none">{creditConsumption.media_pdf}</span>
                                    <span className="text-[10px] font-bold text-inviteease-textSecondary uppercase tracking-[0.15em] whitespace-nowrap">Credits / Media & PDF</span>
                                </div>
                            </div>

                            <div className="hidden md:block w-px h-8 bg-inviteease-border/50"></div>

                            <div className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform shrink-0">
                                    <Zap className="text-white w-5 h-5" />
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-black text-gradient-linear leading-none">{creditConsumption.personalized_pdf}</span>
                                    <span className="text-[10px] font-bold text-inviteease-primary uppercase tracking-[0.15em] whitespace-nowrap">Credits / Personalised PDF</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Tab Switcher */}
                <div className="flex flex-col items-center mb-16">
                    <div className="bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-inviteease-border shadow-sm inline-flex mb-6">
                        <button
                            onClick={() => setPricingType('credits')}
                            className={`px-8 py-3 rounded-xl font-bold transition-all ${pricingType === 'credits'
                                ? 'bg-inviteease-primary text-white shadow-lg shadow-teal-700/20'
                                : 'text-inviteease-textSecondary hover:text-inviteease-text'
                                }`}
                        >
                            Credit-based Pricing
                        </button>
                        <button
                            onClick={() => setPricingType('unlimited')}
                            className={`px-8 py-3 rounded-xl font-bold transition-all ${pricingType === 'unlimited'
                                ? 'bg-inviteease-primary text-white shadow-lg shadow-teal-700/20'
                                : 'text-inviteease-textSecondary hover:text-inviteease-text'
                                }`}
                        >
                            Unlimited Plans
                        </button>
                    </div>

                    {pricingType === 'unlimited' && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-amber-500/10 text-amber-600 px-4 py-2 rounded-lg border border-amber-200 text-sm font-bold flex items-center gap-2"
                        >
                            <Zap size={16} />
                            Special Offer: Valid only for the first {remainingSpots}/{offerConfig.total_spots} customers!
                        </motion.div>
                    )}
                </div>

                <motion.div
                    key={pricingType}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-24"
                >
                    {pricingType === 'credits' ? (
                        <>
                            <PricingCard
                                title="Starter Pack"
                                price="3,000"
                                creditsCount="3,000"
                                unit=""
                                description="Ideal for small personal events and quick announcement tests."
                                features={[]}
                                delay={0.1}
                            />
                            <PricingCard
                                title="Business Pack"
                                price="9,999"
                                creditsCount="12,000"
                                originalPrice="12,000"
                                unit=""
                                isPopular
                                description="The perfect choice for professional event managers."
                                features={[]}
                                delay={0.2}
                            />
                            <PricingCard
                                title="Pro Pack"
                                price="24,999"
                                creditsCount="30,000"
                                originalPrice="30,000"
                                unit=""
                                description="Scale your outreach with high-volume personalised campaigns."
                                features={[]}
                                delay={0.3}
                            />
                            <PricingCard
                                title="Enterprise"
                                price="Custom"
                                unit=""
                                description="Bespoke credit solutions for corporate requirements."
                                features={[]}
                                delay={0.4}
                            />
                        </>
                    ) : (
                        <>
                            <PricingCard
                                title="1 Month"
                                price="9,999"
                                unit="/mo"
                                description="Perfect for short-term events and seasonal campaigns."
                                features={[]}
                                delay={0.1}
                            />
                            <PricingCard
                                title="3 Months"
                                price="24,999"
                                originalPrice="29,999"
                                unit="/qtr"
                                isPopular
                                description="The ideal balance for growing businesses and agencies."
                                features={[]}
                                delay={0.2}
                            />
                            <PricingCard
                                title="6 Months"
                                price="44,999"
                                originalPrice="59,999"
                                unit="/half year"
                                description="Sustained outreach for long-term brand building."
                                features={[]}
                                delay={0.3}
                            />
                            <PricingCard
                                title="12 Months"
                                price="99,999"
                                originalPrice="1,19,999"
                                unit="/year"
                                description="The best value for committed marketing teams."
                                features={[]}
                                delay={0.4}
                            />
                        </>
                    )}
                </motion.div>

                {/* FAQ / Note Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/50 backdrop-blur-sm p-12 rounded-[3.5rem] border border-inviteease-border max-w-4xl mx-auto"
                >
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-inviteease-primary/10 rounded-2xl flex items-center justify-center text-inviteease-primary shrink-0">
                            <Info size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Note on Pricing</h3>
                            <p className="text-lg text-inviteease-textSecondary leading-relaxed">
                                {pricingType === 'credits'
                                    ? "Credits never expire on Business and Pro packs. All credit purchases are in INR. For volume discounts or enterprise customisations, please reach out to our team."
                                    : "Unlimited plans are subject to our fair usage policy. All campaigns must comply with our terms of service and anti-spam guidelines."}
                            </p>
                            <div className="mt-8">
                                <Link to="/contact" className="text-inviteease-primary font-bold hover:gap-2 transition-all inline-flex items-center gap-1 group">
                                    Contact for Bulk Inquiries <Check size={18} className="translate-y-[1px]" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>


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

const PricingCard = ({ title, price, creditsCount, originalPrice, unit, description, features, isPopular = false, delay = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className={`relative bg-white p-10 rounded-[3rem] border transition-all hover:shadow-2xl flex flex-col ${isPopular ? 'border-inviteease-primary shadow-xl shadow-teal-500/10 scale-105 z-10' : 'border-inviteease-border shadow-lg shadow-slate-200/50'
            }`}
    >
        {isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-inviteease-primary text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase">
                Most Popular
            </div>
        )}

        <div className="mb-8">
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-inviteease-textSecondary font-medium leading-relaxed">{description}</p>
        </div>

        <div className="mb-10">
            {creditsCount && (
                <div className="mb-2">
                    <span className="text-3xl font-extrabold text-inviteease-primary">{creditsCount}</span>
                    <span className="text-inviteease-textSecondary font-bold ml-1">Credits</span>
                </div>
            )}
            <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold tracking-tight">{price !== 'Custom' && '₹'}{price}</span>
                <span className="text-inviteease-textSecondary font-bold">{unit}</span>
            </div>
            {originalPrice && (
                <div className="mt-2">
                    <span className="text-xl text-inviteease-textSecondary/50 line-through font-bold">₹{originalPrice}</span>
                </div>
            )}
        </div>

        {features.length > 0 && (
            <div className="flex-grow space-y-4 mb-10">
                {features.map((feature: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-inviteease-primary/10 flex items-center justify-center text-inviteease-primary shrink-0">
                            <Check size={12} />
                        </div>
                        <span className="text-sm font-semibold text-inviteease-textSecondary">{feature}</span>
                    </div>
                ))}
            </div>
        )}

        <Link to="/contact" className={`w-full py-4 rounded-2xl font-bold text-center transition-all active:scale-[0.98] ${isPopular
            ? 'bg-inviteease-primary text-white hover:bg-inviteease-primaryLight shadow-lg shadow-teal-700/20'
            : 'bg-inviteease-bgLight text-inviteease-text hover:bg-inviteease-border'
            }`}>
            Get Started
        </Link>
    </motion.div>
);

export default PricingPage;
