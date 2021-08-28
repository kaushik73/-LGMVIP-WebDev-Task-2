import React, { useState } from 'react'
import User from './User';


export function Allusers() {

    const [user, setUser] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);

    const getData = async () => {
        setShowSpinner(true);
        var res = await fetchUrl("https://reqres.in/api/users?page=1");

        setUser(pre => [...res.data]);
    }

    async function fetchUrl(url) {
        var res = await fetch(url);

        var res = await res.json();


        return res;
    }




    return (
        <>

            <header class="navbar">
                <div class="nav-data">
                    <div className="mt-2">
                        <h2>LetsGrowMore</h2>

                    </div>
                </div>
            </header>



            {user && user.length > 0 ?

                <div className="users">
                    {user.map(user => {

                        return (
                            <User key={user.id} avatar={user.avatar} name={user.first_name + " " + user.last_name} email={user.email} about={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugiat"} />
                        )

                    })} </div> :
                (<>

                    <h4 className="middle text-white" style={{ marginTop: "16rem", width: "fit-content" }} >Click Here To Get All Users</h4>
                    <button onClick={() => getData()} className="middle getuser w-25 btn-info text-white" style={{ fontSize: "20px" }} > Get User</button>
                    {showSpinner ?

                        <div class="spinner-border loader middle" style={{ marginTop: "25rem" }} role="status">
                            <span class="sr-only"></span>
                        </div>



                        : null}

                </>)


            }

        </>
    )
}
