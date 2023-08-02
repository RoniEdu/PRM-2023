import { Avatar, Typography } from "@mui/material";

import './style.css'

function TopicCardHeader() {
    return (
        <div id="topic-card-header">
            <Avatar alt="Fulano de Tal" />

            <div className="card-header-text">
            <Typography variant="h6">
                Fulano de Tal
            </Typography>

            <Typography variant="caption">
                Criado há 8 anos
            </Typography>
            </div>
            
        </div>
    )
}

export default TopicCardHeader; //usando default pode ser alterado o nome.