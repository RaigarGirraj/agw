import Card from "./Card";


const CommitteeSection = ({ id, title, info }) => {

    return (
        <div className={"Sec" + id}>
            <div className="mb-8 flex flex-col items-center ">
                <h2 className="text-2xl text-white text-center font-bold mb-4 bg-gradient-to-r from-blue-500 to-red-100 p-2 w-4/5">{title}</h2>
                <div className=" grid grid-cols-2 justify-evenly lg:grid-cols-3 flex-row flex-wrap gap-8 lg:w-3/5">
                    {info.map((item, index) => (
                        <Card key={index} name={item.name} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    )

}

export default CommitteeSection;