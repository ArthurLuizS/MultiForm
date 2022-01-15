
import { ReactNode } from 'react';
import * as C from './styles'
import {Header} from '../Header'
import { SidebarItem } from '../SidebarItem'
import { useForm } from '../../Context/FormContext'

type Props = {
    children: ReactNode;
}

export const Theme = ({children} : Props) => {

    const { state } = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>

                    <C.Sidebar>

                        <SidebarItem
                            title = "Pessoal"
                            description = "Se identifique"
                            icon = "Profile"
                            path = "/"
                            active={state.currentStep === 1}
                        />
                     <SidebarItem
                            title = "Profissional"
                            description = "Seu nível"
                            icon = "Book"
                            path = "/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title = "Contatos"
                            description = "Como te achar"
                            icon = "Mail"
                            path = "/step3"
                            active={state.currentStep === 3}
                        />

                    </C.Sidebar>

                    <C.Pages>
                        {children}
                    </C.Pages>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}