import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card } from "react-bootstrap";
import "./itemModal.css";
export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Show
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="boxxing">
          <Card.Img variant="top" src="notitem.jpeg" />
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ my: 2 }}
          >
            <strong>{props.item.title}</strong>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <strong>Rs : {props.item.price}</strong>
          </Typography>
          <Typography id="modal-modal-description" sx={{ my: 2 }}>
            <strong>{props.item.description}</strong>
          </Typography>
          <Button variant="contained">Add to cart</Button>
        </Box>
      </Modal>
    </div>
  );
}
