import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Slider from "../components/slider";
import css from "../styles/home.page.module.css"
import { acomodacao } from "../types/acomodacao";
import Acomodacao from "../components/acomodacao";
import Footer from "../components/footer";
import solteiroSimples from "../images/solteiroSimples.jpeg"
import solteiroMais from "../images/solteiroMais.png"
import casalSimples from "../images/casalSimples.png"
import familiaSimples from "../images/familiaSimples.png"
import familiaMais from "../images/familiaMais.png"
import familiaSuper from "../images/familiaSuper.png"

export default function HomePage() {
    const acomodacoes: acomodacao[] = [
        {
            imagem: solteiroSimples,
            titulo: 'Solteiro Simples',
            descricao: 'Acomodação simples para solteiro(a).'
        },
        {
            imagem: solteiroMais,
            titulo: 'Solteiro Mais',
            descricao: 'Acomodação com garagem para solteiro(a).'
        },
        {
            imagem: casalSimples,
            titulo: 'Casal Simples',
            descricao: 'Acomodação simples para casal.'
        },
        {
            imagem: familiaSimples,
            titulo: 'Famila Simples',
            descricao: 'Acomodação para família com até duas crianças.'
        },
        {
            imagem: familiaMais,
            titulo: 'Familia Mais',
            descricao: 'Acomodação para família com até cinco crianças.'
        },
        {
            imagem: familiaSuper,
            titulo: 'Familia Super',
            descricao: 'Acomodação para até duas familias, casal e três crianças cada.'
        },
    ]

    return (
        <>
            <Navbar />
            <main className={css.main}>
                <Slider />
                <section className={css.conteudo}>
                    <article className="funcionalidades">
                        <h2>Funcionalidades do Site</h2>
                        <div className={css.paragrafos}>
                            <p>Nossa solução digital para gerenciar seu hotel, onde você pode cadastrar seus clientes e dependentes de forma rápida e fácil.</p>
                            <p>Cadastre sues cliente facilmente com nosso sistema de <Link to="/clientes" className="span link">gerenciar clientes</Link>, onde você tem total liberdade para criar, alterar, verificar e deletar as informações de cada usuário.</p>
                            <p>Adicionalmente, nossa plataforma inclui um sistema integrado de registro de hospedagem, otimizando o acompanhamento das estadias dos clientes.</p>
                        </div>
                    </article>
                    <article>
                        <h2>Nossas Hospedagens</h2>
                        <div className={css.hospedagens}>
                            {acomodacoes.map((acomodacao, index) => (
                                <Acomodacao key={index} acomodacao={acomodacao} />
                            ))}
                        </div>
                    </article>
                    <article className={css.sobre}>
                        <h2>Sobre nós</h2>
                        <div className={css.paragrafos}>
                            <p>
                                A Ocean Solutions, especializada em desenvolvimento de software personalizado, orgulhosamente apresenta o projeto Atlantis. Concebido para atender às demandas específicas dos gerentes de parques aquáticos, o Atlantis oferece uma plataforma completa para otimizar todas as operações, desde a gestão de bilheteria até o controle de acesso e programação de eventos. Com ferramentas poderosas para gerenciar recursos humanos e analisar dados de visitantes, o Atlantis capacita parques aquáticos de todos os portes a alcançar novos patamares de eficiência e excelência na experiência do cliente.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}