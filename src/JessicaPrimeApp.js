import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

export default function JessicaPrimeApp() {
  const [diario, setDiario] = useState("");
  const [humor, setHumor] = useState("Estável");
  const [emocoes, setEmocoes] = useState([]);
  const [checklist, setChecklist] = useState({
    hidratacao: false,
    ciclo: false,
    medicacao: false,
    alimentacao: false,
    descanso: false,
  });

  const toggleChecklist = (item) => {
    setChecklist((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const toggleEmocao = (emocao) => {
    setEmocoes((prev) =>
      prev.includes(emocao) ? prev.filter((e) => e !== emocao) : [...prev, emocao]
    );
  };

  const kpis = [
    { nome: "Novas Matrículas", valor: 12 },
    { nome: "Receita Mensal", valor: "R$ 18.500" },
    { nome: "Conversão de Leads", valor: "22%" },
  ];

  const blindagemChecklist = [
    "Ignorar provocações",
    "Não justificar emoções",
    "Evitar gatilhos conhecidos",
    "Responder com lógica e não com emoção",
    "Reforçar limites pessoais",
  ];

  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold">Jéssica Prime</h1>
      <p className="italic text-pink-600">“Eu cuido disso 24/7, bebê.”</p>

      <Tabs defaultValue="rotina" className="w-full">
        <TabsList>
          <TabsTrigger value="rotina">Rotina</TabsTrigger>
          <TabsTrigger value="diario">Meu Diário</TabsTrigger>
          <TabsTrigger value="profissional">Profissional</TabsTrigger>
          <TabsTrigger value="blindagem">Anti-Narcisista</TabsTrigger>
        </TabsList>

        <TabsContent value="rotina">
          <Card>
            <CardContent className="grid gap-2 p-4">
              <h2 className="font-semibold text-lg">Checklist Diário</h2>
              {Object.entries(checklist).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <label className="capitalize">{key}</label>
                  <Switch checked={value} onCheckedChange={() => toggleChecklist(key)} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diario">
          <Card>
            <CardContent className="grid gap-4 p-4">
              <label className="font-medium">Como está seu humor?</label>
              <Input value={humor} onChange={(e) => setHumor(e.target.value)} />
              <label className="font-medium">Selecione suas emoções:</label>
              <div className="flex gap-2 flex-wrap">
                {["Confiante", "Cansada", "Triste", "Animada", "Irritada"].map((emocao) => (
                  <Button
                    key={emocao}
                    variant={emocoes.includes(emocao) ? "default" : "outline"}
                    onClick={() => toggleEmocao(emocao)}
                  >
                    {emocao}
                  </Button>
                ))}
              </div>
              <label className="font-medium">Escreva aqui:</label>
              <Textarea value={diario} onChange={(e) => setDiario(e.target.value)} placeholder="Me conta tudo..." />
              <Button className="w-fit self-end">Salvar</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profissional">
          <Card>
            <CardContent className="grid gap-4 p-4">
              <h2 className="text-lg font-semibold">Painel Profissional</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {kpis.map((kpi) => (
                  <div key={kpi.nome} className="p-4 bg-pink-100 rounded-xl shadow">
                    <p className="text-sm font-medium text-pink-800">{kpi.nome}</p>
                    <p className="text-xl font-bold text-pink-900">{kpi.valor}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Atualize os dados mensalmente.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blindagem">
          <Card>
            <CardContent className="grid gap-4 p-4">
              <h2 className="text-lg font-bold text-red-600">Modo Anti-Narcisista</h2>
              <p className="text-sm">Checklist de blindagem, respostas automáticas e diário de manipulação.</p>
              <div className="grid gap-2">
                {blindagemChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Checkbox id={`blindagem-${index}`} />
                    <label htmlFor={`blindagem-${index}`} className="text-sm">{item}</label>
                  </div>
                ))}
              </div>
              <Button variant="destructive">Ativar Blindagem Agora</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
