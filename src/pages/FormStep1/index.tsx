import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import {useForm, FormAction} from '../../Context/FormContext'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep1 = () =>{

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
            payload: 1
        })
    }, [])
    
    const handleSetName = (e : ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setName,
            payload: e.target.value
        })
    }

    return(

        <Theme>
            <C.Container>
            <p>Passo 1/3 </p>
            <h1>Vamos começar com seu nome</h1>
            <p>Preencha abaixo com seu nome completo.</p>

            <hr/>

            <label>
                Nome completo: 
                <input 
                    type= "text"
                    autoFocus
                    onChange={handleSetName}
                ></input>
            </label>

            <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}