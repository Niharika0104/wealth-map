import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import type { ConfidenceLevel } from "./mock-data"

interface ConfidenceIndicatorProps {
  level: ConfidenceLevel
  small?: boolean
}

export function ConfidenceIndicator({ level, small = false }: ConfidenceIndicatorProps) {
  const getColor = () => {
    switch (level) {
      case "High":
        return "bg-green-500"
      case "Medium":
        return "bg-yellow-500"
      case "Low":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getDescription = () => {
    switch (level) {
      case "High":
        return "Data is verified from multiple reliable sources"
      case "Medium":
        return "Data is verified but from limited sources"
      case "Low":
        return "Data is estimated with limited verification"
      default:
        return "Confidence level unknown"
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1.5">
            <div className={`${getColor()} rounded-full ${small ? "w-2 h-2" : "w-3 h-3"}`} />
            {!small && <span className="text-sm font-medium">{level}</span>}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{getDescription()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
