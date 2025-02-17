import { Button } from "@/components/button";
import Link from "next/link";
export default function NotFound() {
    return (
        <div >
            <h1>Erro 404 pagina não encontrada</h1>
            <p>Está pagina não existe ou está em produção.</p>
            <Link href="/"><Button label = "Voltar para home"/></Link>
            
        </div>
    );
}