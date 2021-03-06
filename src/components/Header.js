import React from 'react'


//stateless Function Component
const Header = (props) => {
    return (
          <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2> {props.subtitle}</h2>}
          </div>
        );
}

Header.defaultProps = {
  title: 'Indecision'
}

export default Header