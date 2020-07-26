import React, { useState } from 'react';

const FaleMais = () => {
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState('');
    const [valor, setValor] = useState('');
    const [valorComPlano, setValorComPlano] = useState('');
    const [tempo, setTempo] = useState('');
    const [plano, setPlano] = useState('');
    const [msg, setMsg] = useState('');
    const calcular = () => {
        // validações do formulário 
        if(origem === ''){
            setMsg('Informe o DDD de origem')      
        } 
        if(destino === ''){
            setMsg('Informe o DDD de destino')
        }
        if(tempo === ''){
            setMsg('Informe o tempo da ligação')
        }
        if(plano === ''){
            setMsg('Informe o plano desejado')
        }      
        let DDD = origem+destino
        // Valor da ligação sem plano
        switch(DDD){
            case '011016':setValor(parseFloat(tempo*1.9).toFixed(2));            
            break;
            case '016011':setValor(parseFloat(tempo*2.9).toFixed(2));
            break;
            case '011017':setValor(parseFloat(tempo*1.7).toFixed(2));
            break;
            case '017011':setValor(parseFloat(tempo*2.7).toFixed(2));
            break;
            case '011018':setValor(parseFloat(tempo*.9).toFixed(2));
            break;
            case '018011':setValor(parseFloat(tempo*1.9).toFixed(2));
            break;
            default: setValor('');     
        }        
        // Valor da ligação com plano sem minutos excedentes
        if(parseInt(tempo) <= parseInt(plano)){
            setValorComPlano((0).toFixed(2).replace('.', ','));
        }
        // valor da ligação com plano e minutos excedentes
        if(parseInt(tempo) > parseInt(plano)){
            let excedentes = tempo - plano;
            switch(DDD){
                case '011016':setValorComPlano(parseFloat((excedentes*1.9)*1.1).toFixed(2));            
                break;
                case '016011':setValorComPlano(parseFloat((excedentes*2.9)*1.1).toFixed(2));
                break;
                case '011017':setValorComPlano(parseFloat((excedentes*1.7)*1.1).toFixed(2));
                break;
                case '017011':setValorComPlano(parseFloat((excedentes*2.7)*1.1).toFixed(2));
                break;
                case '011018':setValorComPlano(parseFloat((excedentes*.9)*1.1).toFixed(2));
                break;
                case '018011':setValorComPlano(parseFloat((excedentes*1.9)*1.1).toFixed(2));
                break;
                default: setValor('');             
            }
        }      
    }
    
    return (
        <>        
        <div className="form-row">           
            <div className="form-group col-md-3">
                <label htmlFor="inputState">DDD origem:</label>
                <select 
                    data-testid="form-select-origem" 
                    onChange={(e)=> setOrigem(e.target.value)} 
                     defaultValue={'DEFAULT'}               
                    id="inputState" className="form-control">
                    <option value="DEFAULT">select origem</option>
                    <option>011</option>
                    <option>016</option>
                    <option>017</option>
                    <option>018</option>
                </select>
            </div> 
            <div className="form-group col-md-3">
                <label htmlFor="inputState">DDD destino:</label>
                <select 
                    data-testid="form-select-destino"                 
                    onChange={(e)=> setDestino(e.target.value)}
                     defaultValue={'DEFAULT'}
                    id="inputState" className="form-control">
                    <option value="DEFAULT">select destino</option>                                    
                    {origem === '011' && <><option>016</option><option>017</option><option>018</option></>}
                    {origem === '016' && <><option >011</option></>}
                    {origem === '017' && <><option >011</option></>} 
                    {origem === '018' && <><option >011</option></>}              
                </select>
            </div>
            <div className="form-group col-md-3">
                <label htmlFor="inputCity">Minutos:</label>
                <input 
                    data-testid="form-select-tempo"
                    onChange={(e)=> setTempo(e.target.value)}
                    type="text" className="form-control" id="inputCity"placeholder="Qtd de minutos"/>
            </div>
            <div className="form-group col-md-3">
                <label htmlFor="inputState">DDD destino:</label>
                <select 
                    data-testid="form-select-plano"               
                    onChange={(e)=> setPlano(e.target.value)}
                     defaultValue={'DEFAULT'}
                    id="inputState" className="form-control">
                    <option value="DEFAULT">select plano</option>                                    
                    <option>30</option>
                    <option>60</option>
                    <option>120</option>       
                </select>
            </div>                   
        </div>        
        <div className="nav justify-content-end">
            <button
                data-testid="form-btn"   
                onClick={calcular}
                type="button" className="btn btn-dark">Calcular valor</button> 
        </div>
        <p className="msg-erro">{msg}</p>
        {valor > 0 &&       
            <div className="row mt-5" >            
                <div className="col-md-6">                
                    <p className="result">Custo com o <strong>FaleMais {plano}</strong></p>
                    <p className="result mt-4">Custo sem plano:</p>               
                </div>
                <div className="col-md-6" data-testid="list-result">
                    <p className="result"><span>$ {valorComPlano}</span></p>
                    <p className="result">$ {valor}</p>
                </div>
            </div>
        }
        </>                        
    )
}

export default FaleMais;
