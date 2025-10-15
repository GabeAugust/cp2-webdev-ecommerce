const Section = ({title, children}) => {
    return(
        <section className="w-full min-h-[33vh] h-auto bg-amber-200 mt-6 gap-3">
            <div className="w-[100%] h-auto p-2 flex justify-center items-center bg-black">
                <h1 className="font-bold text-xl text-yellow-300">{title}</h1>
            </div>    
            <h2>Prdutos em destaque</h2>        
            <div className="w-[100%] h-auto flex flex-wrap gap-2 p-3">
                {children}
            </div>
        </section>
    )
}

export default Section