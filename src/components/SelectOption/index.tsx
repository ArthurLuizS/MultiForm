import * as C from './styles';

type Props = {
    title : string;
    description: string;
    icon : string;
}

export const SelectOption = ( {title, description, icon} : Props) =>{

    return(
        <C.Container>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.title>{title}</C.title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    );
}
