import React from "react";
import { Switch, SwitchProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import useStepTwoForm from "../../hooks/Steps/useStepTwoForm";

const MaterialUISwitch = styled(Switch)(() => ({
  width: 96,
  height: 48,
  padding: 8,
  "& .MuiSwitch-switchBase": {
    padding: 11,
    color: "#ff6a00",
    transitionDuration: "300ms",
    "&.Mui-checked": {
      color: "#185a9d",
      transform: "translateX(47px)",
      "&:hover": {
        backgroundColor: "rgba(24,90,257,0.08)",
      },
      "& + .MuiSwitch-thumb": {
        backgroundColor: "#fff",
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        "&:before": {
          opacity: 1,
        },
        "&:after": {
          opacity: 0,
        },
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 26,
    height: 26,
    backgroundColor: "#fff",
  },

  "& .MuiSwitch-track": {
    backgroundColor: "#1890ff",
    opacity: "1 !important",
    borderRadius: 20,
    position: "relative",
    "&:before, &:after": {
      display: "inline-block",
      position: "absolute",
      top: "50%",
      width: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      textAlign: "center",
    },
    "&:before": {
      content: '"SSN"',
      left: 4,
      opacity: 0,
    },
    "&:after": {
      content: '"ITIN"',
      right: 4,
    },
  },
}));

const SwitchField: React.FC<SwitchProps> = () => {
  const { toggled, _handleIdType } = useStepTwoForm();

  return <MaterialUISwitch checked={toggled} onChange={_handleIdType} />;
};

export default SwitchField;
