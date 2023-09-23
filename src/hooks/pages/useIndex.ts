import { useEffect, useState } from "react";
import { Profissional } from "@/src/entidades/profissional";
import { ApiService } from "@/src/services/ApiService";

export function useIndex(){
    const [listaProfissionais, setListaPorfissionais] = useState<Profissional[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [
      profissionalSelecionado, 
      setProfissionalSelecionado,
    ] = useState<Profissional | null>(null);

    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
      ApiService.get('/profissionais').
      then((response) => {
        setListaPorfissionais(response.data)
      })
    }, []);

    useEffect(() => {
      limparFormulario();
    }, [profissionalSelecionado])

    function marcarJob(){
      if(profissionalSelecionado !== null){
        if(validarDados()){
          ApiService.post('/profissional/' +
          profissionalSelecionado.id +
          '/job', {
            nome,
            email
          }).then(() => {setProfissionalSelecionado(null);
            setMensagem('Cadasatrados com sucesso');
        }).catch((erro) => {
            setMensagem(erro.response?.data.mesage);
        })
      } else {
          setMensagem('Preencha os dados corretamente')
      }
    }
  }
    function validarDados() {
      return nome.length > 0 && email.length > 0;
    }

    function limparFormulario(){
      setNome('');
      setEmail('');
    }

    return{
        listaProfissionais,
        nome,
        setNome,
        email,
        setEmail,
        profissionalSelecionado,
        setProfissionalSelecionado,
        marcarJob,
        mensagem,
        setMensagem
    }
}