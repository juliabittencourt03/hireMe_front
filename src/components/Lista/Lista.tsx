import { Profissional } from "@/src/entidades/profissional";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./style";
import { Button } from "@mui/material";

interface PropsLista {
    profissionais: Profissional[],
    onSelect: (profissional: Profissional) => void
}

const Lista = (props: PropsLista) => {
    return (
        <div>
            {props.profissionais.length > 0  ? (
            <ListaStyled>
                {props.profissionais.map(profissional => (           
                    <ItemLista key={profissional.id}>
                    <Foto src={profissional.foto} />
        <           Informacoes>
                        <Nome>{profissional.nome}</Nome>
                        <Valor>{profissional.valor_hora.
                        toLocaleString('pt-BR',
                        {minimumFractionDigits: 2,
                        style: "currency",
                        currency:"BRL"})} por hora</Valor>
                        <Descricao>{profissional.descricao}</Descricao>
                        <Button onClick={() => props.onSelect(profissional)}>
                            Contratar Profissional</Button>
                    </Informacoes>
                    </ItemLista>
               
                ))}
               </ListaStyled>
            ) : (
               <ListaVazia>Não foi encontrado nenhum profissional. Tente mais tarde.</ListaVazia>
            )}
        </div>        
    )
}

export default Lista;

