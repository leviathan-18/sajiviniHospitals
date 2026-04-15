
const AboutEmergencyStrip = () => {
  return (
    <section className="mt-10 md:mt-14 bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full shadow-[0_18px_40px_rgba(21,62,76,0.08)]">
          <div className="bg-[#B0304A] text-white px-6 md:px-10 py-8 md:py-10 text-center transition hover:brightness-[1.03]">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide underline underline-offset-[10px] decoration-white/85">
              Project Ummeed - Old Age Care Program
            </h3>
          </div>

          <div className="bg-[#194E60] text-white px-6 md:px-10 py-8 md:py-10 text-center transition hover:brightness-[1.03]">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
              24X7 Emergency Medical Care
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEmergencyStrip;