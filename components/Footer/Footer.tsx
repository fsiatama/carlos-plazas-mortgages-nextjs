import React from "react";
import { Inter } from "@next/font/google";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const inter = Inter({ subsets: ["latin"] });

import logo from "../../public/images/logo-black.png";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-slate-100 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <Image
                alt="Carlos Plazas"
                src={logo}
                width={329}
                height={72}
                sizes="100vw"
                style={{
                  width: "50%",
                  height: "auto",
                }}
              />
              <h5
                className={`${inter.className} text-lg mt-0 mb-2 text-slate-600`}
              >
                Tengo la experiencia, conocimiento y un enfoque compasivo para
                guiar a nuestros clientes cuidadosamente a través del proceso
                del préstamo
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <IconButton
                  color="primary"
                  aria-label="Facebook account"
                  component="label"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/carlos.plazas.mortgages",
                      "_blank"
                    )
                  }
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="secondary"
                  aria-label="Instagram account"
                  component="label"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/carlos.plazas.mortgages/",
                      "_blank"
                    )
                  }
                >
                  <InstagramIcon />
                </IconButton>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 pt-6">
              <div className="flex flex-wrap items-top mb-6 flex-row-reverse">
                <div className="w-full lg:w-6/12 px-4">
                  <span
                    className={`${inter.className} block uppercase text-slate-500 text-sm font-semibold mb-2`}
                  >
                    Contact Us
                  </span>
                  <p
                    className={`${inter.className} text-slate-600 hover:text-slate-800 block pb-2 text-sm`}
                  >
                    433 West Ascencion Way <br />
                    Murray, UT 84123
                    <br />
                    United States <br />
                    <br />
                    <strong>Phone:</strong> +1 801 815 2814
                    <br />
                    <strong>Email:</strong> carlos.plazas@snmc.com <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div
                className={`${inter.className} text-sm text-slate-500 font-semibold py-1`}
              >
                Copyright © {new Date().getFullYear()}
                <p
                  className={`${inter.className} text-slate-600 hover:text-slate-800`}
                >
                  Carlos Plazas Mortgages
                </p>
                All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
