import React, { useState } from 'react';
import { DollarSign, Users, Clock, TrendingDown, Calculator, BarChart3, Percent, Zap } from 'lucide-react';

export default function AIContactCenterROI() {
  // Core inputs
  const [aht, setAht] = useState(10);
  const [acw, setAcw] = useState(1);
  const [agentRate, setAgentRate] = useState(10.00);
  const [monthlyVolume, setMonthlyVolume] = useState(20000);
  const [ftes, setFtes] = useState(20);
  const [containmentRate, setContainmentRate] = useState(25);
  const [aiMonthlyCost, setAiMonthlyCost] = useState(5000);

  // Calculations
  const annualVolume = monthlyVolume * 12;
  const totalHandleTime = aht + acw; // minutes
  const automatedInteractions = annualVolume * (containmentRate / 100);
  const hoursAutomated = (automatedInteractions * totalHandleTime) / 60;
  const annualLaborSavings = hoursAutomated * agentRate;
  const fteSavings = hoursAutomated / 2080; // standard work year

  // New: FTE-aware calculations
  const currentLaborCost = ftes * 2080 * agentRate;
  const costPerInteraction = annualVolume > 0 ? currentLaborCost / annualVolume : 0;
  const aiCostPerInteraction = automatedInteractions > 0 ? (aiMonthlyCost * 12) / automatedInteractions : 0;
  const blendedCostPerInteraction = annualVolume > 0
    ? ((currentLaborCost - annualLaborSavings) + (aiMonthlyCost * 12)) / annualVolume
    : 0;

  // New: ROI & payback
  const annualAiCost = aiMonthlyCost * 12;
  const netAnnualSavings = annualLaborSavings - annualAiCost;
  const roiPercent = annualAiCost > 0 ? ((netAnnualSavings) / annualAiCost) * 100 : 0;
  const paybackMonths = annualLaborSavings > 0 ? (annualAiCost / annualLaborSavings) * 12 : 0;

  // New: FTE utilization
  const ftePercentReduction = ftes > 0 ? (fteSavings / ftes) * 100 : 0;

  const fmt = (n, decimals = 0) =>
    n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  const fmtCurrency = (n) => '$' + fmt(n);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-socium-background font-body min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

        {/* Header */}
        <div className="border-b border-gray-300 pb-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="w-8 h-8 text-socium-secondary" />
            <h1 className="text-2xl sm:text-3xl font-heading font-bold text-socium-primary">AI Contact Center ROI Calculator</h1>
          </div>
          <p className="text-socium-accent text-sm">Estimate labor savings, cost-per-interaction impact, and payback period for AI automation</p>
        </div>

        {/* ─── INPUTS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

          {/* Current Operations */}
          <div className="bg-socium-background rounded-lg p-5 space-y-4">
            <h3 className="font-heading font-bold text-socium-primary text-sm uppercase tracking-wide flex items-center gap-2">
              <Users className="w-4 h-4" /> Current Operations
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-socium-accent mb-1">
                  <Clock className="w-3 h-3 inline mr-1" />AHT (min)
                </label>
                <input type="number" value={aht} onChange={(e) => setAht(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-socium-secondary focus:border-transparent text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-socium-accent mb-1">
                  <Clock className="w-3 h-3 inline mr-1" />ACW (min)
                </label>
                <input type="number" value={acw} onChange={(e) => setAcw(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-socium-secondary focus:border-transparent text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-socium-accent mb-1">
                <DollarSign className="w-3 h-3 inline mr-1" />Agent Hourly Rate (Fully Loaded)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-socium-accent text-sm">$</span>
                <input type="number" step="0.01" value={agentRate}
                  onChange={(e) => setAgentRate(parseFloat(e.target.value) || 0)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-socium-secondary focus:border-transparent text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-socium-accent mb-1">Monthly Interaction Volume</label>
              <input type="number" value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-socium-secondary focus:border-transparent text-sm" />
            </div>

            <div>
              <label className="block text-xs font-semibold text-socium-accent mb-1">
                <Users className="w-3 h-3 inline mr-1" />Current Agents (FTEs)
              </label>
              <input type="number" value={ftes}
                onChange={(e) => setFtes(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-socium-secondary focus:border-transparent text-sm" />
            </div>
          </div>

          {/* AI Automation */}
          <div className="bg-socium-secondary/5 rounded-lg p-5 space-y-4 border-2 border-socium-secondary">
            <h3 className="font-heading font-bold text-socium-secondary text-sm uppercase tracking-wide flex items-center gap-2">
              <Zap className="w-4 h-4" /> AI Automation
            </h3>

            <div>
              <label className="block text-xs font-semibold text-socium-primary mb-1">Containment Rate</label>
              <div className="flex items-center gap-3">
                <input type="range" min="0" max="100" value={containmentRate}
                  onChange={(e) => setContainmentRate(parseInt(e.target.value))}
                  className="flex-1 accent-socium-secondary" />
                <span className="font-bold text-socium-secondary w-12 text-right text-lg">{containmentRate}%</span>
              </div>
              <p className="text-xs text-socium-accent mt-1">Percentage of interactions AI can fully resolve without an agent</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-socium-primary mb-1">
                <DollarSign className="w-3 h-3 inline mr-1" />AI Platform Monthly Cost
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-socium-accent text-sm">$</span>
                <input type="number" step="100" value={aiMonthlyCost}
                  onChange={(e) => setAiMonthlyCost(parseFloat(e.target.value) || 0)}
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-socium-secondary focus:border-transparent text-sm" />
              </div>
              <p className="text-xs text-socium-accent mt-1">Total monthly cost of the AI platform (licensing, usage, etc.)</p>
            </div>
          </div>

          {/* Quick Stats - live mini-cards */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-socium-primary text-sm uppercase tracking-wide flex items-center gap-2">
              <BarChart3 className="w-4 h-4" /> Quick View
            </h3>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-4 border border-socium-secondary">
              <p className="text-xs text-socium-accent uppercase tracking-wide mb-1">Net Annual Savings</p>
              <p className="text-2xl font-heading font-bold text-socium-secondary">{fmtCurrency(netAnnualSavings)}</p>
              <p className="text-xs text-socium-accent mt-1">After AI platform costs</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-socium-background rounded-lg p-3">
                <p className="text-xs text-socium-accent uppercase tracking-wide mb-1">ROI</p>
                <p className="text-xl font-heading font-bold text-socium-primary">{fmt(roiPercent, 0)}%</p>
              </div>
              <div className="bg-socium-background rounded-lg p-3">
                <p className="text-xs text-socium-accent uppercase tracking-wide mb-1">Payback</p>
                <p className="text-xl font-heading font-bold text-socium-primary">{fmt(paybackMonths, 1)} mo</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-socium-background rounded-lg p-3">
                <p className="text-xs text-socium-accent uppercase tracking-wide mb-1">FTE Reduction</p>
                <p className="text-xl font-heading font-bold text-socium-primary">{fmt(fteSavings, 1)}</p>
                <p className="text-xs text-socium-accent">{fmt(ftePercentReduction, 0)}% of team</p>
              </div>
              <div className="bg-socium-background rounded-lg p-3">
                <p className="text-xs text-socium-accent uppercase tracking-wide mb-1">Hours Saved</p>
                <p className="text-xl font-heading font-bold text-socium-primary">{fmt(hoursAutomated)}</p>
                <p className="text-xs text-socium-accent">per year</p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── DETAILED RESULTS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Savings Breakdown */}
          <div className="bg-socium-background rounded-lg p-5">
            <h3 className="font-heading font-bold text-socium-primary text-sm uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 flex items-center gap-2">
              <TrendingDown className="w-4 h-4" /> Savings Breakdown
            </h3>
            <div className="space-y-2">
              <Row label="Annual Interaction Volume" value={`${fmt(annualVolume)} interactions`} />
              <Row label="Total Handle Time" value={`${totalHandleTime} min (AHT ${aht} + ACW ${acw})`} />
              <Row label="Automated Interactions" value={fmt(automatedInteractions)} highlight />
              <Row label="Hours Automated" value={`${fmt(hoursAutomated)} hours`} />
              <Row label="Gross Labor Savings" value={fmtCurrency(annualLaborSavings)} />
              <Row label="AI Platform Cost (Annual)" value={`- ${fmtCurrency(annualAiCost)}`} />
              <div className="flex justify-between items-center py-3 bg-red-50 px-3 rounded-lg mt-2 border border-socium-secondary">
                <span className="text-sm font-heading font-bold text-socium-primary">NET ANNUAL SAVINGS</span>
                <span className="font-heading font-bold text-socium-secondary text-lg">{fmtCurrency(netAnnualSavings)}</span>
              </div>
            </div>
          </div>

          {/* Cost Per Interaction & FTE Impact */}
          <div className="space-y-6">
            <div className="bg-socium-background rounded-lg p-5">
              <h3 className="font-heading font-bold text-socium-primary text-sm uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 flex items-center gap-2">
                <Percent className="w-4 h-4" /> Cost Per Interaction
              </h3>
              <div className="space-y-2">
                <Row label="Current (Agent Only)" value={`$${fmt(costPerInteraction, 2)}`} />
                <Row label="AI Automated" value={`$${fmt(aiCostPerInteraction, 2)}`} />
                <Row label="Blended (After AI)" value={`$${fmt(blendedCostPerInteraction, 2)}`} highlight />
              </div>
            </div>

            <div className="bg-socium-background rounded-lg p-5">
              <h3 className="font-heading font-bold text-socium-primary text-sm uppercase tracking-wide border-b border-gray-300 pb-2 mb-4 flex items-center gap-2">
                <Users className="w-4 h-4" /> Workforce Impact
              </h3>
              <div className="space-y-2">
                <Row label="Current FTEs" value={fmt(ftes, 1)} />
                <Row label="FTE Equivalent Savings" value={fmt(fteSavings, 1)} />
                <Row label="Remaining FTE Need" value={fmt(Math.max(ftes - fteSavings, 0), 1)} highlight />
                <Row label="Team Reduction" value={`${fmt(ftePercentReduction, 0)}%`} />
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="bg-socium-primary rounded-lg p-5 text-white mt-6">
          <h3 className="font-heading font-bold text-sm uppercase tracking-wide mb-3 text-socium-background">Executive Summary</h3>
          <p className="text-sm leading-relaxed">
            With a <span className="font-bold text-socium-background">{containmentRate}% containment rate</span> across{' '}
            <span className="font-bold text-socium-background">{fmt(annualVolume)}</span> annual interactions,
            AI automation can resolve <span className="font-bold text-socium-background">{fmt(automatedInteractions)}</span> interactions
            without agent involvement — eliminating <span className="font-bold text-socium-background">{fmt(hoursAutomated)}</span> labor hours
            and reducing the team by <span className="font-bold text-socium-background">{fmt(fteSavings, 1)} FTEs</span> ({fmt(ftePercentReduction, 0)}% of the current {fmt(ftes, 0)} agents).
            After accounting for <span className="font-bold text-socium-background">{fmtCurrency(annualAiCost)}</span> in annual platform costs,
            net savings are <span className="font-bold text-rose-300">{fmtCurrency(netAnnualSavings)}</span> per year
            with a <span className="font-bold text-socium-background">{fmt(roiPercent, 0)}% ROI</span> and{' '}
            <span className="font-bold text-socium-background">{fmt(paybackMonths, 1)}-month payback</span>.
            Cost per interaction drops from <span className="font-bold text-socium-background">${fmt(costPerInteraction, 2)}</span> to{' '}
            <span className="font-bold text-socium-background">${fmt(blendedCostPerInteraction, 2)}</span> blended.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-300 text-center text-sm text-socium-accent">
          <p className="font-semibold">Socium IT | AI Contact Center ROI Calculator | {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}

// Reusable row component for the breakdown tables
function Row({ label, value, highlight = false }) {
  return (
    <div className={`flex justify-between items-center py-2 px-2 rounded ${highlight ? 'bg-socium-secondary/10 font-semibold' : 'border-b border-gray-200'}`}>
      <span className={`text-sm ${highlight ? 'text-socium-secondary' : 'text-socium-accent'}`}>{label}</span>
      <span className={`text-sm ${highlight ? 'text-socium-secondary font-bold' : 'font-semibold text-socium-primary'}`}>{value}</span>
    </div>
  );
}
