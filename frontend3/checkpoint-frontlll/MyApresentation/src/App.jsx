import Sidebar from "./Sidebar"
import { useState } from "react";

function App() {

  const valoresIniciais = { name: "", email: "", subject: "", messager: "" };

  const [formValues, setFormValues] = useState(valoresIniciais);

  const getChange = (event, key) => {
    const { value } = event.currentTarget;
    setFormValues({ ...formValues, [key]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("new", formValues);
  };

  return (
    <>
      <div className="l-app">
        
        <Sidebar/>
        {/* <div className="l_sidebar">
        <h1 className="l-logo">Vinicius Felce</h1>
          <nav className="c-sidebar">
            <a className="c-nav__item" href="#sobre-mim">sobre mim</a>
            <a className="c-nav__item" href="#contatos">contatos</a>
          </nav>
        </div> */}
   
            <div className="l-content">
                 <div className="l-page bg__profile">
            <main>
              <h1 className="title">Olá, me chamo Vinicius Felce</h1>
              <p className="description">Seja bem vindo ao meu currículo on-line.</p>

              <nav className="c-nav u-my-3">
                <a className="c-nav__item" href="https://github.com/ViniciusFelce">Github</a>
                <a className="c-nav__item" href="https://www.linkedin.com/in/vinicius-felce-bb7990177/">Linkedin</a>
              </nav>
              <a className="c-btn u-my-3" href="#sobre-mim">sobre mim</a>
            </main>
          </div>      
       

          <div className="l-page" id="sobre-mim">
            <article>
              <h1 className="title">Sobre mim</h1>
              <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Per aumento de cachacis, eu reclamis.Casamentiss faiz malandris se pirulitá.Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
              <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Manduma pindureta quium dia nois paga.</p>
              <p>Interagi no mé, cursus quis, vehicula ac nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Sapien in monti palavris qui num significa nadis i pareci latim.</p>
            </article>
          </div>

          <div className="l-page" id="contatos">
            <section>
              <h1 className="title">Posso te ajudar?</h1>

              <nav className="c-nav">
                <a className="c-nav__item" href="https://github.com/ViniciusFelce">Github</a>
                <a className="c-nav__item" href="https://www.linkedin.com/in/vinicius-felce-bb7990177/">Linkedin</a>
                <a className="c-nav__item" href="tel:+55 11 96327-3095">Telefone</a>
              </nav>

              <form
                name="contact"
                className="c-form"
              >
                <div className="c-form__group">
                  <label htmlFor="name" className="c-form__label">Nome</label>
                  <input
                  type="text" 
                  placeholder="Digite seu e-mail" 
                  id="email" 
                  className="c-form__control"
                  value={formValues.name}
                  onChange={(event) => getChange(event, "name" )}
                  />
                  
                </div>
                <div className="c-form__group">
                  <label htmlFor="email" className="c-form__label">E-mail</label>
                  <input 
                  type="text" 
                  placeholder="Digite seu e-mail" 
                  id="email" 
                  className="c-form__control"
                  value={formValues.email}
                  onChange={(event) => getChange(event, "email" )}  
                  />
                </div>
                <div className="c-form__group">
                  <label htmlFor="subject" className="c-form__label">Assunto</label>
                  <select 
                  id="subject" 
                  className="c-form__control"
                  value={formValues.subject}
                  onChange={(event) => getChange(event, "subject" )}
                  >
                    <option value="assunto">Qual o assunto?</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>
                <div className="c-form__group">
                  <label htmlFor="messager" className="c-form__label">Mensagem</label>
                  <textarea 
                  rows="5" 
                  placeholder="Se desejar, explique-me melhor..." 
                  id="messager" 
                  className="c-form__control"
                  value={formValues.messager}
                  onChange={(event) => getChange(event, "messager")}
                  />
                </div>
                <div className="c-form__group">
                  <button className="c-btn" type="submit" >Enviar</button>
                </div>
              </form>
            </section>

            <footer className="u-my-3">
              <span>Todos os direitos reservados Vinicius Felce.</span>
            </footer>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
