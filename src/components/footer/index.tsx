import { BsFacebook, BsWhatsapp, BsYoutube, BsInstagram } from "react-icons/bs";

import logo from "../../assets/svg/Logo.svg";
import { DataFooter } from "../../utils/footer.data";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center sm:items-center w-full h-auto bg-rizer-900 px-4">
      <hgroup className=" max-w-lg text-center py-10">
        <h2 className="text-xl md:text-2xl text-white font-suisse font-bold">
          Nós acreditamos que ter um bom sistema de gestão é primordial para o
          sucesso de qualquer empresa.
        </h2>
      </hgroup>
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  max-w-screen-xl  px-4 mb-8  border-y-2 border-slate-100">
        {DataFooter.map((lista) => (
          <div
            key={lista.name}
            className="flex flex-col justify-start items-start gap-4 py-8 text-white w-56"
          >
            <h3 className="font-bold font-suisse text-lg">{lista.name}</h3>
            <ul className="flex flex-col justify-start items-start gap-2 text-white font-inter font-light capitalize">
              {lista.item?.map((item, i) => (
                <li
                  className="transition-all duration-1000 delay-50 ease-in-out hover:bg-rizer-200 rounded-md px-2"
                  key={i}
                >
                  <Link
                    role="link"
                    href={item.href}
                    aria-label={item.aria}
                    title={item.text}
                    target="_blank"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </article>
      <div className="flex flex-col justify-center items-center  max-w-screen-xl  px-4 pb-12 gap-12 ">
        <p className=" md:text-lg font-semibold text-white">
          2015 - 2023 © Todos os direitos reservados | Rizer.com.br
        </p>
        <ul className="flex justify-center items-center gap-8 sm:gap-12 text-2xl text-white">
          <li title="facebook" className=" rounded-md px-2">
            <Link
              role="link"
              target="_blank"
              href="https://www.facebook.com/rizersistemas"
              aria-label="clique para ir para pagina no facebook"
            >
              <BsFacebook size={32} />
            </Link>
          </li>
          <li title="instagram" className=" rounded-md px-2">
            <Link
              role="link"
              target="_blank"
              href="https://www.instagram.com/rizersistemas"
              aria-label="clique para ir para pagina no instagram"
            >
              <BsInstagram size={32} />
            </Link>
          </li>
          <li title="youtube" className=" rounded-md px-2">
            <Link
              role="link"
              target="_blank"
              href="https://www.youtube.com/@rizersistemas"
              aria-label="clique para ir para o canal no youtube"
            >
              <BsYoutube size={32} />
            </Link>
          </li>
          <li title="whatapp" className=" rounded-md px-2">
            <Link
              role="link"
              target="_blank"
              href="https://web.whatsapp.com/send/?phone=5571992301699&text=Quero%20falar%20com%20um%20especialista%20da%20Rizer!"
              aria-label="clique para ir para o whataspp"
            >
              <BsWhatsapp size={32} />
            </Link>
          </li>
        </ul>
        <a
          href="#"
          aria-label="clique para ir ao topo da pagina"
          title="rizer"
          className=" w-40 h-auto text-white"
          role="link"
        >
          <Image
            role="Landmark"
            className="h-8 md:h-auto w-full"
            src={logo}
            alt="Logo da rizer, um cubo 3D azul e como Rizer à direita"
          />
        </a>
      </div>
    </footer>
  );
}
