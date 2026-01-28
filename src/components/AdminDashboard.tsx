import { useState } from 'react';
import {
    BarChart3,
    Users,
    Settings,
    Bell,
    Search,
    LayoutDashboard,
    MessageSquare,
    FileText,
    Menu,
    X,
    Plus,
    ArrowUpRight
} from 'lucide-react';

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const stats = [
        { label: 'Active Campaigns', value: '128', change: '+12%', icon: <MessageSquare className="w-5 h-5" /> },
        { label: 'Total Users', value: '1,240', change: '+5%', icon: <Users className="w-5 h-5" /> },
        { label: 'Messages Sent', value: '45.2k', change: '+24%', icon: <BarChart3 className="w-5 h-5" /> },
        { label: 'Waitlist', value: '312', change: '+18%', icon: <Plus className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-inviteease-bgDefault text-inviteease-text flex">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-inviteease-border transition-all duration-300 flex flex-col z-20`}>
                <div className="p-6 flex items-center gap-4">
                    <div className="w-10 h-10 bg-white border border-inviteease-border rounded-xl flex items-center justify-center shrink-0 shadow-sm p-1">
                        <img src="/logo_no_bg.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    {sidebarOpen && (
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight tracking-tight">InviteEase</span>
                            <span className="text-[10px] font-bold text-inviteease-textSecondary uppercase tracking-widest">Admin Panel</span>
                        </div>
                    )}
                </div>

                <nav className="flex-1 px-4 py-8 space-y-1">
                    <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active sidebarOpen={sidebarOpen} />
                    <NavItem icon={<Users size={20} />} label="User Management" sidebarOpen={sidebarOpen} />
                    <NavItem icon={<MessageSquare size={20} />} label="Live Campaigns" sidebarOpen={sidebarOpen} />
                    <NavItem icon={<FileText size={20} />} label="Global Templates" sidebarOpen={sidebarOpen} />
                    <NavItem icon={<Settings size={20} />} label="System Settings" sidebarOpen={sidebarOpen} />
                </nav>

                <div className="p-4 border-t border-inviteease-border">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="w-full flex items-center justify-center p-3 hover:bg-inviteease-bgLight rounded-xl transition-colors text-inviteease-textSecondary hover:text-inviteease-primary"
                    >
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white/95 backdrop-blur-md border-b border-inviteease-border flex items-center justify-between px-8 shrink-0">
                    <div className="flex items-center gap-4 bg-inviteease-bgLight px-4 py-2.5 rounded-xl border border-inviteease-border w-full max-w-md">
                        <Search className="w-4 h-4 text-inviteease-textSecondary" />
                        <input
                            type="text"
                            placeholder="Search users, campaigns, or logs..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-inviteease-textSecondary font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="p-2.5 hover:bg-inviteease-bgLight rounded-xl relative transition-all text-inviteease-textSecondary hover:text-inviteease-primary">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-10 w-[1px] bg-inviteease-border"></div>
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-bold text-inviteease-text group-hover:text-inviteease-primary transition-colors">Admin User</div>
                                <div className="text-[10px] font-bold text-inviteease-textSecondary uppercase tracking-tighter">Super Administrator</div>
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-inviteease-bgLight border border-inviteease-border overflow-hidden shadow-sm">
                                <img src="/logo_no_bg.png" alt="Admin" className="w-full h-full object-contain p-1" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard View */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-gradient-main">
                    <div className="max-w-7xl mx-auto space-y-10">
                        <div className="flex items-end justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-inviteease-text tracking-tight">Administrative Overview</h1>
                                <p className="text-inviteease-textSecondary font-medium mt-1">Real-time system health and campaign performance.</p>
                            </div>
                            <button className="bg-gradient-warning text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center gap-2 hover:shadow-amber-500/20">
                                <Plus size={18} />
                                Create Report
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-inviteease-border hover:border-inviteease-primary/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-teal-500/5">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-inviteease-bgLight rounded-xl group-hover:bg-gradient-primary group-hover:text-white transition-all text-inviteease-primary">
                                            {stat.icon}
                                        </div>
                                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                                            {stat.change}
                                            <ArrowUpRight size={12} />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-inviteease-text tracking-tight">{stat.value}</div>
                                    <div className="text-xs font-bold text-inviteease-textSecondary uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Activity Table */}
                        <div className="bg-white rounded-[2rem] border border-inviteease-border overflow-hidden shadow-sm">
                            <div className="p-8 border-b border-inviteease-border flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-inviteease-text tracking-tight">Active Campaigns</h3>
                                    <p className="text-inviteease-textSecondary text-sm font-medium">Currently processing through the automation engine.</p>
                                </div>
                                <button className="text-inviteease-primary text-sm hover:underline font-bold px-4 py-2 bg-inviteease-bgLight rounded-lg transition-all">View All Activity</button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="text-[10px] uppercase font-bold tracking-widest text-inviteease-textSecondary bg-inviteease-bgDefault/50 border-b border-inviteease-border">
                                        <tr>
                                            <th className="px-8 py-5">Campaign Name</th>
                                            <th className="px-8 py-5">Administrator</th>
                                            <th className="px-8 py-5">Execution Status</th>
                                            <th className="px-8 py-5">Progress</th>
                                            <th className="px-8 py-5">Settings</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-inviteease-border">
                                        <TableRow name="Wedding Invitations - Batch A" owner="tilak@example.com" status="Active" progress={85} />
                                        <TableRow name="Corporate Launch Event" owner="marketing@corp.com" status="Processing" progress={42} />
                                        <TableRow name="Annual Gala 2024" owner="event_manager" status="Scheduled" progress={0} />
                                        <TableRow name="Product Beta Invites" owner="dev_team" status="Completed" progress={100} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

