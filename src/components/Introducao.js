import React from 'react'
import FaleMais from './FaleMais'

export default function Introducao() {
    return (
        <section className="hening bg-light">
          <div className="container"> 
            <div className="row">
              <div className="col-lg-10">
                <h1>Planos tarifa fixa FaleMais</h1>
                <p className="lead mt-3 mb-3">Selecione o DDD de origem, destino e a quantidade de minutos e veja quanto custa o valor da ligação.</p>
                <FaleMais />
              </div>              
            </div>
          </div>
      </section>
    )
}
