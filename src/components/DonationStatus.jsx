import { useRef, useEffect, useState } from "react";
import "animate.css";

const DonationStatus = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`py-6 md:py-12 mb-12 md:mb-20 border-2 border-textColor rounded-xl p-3 ${
        isVisible ? "animate__animated animate__backInUp" : ""
      }`}
    >
      <h1 className="text-center mb-6 font-bold text-3xl">Donation Status</h1>
      <p className="w-full md:w-6/12 mx-auto text-center mb-8">
        At Winter Aid BD, we ensure that your contributions are handled
        transparently and efficiently. To keep you informed, we’ve introduced a
        donation status system that updates you at every step of the process.
      </p>
      <div className="flex justify-center items-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total donations collected</div>
            <div className="stat-value text-primary">6.6K</div>
            <div className="stat-desc">15% more than last week</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Number of people helped</div>
            <div className="stat-value text-secondary">11.5K</div>
            <div className="stat-desc">6% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online"></div>
            </div>
            <div className="stat-value">92%</div>
            <div className="stat-title">Volunteer hours contributed</div>
            <div className="stat-desc text-secondary">5 project remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationStatus;
