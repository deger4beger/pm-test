
const Checkbox = ({
	text,
	description,
	checked,
	setChecked,
}: any) => {
	return (
		<div className="cursor-pointer font-sans flex justify-between bg-cyan-700 relative p-2 rounded-lg my-2 px-4" onClick={() => setChecked(!checked)}>
			<div>
				<div className="font-sans">{text}</div>
				<div className="font-sans text-sm text-yellow-400">{description}</div>
			</div>
			<div className={`${checked ? "bg-yellow-400 text-black" : "bg-gray-950 text-white"}` + " absolute top-4 right-4 px-2 py-[3px] rounded-lg text-sm"}>
				✓
			</div>
		</div>
	)
}

export default Checkbox