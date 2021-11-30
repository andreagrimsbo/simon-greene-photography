import {useRouter} from "next/router";
import axios from "axios";
import nookies from "nookies";
import Header from "../components/Header";

const Profile = (props) => {
    const router = useRouter();
    console.log(props.bookings);
    console.log(props.bookings[0].Location);

    const {
        user: {email, username},
    } = props;

    const logout = async () => {
        try {
            await axios.get("/api/logout");
            router.push("/");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div>
            <Header/>
            <h1>Welcome {username}</h1>
            <div>Email: {email}</div>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export const getServerSideProps = async (ctx) => {
    const cookies = nookies.get(ctx);
    let user = null;
    let bookings = null;
    if (cookies?.jwt) {
        try {
            const res = await axios.get('http://localhost:1337/bookings');

            const {data} = await axios.get("http://localhost:1337/users/me", {
                headers: {
                    Authorization: `Bearer ${cookies.jwt}`,
                },
            });
            user = data;
            bookings = res.data;

        } catch (e) {
            console.log(e);
        }
    }

    if (!user) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }


    return {
        props: {
            user,
            bookings,
        },
    };
};

export default Profile;
