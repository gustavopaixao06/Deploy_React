import '../assets/css/Home.css'
import imgHome from '../../public/img/home-img 1.png'
import imgConheca from '../../public/img/image 7.png'

export function Home() {
    return (
        <>
            <section className='parte-1'>
                <div className="home">
                    <h1>Inteligência residencial <br /> ao alcance dos seus <br /> dedos</h1>
                    <p>Conheça a Deploy e desfrute da praticidade e do <br /> conforto de uma casa inteligente com nossas <br /> tecnologias de última geração.</p>

                    <div className='botao'>
                        <button>Nossos Serviços</button>
                    </div>
                </div>

                <div className='primeira-img'>
                    <img src={imgHome} alt="" />
                </div>
            </section>

            <section className='parte-2'>
                <div className="imagem">
                    <img src={imgConheca} alt="" />
                </div>

                <div className="conhecer">
                    <h1>CONHEÇA DEPLOY</h1>
                    <p>Ágil, eficiente e honesto, a Deploy tornou-se um Serviço de
                        automação residencial respeitável e conhecido. Nossa equipe
                        está preparada para qualquer serviço, gerenciando projetos com a
                        habilidade e experiência que nossos clientes esperam. Para oferecer um
                        trabalho satisfatório aos nossos clientes, fornecemos canais de comunicação abertos durante cada projeto.</p>

                    <div className='botao-2'>
                        <button>Nossos Serviços</button>
                    </div>
                </div>



            </section>
        </>
    )
}