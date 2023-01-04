import {
  Box,
  FormHelperText,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import useStepOneForm from "../../hooks/Steps/useStepOneForm";

const StepOne = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const { creditType, isTouched, errorMessage, _handleCreditType } =
    useStepOneForm();

  const orientation = matches ? "horizontal" : "vertical";
  const _renderHelperText = () => {
    if (isTouched && errorMessage) {
      return <FormHelperText>{errorMessage}</FormHelperText>;
    }
  };

  return (
    <React.Fragment>
      <div className="">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <h6 className="text-slate-400 text-sm mt-12 mb-3  font-bold uppercase">
            Selecciona el tipo de crédito que estas buscando
          </h6>
          <div className="flex items-center justify-center">
            <div className="my-6 bg-white">
              <ToggleButtonGroup
                value={creditType}
                exclusive
                orientation={orientation}
                onChange={_handleCreditType}
                aria-label="text creditType"
                size="large"
              >
                <ToggleButton
                  value="firstHouse"
                  aria-label="first House"
                  size="large"
                >
                  <Box className="flex flex-col p-4 border-2 border-gray-400">
                    <span className="relative">
                      <Image
                        src="/images/first-house.svg"
                        alt="carlos plazas logo"
                        width={236}
                        height={218}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </span>
                    <span className="text-xs font-semibold uppercase">
                      Mi primera casa
                    </span>
                  </Box>
                </ToggleButton>

                <ToggleButton
                  value="refinance"
                  aria-label="Refinanciar"
                  size="large"
                >
                  <Box className="flex flex-col p-4 border-2 border-gray-400">
                    <span className="relative">
                      <Image
                        src="/images/refinance.svg"
                        alt="carlos plazas logo"
                        width={236}
                        height={218}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </span>
                    <span className="text-xs font-semibold uppercase">
                      Refinanciar
                    </span>
                  </Box>
                </ToggleButton>
                <ToggleButton
                  value="investment"
                  aria-label="Inversion"
                  size="large"
                >
                  <Box className="flex flex-col p-4 border-2 border-gray-400">
                    <span className="relative object-contain">
                      <Image
                        src="/images/invest-house.svg"
                        alt="carlos plazas logo"
                        width={236}
                        height={218}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </span>
                    <span className="text-xs font-semibold uppercase">
                      Casa como inversión
                    </span>
                  </Box>
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
          {_renderHelperText()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default StepOne;
