import React from 'react'

function youtubeform() {
    return(
        <div>
            <h1>Jhansi</h1>
            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name'  />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email'  />

                <label htmlFor='Channel'>Channel</label>
                <input type='text' id='channel' name='channel'  />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default youtubeform