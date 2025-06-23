
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ProjectOverview } from "@/components/ProjectOverview";
import { DataUpload } from "@/components/DataUpload";
import { ModelSetup } from "@/components/ModelSetup";
import { Optimization } from "@/components/Optimization";
import { ResultsAnalysis } from "@/components/ResultsAnalysis";
import { Header } from "@/components/Header";

const Index = () => {
  const [activeStep, setActiveStep] = useState("overview");

  const renderActiveComponent = () => {
    switch (activeStep) {
      case "overview":
        return <ProjectOverview />;
      case "upload":
        return <DataUpload />;
      case "models":
        return <ModelSetup />;
      case "optimization":
        return <Optimization />;
      case "results":
        return <ResultsAnalysis />;
      default:
        return <ProjectOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar activeStep={activeStep} onStepChange={setActiveStep} />
          <main className="flex-1 flex flex-col">
            <Header />
            <div className="flex-1 p-6">
              {renderActiveComponent()}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
