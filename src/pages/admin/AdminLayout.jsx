export default function AdminLayout() {
  return (
    <main className="px-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            className={`px-5 py-2 rounded-full text-sm font-medium 
                 bg-[#d3ebd7] text-gray-800
                 bg-white text-gray-600 border border-gray-200
            `}
          >
            Package
          </button>
        </div>
      </div>
    </main>
  );
}
