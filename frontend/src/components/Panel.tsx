export const Panel = ({name}: {name: string}) => {
    return <div className="w-screen mt-24 bg-gray-800  fixed top-0  z-10 flex flex-coljustify-start items-center h-24 pl-20">
        <div className=" text-3xl font-bold font-sans text-gray-200">{name} Panel</div>
        <div className="h-px  border-0 bg-gray-400 shadow-lg"></div>
    </div>
}