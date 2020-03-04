import React from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Contact = ({ contactInfo }) => (
    <div>
        {contactInfo.map((contact) => (        <Link
            to={contact.data}
            style={{
            color: `black`,
            textDecoration: `none`,
            paddingRight : '1.45rem',
                }}
         >{contact.type}</Link>))}
    </div>
);

export default Contact;