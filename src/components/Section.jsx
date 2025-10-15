const Section = ({title, children}) => {
    return(
        <section className="w-full min-h-[33vh] h-auto mt-2 mb-4">
            <div className="w-[100%] h-auto p-2 flex justify-center items-center bg-black">
                <h1 className="font-bold text-xl text-yellow-300">{title}</h1>
            </div>            
            <div className="w-[100%] h-auto">
                <p>Prdutos em destaque</p>
                {children}
            </div>
        </section>
    )
}

export default Section