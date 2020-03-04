import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const About = ({ about }) => (
    <div>
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div>
            {about}
        </div>
    </div>
)
export default About;