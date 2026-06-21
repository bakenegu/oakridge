import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { IMAGES } from "../lib/images";

const values = [
  {
    title: "Clinical Excellence",
    desc: "Nurse-designed care protocols ensure medical best practices are embedded in every resident's daily routine — not just in emergencies.",
  },
  {
    title: "Dignity First",
    desc: "Every resident is treated as a whole person. We honor individual preferences, histories, and routines in everything we do.",
  },
  {
    title: "Transparent Communication",
    desc: "Families receive regular updates, are always welcome to visit, and can reach our care team directly — day or night.",
  },
  {
    title: "Continuous Improvement",
    desc: "We hold regular staff training, clinical reviews, and family feedback sessions to continuously raise our standard of care.",
  },
];

const team = [
  {
    name: "Margaret Osei-Bonsu, RN",
    role: "Founder & Director of Care",
    image: IMAGES.houseEntrance,
    bio: "Margaret is a Registered Nurse with over 18 years of clinical experience spanning medical-surgical care, case management, and long-term care coordination. After witnessing firsthand the gap between institutional facility care and what seniors truly deserve, she founded Oakridge Manor Living to build the kind of home she would trust for her own family. Margaret holds certifications in gerontological nursing and oversees all clinical care protocols, staff training, and resident care plans personally.",
    credentials: ["Registered Nurse (RN)", "Gerontological Nursing Certification", "18+ Years Clinical Experience", "Medical-Surgical & Case Management Background"],
  },
  {
    name: "James Osei-Bonsu, MBA",
    role: "Co-Founder & Operations Director",
    image: IMAGES.breakfastNook,
    bio: "James brings expertise in healthcare administration and residential facility operations. With a background in healthcare management and a deep commitment to family-centered care, he ensures that Oakridge Manor's day-to-day operations match the high clinical standards set by our nursing leadership.",
    credentials: ["MBA, Healthcare Administration", "Residential Care Operations", "10+ Years in Senior Living Management"],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Oakridge Manor Living"
        subtitle="Nurse-Led. Family-Centered. Clinically Trusted."
        image="houseExterior"
      />

      {/* Mission statement */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-badge mb-5">Our Mission</p>
          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
          >
            Clinical Care That Feels Like Home
          </h2>
          <p
            className="text-base leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Oakridge Manor Living was founded on a single conviction: seniors who need higher-acuity care deserve to receive it in an environment that is warm, residential, and deeply human — not institutional. We are a Type B licensed residential care home in Plano, TX, led by a Registered Nurse with nearly two decades of clinical experience.
          </p>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
          >
            Our low resident-to-caregiver ratio, nurse-designed care protocols, and 24-hour alert monitoring mean families can trust that their loved one receives attentive, medically sound care every single hour of every day — in a place that genuinely feels like home.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule a Private Tour
          </Link>
        </div>
      </section>

      {/* Leadership team */}
      <section className="py-20 px-6" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge mb-4">Healthcare Leadership</p>
            <h2
              className="text-4xl md:text-5xl font-semibold"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
            >
              Meet the People Behind the Care
            </h2>
            <p
              className="max-w-2xl mx-auto mt-5 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
            >
              Our leadership team combines frontline clinical experience with operational excellence — so both the quality of care and the quality of life are always high.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}
              >
                {/* Photo */}
                <div
                  className={`relative rounded overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                  style={{ height: "420px" }}
                >
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-5"
                    style={{ background: "linear-gradient(to top, rgba(27,42,74,0.9) 0%, transparent 100%)" }}
                  >
                    <p
                      className="text-white font-semibold text-lg"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {member.name}
                    </p>
                    <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <p className="section-badge mb-3">{member.role}</p>
                  <h3
                    className="text-3xl font-semibold mb-5"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-7"
                    style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                  >
                    {member.bio}
                  </p>

                  <div className="flex flex-col gap-2">
                    {member.credentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "var(--gold)" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span
                          className="text-sm font-semibold"
                          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--navy)" }}
                        >
                          {cred}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-badge mb-4">What We Stand For</p>
            <h2
              className="text-4xl font-semibold"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded flex flex-col gap-3"
                style={{ backgroundColor: "var(--off-white)", borderTop: "3px solid var(--gold)" }}
              >
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--navy)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif", color: "var(--text-medium)" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-6 text-center"
        style={{ backgroundColor: "var(--navy)" }}
      >
        <p
          className="text-white/70 text-xs uppercase tracking-[0.3em] font-semibold mb-4"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          Take the Next Step
        </p>
        <h2
          className="text-3xl md:text-4xl font-semibold text-white mb-5"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Come See the Oakridge Manor Difference
        </h2>
        <p
          className="text-white/70 text-base max-w-xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
        >
          A private tour is worth a thousand words. Meet our team, walk the home, and see for yourself what nurse-led residential care truly looks like.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="btn-gold">
            Schedule a Private Tour
          </Link>
          <a
            href="tel:+15125550100"
            className="text-white/80 text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-open-sans), Arial, sans-serif" }}
          >
            Call (512) 555-0100
          </a>
        </div>
      </section>
    </>
  );
}
