import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";
import { generateArduinoCode } from "@/utils/codeGenerator";

interface CodePreviewProps {
  delayViragemMs: number;
  temposLado: number[];
}

const CodePreview = ({ delayViragemMs, temposLado }: CodePreviewProps) => {
  const code = generateArduinoCode(delayViragemMs, temposLado);

  return (
    <Card className="p-6 shadow-[var(--shadow-card)] border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <Code className="w-5 h-5 text-accent" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground">Preview do Código</h2>
      </div>
      
      <div className="bg-muted rounded-lg p-4 overflow-auto max-h-[600px] border border-border">
        <pre className="text-xs font-mono text-foreground whitespace-pre-wrap break-words">
          {code}
        </pre>
      </div>
      
      <p className="text-xs text-muted-foreground mt-4">
        Este código será salvo como <span className="font-semibold text-foreground">robo_marcacao.ino</span>
      </p>
    </Card>
  );
};

export default CodePreview;
