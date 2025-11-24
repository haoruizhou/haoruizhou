<h1 class="text-2xl text-white font-bold mb-2">AUTO-SCRAPER: FINANCIAL PIPELINE</h1>
<div class="text-gray-500 text-xs mb-4 border-b border-gray-700 pb-2">DATE: MAY 2025 // LOC: SHANGHAI</div>

<div class="flex gap-2 mb-8">
<span class="px-2 py-1 bg-yellow-900 text-yellow-200 border border-yellow-700 rounded text-xs">SELENIUM</span>
<span class="px-2 py-1 bg-blue-900 text-blue-200 border border-blue-700 rounded text-xs">POSTGRESQL</span>
</div>

<h3>// PIPELINE CONTROL PANEL</h3>
<div class="grid grid-cols-2 gap-3 font-mono text-xs mb-6">
<div class="bg-gray-900 p-4 border border-gray-700 rounded cursor-pointer hover:border-amber-500 transition group select-none" onclick="toggleStatus(this)">
<div class="text-gray-500 mb-2 text-[10px] tracking-wider">PROXY_ROTATION</div>
<div class="status-indicator text-green-500 font-bold flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span> ACTIVE
</div>
</div>
<div class="bg-gray-900 p-4 border border-gray-700 rounded cursor-pointer hover:border-amber-500 transition group select-none" onclick="toggleStatus(this)">
<div class="text-gray-500 mb-2 text-[10px] tracking-wider">HEADLESS_MODE</div>
<div class="status-indicator text-green-500 font-bold flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span> ACTIVE
</div>
</div>
<div class="bg-gray-900 p-4 border border-gray-700 rounded cursor-pointer hover:border-amber-500 transition group select-none" onclick="toggleStatus(this)">
<div class="text-gray-500 mb-2 text-[10px] tracking-wider">LLM_SUMMARIZER</div>
<div class="status-indicator text-red-500 font-bold flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]"></span> OFFLINE
</div>
</div>
<div class="bg-gray-900 p-4 border border-gray-700 rounded cursor-pointer hover:border-amber-500 transition group select-none" onclick="toggleStatus(this)">
<div class="text-gray-500 mb-2 text-[10px] tracking-wider">DB_SYNC_SERVICE</div>
<div class="status-indicator text-green-500 font-bold flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span> ACTIVE
</div>
</div>
</div>

<h3>// ENGINEERING</h3>
<p>I engineered a middleware solution within the ETL pipeline that uses Headless Selenium for scraping and local LLMs for privacy-focused summarization.</p>