interface NavItemProps {
    icon: React.ReactElement;
    label: string;
    active?: boolean;
    sidebarOpen: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, sidebarOpen }) => (
    <button className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all ${active
        ? 'bg-gradient-primary text-white shadow-lg shadow-teal-700/20'
        : 'text-inviteease-textSecondary hover:bg-inviteease-bgLight hover:text-inviteease-primary'
        }`}>
        <span className="shrink-0 flex items-center justify-center">
            {icon}
        </span>
        {sidebarOpen && <span className="font-bold text-sm tracking-tight">{label}</span>}
    </button>
);

interface TableRowProps {
    name: string;
    owner: string;
    status: 'Active' | 'Processing' | 'Scheduled' | 'Completed';
    progress: number;
}

const TableRow: React.FC<TableRowProps> = ({ name, owner, status, progress }) => {
    const statusColors = {
        Active: 'text-emerald-600 bg-emerald-50 border-emerald-100',
        Processing: 'text-blue-600 bg-blue-50 border-blue-100',
        Scheduled: 'text-amber-600 bg-amber-50 border-amber-100',
        Completed: 'text-slate-500 bg-slate-100 border-slate-200',
    };

    return (
        <tr className="hover:bg-inviteease-bgLight/30 transition-colors group">
            <td className="px-8 py-6">
                <div className="font-bold text-inviteease-text">{name}</div>
                <div className="text-[10px] text-inviteease-textSecondary font-bold uppercase tracking-tighter">INV-0923</div>
            </td>
            <td className="px-8 py-6 text-inviteease-textSecondary font-medium">{owner}</td>
            <td className="px-8 py-6">
                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${statusColors[status]}`}>
                    {status}
                </span>
            </td>
            <td className="px-8 py-6">
                <div className="flex items-center gap-3">
                    <div className="flex-1 bg-inviteease-bgLight border border-inviteease-border rounded-full h-2 flex overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-1000 ${status === 'Active' ? 'bg-emerald-500' : 'bg-inviteease-primary'}`}
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <span className="text-xs font-bold text-inviteease-textSecondary w-8 text-right">{progress}%</span>
                </div>
            </td>
            <td className="px-8 py-6">
                <button className="p-2.5 hover:bg-inviteease-bgLight rounded-xl text-inviteease-textSecondary hover:text-inviteease-primary transition-all">
                    <Settings className="w-5 h-5" />
                </button>
            </td>
        </tr>
    );
};

export default AdminDashboard;
