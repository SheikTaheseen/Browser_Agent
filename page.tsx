'use client'

import { useState } from 'react'
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock3,
  ExternalLink,
  Globe2,
  Laptop,
  Menu,
  Monitor,
  MoreHorizontal,
  Play,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
  UserRound,
  X,
  XCircle,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Dashboard', icon: Monitor },
  { label: 'Agent Tasks', icon: Zap },
  { label: 'Multi-Browser', icon: Globe2 },
  { label: 'Task History', icon: Clock3 },
  { label: 'Risk & Safety', icon: ShieldCheck },
  { label: 'Settings', icon: Settings },
]

const browsers = [
  { name: 'Chrome', color: 'bg-blue-500', short: 'C' },
  { name: 'Firefox', color: 'bg-orange-500', short: 'F' },
  { name: 'Edge', color: 'bg-cyan-500', short: 'E' },
]

const history = [
  ['Find laptop under ₹60,000', 'Chrome', 'Completed', '1 risk event', 'Approved', 'Today, 10:42 AM'],
  ['Search for wireless headphones', 'Firefox', 'Completed', '0 risk events', 'Not required', 'Yesterday, 4:18 PM'],
  ['Find flight tickets to Delhi', 'Edge', 'Rejected', '1 risk event', 'Rejected', 'Oct 08, 2:31 PM'],
]

