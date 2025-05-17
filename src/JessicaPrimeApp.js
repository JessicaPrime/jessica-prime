import { Button } from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Textarea } from "./components/ui/Textarea";
import { TabsList, TabsTrigger } from "./components/ui/Tabs";
import { Switch } from "./components/ui/Switch";
import { Checkbox } from "./components/ui/Checkbox";

export default function JessicaPrimeApp() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>✨ Bem-vinda ao Jéssica Prime ✨</h1>
      <p>Este é o início do seu império digital.</p>

      <Card style={{ marginTop: "2rem", padding: "1rem" }}>
        <CardContent>
          <h2>Formulário de Teste</h2>
          <Input placeholder="Digite seu nome" />
          <Textarea placeholder="Digite uma mensagem" style={{ marginTop: "1rem" }} />
          <div style={{ marginTop: "1rem" }}>
            <Checkbox /> Aceito os termos
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Switch /> Ativar notificações
          </div>
          <Button style={{ marginTop: "1rem" }}>Enviar</Button>
        </CardContent>
      </Card>
    </div>
  );
}
