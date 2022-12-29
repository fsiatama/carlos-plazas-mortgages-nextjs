"use client";

import { Grid } from "@mui/material";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Grid
        className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed bg-[url('../public/images/hero-bg.jpg')]"
        container
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs md={6}>
          <div className="flex h-screen items-center backdrop-blur-sm bg-sky-700/80">
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full ml-auto mr-auto text-center">
                  <div className="p-24">
                    <div className="flex flex-col w-full justify-center items-start text-center md:text-left">
                      <p
                        className={`${inter.className} text-gray-200 uppercase tracking-loose w-full`}
                      >
                        ¿Cansado de pagar renta?
                      </p>
                      <h1
                        className={`${inter.className} text-white my-4 text-5xl font-bold leading-tight`}
                      >
                        Aquí comienza el sueño de tener casa propia
                      </h1>
                      <blockquote data-aos="fade-up" data-aos-delay="100">
                        <p
                          className={`${inter.className} text-slate-200 uppercase tracking-loose w-full`}
                        >
                          Sin compromisos ni costos ocultos, ¡Aplica ahora y te
                          damos preaprobación en 24 horas totalmente gratis!
                        </p>
                      </blockquote>
                      <Link href="/aplicar-casa-propia" passHref legacyBehavior>
                        <button className="cursor-pointer mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                          Aplicar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={6} display={{ xs: "none", md: "block" }}></Grid>
      </Grid>
    </>
  );
}
