import React from 'react';
import { fireEvent, render, waitForElement, wait , } from '@testing-library/react';
import FaleMais from '../components/FaleMais';

describe('Teste do FaleMais component', () => {
    it('Calculo submetido com sucesso', async () => {
        const { getByTestId } = render(<FaleMais />)

        //test o input select origem
        const origemNode = await waitForElement(
            () => getByTestId('form-select-origem')
        )

        //test o input select destino
        const destinoNode = await waitForElement(
            () => getByTestId('form-select-destino')
        )

        //test o input select origem
        const tempoNode = await waitForElement(
            () => getByTestId('form-select-tempo')
        )

        //test o input select origem
        const planoNode = await waitForElement(
            () => getByTestId('form-select-plano')
        )
        
        //setando valores para os campos
        const origem = '011';
        const destino = '017';
        const tempo = '80';
        const plano = '60';
        
        //checando a captura dos valores no select origem
        fireEvent.change(
            origemNode, { target: { value: origem}}
        )
        expect(origemNode.value).toEqual(origem);

        //checando a captura dos valores no select destino
        fireEvent.change(
            destinoNode, { target: { value: destino}}
        )
        expect(destinoNode.value).toEqual(destino);

        //checando a captura dos valores no input tempo
        fireEvent.change(
            tempoNode, { target: { value: tempo}}
        )
        expect(tempoNode.value).toEqual(tempo);

        //checando a captura dos valores no select plano
        fireEvent.change(
            planoNode, { target: { value: plano}}
        )
        expect(planoNode.value).toEqual(plano);

        //checando click no button
        const btnNode = await waitForElement(
            () => getByTestId('form-btn')
        )
        fireEvent.click(btnNode);
        
        //listando o resultado
        const listNode = await waitForElement(
            () => getByTestId('list-result')
        )
        console.log(listNode.innerHTML);

    })
})