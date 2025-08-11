export default function MapSection() {
  return (
    <section className="bg-[#FAF6F0] py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="mb-10 text-3xl font-bold italic text-center text-[#1E5631]">
          Find Us
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left side - Google Maps iframe */}
          <div className="md:col-span-2 rounded-lg shadow-lg overflow-hidden border-4 border-[#1E5631]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158620.82946647148!2d38.49994452499999!3d8.982252899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b852e66361a39%3A0xabb3d318d122c14e!2sRENDEZ-VOUS%20HOTEL!5e1!3m2!1sen!2set!4v1754647798406!5m2!1sen!2set"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rendez-Vous Hotel Location"
            />
          </div>

          {/* Right side - Hotel Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#1E5631]">
            <h3 className="text-2xl font-semibold mb-4 text-[#1E5631]">
              Rendez-Vous Hotel
            </h3>
            <p className="mb-4 text-gray-700">
              📍 On Ethio China St., in front of Wengelawit Building{" "}
            </p>
            <p className="mb-4 text-gray-700">📞 +251903232323</p>
            <p className="mb-4 text-gray-700">📞+251911252610</p>

            <p className="mb-6 text-gray-700">✉️Justteshome3@gmail.com </p>
            <a
              href="https://maps.google.com/?q=Rendez-Vous+Hotel+Addis+Ababa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-3 text-white bg-[#1E5631] rounded-lg hover:bg-[#174828] transition"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