export default function Page() {
  const [task, setTask] = useState('Find a laptop under ₹60,000 and add it to the cart.')
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [selectedBrowser, setSelectedBrowser] = useState('Chrome')
  const [multiBrowser, setMultiBrowser] = useState(false)
  const [status, setStatus] = useState<'idle' | 'running' | 'approval' | 'completed' | 'rejected'>('idle')
  const [showApproval, setShowApproval] = useState(false)
  const [planOpen, setPlanOpen] = useState(true)

  const runAgent = () => {
    setStatus('running')
    window.setTimeout(() => setStatus('approval'), 1800)
  }

  const approve = () => {
    setShowApproval(false)
    setStatus('completed')
  }

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex size-9 items-center justify-center rounded-xl bg-slate-900 text-white"><SquareTerminal className="size-4" /></div>
          <div><p className="text-sm font-semibold tracking-tight">Control Plane</p><p className="text-[11px] text-slate-500">Automation console</p></div>
        </div>
        <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Main navigation">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Workspace</p>
          {navItems.map(({ label, icon: Icon }) => <button key={label} onClick={() => setActiveNav(label)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${activeNav === label ? 'bg-slate-100 font-semibold text-slate-900' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}><Icon className="size-4" />{label}{label === 'Risk & Safety' && <span className="ml-auto size-2 rounded-full bg-amber-500" />}</button>)}
        </nav>
        <div className="border-t border-slate-100 p-4"><div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3"><div className="flex size-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold">JD</div><div className="min-w-0"><p className="truncate text-xs font-semibold">Jordan Davis</p><p className="truncate text-[11px] text-slate-500">Research workspace</p></div><MoreHorizontal className="ml-auto size-4 text-slate-400" /></div></div>
      </aside>

      <div className="lg:pl-64">
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8"><div className="flex items-center gap-3"><button className="lg:hidden"><Menu className="size-5" /></button><div><h1 className="text-base font-semibold tracking-tight sm:text-lg">Risk-Aware Browser Automation Agent</h1><p className="hidden text-xs text-slate-500 sm:block">Reliable and human-controlled web task execution</p></div></div><div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:flex"><span className="size-1.5 rounded-full bg-emerald-500" />System operational</div><button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Settings"><Settings className="size-4" /></button><div className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">JD</div></div></header>

        <main className="mx-auto max-w-[1500px] p-5 sm:p-8">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Workspace / {activeNav}</p><h2 className="text-2xl font-semibold tracking-tight">Good morning, Jordan</h2><p className="mt-1 text-sm text-slate-500">Configure a task and keep control at every step.</p></div><div className="flex items-center gap-2 text-xs text-slate-500"><Activity className="size-4" /> <span>Session ready</span></div></div>

          <section className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-100 px-6 py-5"><div className="flex items-center justify-between"><div><h3 className="font-semibold">What should the agent do?</h3><p className="mt-1 text-xs text-slate-500">Describe the outcome in natural language.</p></div><Sparkles className="size-5 text-slate-400" /></div></div><div className="p-6"><div className="relative"><textarea value={task} onChange={(e) => setTask(e.target.value)} className="min-h-32 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-4 pr-12 text-sm leading-6 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100" aria-label="Task description" /><button onClick={() => setTask('')} className="absolute right-3 top-3 rounded-md p-1 text-slate-400 hover:bg-white hover:text-slate-700" aria-label="Clear task"><X className="size-4" /></button></div><div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900"><ChevronDown className="size-3.5" /> Example task</button><Button onClick={runAgent} disabled={!task || status === 'running'} className="gap-2 rounded-lg bg-slate-900 px-5 text-white hover:bg-slate-700"><Play className="size-4" />{status === 'running' ? 'Agent is planning...' : status === 'approval' ? 'Waiting for approval' : status === 'completed' ? 'Run another task' : 'Run Agent'}</Button></div><div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500"><ShieldCheck className="size-4 text-emerald-600" /> The agent will ask for your approval before performing risky actions.</div></div></div>

            <div className="rounded-xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-100 px-6 py-5"><h3 className="font-semibold">Browser Environment</h3><p className="mt-1 text-xs text-slate-500">Choose where this task will be observed.</p></div><div className="p-6"><div className="grid grid-cols-3 gap-2">{browsers.map((browser) => <button key={browser.name} onClick={() => setSelectedBrowser(browser.name)} className={`rounded-lg border p-3 text-center transition ${selectedBrowser === browser.name && !multiBrowser ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900' : 'border-slate-200 hover:border-slate-400'}`}><span className={`mx-auto mb-2 flex size-8 items-center justify-center rounded-lg ${browser.color} text-xs font-bold text-white`}>{browser.short}</span><span className="text-xs font-medium">{browser.name}</span></button>)}</div><label className="mt-5 flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 p-3"><span><span className="block text-sm font-medium">Run on Multiple Browsers</span><span className="block text-[11px] text-slate-500">Execute across selected environments</span></span><input type="checkbox" checked={multiBrowser} onChange={(e) => setMultiBrowser(e.target.checked)} className="size-4 accent-slate-900" /></label><div className="mt-4 flex items-center gap-2 text-xs text-slate-500"><span className="size-1.5 rounded-full bg-slate-400" />{multiBrowser ? 'Same task will be mirrored across browser environments.' : `${selectedBrowser} selected for this task.`}</div></div></div>
          </section>

          <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]"><BrowserPreview status={status} browser={selectedBrowser} /><ActivityPanel status={status} onApprove={() => setShowApproval(true)} /></section>

          <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]"><div className="rounded-xl border border-slate-200 bg-white shadow-sm"><button onClick={() => setPlanOpen(!planOpen)} className="flex w-full items-center justify-between px-6 py-5 text-left"><div><h3 className="font-semibold">Agent Plan</h3><p className="mt-1 text-xs text-slate-500">A transparent sequence of intended actions.</p></div><ChevronDown className={`size-4 text-slate-400 transition ${planOpen ? 'rotate-180' : ''}`} /></button>{planOpen && <div className="border-t border-slate-100 px-6 py-3">{['Understand task', 'Open shopping website', 'Search for laptops', 'Apply price limit of ₹60,000', 'Analyze results', 'Select matching product', 'Request approval before adding to cart', 'Add product to cart after approval'].map((step, i) => <div key={step} className="flex items-center gap-3 border-b border-slate-50 py-3 last:border-0"><span className={`flex size-6 items-center justify-center rounded-full text-[11px] font-semibold ${i < (status === 'idle' ? 0 : status === 'running' ? 4 : status === 'approval' ? 6 : 8) ? 'bg-emerald-100 text-emerald-700' : i === 6 && status === 'approval' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-400'}`}>{i < (status === 'idle' ? 0 : status === 'running' ? 4 : status === 'approval' ? 6 : 8) ? <Check className="size-3" /> : i + 1}</span><span className="text-sm text-slate-700">{step}</span><span className="ml-auto text-[10px] font-medium uppercase tracking-wide text-slate-400">{i < (status === 'idle' ? 0 : status === 'running' ? 4 : status === 'approval' ? 6 : 8) ? 'Completed' : i === 6 && status === 'approval' ? 'Blocked' : 'Pending'}</span></div>)}</div>}</div><RiskPanel status={status} onApprove={() => setShowApproval(true)} onReject={() => setStatus('rejected')} /></section>

          <section className="mt-5 rounded-xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 px-6 py-5"><div><h3 className="font-semibold">Task History</h3><p className="mt-1 text-xs text-slate-500">Previous agent executions in this workspace.</p></div><Button variant="outline" size="sm" className="gap-2"><ExternalLink className="size-3.5" />View all</Button></div><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400"><tr>{['Task', 'Browser', 'Status', 'Risk events', 'User decision', 'Date', ''].map((h) => <th key={h} className="px-6 py-3 font-semibold">{h}</th>)}</tr></thead><tbody>{history.map((row) => <tr key={row[0]} className="border-t border-slate-100"><td className="px-6 py-4 font-medium text-slate-700">{row[0]}</td><td className="px-6 py-4 text-slate-500">{row[1]}</td><td className="px-6 py-4"><StatusBadge value={row[2]} /></td><td className="px-6 py-4 text-slate-500">{row[3]}</td><td className="px-6 py-4 text-slate-500">{row[4]}</td><td className="px-6 py-4 text-xs text-slate-400">{row[5]}</td><td className="px-6 py-4"><button className="text-slate-400 hover:text-slate-900" aria-label={`View ${row[0]}`}><ArrowRight className="size-4" /></button></td></tr>)}</tbody></table></div></section>
        </main>
      </div>

      {showApproval && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 p-4" role="dialog" aria-modal="true" aria-labelledby="approval-title"><div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-2xl"><div className="mb-5 flex items-start justify-between"><div className="flex size-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700"><AlertTriangle className="size-5" /></div><button onClick={() => setShowApproval(false)} className="text-slate-400 hover:text-slate-900" aria-label="Close dialog"><X className="size-5" /></button></div><h2 id="approval-title" className="text-lg font-semibold">Human Approval Required</h2><p className="mt-1 text-sm text-slate-500">The agent has paused before a state-changing action.</p><div className="mt-5 rounded-lg bg-slate-50 p-4"><p className="text-xs text-slate-500">The agent wants to perform</p><p className="mt-1 font-medium">Add “Laptop XYZ” to the cart</p><div className="mt-4 flex items-center gap-2"><span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700">Medium risk</span><span className="text-xs text-slate-500">Modifies shopping state</span></div></div><div className="mt-6 flex gap-3"><Button variant="outline" className="flex-1" onClick={() => { setShowApproval(false); setStatus('rejected') }}>Reject</Button><Button className="flex-1 bg-slate-900 text-white hover:bg-slate-700" onClick={approve}>Approve & Continue</Button></div></div></div>}
    </div>
  )
}

