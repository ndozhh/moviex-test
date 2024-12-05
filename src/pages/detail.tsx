import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Detail = () => {
  return (
    <div className="w-full flex justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Deja tu comentario</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input placeholder="Nombre" />
            <Input placeholder="Calificación" type="number" max={5} />
            <Input placeholder="Comentario" />
            <Button>Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Detail;
