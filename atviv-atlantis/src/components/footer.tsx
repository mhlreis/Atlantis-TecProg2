import { Link } from "react-router-dom"
import email from "../images/email.png"
import site from "../images/site.png"
import telefone from "../images/telefone.png"

import css from "../styles/footer.component.module.css"

export default function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.copyright}>
                <h2>Organizações Tabajara</h2>
                <p>© 2024 Seu Creisson. Todos os direitos reservados.</p>
            </div>
            <div className={css.contatos}>
                <div>
                    <img src={email} alt="" />
                    <span className="text">tabajara@caceta.com</span>
                </div>
                <div>
                    <span className="text">(11) 95934-2992</span>
                </div>
            </div>
        </footer>
    )
}