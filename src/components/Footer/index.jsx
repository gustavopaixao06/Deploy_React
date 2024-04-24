import './index.css'

export function Footer() {
    return (
        <>
            <footer className='footer'>

                <section className='part-1'>

                    <figure className='logo-2'>
                        <img src="/img/logo.svg" alt="" />
                    </figure>

                    <div className='info'>
                        <p>
                            Desde 2020 trabalhando com <br />
                            tecnologias inovadoras para <br />
                            tornar sua casa um ambiente <br />
                            inteligente.
                        </p>
                    </div>

                    <div className='info-2'>
                        <p>
                            deploy@deploysolution.com.br
                        </p>
                    </div>

                </section>

                <section className="part-2">

                    <div className='titulo'>
                        <p>Pages</p>
                    </div>

                    <div className='nav'>
                        <ul>
                            <li><a href=""></a>Home</li>
                            <li><a href=""></a>Sobre</li>
                            <li><a href=""></a>Serviços</li>
                            <li><a href=""></a>Contato</li>
                        </ul>
                    </div>

                </section>

                <section>
                    <h1>Nossas redes sociais</h1>
                </section>

            </footer>
        </>
    )
}