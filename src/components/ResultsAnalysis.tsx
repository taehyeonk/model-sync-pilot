
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { BarChart3, Download, Share, TrendingUp, Award, FileText } from "lucide-react";

export function ResultsAnalysis() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">결과 분석</h1>
          <p className="text-muted-foreground mt-1">
            최적화 결과를 분석하고 개선된 프롬프트를 확인하세요
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Step 5/5
          </Badge>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            리포트 다운로드
          </Button>
          <Button variant="outline" size="sm">
            <Share className="w-4 h-4 mr-2" />
            공유
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <Card className="shadow-sm border-0 bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-blue-900">+32.4%</p>
                <p className="text-sm text-blue-700">성능 향상</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-green-900">0.847</p>
                <p className="text-sm text-green-700">최종 점수</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-purple-900">127</p>
                <p className="text-sm text-purple-700">테스트된 후보</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8 text-amber-600" />
              <div>
                <p className="text-2xl font-bold text-amber-900">23</p>
                <p className="text-sm text-amber-700">최적화 반복</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="comparison" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="comparison">프롬프트 비교</TabsTrigger>
          <TabsTrigger value="metrics">성능 메트릭</TabsTrigger>
          <TabsTrigger value="examples">테스트 결과</TabsTrigger>
        </TabsList>

        <TabsContent value="comparison" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-red-700">원본 프롬프트</CardTitle>
                <CardDescription>최적화 이전 프롬프트</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 p-4 rounded-lg text-sm">
                  <p className="font-mono">
                    You are a helpful assistant. Please answer the user's question 
                    in a clear and concise manner. Be polite and professional.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge variant="destructive">점수: 0.642</Badge>
                  <Badge variant="outline">평균 응답 길이: 145자</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-green-700">최적화된 프롬프트</CardTitle>
                <CardDescription>DSPy 최적화 결과</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-green-50 p-4 rounded-lg text-sm">
                  <p className="font-mono">
                    You are an expert assistant specialized in providing accurate, 
                    contextually relevant responses. Analyze the user's question carefully, 
                    consider multiple perspectives, and provide a comprehensive yet 
                    concise answer that directly addresses their needs.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700">점수: 0.847</Badge>
                  <Badge variant="outline">평균 응답 길이: 198자</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>성능 메트릭 상세</CardTitle>
              <CardDescription>각 평가 지표별 개선 사항</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">BLEU Score</span>
                    <span className="text-sm text-green-600">+28.5%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" style={{width: '84.7%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Semantic Similarity</span>
                    <span className="text-sm text-green-600">+35.2%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{width: '89.3%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Response Relevance</span>
                    <span className="text-sm text-green-600">+22.1%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{width: '76.8%'}}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>테스트 결과 예시</CardTitle>
              <CardDescription>실제 입력에 대한 응답 비교</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm text-gray-700 mb-2">입력:</p>
                  <p className="text-sm">"How can I improve my presentation skills?"</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="font-medium text-sm text-red-700 mb-2">원본 응답:</p>
                    <p className="text-sm">Practice speaking clearly and organize your content well.</p>
                    <Badge variant="destructive" className="mt-2">점수: 0.62</Badge>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="font-medium text-sm text-green-700 mb-2">최적화된 응답:</p>
                    <p className="text-sm">To improve presentation skills: 1) Practice with specific audiences, 2) Structure content with clear intro/body/conclusion, 3) Use visual aids effectively, 4) Work on confident body language and voice projection.</p>
                    <Badge className="bg-green-100 text-green-700 mt-2">점수: 0.89</Badge>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <Button variant="outline" className="w-full">
                더 많은 예시 보기
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
