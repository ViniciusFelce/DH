import React, { useState } from "react";


function Sidebar() {
 

  document.addEventListener("keydown",(e)=>{ 
    let barState= estadoAtualSideBar ==="--open" ? "" : "--open" 
    if (e.target != document.querySelector("body") || e.code != "Space") 
     return
    e.preventDefault()
    alterarEstadoSideBar(barState)
  })  


  document.addEventListener("dblclick",(e)=>{ 
    e.preventDefault()
    alterarEstadoSideBar("")
  })  
  const [estadoAtualSideBar, alterarEstadoSideBar] = useState("");

  return (
    <div>
      <button
        className="l-sidebar__btn"
        type="button"
        onClick={() => alterarEstadoSideBar("--open")}
      >
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layout-text-sidebar" viewBox="0 0 16 16">
  <path d="M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z"/>
</svg>
      </button>
        
      <div className={`l-sidebar${estadoAtualSideBar}`}>
        <button
          type="button"
          className="button-Close"
          aria-label="Close"
          onClick={() => alterarEstadoSideBar("")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
      
        </button>
        <div>
          <h1 className="l-logo">Vinicius Felce</h1>
          <nav className="sidebar__text">
            <a className="sidebar__item " href="#sobre-mim">
              Sobre mim
            </a>
            <a className="sidebar__item " href="#contatos">
              Contatos
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;