function BrowserPreview({ status, browser }: { status: string; browser: string }) { return <div className="rounded-xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 px-6 py-5"><div><h3 className="font-semibold">Browser Preview</h3><p className="mt-1 text-xs text-slate-500">A visual surface for the future browser stream.</p></div><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">{browser}</span></div><div className="p-5"><div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50"><div className="flex items-center gap-3 border-b border-slate-200 bg-white px-3 py-2"><div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-slate-200" /><span className="size-2.5 rounded-full bg-slate-200" /><span className="size-2.5 rounded-full bg-slate-200" /></div><div className="flex items-center gap-2 text-slate-400"><ArrowLeft className="size-3.5" /><ArrowRight className="size-3.5" /><RefreshCw className="size-3.5" /></div><div className="flex flex-1 items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 text-[11px] text-slate-400"><Search className="size-3" /> shop.example.com</div></div><div className="flex min-h-[270px] items-center justify-center p-8">{status === 'idle' ? <div className="text-center"><div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-300"><Monitor className="size-5" /></div><p className="text-sm font-medium text-slate-700">Browser is ready</p><p className="mt-1 text-xs text-slate-500">Start an agent task to begin browser execution.</p></div> : <div className="w-full max-w-sm rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-lg bg-slate-100"><Laptop className="size-5 text-slate-500" /></div><div><p className="text-xs text-slate-400">Search results</p><p className="font-semibold">Laptop XYZ</p></div></div><p className="text-xl font-semibold">₹54,999</p><p className="mt-1 text-xs text-slate-500">16GB RAM · 512GB SSD · In stock</p><div className="mt-4 flex gap-2"><Button variant="outline" size="sm" className="flex-1 text-xs">View Product</Button><Button size="sm" className="flex-1 text-xs" disabled={status === 'approval'}>Add to Cart</Button></div>{status === 'approval' && <p className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-amber-700"><AlertTriangle className="size-3.5" /> Action paused for approval</p>}</div>}</div></div></div></div> }

function ActivityPanel({ status, onApprove }: { status: string; onApprove: () => void }) { const events = [{ title: 'Planning', desc: 'Understanding user request and creating execution plan', state: status === 'idle' ? 'pending' : 'completed' }, { title: 'Running', desc: status === 'idle' ? 'Opening website and searching for laptop' : 'Searching, filtering and comparing results', state: status === 'running' ? 'running' : status === 'idle' ? 'pending' : 'completed' }, { title: 'Risk Detection', desc: 'Add to cart action detected', state: status === 'approval' ? 'warning' : status === 'completed' || status === 'rejected' ? 'completed' : 'pending' }, { title: 'Waiting for Approval', desc: status === 'approval' ? 'Human approval required' : 'No pending decisions', state: status === 'approval' ? 'warning' : 'pending' }, { title: 'Completed', desc: status === 'completed' ? 'Task completed successfully' : status === 'rejected' ? 'Action rejected by user' : 'Task has not completed', state: status === 'completed' ? 'completed' : status === 'rejected' ? 'failed' : 'pending' }]; return <div className="rounded-xl border border-slate-200 bg-white shadow-sm"><div className="border-b border-slate-100 px-6 py-5"><div className="flex items-center justify-between"><div><h3 className="font-semibold">Agent Activity</h3><p className="mt-1 text-xs text-slate-500">Live execution timeline</p></div><span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400"><span className={`size-1.5 rounded-full ${status === 'running' ? 'animate-pulse bg-blue-500' : 'bg-slate-300'}`} />{status === 'running' ? 'Live' : 'Standby'}</span></div></div><div className="p-6">{events.map((event, i) => <div key={event.title} className="relative flex gap-3 pb-5 last:pb-0"><div className="relative flex flex-col items-center">{i < events.length - 1 && <span className="absolute top-6 h-full w-px bg-slate-100" />}<EventIcon state={event.state} /></div><div className="min-w-0"><div className="flex items-center gap-2"><p className="text-sm font-medium">{event.title}</p>{event.state === 'warning' && <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-700">Action needed</span>}</div><p className="mt-1 text-xs leading-5 text-slate-500">{event.desc}</p><p className="mt-1 text-[10px] text-slate-400">{event.state === 'pending' ? 'Waiting' : 'Just now'}</p>{event.state === 'warning' && <Button variant="outline" size="sm" className="mt-3 h-8 gap-1.5 text-xs" onClick={onApprove}>Review action <ArrowRight className="size-3" /></Button>}</div></div>)}</div></div> }

