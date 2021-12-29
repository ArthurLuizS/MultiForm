import { useNavigate , Link} from 'react-router-dom'
import * as C from './styles'
import {useForm, FormAction} from '../../Context/FormContext'
import {Theme} from '../../components/Theme'
import { ChangeEvent, useEffect } from 'react'

export const FormStep3 = () =>{

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
            payload: 3
        })
    }, [])
    
    const handleSetEmail = (e : ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setEmail,
            payload: e.target.value
        })
    }
    const handleSetGithub = (e : ChangeEvent<HTMLInputElement>) =>{
        dispatch({
            type: FormAction.setGithub,
            payload: e.target.value
        })
    }
    return(

        <Theme>
            <C.Container>
            <p>Passo 3/3 </p>
            <h1>Legal {state.name}</h1>
            <p>Preencha abaixo com seus contatos</p>

            <hr/>

            <label>
                Qual seu e-mail?
                <input 
                    type= "email"
                    value={state.email}
                    onChange={handleSetEmail}
                ></input>
            </label>
            <label>
                Qual seu GitHub?
                <input 
                    type= "url"
                    value={state.github}
                    onChange={handleSetGithub}
                ></input>
            </label>
            <Link to="/step2" className='backButton'>Voltar</Link>
            <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}