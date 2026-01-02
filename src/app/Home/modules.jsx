import React from "react";
import Link from "next/link";
import { StaggerContainer, StaggerItem, SlideFadeLeft, Fadein, FadeUpCard } from "../Components/Animations";

const TailoredModules = () => {
  return (
    <section className="bg-[#1B51FF] py-8 sm:py-12 md:py-16 min-h-screen">
      <div className="mx-auto container">
        <StaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            
            {/* Module 1: Title Card */}
            <StaggerItem>
              <div className="bg-transparent text-white p-4 sm:p-5 md:p-6 h-[380px] sm:h-[400px] md:h-[420px]">
                <SlideFadeLeft>
                  <div className="mb-3 sm:mb-4">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-5">
                      Tailored
                      <br />
                      Modules
                    </h2>
                    <h6 className="white-h">
                      Each of our signature products is built to solve real
                      institutional challenges with speed, clarity, and
                      cost-efficiency.
                    </h6>
                  </div>
                </SlideFadeLeft>
              </div>
            </StaggerItem>

            {/* Module 2: Edunoia LaunchPad™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia LaunchPad™
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      90-Day
                      <br /> Institution Launch Kit
                    </h4>
                    <div className="border-linee"></div>
                  </div>
                  <h6 className="title mb-2">
                    Launch like a top-tier institution in under 90 days.
                  </h6>
                  <p className="p-blue mb-4">
                    Ideal for new schools, universities, or EdTech ventures. We help
                    you look credible and compelling from day one, with clear
                    positioning, a resonant name, and polished brand assets.
                  </p>
                  <Link href="TailoredModules/90DaysInstitutionLaunch">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 3: Edunoia Re:Fresh™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia Re:Fresh™
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      90-Day Rebranding
                      <br />
                      Sprint
                    </h4>
                    <div className="border-linee"></div>
                  </div>
                  <h6 className="title mb-2">
                    Reignite your brand before another admissions season passes.
                  </h6>
                  <p className="p-blue mb-4">
                    For established institutions losing relevance, this sprint
                    delivers a modern identity, sharper messaging, and renewed trust
                  </p>
                  <Link href="TailoredModules/90DaysRebrandingSprit">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 4: Edunoia AdmitEdge™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia AdmitEdge™
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      Admissions
                      <br /> Accelerator
                    </h4>
                    <div className="border-linee"></div>
                  </div>
                  <h6 className="title mb-2">
                    Reignite your brand before another admissions season passes.
                  </h6>
                  <p className="p-blue mb-4">
                    For established institutions losing relevance, this sprint
                    delivers a modern identity, sharper messaging, and renewed
                    trust.
                  </p>
                  <Link href="TailoredModules/AdmissionTeamTraning">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 5: Edunoia Connect™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia Connect™
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      Alumni & Donor
                      <br /> Branding
                    </h4>
                    <div className="border-linee"></div>
                  </div>
                  <h6 className="title mb-2">
                    Turn alumni into lifelong ambassadors and donors.
                  </h6>
                  <p className="p-blue mb-4">
                    We design campaigns, engagement kits, and visual identities to
                    strengthen emotional ties and drive giving.
                  </p>
                  <Link href="TailoredModules/AluminiDonorBranding">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 6: Edunoia Compass™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia Compass™ 
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      Brand Health
                      <br /> Tracker
                    </h4>
                    <div className="border-linee"></div>
                  </div>
                  <h6 className="title mb-2">Measure what truly matters</h6>
                  <p className="p-blue mb-4">
                    For established institutions losing relevance, this sprint
                    delivers a modern identity, sharper messaging, and renewed
                    trust.
                  </p>
                  <Link href="TailoredModules/BrandHealthTracker">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 7: Edunoia Recognition Index (ERI)™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia Recognition Index (ERI™)
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      Edunoia Recognition
                      <br /> Index (ERI™)
                    </h4>
                    <div className="border-line"></div>
                  </div>
                  <h6 className="title mb-2">
                    Be recognised as a Great Place to Study.
                  </h6>
                  <p className="p-blue mb-4">
                    We certify institutions that excel in academic experience and
                    community satisfaction, backed by real stakeholder data.
                  </p>
                  <Link href="TailoredModules/ERI">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 8: Edunoia FacultyFirst™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia FacultyFirst™
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      Faculty Engagement
                      <br /> Program
                    </h4>
                    <div className="border-line"></div>
                  </div>
                  <h6 className="title mb-2">
                    Build a faculty that believes, belongs, and becomes your brand's voice.
                  </h6>
                  <p className="p-blue mb-4">
                    We help you articulate your faculty value proposition and craft
                    campaigns that inspire pride and retention.
                  </p>
                  <Link href="TailoredModules/FacultyProgram">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 9: Edunoia Wear™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia Wear™
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      Merchandise & Pride <br /> Program
                    </h4>
                    <div className="border-linee"></div>
                  </div>
                  <h6 className="title mb-2">
                    Turn every student into a walking brand ambassador.
                  </h6>
                  <p className="p-blue mb-4">
                    We design merchandise systems - everyday, premium, and seasonal,
                    that make your brand wearable and collectible.
                  </p>
                  <Link href="TailoredModules/MerchandisePrideProgram">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 10: Edunoia Legacy™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia Legacy™
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      IP Development for Events
                      <br /> & Summits
                    </h4>
                    <div className="border-linee"></div>
                  </div>
                  <h6 className="title mb-2">Create your own intellectual property.</h6>
                  <p className="p-blue mb-4">
                    We help you conceptualise and brand annual events that
                    strengthen thought leadership and visibility.
                  </p>
                  <Link href="/TailoredModules/IPdevelopment">
                    <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                      View Details
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* Module 11: Edunoia Moments™ */}
            <StaggerItem>
              <FadeUpCard>
                <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg h-[380px] sm:h-[400px] md:h-[420px] transition-transform hover:scale-105 hover:shadow-xl">
                  <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-blue-600">
                    Edunoia Moments™
                  </h6>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="heading-bluee">
                      Event Experience
                      <br /> Branding
                    </h4>
                    <div className="border-linee"></div>
                  </div>
                  <h6 className="title mb-2">Make every milestone a brand moment.</h6>
                  <p className="p-blue mb-4">
                    From convocations and orientations to reunions and homecomings,
                    makes them powerful emotional experiences that reflect your
                    brand story.
                  </p>
                  <button className="cursor-pointer text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                    View Details
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </FadeUpCard>
            </StaggerItem>

            {/* CTA Card */}
            <StaggerItem>
              <Fadein>
                 <div className=" text-gray-800 p-4 sm:p-25 md:p-25 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
            <div>
              <h5 className="text-[36px] text-white font-[700] mb-4 leading-tight">
                Explore all our Branding services
              </h5>

              <button className="cursor-pointer bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3  font-semibold hover:bg-gray-100 transition-colors uppercase text-xs sm:text-sm tracking-wide">
                View Details
              </button>
            </div>
          </div>
              </Fadein>
            </StaggerItem>
            
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TailoredModules;




