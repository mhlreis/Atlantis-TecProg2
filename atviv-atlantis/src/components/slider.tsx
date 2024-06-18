import css from "../styles/slider.component.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';
import slider1 from "../images/slider1.png"
import slider2 from "../images/slider2.png"
import slider3 from "../images/slider3.png"

export default function Slider() {
    const imagens = [
        { src: slider1, alt: "Imagem 1" },
        { src: slider2, alt: "Imagem 2" },
        { src: slider3, alt: "Imagem 3" }
    ]

    return (
        <div className={css.slider}>
            <Swiper
                modules={[EffectFade]}
                effect="fade"
                loop={true}
                slidesPerView={1}
                autoplay={{ delay: 10000 }}
            >
                {
                    imagens.map((imagem, index) => (
                        <SwiperSlide key={index}>
                            <img
                                className={css.image}
                                src={imagem.src}
                                alt={imagem.alt}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={css.background}>
                <h1 className={css.title}>Comece agora a utilizar o melhor gerenciador de hoteis: ATLANTIS!</h1>
                <p className="text">Faça mais em menos tempo e desfrute da paz em ter um software que te deixa cuidar do que realmente importa!</p>
            </div>
        </div>
    )
}