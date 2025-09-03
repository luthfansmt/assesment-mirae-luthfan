export default function Header() {
	return (
		<header className="flex justify-between items-center p-4 bg-white shadow">
			<div className="flex space-x-4">
				<button className="px-3 py-1 bg-orange-500 text-white rounded">Overview</button>
				<button className="px-3 py-1 border rounded">Detail</button>
			</div>
			<h2 className="text-lg font-bold">2025 March</h2>
		</header>
	);
}
  