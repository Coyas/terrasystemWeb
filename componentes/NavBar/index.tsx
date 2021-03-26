import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
	// const { loading, error, data } = useQuery(GET_CATEGRIAS);
	// if (error) return <div>Error loading players.</div>;
	// if (loading) return <div>...Loading...</div>;
	// // const getCategorias = data.AllCategorias
	// const { AllCategorias: getCategorias } = data;
	// const ttt = data.AllCategorias;

	// console.log("data");
	// console.log(data);
	// console.log("getCategorias");
	// console.log(getCategorias);
	// console.log("ttt");
	// console.log(ttt);
	const loading = true;
	const user = true;

	const [uvisivel, Setuvisivel] = useState(false);
	const [mvisivel, Setmvisivel] = useState(true);

	const UvisivelClick = () => {
		Setuvisivel(!uvisivel);
	};
	const MvisivelClick = () => {
		Setmvisivel(!mvisivel);
	};

	return (
		// <!-- This example requires Tailwind CSS v2.0+ -->
		<nav className="bg-white sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						{/* <!-- Mobile menu button--> */}
						<button
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-expanded="false"
							onClick={MvisivelClick}
						>
							<span className="sr-only">Open main menu</span>
							{/* <!-- Icon when menu is closed. -->
							<!--
								Heroicon name: menu
								Menu open: "hidden", Menu closed: "block"
							--> */}
							<svg
								className={`${mvisivel ? "block" : "hidden"} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
							{/* <!-- Icon when menu is open. -->
							<!--
								Heroicon name: x
								Menu open: "block", Menu closed: "hidden"
							--> */}
							<svg
								className={`${mvisivel ? "hidden" : "block"} h-6 w-6`}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex-shrink-0 flex items-center">
							<a href="/">
								<img
									className="block lg:hidden h-8 w-auto"
									src="/terra.png"
									alt="TerraSystem"
								/>
								<img
									className="hidden lg:block h-8 w-auto"
									src="/terra.png"
									alt="TerraSystem"
								/>
							</a>
						</div>
						<div className="hidden sm:block sm:ml-6">
							<div className="flex space-x-4">
								{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-blue-400 hover:text-white" --> */}
								<a
									href="/"
									className="bg-blue-400 text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Home
								</a>
								<a
									href="#"
									className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Serviços
								</a>
								<a
									href="#"
									className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Projectos
								</a>

								<a
									href="#"
									className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Blog
								</a>
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button className="bg-blue-400 p-1 rounded-full text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white">
							<span className="sr-only">View notifications</span>
							{/* <!-- Heroicon name: bell --> */}
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>

						{/* <!-- Profile dropdown --> */}
						<div className="ml-3 relative">
							{/* {!loading &&
								(user ? ( */}
							<div>
								<div>
									<button
										className="bg-white hover:bg-blue-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
										id="user-menu"
										aria-haspopup="true"
										onClick={UvisivelClick}
									>
										<span className="sr-only">Open user menu</span>
										<img
											className="h-8 w-8 rounded-full"
											src="/userIcon2.png"
											alt="TerraSystem"
										/>
									</button>
								</div>
								{/* <!--
								Profile dropdown panel, show/hide based on dropdown state.
								Entering: "transition ease-out duration-100"
								From: "transform opacity-0 scale-95"
								To: "transform opacity-100 scale-100"
								Leaving: "transition ease-in duration-75"
								From: "transform opacity-100 scale-100"
								To: "transform opacity-0 scale-95"
							--> */}
								<div
									className={`${
										uvisivel ? "" : "hidden"
									} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu"
								>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Ailton Duarte
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Configuraçoes
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
										role="menuitem"
									>
										Sair
									</a>
								</div>
							</div>
							{/* ) : (
									<Link href="/auth/login">
										<a className="text-gray-200">
											Log in
											<span className="icon">
												<i className="far fa-user"></i>
											</span>
										</a>
									</Link>
								))} */}
						</div>
					</div>
				</div>
			</div>

			{/* <!--
    Mobile menu, toggle classes based on menu state.
    Menu open: "block", Menu closed: "hidden"
  --> */}
			<div className={`${mvisivel ? "hidden sm:hidden" : "block"}`}>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-100 hover:bg-blue-400 hover:text-white" --> */}
					<a
						href="#"
						className="bg-blue-400 text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Home
					</a>
					<a
						href="#"
						className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Serviços
					</a>
					<a
						href="#"
						className="text-gray-700 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
					>
						Projectos
					</a>

					<a
						href="#"
						className="text-gray-700 hover:bg-blue-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
					>
						Blog
					</a>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