function EventIcon({ state }: { state: string }) { return <div className={`relative z-10 flex size-6 items-center justify-center rounded-full border-2 bg-white ${state === 'completed' ? 'border-emerald-500 text-emerald-600' : state === 'warning' ? 'border-amber-500 text-amber-600' : state === 'failed' ? 'border-red-400 text-red-500' : state === 'running' ? 'border-blue-500 text-blue-500' : 'border-slate-200 text-slate-300'}`}>{state === 'completed' ? <Check className="size-3" /> : state === 'warning' ? <AlertTriangle className="size-3" /> : state === 'failed' ? <X className="size-3" /> : state === 'running' ? <Circle className="size-2 fill-current" /> : <Clock3 className="size-3" />}</div> }

function RiskPanel({ status, onApprove, onReject }: { status: string; onApprove: () => void; onReject: () => void }) { return <div className="rounded-xl border border-amber-200 bg-amber-50/60 shadow-sm"><div className="border-b border-amber-200/70 px-6 py-5"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-lg bg-amber-100 text-amber-700"><ShieldCheck className="size-4" /></div><div><h3 className="font-semibold">Risk & Safety</h3><p className="mt-1 text-xs text-amber-800/70">Human control checkpoint</p></div></div></div><div className="p-6"><div className="flex items-end justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-800/60">Current risk level</p><p className="mt-1 text-2xl font-semibold text-amber-800">{status === 'approval' ? 'MEDIUM' : status === 'rejected' ? 'REJECTED' : 'LOW'}</p></div><AlertTriangle className="size-5 text-amber-600" /></div><div className="mt-5 rounded-lg border border-amber-200/70 bg-white/70 p-4"><p className="text-xs text-slate-500">Action</p><p className="mt-1 text-sm font-semibold text-slate-800">Add laptop to cart</p><p className="mt-3 text-xs text-slate-500">Reason</p><p className="mt-1 text-xs leading-5 text-slate-600">This action modifies the user&apos;s shopping state.</p></div>{status === 'approval' ? <><p className="mt-4 flex items-center gap-2 text-xs font-semibold text-amber-800"><AlertTriangle className="size-3.5" /> Human approval required</p><div className="mt-4 flex gap-2"><Button variant="outline" size="sm" className="flex-1 border-amber-300 bg-transparent text-amber-800 hover:bg-amber-100" onClick={onReject}>Reject</Button><Button size="sm" className="flex-1 bg-amber-700 text-white hover:bg-amber-800" onClick={onApprove}>Approve Action</Button></div></> : <p className="mt-4 text-xs text-amber-800/70">{status === 'completed' ? 'Approved action completed.' : 'No risky action is currently pending.'}</p>}</div></div> }

function StatusBadge({ value }: { value: string }) { const styles = value === 'Completed' ? 'bg-emerald-50 text-emerald-700' : value === 'Rejected' ? 'bg-red-50 text-red-700' : 'bg-slate-100 text-slate-600'; return <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${styles}`}>{value}</span> }

// Backend-ready service boundary for the future Spring Boot API.
export const agentService = { startAgentTask: async () => null, getAgentStatus: async () => null, getAgentEvents: async () => [], approveRiskyAction: async () => null, rejectRiskyAction: async () => null, getTaskHistory: async () => [], getExecutionDetails: async () => null }
