import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack'


export default function CustomAlert (severity) {

    return (

        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={severity}><AlertTitle>Error</AlertTitle>Erro</Alert>
            <Alert severity={severity}><AlertTitle>Error</AlertTitle>Perigo</Alert>
            <Alert severity={severity}><AlertTitle>Error</AlertTitle>Info</Alert>
            <Alert severity={severity}><AlertTitle>Error</AlertTitle>Sucesso</Alert>
        </Stack>

    )

}