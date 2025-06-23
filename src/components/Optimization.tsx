
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Play, Pause, RotateCcw, Zap, TrendingUp, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function Optimization() {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState("준비 중...");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = Math.min(prev + Math.random() * 2, 100);
          
          if (newProgress < 20) {
            setCurrentStep("초기 프롬프트 후보 생성 중...");
          } else if (newProgress < 50) {
            setCurrentStep("DSPy 최적화 실행 중...");
          } else if (newProgress < 80) {
            setCurrentStep("타겟 모델에서 테스트 중...");
          } else if (newProgress < 100) {
            setCurrentStep("결과 분석 중...");
          } else {
            setCurrentStep("최적화 완료!");
          }
          
          return newProgress;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, progress]);

  const startOptimization = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const pauseOptimization = () => {
    setIsRunning(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">DSPy 최적화</h1>
          <p className="text-muted-foreground mt-1">
            프롬프트 최적화를 실행하고 진행 상황을 모니터링하세요
          </p>
        </div>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          Step 4/5
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              최적화 진행 상태
            </CardTitle>
            <CardDescription>
              현재 최적화 프로세스의 진행 상황입니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">전체 진행률</span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {currentStep}
              </p>
            </div>

            <Separator />

            <div className="flex gap-3">
              {!isRunning ? (
                <Button 
                  onClick={startOptimization}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                >
                  <Play className="w-4 h-4 mr-2" />
                  최적화 시작
                </Button>
              ) : (
                <Button 
                  onClick={pauseOptimization}
                  variant="outline"
                >
                  <Pause className="w-4 h-4 mr-2" />
                  일시 정지
                </Button>
              )}
              
              <Button variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                재시작
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="shadow-sm border-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                실시간 메트릭
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">생성된 후보</span>
                  <Badge variant="secondary">127</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">현재 최고 점수</span>
                  <Badge className="bg-green-100 text-green-700">0.847</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">반복 횟수</span>
                  <Badge variant="outline">23/50</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">예상 완료 시간</span>
                  <Badge variant="secondary">~12분</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">최적화 설정</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">최대 반복 횟수</span>
                <span>50</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">배치 크기</span>
                <span>8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">평가 메트릭</span>
                <span>BLEU + Similarity</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {progress === 100 && (
        <Card className="shadow-sm border-0 bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-900">최적화 완료!</h3>
                <p className="text-green-700">프롬프트 최적화가 성공적으로 완료되었습니다.</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                결과 분석 보기
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
