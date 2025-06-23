
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Download, CheckCircle } from "lucide-react";
import { useState } from "react";

export function DataUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">데이터 업로드</h1>
          <p className="text-muted-foreground mt-1">
            프롬프트 예시 데이터를 업로드하여 최적화를 시작하세요
          </p>
        </div>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          Step 2/5
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-500" />
              파일 업로드
            </CardTitle>
            <CardDescription>
              CSV 또는 JSONL 형식의 프롬프트 데이터를 업로드하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-blue-300 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700 mb-2">파일을 드래그하여 업로드</p>
              <p className="text-sm text-muted-foreground mb-4">또는 클릭하여 파일 선택</p>
              <Button variant="outline">파일 선택</Button>
            </div>
            
            <div className="mt-6 space-y-3">
              <h4 className="font-medium text-sm">지원 형식:</h4>
              <div className="flex gap-2">
                <Badge variant="secondary">CSV</Badge>
                <Badge variant="secondary">JSONL</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-500" />
              데이터 형식 가이드
            </CardTitle>
            <CardDescription>
              올바른 데이터 형식을 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-2">필수 필드:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• input_prompt: 사용자 입력</li>
                <li>• system_prompt: 시스템 프롬프트</li>
                <li>• expected_output: 기대 출력</li>
                <li>• human_label: 평가 점수 (선택)</li>
              </ul>
            </div>
            
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4 mr-2" />
              템플릿 다운로드
            </Button>
          </CardContent>
        </Card>
      </div>

      {uploadedFiles.length > 0 && (
        <Card className="shadow-sm border-0 bg-green-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle className="w-5 h-5" />
              업로드 완료
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4 text-green-600" />
                  <span>{file}</span>
                  <Badge variant="outline" className="ml-auto">Ready</Badge>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              다음 단계로
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
