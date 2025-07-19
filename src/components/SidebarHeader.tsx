import { BriefcaseIcon, X } from "lucide-react";

// Reusable Logo Header
const SidebarHeader = ({ onClose }: { onClose?: () => void }) => (
    <div className="flex items-center justify-between h-16 px-4 bg-gradient-to-br from-blue-500 to-blue-700 ">
        <div className="flex items-center">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-300 to-blue-500 mr-3">
                <BriefcaseIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-wide">Project Hub</span>
        </div>

        {onClose && (
            <button
                onClick={onClose}
                className="p-2 rounded-lg text-white hover:bg-blue-700 transition-colors"
            >
                <X className="h-6 w-6" />
            </button>
        )}
    </div>
);
export default SidebarHeader