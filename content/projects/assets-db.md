<h1 class="text-2xl text-white font-bold mb-2">ASSETS DB: INVENTORY MANAGEMENT</h1>
<div class="text-gray-500 text-xs mb-4 border-b border-gray-700 pb-2">DATE: DEC 2025 // TEAM: WESTERN FORMULA RACING</div>

<div class="flex gap-2 mb-8">
<span class="px-2 py-1 bg-blue-900 text-blue-200 border border-blue-700 rounded text-xs">Python</span>
<span class="px-2 py-1 bg-purple-900 text-purple-200 border border-purple-700 rounded text-xs">PostgreSQL</span>
<span class="px-2 py-1 bg-orange-900 text-orange-200 border border-orange-700 rounded text-xs">Database</span>
</div>

<h3>// SQL PLAYGROUND</h3>
<div class="bg-black border border-gray-700 p-4 rounded font-mono text-xs mb-6">
<div class="flex justify-between mb-2">
<span class="text-purple-400">postgres=# </span>
<span id="db-status" class="text-green-500 font-bold">● CONNECTED</span>
</div>
<div class="bg-gray-900 p-2 rounded mb-3 border border-gray-800">
<span class="text-blue-400">SELECT</span> <span class="text-white">part_name, status, cost</span><br>
<span class="text-blue-400">FROM</span> <span class="text-white">inventory</span><br>
<span class="text-blue-400">WHERE</span> <span class="text-white">status = </span><span class="text-green-400">'pending'</span><br>
<span class="text-blue-400">LIMIT</span> <span class="text-yellow-400">3</span><span class="text-white blink">█</span>
</div>
<button onclick="simulateAssetsQuery()" class="bg-purple-900/50 hover:bg-purple-800 text-purple-200 px-3 py-2 rounded border border-purple-700 w-full mb-3 transition">
[ EXECUTE QUERY ]
</button>
<div id="query-results" class="font-mono text-[10px] text-gray-600 border-t border-gray-800 pt-2 min-h-[60px]">
<span class="text-gray-500">// Ready to execute. Database contains 247 items...</span>
</div>
</div>

<h3>// SQL DATABASE</h3>
<p>My team, Western Formula Racing, previously used an excel sheet for our BOM and purchasing tracking. Besides the beautiful UI, it also accepts 
  standard SQL queries for advanced data analysis and custom reporting.</p>

<div class="mb-8">
    <img src="content/projects-assets/WFRAsset-main.png" alt="Assets DB Main Interface" class="w-full rounded border border-gray-700 shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300">
</div>

<div class="mb-8">
    <img src="content/projects-assets/WFRAsset-SQL.png" alt="SQL Query Interface" class="w-full rounded border border-gray-700 shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300">
</div>

<h3>// HUMAN FRIENDLY UI</h3>
<p>Quickly change the status of an item by using the radial menu, streamlining the workflow for our team members.</p>

<div class="mb-8">
    <img src="content/projects-assets/WFRAsset-radial.png" alt="Radial Menu Interface" class="w-full rounded border border-gray-700 shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300">
</div>

<div class="mb-8">
    <img src="content/projects-assets/WFRAsset-hover.png" alt="Item Hover State" class="w-full rounded border border-gray-700 shadow-lg opacity-90 hover:opacity-100 transition-opacity duration-300">
</div>

<h3>// PURCHASE BULLETIN</h3>
<p>As a student team, we had to write an email to the school to buy anything. Select the items we need, review the total cost on the bulletin board
  and automatically generate a formatted purchase request email ready to send.</p>

<h3>// FAST API</h3>
<p>The backend is powered by FastAPI, ensuring high performance and automatic validation. It serves as a robust foundation that handles our complex
  data relationships with speed and type safety.</p>