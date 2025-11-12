"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "../components/CanvasRevealEffect";

const Approach = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // only one open at a time
  };

  return (
    <section className="c-space mt-20 md:mt-30">
      <h2 className="text-heading">My Approach</h2>

      <div className="my-12 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          index={0}
          activeIndex={activeIndex}
          setActiveIndex={handleToggle}
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          description="We'll collaborate to map out your website's goals, target audience and key functionalities. We'll discuss things like site structure, navigation and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
          />
        </Card>

        <Card
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={handleToggle}
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-fuchsia-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>

        <Card
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={handleToggle}
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const isActive = activeIndex === index;

  const isTouchDevice =
    typeof window !== "undefined" &&
    "ontouchstart" in window &&
    navigator.maxTouchPoints > 0;

  const handleMouseEnter = () => {
    if (!isTouchDevice) setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setActiveIndex(null);
  };

  const toggleHovered = (e) => {
    e?.stopPropagation?.();
    setActiveIndex(isActive ? null : index);
  };

  const iconWithToggle = React.isValidElement(icon)
    ? React.cloneElement(icon, { onToggle: toggleHovered })
    : icon;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => isTouchDevice && setActiveIndex(isActive ? null : index)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem]"
    >
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      {/* Background Animation */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Foreground Content */}
      <div className="relative z-20 text-center transition duration-200 w-full flex flex-col items-center justify-center">
        <div
          className={`transition duration-200 ${
            isActive ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
          } absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
        >
          {iconWithToggle}
        </div>

        <h2
          className={`text-3xl font-bold mt-4 transition duration-300 ${
            isActive
              ? "opacity-100 -translate-y-2 text-white"
              : "opacity-0 translate-y-0"
          }`}
        >
          {title}
        </h2>

        <p
          className={`text-sm font-medium mt-4 transition duration-300 ${
            isActive
              ? "opacity-100 -translate-y-2 text-[#e4ecff]"
              : "opacity-0 translate-y-0"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order, onToggle }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle?.(e);
        }}
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-bold text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

export default Approach;
