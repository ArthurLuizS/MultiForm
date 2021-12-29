import * as C from './styles';

type Props = {
    title : string;
    description: string;
    icon : string;
    selected: boolean;
    onClick : () => void;
}

export const SelectOption = ( {title, description, icon, selected, onClick} : Props) =>{

    return(
        <C.Container onClick={onClick} selected={selected}>
            <C.Icon>{icon}</C.Icon>
            <C.Info>
                <C.title>{title}</C.title>
                <C.Description>{description}</C.Description>
            </C.Info>
        </C.Container>
    );
}
