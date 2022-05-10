import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

import PropTypes from "prop-types";

function RepoItem({ repo }) {
	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
	} = repo;

	return (
		<div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
			<div className="card-body">
				<h3 className="mb-2 text-xl font-semibold">
					<a href={html_url}>
						<FaLink className="inline mr-1" /> {name}
					</a>
				</h3>
				<p className="mb-3">{description}</p>
				<div>
					<div className="mr-2 badge bg-blue-700 bg-opacity-10 text-blue-600 border-none badge-lg">
						<FaEye className="mr-2" /> {watchers_count}
					</div>
					<div className="mr-2 badge bg-green-700 bg-opacity-10 text-green-600 border-none badge-lg">
						<FaStar className="mr-2" /> {stargazers_count}
					</div>
					<div className="mr-2 badge bg-red-700 bg-opacity-10 text-red-600 border-none badge-lg">
						<FaInfo className="mr-2" /> {open_issues}
					</div>
					<div className="mr-2 badge bg-yellow-700 bg-opacity-10 text-yellow-600 border-none badge-lg">
						<FaUtensils className="mr-2" /> {forks}
					</div>
				</div>
			</div>
		</div>
	);
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
