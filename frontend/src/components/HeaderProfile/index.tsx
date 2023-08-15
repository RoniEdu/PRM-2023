import { Avatar, Box, Typography } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";

//import de imagens
import banner from'../../assets/img/profile_banner.png';
import avatar from'../../assets/img/profile_avatar.jpg';

//import do estilo
import './style.css'


function HeaderProfile() {
    return(
        <Box id="header-profile">
            <Box className="header-profile-background">
                <img src={banner}/>
            </Box>

            <Box className="header-profile-detail">
                <Avatar alt="Fulano de tal" style={{width:128, height: 128}} src={avatar} className="header-profile-detail-avatar"/>
            <Box className="header-profile-detail-text">
                <Typography variant="h5">
                    Fulano de tal
                </Typography>

                <Typography variant="subtitle1" component="h6">
                    @fulanoDetal
                </Typography>

                <Typography variant="subtitle1" component="p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magni sint velit sed perspiciatis distinctio rem, aliquam ipsam quo earum eaque libero blanditiis et eius. Voluptas perferendis delectus nulla consequatur cupiditate.
                </Typography>

                <Typography variant="caption">
                    <CalendarMonthOutlined />
                    Entrou em Agosto de 2023
                </Typography>

            </Box>

            </Box>

        </Box>
    )
}

export default HeaderProfile;