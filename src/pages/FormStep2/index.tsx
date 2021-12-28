import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import {useForm, FormAction} from '../../Context/FormContext'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption'

export const FormStep2 = () =>{

    const history = useNavigate();

    const {state, dispatch} = useForm();

    const handleNextStep = () =>{
        if(state.name !== ''){
            history('/step2')
        } else {
            alert("Preencha seus dados")
        }
    };

    useEffect(() =>{
        dispatch({
            type: FormAction.setCurrentStep,
            payload: 2
        })
    }, [])
    

    return(

        <Theme>
            <C.Container>
            <p>Passo 2/3 </p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha abaixo com seu nome completo.</p>

            <hr/>

            <SelectOption 
                title = "Iniciante"
                description = "Programo há menos de 2 anos"
                icon = "🤓"
            />
             <SelectOption 
                title = "Veterano"
                description = "Programo há mais de 2 anos"
                icon = "😎"
            />
            

            <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}