"use client";
import useSwr from "swr";
import { User } from "../../../interfaces";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserProfile({params} : {params: {slug: string}}){

    const { data, error, isLoading } = useSwr<User>("/api/user/" + params.slug, fetcher);

    if (error) return <div>Failed to load users</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;
  
    return (
        <div>
            <h1>User Profile for  {data.name}</h1> <br />
            <p>{data.about}</p> <br />
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Company: {data.company}</p>
            <p>Address: {data.address}</p>
            <br /> <br />
            <h3>Friends of {data.name}</h3>
            {data.friends.map((friend) => (
                <div key={friend.id}>
                    <Link href={`/user/${friend.id}`} as={`/user/${friend.id}`}>
                        {friend.name}
                    </Link>
                </div>
            ))}
            <br /> <br />
            <button>
                <Link href="/" as={`/`}>
                    Home
                </Link>
            </button>
        </div>
    )
}