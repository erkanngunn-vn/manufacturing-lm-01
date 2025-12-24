// app/page.tsx - ManufacturingLM Home Page
export default function Home() {
  return (
    <div className="space-y-6 p-4">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">🏭 ManufacturingLM</h1>
            <p className="text-blue-100">AI Copilot for Manufacturing Excellence</p>
          </div>
          <div className="text-right">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm">🚀 Investor Demo v1.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Instructions */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="text-2xl">💡</div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Demo Instructions</h3>
            <p className="text-gray-600 text-sm">
              This is a functional prototype showing the 3-panel ManufacturingLM interface.
              The full version includes AI analysis, A3 reports, 5-Why analysis, SPC charts, and SOP generation.
            </p>
          </div>
        </div>
      </div>

      {/* Simulated Chat Interface */}
      <div className="border rounded-xl p-4 bg-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Manufacturing AI Assistant</h3>
            <p className="text-sm text-gray-500">Ready to analyze your production data</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700">
              <span className="font-semibold">Try asking:</span> "Why did OEE drop in November?"
            </p>
            <p className="text-sm text-gray-500 mt-1">
              The AI will analyze your Q3 production data and identify conveyor jams (ERR-S92) as the root cause.
            </p>
          </div>
          
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
              📊 Analyze OEE Drop
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              🔍 5-Why Analysis
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              📋 Generate A3 Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
