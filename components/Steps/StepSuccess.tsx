import { Typography } from "@mui/material";
import React from "react";

type StepSuccessProps = {
  activeStep?: number;
};

const StepSuccess: React.FC<StepSuccessProps> = ({ activeStep }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Gracias, hemos recibido tu información.
      </Typography>
      <Typography variant="subtitle1">
        Pronto nos pondremos en contacto contigo
      </Typography>
    </>
  );
};

export default StepSuccess;
