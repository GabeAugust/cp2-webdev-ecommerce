const Card = ({title, price, image}) => {
    return(
        <div className="  flex-1 bg-white p-4">
            <div className="flex justify-center items-center ">
                <img className="w-[200px] h-[200px]" src={image} alt="foto produto" />
            </div>
            <div className="items-center">
                <p className="font-bold text-left ">{title}</p>
                <p className="font-medium text-xl text-center">${price}</p>
            </div>

            
        </div>
    )
}

export default Card