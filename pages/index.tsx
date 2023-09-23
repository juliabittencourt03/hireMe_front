import Lista from '@/src/components/Lista/Lista';
import { Profissional } from '@/src/entidades/profissional';
import { useIndex } from '@/src/hooks/pages/useIndex';
import { NextPage } from 'next'
import { Dialog, DialogActions, Grid, TextField, Button, Snackbar } from '@mui/material';

const Home: NextPage = () => {

  const {
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
  } = useIndex();

  return (
    <div>
      <Lista 
      profissionais={listaProfissionais}
      onSelect={(profissional) => setProfissionalSelecionado(profissional)}
      ></Lista>
      <Dialog 
          open={profissionalSelecionado !== null}
          fullWidth
          PaperProps={{sx: {p:6}}}
          onClose={() => setProfissionalSelecionado(null)}
          >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Digite o nome"
                type="text"
                fullWidth
                onChange={(e) => setNome(e.target.value)}
                value={nome}
              />
            </Grid>
              <Grid item xs={12}>
                <TextField 
                label="Digite o e-mail"
                type="email"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
              </Grid>
            </Grid>
            <DialogActions sx={{mt:5}}>
              <Button onClick={() => setProfissionalSelecionado(null)}>Cancelar</Button>
              <Button onClick={() => marcarJob()}>Marcar Job</Button>

            </DialogActions>
        </Dialog>
        <Snackbar 
          message={mensagem}
          open={mensagem.length > 0}
          autoHideDuration={2500}
          onClose={() => setMensagem('')}
        />
    </div>
    
  )
}


export default Home;