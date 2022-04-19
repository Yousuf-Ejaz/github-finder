import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
	const { users, loading, fetchUsers } = useContext(GithubContext);

	useEffect(() => {
		fetchUsers();
	}, []);

	return loading ? (
		<Spinner />
	) : (
		<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
			{users.map((user) => (
				<h3>
					<UserItem id={user.id} user={user} />
				</h3>
			))}
		</div>
	);
}

export default UserResults;
