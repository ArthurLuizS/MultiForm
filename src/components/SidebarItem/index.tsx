import * as C from './styles'
import { Link } from "react-router-dom"
import { ReactComponent as ProfileIcon} from '../../svgs/profile.svg'
import { ReactComponent as BookIcon} from '../../svgs/book.svg'
import { ReactComponent as MailIcon} from '../../svgs/mail.svg'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
}

export const SidebarItem = ( {title, description, icon, path} : Props ) => { 

    return(
        <C.Container>
            <Link to= {path}> 
                <C.info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.info>
                <C.Icon>
                    {icon === 'Profile' &&
                        <ProfileIcon fill="white" width={24} height={24}/>
                    }
                     {icon === 'Book' &&
                        <BookIcon fill="white" width={24} height={24}/>
                    }
                     {icon === 'Mail' &&
                        <MailIcon fill="white" width={24} height={24}/>
                    }
                </C.Icon>
                <C.Point></C.Point>
            </Link>
        </C.Container>
    );
}