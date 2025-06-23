
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  FolderOpen, 
  Upload, 
  Settings, 
  Zap, 
  BarChart3,
  CheckCircle,
  Clock,
  Circle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  activeStep: string;
  onStepChange: (step: string) => void;
}

const steps = [
  {
    id: "overview",
    title: "Project Overview",
    icon: FolderOpen,
    description: "프로젝트 생성 및 설정",
    status: "active"
  },
  {
    id: "upload",
    title: "Data Upload",
    icon: Upload,
    description: "프롬프트 데이터 업로드",
    status: "pending"
  },
  {
    id: "models",
    title: "Model Setup",
    icon: Settings,
    description: "소스/타겟 모델 설정",
    status: "pending"
  },
  {
    id: "optimization",
    title: "DSPy Optimization",
    icon: Zap,
    description: "프롬프트 최적화 실행",
    status: "pending"
  },
  {
    id: "results",
    title: "Results Analysis",
    icon: BarChart3,
    description: "결과 분석 및 비교",
    status: "pending"
  }
];

const getStatusIcon = (status: string, isActive: boolean) => {
  if (isActive) return <Clock className="w-4 h-4 text-blue-500" />;
  
  switch (status) {
    case "completed":
      return <CheckCircle className="w-4 h-4 text-green-500" />;
    case "active":
      return <Clock className="w-4 h-4 text-blue-500" />;
    default:
      return <Circle className="w-4 h-4 text-gray-300" />;
  }
};

export function AppSidebar({ activeStep, onStepChange }: AppSidebarProps) {
  return (
    <Sidebar className="border-r-0 bg-white/50 backdrop-blur-sm">
      <SidebarHeader className="border-b p-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">워크플로우</h2>
            <p className="text-sm text-muted-foreground">단계별 최적화 과정</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground mb-3">
            OPTIMIZATION STEPS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {steps.map((step, index) => {
                const isActive = activeStep === step.id;
                const Icon = step.icon;
                
                return (
                  <SidebarMenuItem key={step.id}>
                    <SidebarMenuButton 
                      onClick={() => onStepChange(step.id)}
                      className={cn(
                        "h-auto p-4 flex flex-col items-start gap-2 hover:bg-blue-50 transition-colors",
                        isActive && "bg-blue-50 border-l-4 border-blue-500"
                      )}
                    >
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-muted-foreground">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <Icon className={cn(
                            "w-5 h-5",
                            isActive ? "text-blue-600" : "text-gray-400"
                          )} />
                        </div>
                        <div className="ml-auto">
                          {getStatusIcon(step.status, isActive)}
                        </div>
                      </div>
                      <div className="ml-8 text-left">
                        <div className={cn(
                          "font-medium text-sm",
                          isActive ? "text-blue-900" : "text-gray-700"
                        )}>
                          {step.title}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {step.description}
                        </div>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
