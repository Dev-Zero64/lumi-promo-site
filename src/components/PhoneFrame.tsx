import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  frameClassName?: string;
  showButtons?: boolean;
}

const PhoneFrame = ({
  children,
  className,
  frameClassName,
  showButtons = true,
}: PhoneFrameProps) => {
  const phoneFrameStyles = cn(
    "relative mx-auto h-[600px] w-[300px] rounded-[3.5rem] overflow-hidden",
    "bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl",
    "transform transition-all duration-300 hover:scale-[1.05]",
    frameClassName
  );

  const screenContentStyles = cn(
    "absolute inset-[0.65rem] overflow-hidden rounded-[2.5rem] bg-gray-950",
    "shadow-inner shadow-gray-900/50",
    className
  );

  return (
    <div className={phoneFrameStyles}>
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <div className="h-6 w-20 rounded-full bg-gray-900/90 backdrop-blur-sm flex items-center justify-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-600/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-600/80"></div>
        </div>
      </div>

      {/* Front Camera */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gray-900/80 z-20" />

      {/* Screen Content */}
      <div className={screenContentStyles}>
        <div className="h-full w-full transform transition-transform duration-300 hover:scale-105">
          {children}
        </div>
      </div>

      {/* Side Buttons */}
      {showButtons && (
        <>
          <div className="absolute -left-[3px] top-24 h-24 w-1.5 rounded-l-sm bg-gray-900/80" />
          <div className="absolute -left-[3px] top-44 h-24 w-1.5 rounded-l-sm bg-gray-900/80" />
          <div className="absolute -right-[3px] top-32 h-20 w-1.5 rounded-r-sm bg-gray-900/80" />
        </>
      )}

      {/* Bottom Speaker */}
      <div className="absolute left-1/2 bottom-3 -translate-x-1/2 w-24 h-1 rounded-full bg-gray-900/80 flex justify-between items-center px-2">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-0.5 h-full bg-gray-600/50 rounded-full" />
        ))}
      </div>

      {/* Screen Reflection */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3.5rem]">
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-r from-white/5 to-transparent rounded-full transform rotate-45" />
      </div>

      {/* Border Layer */}
      <div className="absolute inset-0 border-[10px] border-gray-900 rounded-[3.5rem]" />
    </div>
  );
};

export default PhoneFrame;