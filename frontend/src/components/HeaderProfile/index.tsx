import { Avatar, Box, Typography } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";

import { IntlProvider, FormattedDate } from "react-intl";

//import de imagens
import banner from '../../assets/img/profile_banner.png';
import avatar from '../../assets/img/profile_avatar.jpg';

//import do estilo
import './style.css'


type HeaderProfileProps = {
    user: any
}


function HeaderProfile({ user }: HeaderProfileProps) {
    return (
        <Box id="header-profile">
            <Box className="header-profile-background">
                <img src={banner} />
            </Box>

            <Box className="header-profile-detail">
                <Avatar alt="Fulano de tal" style={{ width: 128, height: 128 }} src={avatar} className="header-profile-detail-avatar" />
                <Box className="header-profile-detail-text">
                    <Typography variant="h5">
                        {user.fullname}
                    </Typography>

                    <Typography variant="subtitle1" component="h6">
                        @{user.username}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                        {user.description}
                    </Typography>

                    <Typography variant="caption">
                        <CalendarMonthOutlined />
                        <IntlProvider locale="pt-BR">
                            Entrou em <FormattedDate value={ user.createAt } month="long" year="numeric" />
                        </IntlProvider>
                    </Typography>

                </Box>

            </Box>

        </Box>
    )
}

export default HeaderProfile;