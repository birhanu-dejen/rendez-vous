export default function MapSection() {
  return (
    <section className="bg-[#FAF6F0] py-65 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="mb-6 text-xl italic font-bold text-center">Map</h2>

        {/* Map & Details layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Left side - Map */}
          <div className="bg-gray-500  rounded-lg md:col-span-2 h-[480px] border-l-4 border-r-4 border-t-3 border-b-3 border-[#1E5631]"></div>

          {/* Right side - Info */}
          <div className="bg-gray-500 rounded-lg h-120"></div>
        </div>
      </div>
    </section>
  );
}
