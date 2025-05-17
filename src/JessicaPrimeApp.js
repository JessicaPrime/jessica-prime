import { Button } from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Textarea } from "./components/ui/Textarea";
import { TabsList, TabsTrigger } from "./components/ui/Tabs";
import { Switch } from "./components/ui/Switch";
import { Checkbox } from "./components/ui/Checkbox";
export default function JessicaPrimeApp() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Jessica Prime App</h1>
      <p>Bem-vinda ao seu aplicativo React!</p>
      <Button>Exemplo de Botão</Button>
      <Card>
        <CardContent>Conteúdo do Card</CardContent>
      </Card>
      <Input placeholder="Digite algo..." />
      <Textarea placeholder="Mensagem" />
      <TabsList>
        <TabsTrigger value="tab1">Aba 1</TabsTrigger>
        <TabsTrigger value="tab2">Aba 2</TabsTrigger>
      </TabsList>
      <Switch />
      <Checkbox />
    </div>
  );
}
