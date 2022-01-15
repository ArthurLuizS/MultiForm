
import { ReactNode } from 'react';
import * as C from './styles'
import {Header} from '../Header'
import { SidebarItem } from '../SidebarItem'

type Props = {
    children: ReactNode;
}

export const Theme = ({children} : Props) => {

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
                        />
                     <SidebarItem
                            title = "Profissional"
                            description = "Seu nível"
                            icon = "Book"
                            path = "/step2"
                        />

                        <SidebarItem
                            title = "Contatos"
                            description = "Como te achar"
                            icon = "Mail"
                            path = "/step3"
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