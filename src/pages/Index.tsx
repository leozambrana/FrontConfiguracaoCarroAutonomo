import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Download, Settings, Code } from "lucide-react";
import CodePreview from "@/components/CodePreview";
import { generateArduinoCode } from "@/utils/codeGenerator";

const Index = () => {
  const [delayViragemMs, setDelayViragemMs] = useState(1300);
  const [tempoLados13, setTempoLados13] = useState(1500);
  const [tempoLados24, setTempoLados24] = useState(700);

  const handleDownload = () => {
    const code = generateArduinoCode(delayViragemMs, [tempoLados13, tempoLados24]);
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "robo_marcacao.ino";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-4 shadow-lg">
            <Settings className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Portal de Configuração do Carro Autônomo
          </h1>
          <p className="text-muted-foreground text-lg">
            Ajuste os tempos de movimento e gere o código automaticamente
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card className="p-6 shadow-[var(--shadow-card)] border-border hover:shadow-[var(--shadow-hover)] transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Tempo de Viragem</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="delay-viragem" className="text-sm font-medium text-foreground mb-2 block">
                    Delay da função virarDireita() (ms)
                  </Label>
                  <div className="flex gap-4 items-center">
                    <Slider
                      id="delay-viragem"
                      min={500}
                      max={2000}
                      step={10}
                      value={[delayViragemMs]}
                      onValueChange={(value) => setDelayViragemMs(value[0])}
                      className="flex-1"
                    />
                    <Input
                      type="number"
                      value={delayViragemMs}
                      onChange={(e) => setDelayViragemMs(Number(e.target.value))}
                      className="w-24 bg-background border-border"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Tempo para completar uma rotação de 90 graus
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-[var(--shadow-card)] border-border hover:shadow-[var(--shadow-hover)] transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-secondary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Tempos de Cada Lado</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Lados 1 e 3", value: tempoLados13, setValue: setTempoLados13 },
                  { label: "Lados 2 e 4", value: tempoLados24, setValue: setTempoLados24 },
                ].map((lado, index) => (
                  <div key={index}>
                    <Label htmlFor={`lado-${index + 1}`} className="text-sm font-medium text-foreground mb-2 block">
                      {lado.label} - tempoLado (ms)
                    </Label>
                    <div className="flex gap-4 items-center">
                      <Slider
                        id={`lado-${index + 1}`}
                        min={100}
                        max={3000}
                        step={10}
                        value={[lado.value]}
                        onValueChange={(value) => lado.setValue(value[0])}
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        value={lado.value}
                        onChange={(e) => lado.setValue(Number(e.target.value))}
                        className="w-24 bg-background border-border"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Button
              onClick={handleDownload}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar código Arduino (.ino)
            </Button>
          </div>

          <div className="lg:sticky lg:top-8 h-fit">
            <CodePreview
              delayViragemMs={delayViragemMs}
              temposLado={[tempoLados13, tempoLados24]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
