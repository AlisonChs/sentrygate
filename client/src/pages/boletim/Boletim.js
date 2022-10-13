import { useEffect, useState } from "react";
import "./style.css";
import Skeleton from "@mui/material/Skeleton";
import BottomBar from "../../components/UI/navbar/BottomBar/BottomBar";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CommentIcon from "@mui/icons-material/Comment";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TableBoletim } from "./TableBoletim";

export function Boletim() {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modulo, setModulo] = useState("");
  const [hasObservation, setHasObservation] = useState(true);

  const ArrayActions = [
    {
      label: "Selecionar módulo",
      icon: (
        <PostAddIcon
          className="navIcon"
          sx={{ width: "2rem", height: "2rem" }}
        />
      ),
      event: null,
      showAction: "flex",
    },
    {
      label: "Projetar boletim",
      icon: (
        <DownloadForOfflineIcon
          className="navIcon"
          sx={{ width: "2rem", height: "2rem" }}
        />
      ),
      event: null,
      showAction: "flex",
    },
    {
      label: "Observar informações sobre o docente",
      icon: (
        <CommentIcon
          className="navIcon"
          sx={{ width: "2rem", height: "2rem" }}
        />
      ),
      event: handleOpen,
      showAction: hasObservation ? "flex" : "none",
    },
  ];

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
    <>
      <TopBar PageTitle="Boletim" PageSpan="Escolar"></TopBar>

      <Modal
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

      {/* <BottomBar
        objects={ArrayActions}
        numberOfSkeletons={ArrayActions.length - 1}
          /> */}
    </>
  );
}
