import Alert from '@mui/material/Alert';

export function AlertNotFound ({showAlert}) {

    return (
        <Alert sx={{position: 'absolute', top: 0, left: '10px', backgroundColor: '#120329', display: showAlert ? 'flex' : 'none'}} severity="error">Verifique seu LOGIN e/ou senha e tente novamente.</Alert>
    )
}