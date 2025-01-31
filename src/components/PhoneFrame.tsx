import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame = ({ children, className }: PhoneFrameProps) => {
  return (
    <div
      className={cn(
        "relative mx-auto h-[600px] w-[300px] rounded-[3rem] border-[14px] border-gray-900 bg-gray-800 shadow-xl",
        className
      )}
    >
      <div className="absolute left-1/2 top-0 h-[18px] w-[148px] -translate-x-1/2 rounded-b-[1rem] bg-gray-900"></div>
      <div className="absolute left-1/2 top-0 h-[28px] w-[48px] -translate-x-1/2 rounded-b-[1.5rem] bg-gray-900"></div>
      <div className="h-full w-full overflow-hidden rounded-[2.3rem] bg-white">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;