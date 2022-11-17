import { useEffect, useState } from "react";
import "./style.css";

import Skeleton from "@mui/material/Skeleton";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CommentIcon from "@mui/icons-material/Comment";
import Modal from "@mui/material/Modal";
import { TableBoletim } from "./TableBoletim";

import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Progresso from "../../components/pages/boletim/Progresso";
import Frequencia from "../../components/pages/boletim/Frequencia";

export function Boletim() {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modulo, setModulo] = useState("");
  const [hasObservation, setHasObservation] = useState(true);

  const styleModalDocente = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Stack>
      <TopBar PageTitle="Boletim" PageSpan="Escolar" />

      <Stack 
        direction="row" 
        spacing={3}
        sx={{height: 200, width: '100%', backgroundColor: '#442A71'}}
        divider={<Divider sx={{color: 'white'}} orientation="vertical" flexItem />}
        justifyContent="center"
        alignItems="center"
      >
        <Progresso />
        <Progresso />
        <Frequencia />
      </Stack>


      { /* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={styleModalDocente}></Box>
      </Modal>

      <div className="boletimContainer">
        <div className="boletimContent">

          {!isLoading ? (
              <TableBoletim />
          ) : (
            <>
              <Skeleton variant="rounded" width={700} height={300} />
              <Skeleton variant="rounded" width={500} height={300} />
            </>
          )}
        </div>
      </div>

      <BottomBar
        objects={ArrayActions}
        numberOfSkeletons={ArrayActions.length - 1}
          /> */}
          
    </Stack>
  );
}
