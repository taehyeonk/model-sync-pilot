
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Settings, Key, Zap, AlertCircle, Cloud } from "lucide-react";

export function ModelSetup() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">모델 설정</h1>
          <p className="text-muted-foreground mt-1">
            소스 모델과 타겟 모델을 설정하고 API 키를 구성하세요
          </p>
        </div>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          Step 3/5
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-500" />
              소스 모델 설정
            </CardTitle>
            <CardDescription>
              기준이 되는 원본 모델을 설정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>모델 Provider</Label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Provider 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openai">OpenAI</SelectItem>
                  <SelectItem value="anthropic">Anthropic</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="cohere">Cohere</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>모델 선택</Label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="소스 모델 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                  <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="source-api-key">API 키</Label>
              <div className="relative">
                <Key className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="source-api-key"
                  type="password"
                  placeholder="sk-..."
                  className="pl-10 bg-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">스트리밍 모드</Label>
                <p className="text-xs text-muted-foreground">실시간 응답 스트리밍</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-500" />
              타겟 모델 설정
            </CardTitle>
            <CardDescription>
              최적화할 대상 모델을 설정하세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>모델 Provider</Label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Provider 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="openai">OpenAI</SelectItem>
                  <SelectItem value="anthropic">Anthropic</SelectItem>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="cohere">Cohere</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>모델 선택</Label>
              <Select>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="타겟 모델 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
                  <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="target-api-key">API 키</Label>
              <div className="relative">
                <Key className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  id="target-api-key"
                  type="password"
                  placeholder="sk-..."
                  className="pl-10 bg-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">온도 설정</Label>
                <p className="text-xs text-muted-foreground">응답 창의성 조절</p>
              </div>
              <Input 
                type="number" 
                min="0" 
                max="2" 
                step="0.1" 
                defaultValue="0.7" 
                className="w-20 bg-white"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-sm border-0 bg-amber-50 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700">
            <AlertCircle className="w-5 h-5" />
            보안 안내
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-amber-700">
            API 키는 안전하게 암호화되어 저장됩니다. 키는 오직 모델 호출 시에만 사용되며, 
            다른 용도로 사용되지 않습니다.
          </p>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline">이전 단계</Button>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
          설정 완료
        </Button>
      </div>
    </div>
  );
}
