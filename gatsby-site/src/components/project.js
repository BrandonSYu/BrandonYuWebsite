import React from 'react'
import Avatar from '@material-ui/core/Avatar';

const Project = ({ projects }) => (
    <div>
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div>
            {projects.map((project) => <div>
                </div> )}
        </div>
    </div>
)
export default Project;