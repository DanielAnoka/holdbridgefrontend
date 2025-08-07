import React from 'react'
import DashboardHeader from '../../../components/ui/header'
import StatsCard from '../../../components/ui/statsCard'
import { DollarSign, ShieldCheck, CheckCircle2, LineChart, Wallet } from 'lucide-react';
import Longcard from '../../../components/Longcard';
import ActionCard from '../../../components/action-card';
import { Shield, Users2, Send, ShoppingBag } from 'lucide-react';
import WalletGrid from '../../../components/Molecule/WalletGrid';
import RecentActivity from '../../../components/Molecule/RecentActivity';


const actions = [
    { label: 'Escrows', icon: Shield },
    { label: 'P2P', icon: Users2 },
    { label: 'Payments', icon: Send },
    { label: 'Marketplace', icon: ShoppingBag },
];
const walletData = [
    { label: 'USD', value: '$8,564.12', color: 'bg-wallet-green', dotColor: 'bg-green-400' },
    { label: 'BTC', value: '0.05473', color: 'bg-wallet-btc', dotColor: 'bg-orange-400' },
    { label: 'ETH', value: '1.2564', color: 'bg-wallet-eth', dotColor: 'bg-blue-400' },
    { label: 'USDT', value: '700', color: 'bg-wallet-usdt', dotColor: 'bg-purple-400' },
];
const activityData = [
  {
    type: 'created',
    title: 'Escrow Created',
    user: 'Alice Johnson',
    time: '2 hours ago',
    amount: 2500,
    status: 'Pending',
  },
  {
    type: 'dispute',
    title: 'Dispute Resolved',
    user: 'Alice Johnson',
    time: '2 hours ago',
    amount: 2500,
    status: 'Completed',
  },
  {
    type: 'completed',
    title: 'Escrow Completed',
    user: 'Alice Johnson',
    time: '2 hours ago',
    amount: 2500,
    status: 'Completed',
  },
];

const Dashboard = () => {
    return (
        <div className=' w-full  text-white px-5 md:px-10 bg-[#0C0C1E]  '>
            <DashboardHeader
                title='Dashboard'
                subtitle='Welcome! Here’s what’s happening with your account'
            />
            <div className='space-y-5 mb-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  py-6 ">
                    <StatsCard
                        label="Total Balance"
                        value="$12,761.73"
                        currency="USD"
                        icon={DollarSign}
                        trendValue="+7.8%"
                        trendLabel=""
                        trendType="up"
                        bgColor="bg-[#111827]"
                    />
                    <StatsCard
                        label="Active Escrows"
                        value="23"
                        icon={ShieldCheck}
                        trendValue="+2"
                        trendLabel="this week"
                        trendType="up"
                        bgColor="bg-[#0F2B20]"
                    />
                    <StatsCard
                        label="Completed Deals"
                        value="156"
                        icon={CheckCircle2}
                        trendValue="+7"
                        trendLabel="this month"
                        trendType="up"
                        bgColor="bg-[#1A1414]"
                    />
                    <StatsCard
                        label="Success Rate"
                        value="98.5%"
                        icon={LineChart}
                        trendValue="-1.8%"
                        trendLabel=""
                        trendType="down"
                        bgColor="bg-[#13152C]"
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-4 w-full">
                    <Longcard title="Quick Actions" border="sm:border sm:border-white/10" >
                        <div className="flex sm:grid sm:grid-cols-2 gap-2 sm:gap-3 overflow-x-auto no-scrollbar">
                            {actions.map(({ label, icon }, idx) => (
                                <ActionCard key={idx} label={label} icon={icon} />
                            ))}
                        </div>
                    </Longcard>
                    <Longcard title="Recent Activity" border="border border-white/10" >
                     <RecentActivity activities={activityData} />
                    </Longcard>
                </div>
                <div className='mb-10'>
                    <Longcard title="Wallet Overview" border="border border-white/10" icon={Wallet} actionButton="Manage" onAction={() => {
                        console.log('Manage button clicked');
                    }}>
                        <WalletGrid data={walletData} />
                    </Longcard>
                </div>
            </div>

        </div>
    )
}

export default Dashboard