import React from 'react';

function HomeView() {
    button1 = (
        <button type="submit">
            User Login
        </button>
    );

    button2 = (
        <button type="submit">
            Account Creation
        </button>
    );

    return (
        <div>
            {button1}
            {button2}
        </div>
    )

}


export default HomeView;