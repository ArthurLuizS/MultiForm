import { useNavigate , Link} from 'react-router-dom'
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
            history('/step3')
        } else {
            alert("Preencha seus dados")
        }
    };

    useEffect(() =>{
        if (state.name === ''){
            history('/')
        }else{
            dispatch({
                type: FormAction.setCurrentStep,
                payload: 2
            })
        }
    }, [])
    
    const setLevel = (level: number) =>{
        dispatch({
            type: FormAction.setLevel,
            payload: level
        })
    } 

    return(

        <Theme>
            <C.Container>
            <p>Passo 2/3 </p>
            <h1> {state.name}, o que melhor descreve você ? </h1>
            <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente. </p>

            <hr/>

            <SelectOption 
                title = "Iniciante"
                description = "Programo há menos de 2 anos"
                icon = "🤓"
                selected = {state.level === 0}
                onClick = {()=>setLevel(0)}
            />
             <SelectOption 
                title = "Veterano"
                description = "Programo há mais de 2 anos"
                icon = "😎"
                selected = {state.level === 1}
                onClick = {()=>setLevel(1)}
            />
            
            <Link to="/" className='backButton'>Voltar</Link>
            
            <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}