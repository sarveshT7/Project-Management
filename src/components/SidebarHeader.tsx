import { BriefcaseIcon, X } from "lucide-react";

// Reusable Logo Header
const SidebarHeader = ({ onClose }: { onClose?: () => void }) => (
    <div className="flex items-center justify-between h-16 px-4 bg-blue-600">
        <div className="flex items-center">
            <BriefcaseIcon className="h-8 w-8 text-gray-300 mr-2" />
            <span className="text-xl font-bold text-white">Project Hub</span>
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