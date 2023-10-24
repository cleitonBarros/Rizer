"use client";

import { EffectCoverflow, Pagination } from "swiper/modules";

import gerencianet from "../../../assets/png/integracao-gerencianet.webp";
import asaas from "../../../assets/svg/integracao-asaas.svg";
import discord from "../../../assets/svg/integracao-discord.svg";
import email from "../../../assets/svg/integracao-email.svg";
import googleCalendar from "../../../assets/svg/integracao-google-calendar.svg";
import googleMaps from "../../../assets/svg/integracao-google-maps.svg";
import googleMeuNegocio from "../../../assets/svg/integracao-google-my-buss.svg";
import iugu from "../../../assets/svg/integracao-iugu.svg";
import mercadolivre from "../../../assets/svg/integracao-mercadolivre.svg";
import slack from "../../../assets/svg/integracao-slack.svg";
import whatsapp from "../../../assets/svg/integracao-whatsapp.svg";
import Section from "../../container";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css";

export default function Integration() {
  return (
    <Section id="apis" className="pb-6.25 pt-7.5 max-w-[910px]">
      <header className="max-w-[910px] mx-auto">
        <hgroup>
          <h2 className="text-rizer-900 text-3xl md:text-4xl lg:text-5xl font-bold font-suisse text-center">
            Seu sistema pode ser integrado com uma infinidade de apps e
            plataformas externas
          </h2>
        </hgroup>
      </header>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        centeredSlidesBounds={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false
        }}
        pagination={{
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full"
        loop={true}
        spaceBetween={150}
      >
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Discord
          </p>
          <Image
            className=" w-36  md:w-56"
            src={discord}
            alt="icone da plataforma discord"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Slack
          </p>
          <Image
            className=" w-36  md:w-56"
            src={slack}
            alt="logo da plataforma slack"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Iugu
          </p>
          <Image className=" w-36  md:w-56" src={iugu} alt="logo da iugu" />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Mercado Livre
          </p>
          <Image
            className=" w-36  md:w-56"
            src={mercadolivre}
            alt="logo do mercado livre"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Whatapp
          </p>
          <Image
            className=" w-36  md:w-56"
            src={whatsapp}
            alt="logo do whatsapp"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Google Maps
          </p>
          <Image
            className=" w-36  md:w-56"
            src={googleMaps}
            alt="icone google maps"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Google Calendar
          </p>
          <Image
            className=" w-36  md:w-56"
            src={googleCalendar}
            alt="icone google calendar"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Google Negocios
          </p>
          <Image
            className=" w-36  md:w-56"
            src={googleMeuNegocio}
            alt="icone google meus negocios"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Email
          </p>
          <Image
            className=" w-36  md:w-56"
            src={email}
            alt="icone de um envolepe representando um email"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Asaas
          </p>
          <Image
            className=" w-36  md:w-56"
            src={asaas}
            alt="icone da plataforma Asaas"
          />
        </SwiperSlide>
        <SwiperSlide className=" rounded-2xl ">
          <p className="absolute  bottom-0 left-0 py-1 px-8 text-xl font-fredoka font-semibold bg-rizer-800 text-white rounded-e-2xl ">
            Gerencianet
          </p>
          <Image
            className=" w-36  md:w-56"
            src={gerencianet}
            alt="logo da Gerencianet"
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}
