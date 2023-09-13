import React, { useEffect, useState } from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
import img1 from '../../assets/dmb_cuadrado_card1.svg'
import img2 from '../../assets/dmb_cuadrado_card2.svg'
import img3 from '../../assets/dmb_cuadrado_card3.svg'
import img4 from '../../assets/dmb_cuadrado_card4.svg'
import img5 from '../../assets/dmb_cuadrado_card5.svg'
import img6 from '../../assets/dmb_cuadrado_card6.svg'
import img7 from '../../assets/dmb_cuadrado_card7.svg'
import img8 from '../../assets/dmb_cuadrado_card8.svg'
import img9 from '../../assets/dmb_cuadrado_card9.svg'
import img10 from '../../assets/dmb_cuadrado_card10.svg'
import img11 from '../../assets/dmb_cuadrado_card11.svg'
import img12 from '../../assets/dmb_cuadrado_card12.svg'
import img13 from '../../assets/dmb_cuadrado_card13.svg'
import img14 from '../../assets/dmb_cuadrado_card14.svg'
import img15 from '../../assets/dmb_cuadrado_card15.svg'
import useInterval from '../Useinterval'
import imgLogo from '../../assets/dmb_cuadrado.svg'

function Home() {

    let texto = 'Encontrarás en nosotros un aliado estratégico para tus proyectos, un referente en el mercado asegurador argentino pero por sobre todo, un grupo humano dispuesto a acompañarte.'

    const [index, setIndex] = useState(0)
    
    useInterval(() => {
        if (index < texto.length) {
            setIndex(prev => prev + 1)
        }
    }, 100)

    return (
        <div className='main'>
            <div className='banner'>
                <div className='text-banner'>
                    <p className='maquina-escribir'><strong>Analizamos</strong> los riesgos asociados a tu actividad  personal o comercial y te <strong>ayudamos</strong> a 
                    tomar la <strong>decisión correcta</strong>.</p>
                    <br />
                    <p className='maquina-escribir'>{texto.slice(0, index)}</p>
                    {index === 175 ? <img src={imgLogo} alt="logo" /> : null}
                </div>  
            </div>
            <section className='section-home'>
                <h2>¿Por qué elegirnos?</h2>
                <div className='cards-home'>
                    <article>
                        <img src={img1} alt="imagen" />
                        <h2>Evolucionamos</h2>
                        <p>
                        40 años de experiencia en el mercado argentino, nos dieron las herramientas para atravesar dificultades y proyectar el futuro.
                        </p>
                    </article>

                    <article>
                        <img src={img2} alt="imagen" />
                        <h2>Atendemos cada Consulta</h2>
                        <p>
                        Garantizamos una respuesta rápida y eficaz, acompañando a nuestros clientes en todas las gestiones necesarias.   
                        </p>
                    </article>

                    <article>
                        <img src={img3} alt="imagen" />
                        <h2>Somos profesionales</h2>
                        <p>
                        Conformamos un equipo sólido de personas comprometidas y calificadas para el desarrollo de cada tarea.    
                        </p>
                    </article>
                    <hr />
                    <article>
                        <img src={img4} alt="imagen" />
                        <h2>Hogar</h2>
                        <p>
                        Diferentes coberturas para la seguridad de tu hogar y de tu familia. Packs tradicionales, opcionales y servicios complementarios.    
                        </p>
                    </article>

                    <article>
                        <img src={img5} alt="imagen" />
                        <h2>Automotores</h2>
                        <p>
                        Coberturas de excelencia y beneficios adicionales para vos y tu vehículo. Respuesta inmediata con el respaldo de las compañías líderes.    
                        </p>
                    </article>

                    <article>
                        <img src={img6} alt="imagen" />
                        <h2>Accidentes personales</h2>
                        <p>
                        Te acompañamos las 24 hs, los 365 días del año estés donde estés, con nuestras coberturas diseñadas para afrontar imprevistos.    
                        </p>
                    </article>

                    <article>
                        <img src={img7} alt="imagen" />
                        <h2>Embarcaciones</h2>
                        <p>
                        Cubrimos las necesidades propias de la actividad náutica. Un viaje de placer, con la protección de nuestros productos especiales.    
                        </p>
                    </article>

                    <article>
                        <img src={img8} alt="imagen" />
                        <h2>Motos</h2>
                        <p>
                        Aseguramos tu moto, a vos y a tus acompañantes. Te ofrecemos opciones que se ajustan a tus requisitos.    
                        </p>
                    </article>

                    <article>
                        <img src={img9} alt="imagen" />
                        <h2>Bicicletas</h2>
                        <p>
                        Llevá con vos la tranquilidad de andar libre a donde vayas. Combiná las opciones de nuestras coberturas.    
                        </p>
                    </article>

                    <article>
                        <img src={img10} alt="imagen" />
                        <h2>Consorcio</h2>
                        <p>
                        Amplias posibilidades de cobertura y servicios adicionales pensadas para eventualidades propias de un edificio.    
                        </p>
                    </article>

                    <article>
                        <img src={img11} alt="imagen" />
                        <h2>Cobertura para empleados</h2>
                        <p>
                        Garantizamos una cobertura adecuada para resguardar el bienestar de tus empleados ante cualquier accidente o contingencia laboral.    
                        </p>
                    </article>

                    <article>
                        <img src={img12} alt="imagen" />
                        <h2>Comercio</h2>
                        <p>
                        Coberturas adecuadas y adaptadas a tu negocio, para resguardar tus bienes patrimoniales y a tu personal.    
                        </p>
                    </article>

                    <article>
                        <img src={img13} alt="imagen" />
                        <h2>Caución</h2>
                        <p>
                        Una garantía eficaz para el desarrollo de diversos proyectos y la expansión hacia nuevas actividades.    
                        </p>
                    </article>

                    <article>
                        <img src={img14} alt="imagen" />
                        <h2>Transporte</h2>
                        <p>
                        Otorgamos cobertura a la mercadería transportada y amparo ante los daños que pueda ocasionar para cargas marítimas, aéreas o terrestres.    
                        </p>
                    </article>

                    <article>
                        <img src={img15} alt="imagen" />
                        <h2>Protección agrícola</h2>
                        <p>
                        Valoramos tu esfuerzo, por eso desarrollamos una serie de coberturas que mantienen protegidos tus activos durante todo el ciclo productivo.    
                        </p>
                    </article>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home
